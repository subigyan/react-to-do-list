import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";

function InputForm(props) {
  const [item, setItem] = useState("");

  function handleChange(event) {
    let { value } = event.target;
    setItem(value);
  }

  return (
    <form
      onSubmit={(event) => {
        if (item !== "")
          props.onAdd({
            id: props.itemList.length + 1,
            task: item,
            isDone: false,
          });
        setItem("");
        event.preventDefault();
      }}
      className="addItemForm"
    >
      <input type="text" name="item" value={item} onChange={handleChange} />
      <Fab type="submit" className="addBtn" color="secondary" size="small">
        <AddIcon />
      </Fab>
    </form>
  );
}

export default InputForm;
