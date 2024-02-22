import "./TodoList.css"

function TodoList({children}) {
  return (
    <div className="TodoList">
      {children}
    </div>
  );
}

export { TodoList };

