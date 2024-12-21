import React, { useEffect, useState } from "react";

const TheList = () => {

  const [newTodo, setNewTodo] = useState({
    label: "",
    is_done: false,
    id: null,
  })
    
  const [todos, setTodos] = useState([]);


  // checks for the API URL.  If it doesnt exist it will throw an error and create one.
  // If it does exist it will read the data from the API
  useEffect(() => {
    fetch("https://playground.4geeks.com/todo/users/cshew01")
    .then((resp) => {
      if (!resp.ok) {
        throw Error("User doesn't exist");
      }
      
      resp.json().then((data) => setTodos(data.todos));
    })
    .catch((err) => {
      console.error(err);
      fetch("https://playground.4geeks.com/todo/users/cshew01", {
        method: "POST"
      });
    });    
    // The below lines were used before adding the error handler above
    // .then((resp) => resp.json())
    // .then((data) => setTodos(data.todos))
  }, []);
  

  // Writes new todos to the API
  const createTodo = async (newTodo) => {
    const resp = await fetch("https://playground.4geeks.com/todo/todos/cshew01", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodo),
    });
    const data = await resp.json();
    console.log(data,newTodo);
    setTodos([...todos, data]);
  }

  // Remove todos
  const removeTodo = async (id) => {
    const resp = await fetch(`https://playground.4geeks.com/todo/todos/${id}`, {
      method: "DELETE",
    });
    setTodos(todos.filter(task => task.id !== id));
    // const data = await resp.json();
    // setTodos([...todos, newTodo]);
  }


  // function that listens for the enter key and updates the screen as well as
 // calls the function (createTodo) that writes to the API
  const handleKeyDown = (event) => {
    console.log('Enter key pressed:', event.key,newTodo);
    if (event.key === 'Enter' && newTodo.label !== "") {
      setTodos([...todos,newTodo]);
      createTodo(newTodo);
      setNewTodo({label: ""});
    }
  };

  return (
    <>
      <input
        type="text"
        autoFocus={true}
        onKeyUp={(ev) => handleKeyDown(ev)} 
        value={newTodo.label}
        onChange={(ev) => setNewTodo({label: ev.target.value, is_done: false})}
        id="label"
        className="newTask"
        placeholder="What needs to be done?"
      />
      <ul>
      {todos.map(task => (
              <li key={task.id}>
                {task.label}
                <button className="delete" onClick={() => removeTodo(task.id)}></button>
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
