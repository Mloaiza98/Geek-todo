import React, { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();
function TodoProvider({ children }) {
  const {
    item: todo,
    saveTodos,
    error,
    loading,
  } = useLocalStorage("TODOS_V1", []);
  const [search, setSearch] = useState("");
  const [type, setType] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const searchedTodo = todo.filter((todo) => {
    const meetTodoText = todo.text
      .toLocaleLowerCase()
      .includes(search.toLocaleLowerCase());
    const meetsTodoType = todo.type == type;

    if (meetTodoText && meetsTodoType && type >= 1) {
      console.log("Todo:", todo);
      return true;
    } else if (meetTodoText && type === 0) {
      return true;
    }

    return false;
  });

  const completed = searchedTodo.filter((todo) => todo.completed).length;
  const total = searchedTodo.length;
  const addNewTodo = (text, type) => {
    let newTodos = [...todo];
    console.log(text, type);
    newTodos.push({ text, type, completed: false });

    saveTodos(newTodos);
  };
  const completeTodo = (text) => {
    let newTodos = [...todo];
    let todoIndex = newTodos.findIndex((todo) => todo.text === text);
    console.log(newTodos[todoIndex].type);
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  };

  const createTodoForm = () => {
    setOpenModal(!openModal);
  };
  return (
    <TodoContext.Provider
      value={{
        completed,
        total,
        searchedTodo,
        setSearch,
        search,
        completeTodo,
        error,
        loading,
        openModal,
        setOpenModal,
        createTodoForm,
        addNewTodo,
        setType,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
export { TodoContext, TodoProvider };
