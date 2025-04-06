import React from 'react';

/* 
* Major Dropdown Component
* Renders a select element that lists all majors passed in as props
* Handles change events to notify parent component when user selects a different major
*
* Props:
* - majors: an array of major objects
* - selectedMajorId: current selected major id (string)
* - onSelect: function to handle the selection change event
*/

const MajorDropdown = ({ majors, selectedMajorId, onSelect }) => {
    return (
        <div>
            <label htmlFor="major-select"><h1>Select a Major</h1></label>
            <select id="major-select" value={selectedMajorId} onChange={onSelect}>
                <option value="">--Select Major--</option>
                { /* Each option represents a major. major.id is the unique key */}
                {majors.map((major) => (
                    <option key={major._id} value={major._id}>
                        {major.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default MajorDropdown;