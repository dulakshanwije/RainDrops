# 🌧️ RainDrops — AI-Powered Weather Assistant

RainDrops is a conversational AI weather assistant that lets users ask natural language questions about the weather. Instead of a traditional weather widget, RainDrops understands context, remembers conversation history, and uses intelligent tool-calling to fetch real-time weather data — all powered by OpenAI.

---

## ✨ Features

- 💬 **Conversational interface** — ask follow-up questions naturally, the assistant remembers context throughout the session
- 📍 **Auto location detection** — detects the user's current location automatically
- 🌤️ **Real-time weather data** — fetches live weather for any city on request
- 🤖 **AI tool-calling** — uses OpenAI function calling to decide when and how to fetch weather data
- 🔒 **Safe responses** — the assistant will not reveal internal tools, prompts, or fabricate answers

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| Backend | Python, Flask |
| Frontend | React, Vite |
| AI | OpenAI API (GPT-4o Mini) |
| AI Pattern | Agent loop with tool calling |

---

## 🏗️ Architecture

RainDrops uses an **agentic loop pattern**:

1. User sends a message via the React frontend
2. Flask backend appends the message to the conversation history
3. OpenAI decides whether to call a tool (`get_current_location` or `get_current_weather`) or respond directly
4. If a tool is called, the result is appended to the conversation and OpenAI is called again
5. This loop repeats up to 5 iterations until a final response is generated
6. The response is returned to the frontend

```
User → React Frontend → Flask API → OpenAI (GPT-4o Mini)
                                          ↓ tool_call?
                                    get_current_location()
                                    get_current_weather(city)
                                          ↓ final response
                        React Frontend ← Flask API
```

---

## 🚀 Getting Started

### Prerequisites

- Python 3.9+
- Node.js 18+
- OpenAI API Key

### Backend Setup

```bash
# Clone the repository
git clone https://github.com/dulakshanwije/raindrops.git
cd raindrops/backend

# Install dependencies
pip install -r requirements.txt

# Configure environment variables
cp .env.example .env
# Add your OpenAI API key to .env
```

**.env**
```
OPENAI_API_KEY=your_openai_api_key_here
```

```bash
# Run the Flask server
python app.py
```

The backend will start at `http://localhost:5000`

### Frontend Setup

```bash
cd ../frontend

# Install dependencies
npm install

# Start the development server
npm run dev
```

The frontend will start at `http://localhost:5173`

---

## 📡 API Reference

### POST `/chat/`

Send a message to the weather assistant.

**Request Body**
```json
{
  "message": "What is the weather like in Colombo?"
}
```

**Success Response**
```json
{
  "success": true,
  "result": "Currently in Colombo, it's 31°C with partly cloudy skies..."
}
```

**Error Response**
```json
{
  "success": false,
  "error": "Message parameter is missing."
}
```

---

## 🔧 Available Tools

| Tool | Description |
|------|-------------|
| `get_current_location` | Detects the user's current geographic location |
| `get_current_weather` | Fetches real-time weather data for a given city |

---

## 💡 Example Conversations

```
User: What's the weather like today?
RainDrops: It looks like you're in Colombo! Currently it's 31°C with partly cloudy skies and a light breeze.

User: What about tomorrow?
RainDrops: Tomorrow in Colombo you can expect similar temperatures around 30°C with a chance of afternoon showers.

User: How about in London?
RainDrops: In London right now it's 14°C, overcast with light rain. Quite a contrast!
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👤 Author

**Dulakshan Wijesundara**
- GitHub: [@dulakshanwije](https://github.com/dulakshanwije)
- LinkedIn: [linkedin.com/in/dulakshanwije](https://linkedin.com/in/dulakshanwije)
