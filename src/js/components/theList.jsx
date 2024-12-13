import React, { useState } from "react";

const TheList = () => {
  const [todos, setTodos] = useState({
    newTask: "",
    is_done: false,
  });

  // const handleChange = (e) => {
  //   setTodos({
  //     ...todos,
  //     newTask: e.target.value,
  //   });
  // };
 
  const handleKeyDown = (event) => {
    console.log('Enter key pressed:', value);
    if (event.key === 'Enter') {(e) =>
      setTodos({
        ...todos,
        newTask: e.target.value,
      });
      console.log('Enter key pressed:', value);
    }
  };

  return (
    <ul>
      <input
        type="text"
        //onChange={(e) => setTodos({newTask: e.target.value})} 
        onKeyDown={handleKeyDown} 
        //value={todos.newTask}
        id="newTask"
        name="newTask"
        defaultValue=""
        placeholder="What needs to be done?"
      />
      <li>{todos.newTask}</li>
    </ul>
  );
};

export default TheList;
