import React from 'react';

/* 
* Courses List Component
* Renders a list of courses for the selected major
*
* Props:
* - courses: an array of course objects
* - majorName: the name of the selected major (for display purposes)
*/

const CoursesList = ({ courses, majorName }) => {
    // Do not render if there are no courses
    if (!courses || courses.length === 0) return null;

    return (
        <div style={{ marginTop: '1rem' }}>
            {/* Display the courses for a selected major if available */}
            <h2> Courses for {majorName}</h2>
            <ul>
                {courses.map((course) => (
                    <li key={course._id}>
                        <strong>{course.number}</strong>: {course.description}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CoursesList;