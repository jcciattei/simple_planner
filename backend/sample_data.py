TITLE = "Simple Planner"
# Define the courses collection
# This is a list of dictionaries, where each course is a dictionary
# with an id, number, description
# Note that id's are hardcoded for now for ease of development

courses = [
    {
        "_id": 101,
        "number": "MATH151",
        "description": "Calculus and Analytic Geometry I"
    },
    {
        "_id": 102,
        "number": "MATH152",
        "description": "Calculus and Analytic Geometry II"
    },
        {
        "_id": 103,
        "number": "CMSC201",
        "description": "Computer Science I"
    },
        {
        "_id": 104,
        "number": "CMSC202",
        "description": "Computer Science II"
    },
        {
        "_id": 105,
        "number": "PHYS121",
        "description": "Introductory Physics I"
    },
    {
        "_id": 106,
        "number": "ENES101",
        "description": "Introduction to Engineering"
    },
        {
        "_id": 107,
        "number": "ENME110",
        "description": "Statics"
    },
]

# Define the majors collection
# This is a list of dictionaries, where each major is a dictionary
# with an id, name, credit count
# Note that id's are hardcoded for now for ease of development

majors = [
    {
        "_id": 1,
        "name": "Computer Science Gateway",
        "number_credits": 12,
        "required_courses": [101, 103, 104]
    },
    {
        "_id": 2,
        "name": "Mechanical Engineering Gateway",
        "number_credits": 19,
        "required_courses": [101, 102, 105, 106, 107]
    }
]