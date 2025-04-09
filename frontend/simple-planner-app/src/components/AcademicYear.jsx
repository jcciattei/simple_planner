import React from 'react';
import AcademicSession from './AcademicSession';
import PropTypes from 'prop-types';

/* 
 * AcademicYear Component
 * Represents a single academic year within the plan
 * Contains placeholder a 4x4 grid of sessions
 * 
 * Props:
 * - year: year identifier (string, i.e. "Year 1")
 * - sessions: object mapping session names to course arrays
 */

const AcademicYear = ({ year, sessions }) => {
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
                    />
                ))}
            </div>
        </div>
    );
};

// Prop types for type safety
AcademicYear.propTypes = {
    year: PropTypes.string.isRequired,
    sessions: PropTypes.shape({
        Fall: PropTypes.array,
        Winter: PropTypes.array,
        Spring: PropTypes.array,
        Summer: PropTypes.array,
    }).isRequired,
};

// default props
AcademicYear.defaultProps = {
    sessions: {
        Fall: [],
        Winter: [],
        Spring: [],
        Summer: [],
    },
};

export default AcademicYear;
