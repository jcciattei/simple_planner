from flask import jsonify
from flask_restful import Resource
from sample_data import TITLE

class Title(Resource):
    # supports GET requests
    def get(self):
        return jsonify({"title": TITLE})