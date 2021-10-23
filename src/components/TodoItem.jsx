import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

function TodoItem(props) {
  return (
    <div className="item">
      <li
        id={props.id}
        onClick={() => props.onToggle(props.id)}
        style={{ textDecoration: props.doneStatus ? "line-through" : null }}
      >
        {props.task}
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
