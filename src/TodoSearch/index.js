import "./TodoSearch.css";
function TodoSearch({ setSearch, search }) {
  return (
    <input
      placeholder="¿Hora de divertirse?"
      value={search}
      onChange={(event) => setSearch(event.target.value)}
    />
  );
}

export { TodoSearch };
