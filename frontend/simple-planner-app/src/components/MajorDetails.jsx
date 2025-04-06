import React from 'react';

/* 
* Major Details Component
* Displays details (name and required credit hours) of the selected major
*
* Props:
* - majors: an object representing the selected major
*/

const MajorDetails = ({ major }) => {
    return (
        <div style={{ marginTop: '1rem' }}>
            {/* Display the name and credit hours for a major if one is selected */}
            {/* If one is not selected, display default values */}
            <p>
                <strong>Major:</strong> {major ? major.name : "None selected"}
            </p>
            <p>
                <strong>Required Credit Hours:</strong> {major ? major.number_credits : "-"}
            </p>
        </div>
    );
};

export default MajorDetails;