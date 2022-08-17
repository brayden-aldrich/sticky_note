import './App.css';
import Stickynote from './components/Stickynote';
import CreateIcon from './components/CreateIcon';
import React, { useState } from "react";



function App() {
  
  const [ notes, setNotes ] = useState([]);
  function newNote(e){
    const newNote = [e, ...notes];
    setNotes(newNote)
  }
  return (
    
    <div className="App">
      <div className="App-header">
            <h1>notes</h1>
        </div>
        <div className="App-body">
            { notes.map((value, i) => <Stickynote key={i} text={value}/>) }
            <CreateIcon submitText={newNote}/>
        </div>
        
  
    </div>
  );
}


export default App;
