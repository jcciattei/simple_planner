from flask import current_app
from flask_restful import Resource
from sample_data import TITLE

class Title(Resource):
    # supports GET requests
    def get(self):
        try:
            return {"title": TITLE}
        except Exception as e:
            current_app.logger.error("Error retrieving title: %s", str(e))
            return {
                "error": "An error occurred while retrieving the title.",
                "message": str(e)
            }, 500