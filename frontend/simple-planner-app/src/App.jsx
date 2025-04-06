import { useState, useEffect } from 'react'
import './App.css'

// Components
import MajorDropdown from './components/MajorDropdown'
import MajorDetails from './components/MajorDetails'
import CoursesList from './components/CoursesList'

/**
 * App Component 
 * This is the main application which fetches data from the backend implemented in Flask.
 * See vite.config.js for the proxy
 * Each api endpoint fetches a different piece of data for use in other display components
 * React Hooks utilized:
 * - useState: To manage stateful data (title, selected major, majors list, courses)
 * - useEffect: To perform side effected, such as fetching data once the component
 *              mounts or when certain state values change
 */
function App() {
  // State to hold the title fetched from the backend
  const [titleData, setTitle] = useState('');
  //State to hold the currently selected major's ID as a string
  const [selectedMajorId, setSelectedMajorId] = useState('');
  // State to hold list of majors fetch from the backend
  const [majors, setMajors] = useState([]);
  // State to hold list of courses for selected major
  const [majorCourses, setMajorCourses] = useState([]);

  // useEffect Hook for fetching title. Runs once the component mounts
  useEffect(() => {
    fetch('/api/v2/title')
      .then((res) => res.json())
      .then((data) => setTitle(data.title))
      .catch((error) => console.error('Error fetching title:', error));
  }, []); // [] means run only once

  // useEffect hook for fetching the list of majors. Runs once the component mounts
  useEffect(() => {
    fetch('/api/v2/majors')
      .then((res) => res.json())
      .then((data) => {
        setMajors(data.majors);
      })
      .catch((error) => console.error('Error fetching majors:', error));
  }, []);

  // Event handler for when a user selects a major from the dropdown
  const handleSelect = (event) => {
    setSelectedMajorId(event.target.value);
  }

  // Find the major object that matches the currently selected major ID
  const selectedMajor = majors.find(
    (major) => String(major._id) === selectedMajorId
  );

  // useEffect Hook for fetching the courses for a selected major. 
  // Runs every time selectedMajorId changes 
  useEffect(() => {
    if (selectedMajorId) {
      fetch(`/api/v1/majors/${selectedMajorId}/courses`)
        .then((res) => res.json())
        .then((data) => setMajorCourses(data.courses))
        .catch((error) => console.error('Error fetching courses:', error));
    } else {
      // If not major is selected, clear the courses
      setMajorCourses([]);
    }
  }, [selectedMajorId]);


  return (
    <div className="App">
      <header>
        {/* Display Title fetched from the backend */}
        <h1>{titleData}</h1>
      </header>
      {/* Dropdown list for selecting a major */}
      <MajorDropdown
        majors={majors}
        selectedMajorId={selectedMajorId}
        onSelect={handleSelect}
      />
      {/* Display the name and credit hours for a major if one is selected */}
      <MajorDetails major={selectedMajor} />

      {/* Display the courses for a selected major if available */}
      <CoursesList
        courses={majorCourses}
        majorName={selectedMajor ? selectedMajor.name : ''} />

    </div>
  );
}

export default App
