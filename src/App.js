import React, {useState} from 'react';
import './App.css';
import Todotable from './components/Todolist';

function App() {
  const [desc, setDesc] = useState({desc: '', date: ''}); 
  const [todos, setTodos] = useState([]);

  const inputChanged = (event) => {
    setDesc({ ...desc, [event.target.name]: event.target.value });
  }

  const addToDo = (event) => {
    event.preventDefault();
    setTodos([...todos, desc]);
  }

  return (
    <div className="App">
      <form onSubmit={addToDo}>
        <p>Date</p>
        <input type="date" name="date" value={desc.date} onChange={inputChanged} />
        <p>Description</p>
        <input type="text" name="desc" value={desc.desc} onChange={inputChanged} />
        <input type="submit" value="Add"/>
      </form>
      <Todotable todos={todos} />
     
     
    </div>
  );
}

export default App;
