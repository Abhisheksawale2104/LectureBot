import io

import PyPDF2
import requests


def download_and_read_pdf(pdf_url: str) -> str:
    try:
        response = requests.get(pdf_url, timeout=30)
        response.raise_for_status()

        pdf_file = io.BytesIO(response.content)
        reader = PyPDF2.PdfReader(pdf_file)
        full_text = ""

        for page_num, page in enumerate(reader.pages):
            text = page.extract_text()
            if text:
                full_text += f"\n--- Page {page_num + 1} ---\n{text}"

        if not full_text.strip():
            return "Could not extract text from this PDF."

        return full_text
    except Exception as e:
        return f"Error reading PDF: {str(e)}"
