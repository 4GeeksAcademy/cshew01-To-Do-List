import React, { useEffect, useState } from "react";

const TheList = () => {

  const [newTodo, setNewTodo] = useState({
    label: "",
    is_done: false,
    id: null,
  })
    
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://playground.4geeks.com/todo/users/cshew01")
    .then((resp) => resp.json())
    .then((data) => setTodos(data.todos))
  }, []);
  
  const handleKeyDown = (event) => {
    console.log('Enter key pressed:', event.key,newTodo);
    if (event.key === 'Enter' && newTodo.label !== "") {
      setTodos([...todos,newTodo]);
      setNewTodo({label: ""});
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
        autoFocus={true}
        onKeyUp={(ev) => handleKeyDown(ev)} 
        value={newTodo.label}
        onChange={(ev) => setNewTodo({label: ev.target.value, is_done: false, id: Math.random()*10})}
        id="label"
        className="newTask"
        placeholder="What needs to be done?"
      />
      <ul>
      {todos.map(task => (
              <li key={task.id}>
                {task.label}
                <button className="delete" onClick={() => removeTask(task.id)}></button>
              </li>
      ))} 
      <div className="footerText">{todos.length} {(todos.length === 1) ? "item left" : "items left"}</div>       
      </ul>
      <div className="basePageOne"></div>
      <div className="basePageTwo"></div>	
      <div className="basePageThree"></div>		
    </>
  );
};

export default TheList;
