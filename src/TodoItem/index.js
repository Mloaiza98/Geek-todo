import "./TodoItem.css";
import { RiGameLine } from "react-icons/ri";
function TodoItem({completeTodo, completed, text}) {
  return (
    <div className={`TodoItem ${completed && "CompleteTodo"}`}>
      <p>{text}</p>
      <RiGameLine className="TodoItemButton" onClick={completeTodo}/>
    </div>
  );
}

export { TodoItem };
