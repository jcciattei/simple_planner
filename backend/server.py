from flask import Flask, send_from_directory
from flask_restful import Api
from resources.title import Title
from resources.majors import Majors
from resources.major_courses import MajorCourses
from resources.major_plan import MajorPlan

app = Flask(__name__, static_folder="../frontend/simple-planner-app/dist", static_url_path="/")
api = Api(app)

# Resource for the title
api.add_resource(Title, '/api/v2/title')
# Resource for the list of majors
api.add_resource(Majors, '/api/v2/majors')
# Resource for the list of courses within a major
api.add_resource(MajorCourses, '/api/v1/majors/<int:major_id>/courses')
# Resource for the default plan of a major (Years 1-4 and Sessions Fall, Winter, Spring and Summer)
api.add_resource(MajorPlan, '/api/v1/majors/<int:major_id>/plan')

# Flask will serve React
@app.route('/')
def serve_react():
    return send_from_directory(app.static_folder, "index.html")

if __name__ == '__main__':
    app.run(debug=True)