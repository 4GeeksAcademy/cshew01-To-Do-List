import React, { useEffect, useState } from "react";

const TheList = () => {
  
  const [newTodo, setNewTodo] = useState({
    newTask: "",
    is_done: false,
  })
    
  const [todos, setTodos] = useState([]);
 
 
  const handleKeyDown = (event) => {
    console.log('Enter key pressed:', event.key,newTodo);
    if (event.key === 'Enter') {
      setTodos([...todos,newTodo]);
      setNewTodo({newTask: ""});
    }

  };

  useEffect(()=>{
    console.log(todos.length);
    console.log(todos);

  },[todos])

  return (
    <>
      <input
        type="text"
        onKeyUp={(ev) => handleKeyDown(ev)} 
        value={newTodo.newTask}
        onChange={(ev) => setNewTodo({newTask: ev.target.value, is_done: false})}
        id="newTask"
        name="newTask"
        placeholder="What needs to be done?"
      />
      <ul>
        <li>{newTodo.newTask}</li>
      </ul>
    </>
  );
};

export default TheList;
