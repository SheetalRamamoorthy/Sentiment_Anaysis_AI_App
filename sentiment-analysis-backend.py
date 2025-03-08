from flask import Flask, request, jsonify
from transformers import pipeline
from flask_cors import CORS


# Initlaizing a flask application 
# The __name__ argument helps Flask locate resources like templates and static files.
app = Flask(__name__)

#Possible CORS Erros
CORS(app) # to enable cors only all routes

# Load sentiment analysis model
sentiment_pipeline = pipeline("sentiment-analysis")

@app.route('/analyze', methods=['POST'])
def analyze_sentiment():
    data = request.json
    text = data.get('text')
    if not text:
        return jsonify({"error": "No text entered"}), 400
    result = sentiment_pipeline(text)
    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True)