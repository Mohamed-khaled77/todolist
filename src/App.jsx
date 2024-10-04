import React, { useRef, useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([""]);
  const inputRef = useRef(null);

  const handleInput = () => {
    const text = inputRef.current.value;
    const newItem = { completed: false, text };
    setTodos([...todos, newItem]);
    inputRef.current.value = "";
  };

  const handleItemDone = index => {
    setTodos(prevTodos => {
      return prevTodos.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      );
    });
  };

  const handleDeleteItem = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  // const comletDone = index => {
  //   setTodos(addcomlet => {
  //     return addcomlet.map((todo, i) =>
  //       i === index ? { ...todo, completed: !todo.completed } : todo
  //     );
  //   });
  // };

  return (
    <div className="container">
      {/* <div className="appde">
        <h2 className="bor">completed</h2>
      </div> */}
      <div className="app">
        <div className="to-do-container">
          <h1>To Do List</h1>

          <div className="add">
            <input
              className="task"
              ref={inputRef}
              placeholder="Add to do list"
              type="text"
            />
            <button onClick={handleInput} className="btn">
              Add
            </button>
          </div>

          <ul>
            {todos.map((todo, index) => (
              <>
                <div className="tasks">
                  <li
                    key={index}
                    onClick={() => handleItemDone(index)}
                    className={todo.completed ? "done" : ""}>
                    {todo.text}
                  </li>
                  <span className="hov" onClick={() => handleDeleteItem(index)}>
                    {"X"} 
                  </span>
                </div>
              </>
            ))}
          </ul>
        </div>
      </div>
      {/* <div className="appde">
        <h2 className="bor">suggestions</h2>
        <ul>
          <li key={1} onClick={() => handleItemDone()}>
            {comletDone.text}
          </li>
        </ul>
      </div> */}
    </div>
  );
}

export default App;

