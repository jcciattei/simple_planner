from enum import Enum
TITLE = "Simple Planner"

# constants for the fills_up_quickly field
ALWAYS = "Always"
RARELY = "Rarely"
SOMETIMES = "Sometimes"

# Enums for Major and Course IDs
class Major(Enum):
    CMSC_GATEWAY = 1
    ENME_GATEWAY = 2


class Course(Enum):
    MATH151 = 101
    MATH152 = 102
    CMSC201 = 103
    CMSC202 = 104
    PHYS121 = 105
    ENES101 = 106
    ENME110 = 107


    def __str__(self):
        return self.name

# Define the courses collection
#
# This is a list of dictionaries, where each course is a dictionary
# with these attributes (key/value pairs):
# id: int (i.e. 101)
# number: string (i.e. "MATH151")
# description: string (i.e. "Calculus and Analytic Geometry")
# credit hours: int (i.e. 4)
# fills_up_quickly: string constant (i.e RARELY)
# offered_winter: bool (i.e. False)
# offered_summer: bool (i.e. True)
# prerequisites: list of ints corresponding to course ids, or []
# corequisites: list of ints corresponding to course ids, or []
# Note that id's are hardcoded for now for ease of development
# Access the course id with the Enum: Course.<course_number>.value

courses = [
    {
        "_id": Course.MATH151.value,
        "number": "MATH151",
        "description": "Calculus and Analytic Geometry I",
        "credit_hours": 4,
        "fills_up_quickly": RARELY,
        "offered_winter": False,
        "offered_summer": True,
        "prerequisites": [],
        "corequisites": [],
    },
    {
        "_id": Course.MATH152.value,
        "number": "MATH152",
        "description": "Calculus and Analytic Geometry II",
        "credit_hours": 4,
        "fills_up_quickly": RARELY,
        "offered_winter": False,
        "offered_summer": True,
        "prerequisites": [Course.MATH151.value],
        "corequisites": [],
    },
        {
        "_id": Course.CMSC201.value,
        "number": "CMSC201",
        "description": "Computer Science I",
        "credit_hours": 4,
        "fills_up_quickly": ALWAYS,
        "offered_winter": False,
        "offered_summer": True,
        "prerequisites": [Course.MATH151.value],
        "corequisites": [],
    },
        {
        "_id": Course.CMSC202.value,
        "number": "CMSC202",
        "description": "Computer Science II",
        "credit_hours": 4,
        "fills_up_quickly": RARELY,
        "offered_winter": False,
        "offered_summer": True,
        "prerequisites": [Course.CMSC201.value],
        "corequisites": [Course.MATH151.value],
    },
        {
        "_id": Course.PHYS121.value,
        "number": "PHYS121",
        "description": "Introductory Physics I",
        "credit_hours": 4,
        "fills_up_quickly": SOMETIMES,
        "offered_winter": False,
        "offered_summer": True,
        "prerequisites": [],
        "corequisites": [Course.MATH151.value],
    },
    {
        "_id": Course.ENES101.value,
        "number": "ENES101",
        "description": "Introduction to Engineering",
        "credit_hours": 4,
        "fills_up_quickly": ALWAYS,
        "offered_winter": False,
        "offered_summer": False,
        "prerequisites": [],
        "corequisites": [Course.MATH151.value],
    },
        {
        "_id": Course.ENME110.value,
        "number": "ENME110",
        "description": "Statics",
        "credit_hours": 3,
        "fills_up_quickly": SOMETIMES,
        "offered_winter": False,
        "offered_summer": True,
        "prerequisites": [Course.MATH151.value],
        "corequisites": [Course.PHYS121.value],
    }
]

# Define the majors collection
# This is a list of dictionaries, where each major is a dictionary
# with an id, name, credit count
# Note that id's are hardcoded for now for ease of development
# Access the major id with the Enum: Major.<major_abbreviation>.value
# Access the course id with the Enum: Course.<course_number>.value
majors = [
    {
        "_id": Major.CMSC_GATEWAY.value,
        "name": "Computer Science Gateway",
        "number_credits": 12,
        "required_courses": [Course.MATH151, Course.CMSC201.value, Course.CMSC202.value],
        "default_plan": {
            Course.MATH151.value: {"year": 1, "session": "Fall"},
            Course.CMSC201.value: {"year": 1, "session": "Fall"},
            Course.CMSC202.value: {"year": 1, "session": "Spring"}
        }
    },
    {
        "_id": Major.ENME_GATEWAY.value,
        "name": "Mechanical Engineering Gateway",
        "number_credits": 19,
        "required_courses": [Course.MATH151.value, Course.MATH152.value, Course.PHYS121.value, Course.ENES101.value, Course.ENME110.value],
        "default_plan": {
            Course.MATH151.value: {"year": 1, "session": "Fall"},
            Course.MATH152.value: {"year": 1, "session": "Spring"},
            Course.PHYS121.value: {"year": 1, "session": "Fall"},
            Course.ENES101.value: {"year": 1, "session": "Fall"},
            Course.ENME110.value: {"year": 1, "session": "Spring"}
        }
    }
]