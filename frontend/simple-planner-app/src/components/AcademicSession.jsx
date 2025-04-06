import React from 'react';
import Course from './Course';

const AcademicSession = ({ academicSessionName, courses, onCourseClick }) => {
    return (
        <div className="academic-session plan-box">
            <h3>{academicSessionName}</h3>
            {courses.length > 0 ? (
                <div className="course-list">
                    {courses.map((course) => (
                        <Course key={course._id} course={course} onClick={onCourseClick} />
                    ))}
                </div>
            ) : (
                <p>No courses scheduled.</p>
            )}
        </div>
    );
};

export default AcademicSession;