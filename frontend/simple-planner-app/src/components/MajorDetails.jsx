import React from 'react';

/* 
* Major Details Component
* Displays details (name and required credit hours) of the selected major
*
* Props:
* - majors: an object representing the selected major
*/

const MajorDetails = ({ major }) => {
    // Do not render if no major is selected
    if (!major) return null;

    return (
        <div style={{ marginTop: '1rem' }}>
            {/* Display the name and credit hours for a major if one is selected */}
            <p>
                <strong>Major:</strong> {major.name}
            </p>
            <p>
                <strong>Required Credit Hours:</strong> {major.number_credits}
            </p>
        </div>
    );
};

export default MajorDetails;