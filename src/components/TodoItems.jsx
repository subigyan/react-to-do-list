import React from "react";
import TodoItem from "./TodoItem";
import { v4 as uuidv4 } from "uuid";

const TodoItems = ({ itemList: items, onDelete, onToggle }) => {
  return (
    <div>
      {items.length !== 0 ? (
        items.map((item, index) => (
          <TodoItem
            key={uuidv4()}
            id={item.id}
            onClickDelete={onDelete}
            task={item.task}
            onToggle={onToggle}
            doneStatus={item.isDone}
          />
        ))
      ) : (
        <p>No Tasks</p>
      )}
    </div>
  );
};

export default TodoItems;
