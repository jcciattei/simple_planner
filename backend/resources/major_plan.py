from flask import current_app
from flask_restful import Resource
import sample_data

class MajorPlan(Resource):
    # Supports GET requests
    def get(self, major_id):
        try:
            # Fetch the data for the provided major_id
            major = next((m for m in sample_data.majors if m['_id'] == major_id), None)
            if not major:
                return {"error": f"Major with id {major_id} not found."}, 404
            
            # Ensure that the major has a default plan
            default_plan_raw = major.get("default_plan")
            if not default_plan_raw:
                return {"error": "No default plan available for major."}, 404
            
            # Build a nested plan: Years 1-4 with sessions Fall, Winter, Spring, Summer
            nested_plan = {
                "year1":{"Fall": [], "Winter":[], "Spring":[], "Summer":[]},
                "year2":{"Fall": [], "Winter":[], "Spring":[], "Summer":[]},
                "year3":{"Fall": [], "Winter":[], "Spring":[], "Summer":[]},
                "year4":{"Fall": [], "Winter":[], "Spring":[], "Summer":[]},
            }

            # For each course in the default plan, lookup course info and assign it
            for course_id_key, schedule in default_plan_raw.items():
                course_id = int(course_id_key)
                course = next((c for c in sample_data.courses if c['_id'] == course_id), None)
                if course:
                    year_key = f"year{schedule['year']}"
                    session = schedule['session']
                    if year_key in nested_plan and session in nested_plan[year_key]:
                        nested_plan[year_key][session].append(course)
            return {"major_id": major_id, "default_plan": nested_plan}, 200
        
        except Exception as e:
            current_app.logger.error("Error retrieving default plan: %s", str(e))
            return {
                "error": "An error occurred while retrieving default plan for major.",
                "message": str(e)
            }, 500