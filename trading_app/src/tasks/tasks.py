import smtplib
from email.message import EmailMessage

from celery import Celery

from config import REDIS_HOST, REDIS_PORT, SMTP_USER, SMTP_PASS, SMTP_HOST, SMTP_PORT

celery = Celery('tasks', broker=f"redis://{REDIS_HOST}:{REDIS_PORT}")


def get_email_template_dashboard(username: str):
    email = EmailMessage()
    email['Subject'] = 'Example app'
    email['From'] = SMTP_USER
    email['To'] = SMTP_USER

    email.set_content(
        '<div>'
        f'<h1 style="color:blue;">Здравствуйте, {username}</h1>'
    )
    return email


@celery.task
def send_email_report_dashboard(username: str):
    email = get_email_template_dashboard(username)
    with smtplib.SMTP(SMTP_HOST, SMTP_PORT) as server:
        server.starttls()  # only for mail.ru
        server.login(SMTP_USER, SMTP_PASS)
        server.send_message(email)
