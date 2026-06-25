from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os

app = FastAPI(title="Vinoth Murugan Portfolio API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://Vinoth-ai-20.github.io"],
    allow_methods=["POST", "GET"],
    allow_headers=["*"],
)


class ContactForm(BaseModel):
    name: str
    email: EmailStr
    subject: str
    message: str


@app.get("/")
def root():
    return {"status": "Vinoth Murugan API — online"}


@app.post("/api/contact")
def contact(form: ContactForm):
    try:
        smtp_user = os.environ["GMAIL_USER"]
        smtp_pass = os.environ["GMAIL_APP_PASSWORD"]

        msg = MIMEMultipart()
        msg["From"] = smtp_user
        msg["To"] = "vinoth.ac.in@gmail.com"
        msg["Subject"] = f"Portfolio Contact: {form.subject} — from {form.name}"

        body = f"""
        Name: {form.name}
        Email: {form.email}
        Subject: {form.subject}

        Message:
        {form.message}
        """
        msg.attach(MIMEText(body, "plain"))

        with smtplib.SMTP_SSL("smtp.gmail.com", 465) as server:
            server.login(smtp_user, smtp_pass)
            server.sendmail(smtp_user, "vinoth.ac.in@gmail.com", msg.as_string())

        return {"success": True, "message": "Message sent."}
    except Exception as e:
        return {"success": False, "message": str(e)}
