import "./CreateTodoButton.css";
function CreateTodoButton({createTodoForm}) {
  return <button className="CreateTodoButton" onClick={createTodoForm}>+</button>;
}

export { CreateTodoButton };
