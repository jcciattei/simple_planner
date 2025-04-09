import React from 'react';
import PropTypes from 'prop-types';

/* 
 * CoursePopup Component
 * Displays additional information about a course in a popup window
 * Props:
 * - course: object containing course details (per functional requirements)
 * - onClose: function to close the popup
 */
const CoursePopup = ({ course, onClose }) => {
    // No course selected, don't render the popup
    if (!course) {
        return null;
    }

    return (
        <div className='course-popup'>
            <div className='popup-content'>
                <h2>{course.number}</h2> <p><strong>Description:</strong> {course.description}</p>
                <p><strong>Credit Hours:</strong> {course.credit_hours}</p>
                <p><strong>Fills Up Quickly?:</strong> {course.fills_up_quickly}</p>
                <p><strong>May Be Offered in Winter:</strong> {course.offered_winter ? 'Yes' : 'No'}</p>
                <p><strong>May Be Offered in Summer:</strong> {course.offered_summer ? 'Yes' : 'No'}</p>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

// Prop types for type safety
CoursePopup.propTypes = {
    course: PropTypes.shape({
        _id: PropTypes.number.isRequired,
        number: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        credit_hours: PropTypes.number.isRequired,
        fills_up_quickly: PropTypes.string.isRequired,
        offered_winter: PropTypes.bool.isRequired,
        offered_summer: PropTypes.bool.isRequired,
    }).isRequired,
    onClose: PropTypes.func.isRequired,
};

export default CoursePopup;