# Add DB Config, Authentication Keys, etc here

class BaseConfig(object):
    DEBUG = True
    SECRET_KEY = ""
    DATABASE_URI = ""

class ProductionConfig(object):
    DATABASE_URI = ""