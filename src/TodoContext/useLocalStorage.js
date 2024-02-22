import React, { useState } from "react";

function useLocalStorage(itemName, initalValue) {
  const [item, setItem] = useState(initalValue);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageTodos = localStorage.getItem(itemName);

        let parsedTodos;

        if (!localStorageTodos) {
          localStorage.setItem(itemName, JSON.stringify(initalValue));
          parsedTodos = initalValue;
        } else {
          parsedTodos = JSON.parse(localStorageTodos);
          setItem(parsedTodos);
        }
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }, 2000);
  }, []);
  const saveTodos = (newTodos) => {
    localStorage.setItem("TODOS_V1", JSON.stringify(newTodos));

    setItem(newTodos);
  };
  return { item, saveTodos, error, loading };
}
export { useLocalStorage };

// let defaultTodo = [
//   { text: "Chao", type: "video", completed: true },
//   { text: "Chao2", type: "video", completed: false },
//   { text: "holis", type: "video", completed: true },
// ];
// localStorage.setItem("TODOS_V1", JSON.stringify(defaultTodo));
