import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Note from "./Components/Note" 

function App() {
  const [notes, setnotes] = useState([]);

  useEffect(() => {
    axios.get('/api')
      .then((results) => {
      setnotes(results.data)
      })
  }, []);

  return (
    <div>
      <h1>Sticky Notes Wall</h1>
      
      {notes.map((note) =>
        < Note key={note.id} value={note.name} />
      )}

    </div>
  );
}

export default App;
