import os

from dotenv import load_dotenv
from openai import OpenAI

from pdf_reader import download_and_read_pdf

load_dotenv()

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))
pdf_cache = {}


def get_answer(pdf_url: str, question: str) -> str:
    try:
        if pdf_url not in pdf_cache:
            print("Reading PDF...")
            pdf_cache[pdf_url] = download_and_read_pdf(pdf_url)

        pdf_text = pdf_cache[pdf_url][:8000]
        response = client.chat.completions.create(
            model=os.getenv("OPENAI_MODEL", "gpt-4o-mini"),
            messages=[
                {
                    "role": "system",
                    "content": """You are LectureBot, an AI study assistant.
Answer questions ONLY based on the lecture PDF content.
Be clear and use simple language.
If answer is not in PDF say:
'This topic is not covered in the uploaded lecture.'
Use bullet points when listing multiple points.""",
                },
                {
                    "role": "user",
                    "content": f"Lecture content:\n{pdf_text}\n\nQuestion: {question}",
                },
            ],
            max_tokens=500,
            temperature=0.3,
        )
        return response.choices[0].message.content
    except Exception as e:
        return f"Error: {str(e)}"
