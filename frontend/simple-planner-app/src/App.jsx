import { useState, useEffect } from 'react'
import './App.css'

function App() {
  // State to hold the displayed title
  const [titleData, setTitle] = useState("");
  //State to hold the selected major's id
  const [selectedMajorId, setSelectedMajorId] = useState('');
  // State to hold list of majors
  const [majors, setMajors] = useState([]);

  // React Hook for fetching title
  useEffect(() => {
    fetch("/api/v1/title")
      .then((res) => res.json())
      .then((data) => setTitle(data.title));
  }, []);

  // React hook for fetching major information
  useEffect(() => {
    fetch('/api/v1/majors')
      .then((res) => res.json())
      .then((data) => {
        setMajors(data.majors);
      })
      .catch((error) => console.error('Error fetching majors:', error));
  }, []);

  // Event handler for when a user selects a major
  const handleSelect = (event) => {
    setSelectedMajorId(event.target.value);
  }

  // Find the selected major from the list based on its id
  const selectedMajor = majors.find(
    (major) => String(major.id) === selectedMajorId
  );

  return (
    <div className="App">
      <header>
        <h1>{titleData}</h1>
      </header>
      <h1>Select a Major</h1>
      <select value={selectedMajorId} onChange={handleSelect}>
        <option value="">--Select Major</option>
        {majors.map((major) => (
          <option key={major.id} value={major.id}>
            {major.name}
          </option>
        ))}
      </select>
      {selectedMajor && (
        <div style={{ marginTop: '1rem' }}>
          <p>
            <strong>Major:</strong> {selectedMajor.name}
          </p>
          <p>
            <strong>Required Credit Hours:</strong> {selectedMajor.number_credits}
          </p>
        </div>
      )}
    </div>
  );
}

export default App
