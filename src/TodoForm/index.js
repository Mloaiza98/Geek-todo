import React, { useState } from "react";
import { TodoContext } from "../TodoContext";
import "./TodoForm.css";
function TodoForm() {
  const { setOpenModal, addNewTodo } = React.useContext(TodoContext);

  const onSubmitForm = (event) => {
    event.preventDefault();
    addNewTodo(newTodo, newType);
    setOpenModal(false);
    console.log(newType);
  };
  const [newTodo, setNewTodo] = useState("");
  const [newType, setNewType] = useState("");
  const onChangeTodo = (event) => {
    setNewTodo(event.target.value);
  };
  const onChangeType = (event) => {
    setNewType(event.target.value);
    console.log(event.target);
  };
  const onCancel = () => {
    setOpenModal(false);
  };
  return (
    <form onSubmit={onSubmitForm}>
      <label>Escribe tu nuevo Todo</label>
      <textarea
        placeholder="¿Que vamos a hacer hoy?"
        id="Todo"
        value={newTodo.text}
        onChange={onChangeTodo}
      />
      <select
        name="categories"
        id="categories"
        defaultValue={0}
        onChange={onChangeType}
      >
        <option hidden selected defaultValue={0}>
          Selecciona una opción
        </option>
        <option value={1}>Pelicula</option>
        <option value={2}>Video Juego</option>
        <option value={3}>Libro</option>
      </select>
      <div className="TodoForm-buttonContainer">
        <button className="TodoForm-button TodoForm-button--add">
          Agregar
        </button>
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
        >
          Cancelar
        </button>
      </div>
    </form>
  );
}
export { TodoForm };
