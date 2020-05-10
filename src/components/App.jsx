import React, { useState } from "react";
import Heading from "./Heading.jsx";
import TodoList from "./TodoList.jsx";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    // console.log(newValue);
    setInputText(newValue);
  }

  function addItem() {
    setItems(prevItems => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  function deleteList(target) {
    const a = items.filter((element,ind )=> {
      if (ind !== target) {
        return element;
      }
    });

    setItems(a);
  }

  return (
    <div className="container">
      <div className="heading">
        <Heading text="To-Do List" />
      </div>

      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <TodoList
              key={index}
              id={index}
              text={todoItem}
              wantToDelete={deleteList}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
