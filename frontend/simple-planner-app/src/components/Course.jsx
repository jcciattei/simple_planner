import React from 'react';
import PropTypes from 'prop-types';

/* 
 * Course Component
 * Represents a single course as a clickable box
 * Displays course number. Click it to view more info.
 * 
 * Props:
 * - course object
 * - onClick: function to handle clicks on a course 
 */

const Course = ({ course, onClick}) => {
    // Wrap the course number in a div that acts as a clickable object
    return (
        <div className="course-box" onClick={() => onClick(course)}>
            <strong>{course.number}</strong> 
        </div>
    );
};

Course.propTypes = {
    course: PropTypes.shape({
        _id: PropTypes.number.isRequired,
        number: PropTypes.string.isRequired,
    }).isRequired,
    onClick: PropTypes.func.isRequired,
};

export default Course;