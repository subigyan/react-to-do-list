import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import InputForm from "./InputForm";
import TodoItems from "./TodoItems";
import Footer from "./Footer.jsx";
import About from "./About";

function App() {
  const [items, setItems] = useState([]);

  //useEffect hook
  useEffect(() => {
    fetchTasks().then((data) => setItems(data));
  }, []);

  const fetchTasks = async () => {
    let res = await fetch("http://localhost:5000/items");
    let data = await res.json();
    return data;
  };

  const fetchTask = async (taskId) => {
    let res = await fetch(`http://localhost:5000/items/${taskId}`);
    let data = await res.json();
    return data;
  };

  //fetch data form server

  //Add item to the server
  async function addItem(item) {
    //post request using  fetch
    await fetch("http://localhost:5000/items", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(item),
    });
    let fetchedData = await fetchTasks();
    setItems(fetchedData);
  }

  async function deleteItem(itemId) {
    await fetch(`http://localhost:5000/items/${itemId}`, {
      method: "DELETE",
    });
    fetchTasks().then((data) => setItems(data));
  }

  async function handleToggle(itemId) {
    // const item = items.find((item) => item.id == itemId);
    const item = await fetchTask(itemId);
    const updatedItem = { ...item, isDone: !item.isDone };
    await fetch(`http://localhost:5000/items/${itemId}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/JSON",
      },
      body: JSON.stringify(updatedItem),
    });
    fetchTasks().then((data) => setItems(data));
    // console.log(updatedList);
    // setItems(updatedList);
  }

  return (
    <Router>
      <div className="container">
        <div>
          <h1>Todo List</h1>

          <Route
            path="/"
            exact
            render={(props) => (
              <>
                <InputForm onAdd={addItem} itemList={items} />

                <TodoItems
                  itemList={items}
                  onDelete={deleteItem}
                  onToggle={handleToggle}
                />
              </>
            )}
          />
        </div>
        <Route path="/about" component={About} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
