from flask import Flask, request, jsonify
from flask_cors import CORS
from tensorflow.keras.models import load_model
import numpy as np
import os
from utils.preprocess import preprocess_image

app = Flask(__name__)
CORS(app)
# CORS(app, origins=["http://localhost:5173"]) #allowed access
UPLOAD_FOLDER = 'static/uploads'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# Ensure upload folder exists
if not os.path.exists(app.config['UPLOAD_FOLDER']):
    os.makedirs(app.config['UPLOAD_FOLDER'])

# Load model
model = load_model('model/skin_disease_model.h5')

# Class labels (update with your actual class names)
CLASS_NAMES = ['acne', 'eczema', 'melanoma', 'psoriasis', 'ringworm', 'vitiligo', 'rosacea']

@app.route('/')
def home():
    return "Welcome to CheckMySkin.AI API!"

@app.route('/predict', methods=['POST'])
def predict():
    if 'image' not in request.files:
        return jsonify({'error': 'No image uploaded'}), 400

    file = request.files['image']
    file_path = os.path.join(app.config['UPLOAD_FOLDER'], file.filename)
    file.save(file_path)

    # Preprocess image
    img_array = preprocess_image(file_path)

    # Make prediction
    prediction = model.predict(img_array)[0]
    predicted_class = CLASS_NAMES[np.argmax(prediction)]
    confidence = round(np.max(prediction) * 100, 2)

    return jsonify({
        'predicted_class': predicted_class,
        'confidence': f"{confidence} %"
    })

if __name__ == '__main__':
    app.run(debug=True)
