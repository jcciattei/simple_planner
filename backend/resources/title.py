from flask_restful import Resource
from sample_data import TITLE

class Title(Resource):
    # supports GET requests
    def get(self):
        return {"title": TITLE}