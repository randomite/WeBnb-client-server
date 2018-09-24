from flask import render_template, Blueprint

react = Blueprint('react', __name__)

@react.route('/', defaults={'path': ''})
@react.route("/<path:path>")
def catch_all(path):
    return render_template("index.html")