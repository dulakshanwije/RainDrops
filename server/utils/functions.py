import requests
from dotenv import dotenv_values

config = dotenv_values('.env')

def get_requests(path, query):
    BASE_URL = "http://api.weatherapi.com/v1"
    API_KEY = config["WEATHER_API_KEY"]
    
    request_url = f"{BASE_URL}{path}?key={API_KEY}&q={query}"
    
    response = requests.get(request_url)
    
    response_data = response.json()
    
    return response_data
    