from flask import current_app
from flask_restful import Resource
import sample_data

class MajorCourses(Resource):
    # Supports GET requests
    def get(self, major_id):
        try:
            # Fetch the data for the provided major_id
            major = next((m for m in sample_data.majors if m['_id'] == major_id), None)
            if not major:
                return {"error": f"Major with id {major_id} not found."}, 404

            courses_for_major = [
                course for course in sample_data.courses
                if course['_id'] in major.get("required_courses", [])
            ]
            return {"major_id": major_id, "courses": courses_for_major}, 200
        
        except Exception as e:
            current_app.logger.error("Error retrieving courses: %s", str(e))
            return {
                "error": "An error occurred while retrieving courses.",
                "message": str(e)
            }, 500
