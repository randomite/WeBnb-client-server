from flask import Blueprint

auth = Blueprint('auth',__name__)

@auth.route('/')
def index():
    return 'This is the index for login and should be removed or updated'