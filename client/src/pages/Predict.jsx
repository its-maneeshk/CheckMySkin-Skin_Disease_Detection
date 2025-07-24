import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Predict() {
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const navigate = useNavigate();

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith('image/')) {
            setImage(file);
            setErrorMsg('');
        } else {
            setErrorMsg('Please upload a valid image file.');
        }
    };

    const handlePredict = async () => {
        if (!image) {
            setErrorMsg('Please upload an image to predict.');
            return;
        }

        const formData = new FormData();
        formData.append('image', image);

        try {
            setLoading(true);
            const res = await axios.post('http://localhost:5000/predict', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            const { predicted_class, confidence } = res.data;
            const numericConfidence = parseFloat(confidence.replace('%', '').trim());
            navigate('/result', { state: { predicted_class, confidence: numericConfidence } });
        } catch (error) {
            console.error(error);
            setErrorMsg('Failed to get prediction. Try again.');
        } finally {
            setLoading(false);
        }
    };


    return (
        <div className="max-w-3xl mx-auto text-center shadow-md rounded-xl p-6 mt-28">
            <h2 className="text-2xl font-bold text-blue-700 mb-4 text-center">
                Upload Skin Image
            </h2>

            <label
                htmlFor="file-upload"
                className="block w-full border-2 border-dashed border-blue-400 rounded-lg p-6 text-center cursor-pointer hover:bg-blue-50 transition mb-4"
            >
                {image ? (
                    <img
                        src={URL.createObjectURL(image)}
                        alt="Uploaded Preview"
                        className="mx-auto max-h-48 object-contain"
                    />
                ) : (
                    <span className="text-gray-600">Click to upload or drag and drop an image</span>
                )}
                <input
                    id="file-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                />
            </label>

            {errorMsg && (
                <div className="text-red-500 text-sm text-center mb-3">{errorMsg}</div>
            )}

            <button
                onClick={handlePredict}
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition"
            >
                {loading ? 'Predicting...' : 'Predict'}
            </button>
        </div>
    );
}
