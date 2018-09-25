from flask import Flask, render_template

app = Flask(__name__, static_folder='client/build/static', template_folder='client/build')

@app.route('/', defaults={'path': ''})
@app.route("/<path:path>")
def catch_all(path):
    return render_template("index.html")