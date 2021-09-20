import React, { useState } from "react";
import InputForm from "./InputForm";
import TodoItems from "./TodoItems";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [items, updateItems] = useState([]);

  function addItem(item) {
    updateItems((prev) => [...prev, item]);
  }

  function deleteItem(itemIndex) {
    updateItems(items.filter((item, index) => index !== itemIndex));
  }

  return (
    <div className="container">
      <h1>Todo List</h1>
      <InputForm onAdd={addItem} />
      <div>
        {items.map((item, index) => (
          <TodoItems
            key={uuidv4()}
            id={index}
            onClickDelete={deleteItem}
            item={item}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
