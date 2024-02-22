import "./TodoCounter.css";
function TodoCounter({total, completed}) {
  return (
    <h1>
      Te faltan {completed} de {total}
    </h1>
  );
}

export { TodoCounter };
