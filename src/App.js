import './App.css';
import Stickynote from './components/Stickynote';
import CreateIcon from './components/CreateIcon';
import CreateNote from './components/CreateNote';
function App() {
  return (
    
    <div className="App">
      <div className="App-header">
            <h1>notes</h1>
        </div>
        <div className="App-body">
            <Stickynote text="lorem ipsum " />
            <CreateIcon />
            <CreateNote />
        </div>
        
  
    </div>
  );
}


export default App;
