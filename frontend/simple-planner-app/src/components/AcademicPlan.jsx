import React from 'react';
import AcademicYear from './AcademicYear'

const AcademicPlan = ({ defaultPlan, onCourseClick }) => {
    // in the event that no default plan is available, display an empty plan
    const fallbackPLan = {
        year1: { Fall: [], Winter: [], Spring: [], Summer: [] },
        year2: { Fall: [], Winter: [], Spring: [], Summer: [] },
        year3: { Fall: [], Winter: [], Spring: [], Summer: [] },
        year4: { Fall: [], Winter: [], Spring: [], Summer: [] },
    };
    const planToDisplay = defaultPlan || fallbackPLan;

    return (
        <div className='academic-plan plan-box'>
            {Object.entries(planToDisplay).map(([yearKey, sessions]) => (
                <AcademicYear
                    key={yearKey}
                    year={yearKey}
                    sessions={sessions}
                    onCourseClick={onCourseClick} />
            ))}
        </div>
    );
};

export default AcademicPlan;