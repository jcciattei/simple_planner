import React from 'react';
import AcademicSession from './AcademicSession';

const AcademicYear = ({ year, sessions, onCourseClick }) => {
    const yearNumber = year.replace('year', '');

    return (
        <div className="academic-year plan-box">
            <h2>{`Year ${yearNumber}`}</h2>
            <div className="session-sections">
                {["Fall", "Winter", "Spring", "Summer"].map((session) => (
                    <AcademicSession
                        key={session}
                        academicSessionName={session}
                        courses={sessions[session] || []}
                        onCourseClick={onCourseClick}
                    />
                ))}
            </div>
        </div>
    );
}

export default AcademicYear;
