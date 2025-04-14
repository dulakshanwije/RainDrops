from utils.functions import get_requests

def get_current_location():
    location = get_requests("/ip.json", "auto:ip")
    
    location = {
        "city": location['city'],
        "region": location['city'],
        "country": location['country_code'],
        "country_name": location['country_name'],
        "latitude": location['lat'],
        "longitude": location['lon'],
    }
    
    print(location)
    return location

def get_current_weather(city):
    if not city:
        return None
    weather = get_requests("/current.json", city)
    
    return weather["current"]

tools = [{
    "type": "function",
    "function": {
        "name": "get_current_location",
        "description": "Get current location of the user.",
        "parameters": {
            "type": "object",
            "properties": {},
            "additionalProperties": False
        },
        "strict": True
    }
},{
    "type": "function",
    "function": {
        "name": "get_current_weather",
        "description": "Get current weather details of the given city/location.",
        "parameters": {
            "type": "object",
            "properties": {
                "city": {"type": "string"},
            },
            "required": ["city"],
            "additionalProperties": False
        },
        "strict": True
    }
}]