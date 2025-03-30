import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [titleData, setTitle] = useState("");

  {/* React Hook for fetching data */ }
  useEffect(() => {
    fetch("/api/v1/title")
      .then((res) => res.json())
      .then((data) => setTitle(data.title));
  }, []);

  return (
    <>
      <div className="App">
        <header>
          <h1>{titleData}</h1>
        </header>
      </div>
    </>
  );
}

export default App
