import React, { useEffect, useState } from "react";

const TheList = () => {
  
  const [newTodo, setNewTodo] = useState({
    newTask: "",
    is_done: false,
    id: null,
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

  const removeTask = (taskId) => {
    setTodos(todos.filter(task => task.id !== taskId));
  }

  return (
    <>
      <input
        type="text"
        onKeyUp={(ev) => handleKeyDown(ev)} 
        value={newTodo.newTask}
        onChange={(ev) => setNewTodo({newTask: ev.target.value, is_done: false, id: Math.random()*10})}
        id="newTask"
        name="newTask"
        placeholder="What needs to be done?"
      />
      <ul>
      {todos.map(task => (
              <li key={task.id}>
                {task.newTask}
                <button className="delete" onClick={() => removeTask(task.id)}></button>
              </li>
      ))}        
      </ul>
    </>
  );
};

export default TheList;
