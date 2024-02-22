import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { TodosError } from "../TodosError";
import { TodosLoading } from "../TodosLoading";
import { EmptyTodos } from "../EmptyTodos";
import { TodoForm } from "../TodoForm";
import { Modal } from "../Modal";
import { CreateTodoButton } from "../CreateTodoButton";
import "./App.css";
import { TodoProvider, TodoContext } from "../TodoContext";
import NavBar from "../NavBar";

function App() {
  return (
    <TodoProvider>
      <TodoContext.Consumer>
        {({
          completed,
          total,
          searchedTodo,
          setSearch,
          search,
          completeTodo,
          error,
          loading,
          openModal,
          createTodoForm,
        }) => (
          <>
            <NavBar />
            <TodoCounter total={total} completed={completed} />
            <TodoSearch search={search} setSearch={setSearch} />

            <TodoList>
              {error && <TodosError />}
              {loading && <TodosLoading />}
              {!loading && searchedTodo.length === 0 && <EmptyTodos />}
              {searchedTodo.map((todo) => (
                <TodoItem
                  key={todo.text}
                  text={todo.text}
                  completed={todo.completed}
                  completeTodo={() => completeTodo(todo.text)}
                />
              ))}
            </TodoList>
            <CreateTodoButton createTodoForm={() => createTodoForm()} />
            {openModal && (
              <Modal>
                <TodoForm />
              </Modal>
            )}
          </>
        )}
      </TodoContext.Consumer>
    </TodoProvider>
  );
}

export default App;
