import requests
import time

url = 'http://127.0.0.1:5000/predict'
image_path = 'BA- cellulitis (1).webp'

# Add delay to wait for server readiness
time.sleep(2)

with open(image_path, 'rb') as img:
    files = {'image': img}
    response = requests.post(url, files=files)
    print(response.status_code)
    print(response.json())
