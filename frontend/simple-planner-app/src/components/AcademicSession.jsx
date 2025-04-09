import React, { useState } from 'react';
import CoursePopup from './CoursePopup';
import PropTypes from 'prop-types';

/* 
 * AcademicSession Component
 * Represents a single academic session within a fixed grid of 6 courses
 * Contains placeholder courses
 * Clicking a course triggers a popup with course information
 * 
 * Props:
 * - academicSessionName: name of session (string, i.e Fall)
 * - courses: array of Course objects within the session
 */

const AcademicSession = ({ academicSessionName, courses }) => {

    const [selectedCourse, setSelectedCourse] = useState(null);

    const filledCourses = [...courses, ...Array(6 - courses.length).fill(null)];

    const handleCourseClick = (course) => {
        setSelectedCourse(course);
    };

    const closePopup = () => {
        setSelectedCourse(null);
    };

    return (
        <div className="academic-session">
            <h3 className="session-title">{academicSessionName}</h3>
            <div className="courses-grid">
                {filledCourses.map((course, index) => (
                    course ? (
                        <div
                            key={course._id}
                            className="course-box"
                            onClick={() => handleCourseClick(course)}>
                            <strong>{course.number}</strong>
                        </div>
                    ) : (
                        <div key={index} className="course-box placeholder"></div>
                    )
                ))}
            </div>
            {selectedCourse && (
                <CoursePopup course={selectedCourse} onClose={closePopup} />
            )}
        </div>
    );
};

// Prop types for type safety
AcademicSession.propTypes = {
    academicSessionName: PropTypes.string.isRequired,
    courses: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.number.isRequired,
            number: PropTypes.string.isRequired,
        })
    ).isRequired,
};

AcademicSession.defaultProps = {
    courses: [],
};

export default AcademicSession;