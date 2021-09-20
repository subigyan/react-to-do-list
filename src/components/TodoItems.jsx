import React, { useState } from "react";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

function TodoItem(props) {
  const [clickStatus, setClickStatus] = useState(false);

  function handleClick() {
    setClickStatus(!clickStatus);
  }

  return (
    <div className="item">
      <li
        id={props.id}
        onClick={handleClick}
        style={{ textDecoration: clickStatus ? "line-through" : null }}
      >
        {props.item}
      </li>
      <button
        onClick={() => {
          props.onClickDelete(props.id);
        }}
      >
        <DeleteOutlineIcon />
      </button>
    </div>
  );
}

export default TodoItem;

// class TodoItem extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return <h1>this.props.x</h1>;
//   }
// }
