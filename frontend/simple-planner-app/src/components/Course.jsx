import React from 'react';

const Course = ({ course, onClick}) => {
    // Wrap the course number in a div that acts as a clickable object
    return (
        <div className="course-box plan-box" onClick={() => onClick(course)}>
            <strong>{course.number}</strong>
        </div>
    );
};

export default Course;