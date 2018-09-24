from flask import Flask, render_template
from config import BaseConfig
from application.routes.react import react
from application.routes.auth import auth

app = Flask(__name__, static_folder='client/build/static', template_folder='client/build')
app.config.from_object(BaseConfig)

app.register_blueprint(react)
app.register_blueprint(auth,url_prefix='/api/auth')