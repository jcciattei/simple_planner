import React from 'react';
import AcademicYear from './AcademicYear';
import PropTypes from 'prop-types';

/* 
 * AcademicSession Component
 * Represents overall academic plan with 4 years
 * Contains an empty placeholder plan
 * 
 * Props:
 * - defaultPlan: object containing years as keys and their corresponding session data
 */

const AcademicPlan = ({ defaultPlan }) => {
    // in the event that no default plan is available, display an empty plan
    const fallbackPlan = {
        year1: { Fall: [], Winter: [], Spring: [], Summer: [] },
        year2: { Fall: [], Winter: [], Spring: [], Summer: [] },
        year3: { Fall: [], Winter: [], Spring: [], Summer: [] },
        year4: { Fall: [], Winter: [], Spring: [], Summer: [] },
    };

    // Choose between provided plan and fallback plan
    const planToDisplay = defaultPlan || fallbackPlan;

    return (
        <div className='academic-plan plan-box'>
            {/* Iterate over each year in the plan and render its sessions*/}
            {Object.entries(planToDisplay).map(([yearKey, sessions]) => (
                <AcademicYear
                    key={yearKey}
                    year={yearKey}
                    sessions={sessions} />
            ))}
        </div>
    );
};

// PropTypes for type safety
AcademicPlan.propTypes = {
    defaultPlan: PropTypes.object,
};

// set default to null if no defaultPlan provided
AcademicPlan.defaultProps = {
    defaultPlan: null,
};
export default AcademicPlan;