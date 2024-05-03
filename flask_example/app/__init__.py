from flask import Flask
app = Flask(__name__)
from app import routes  # под `app = Flask(__name__)` чтобы избежать циклического импорта
