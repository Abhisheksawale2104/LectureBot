from flask import Flask, jsonify, request
from flask_cors import CORS
from dotenv import load_dotenv

from ai_engine import get_answer

load_dotenv()

app = Flask(__name__)
CORS(app)


@app.route('/health', methods=['GET'])
def health():
    return jsonify({"status": "Python AI Engine Running!"})


@app.route('/answer', methods=['POST'])
def answer():
    try:
        data = request.get_json()
        pdf_url = data.get('pdf_url')
        question = data.get('question')

        if not pdf_url or not question:
            return jsonify({"error": "pdf_url and question required"}), 400

        print(f"Question: {question}")
        response_text = get_answer(pdf_url, question)
        return jsonify({"answer": response_text})
    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == '__main__':
    print("Python AI Engine on port 5001...")
    app.run(host='0.0.0.0', port=5001, debug=True)
