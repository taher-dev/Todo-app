export default function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <li>
      <span
        onClick={() => toggleTodo(todo.id)}
        className={`cursor-pointer ${todo.completed ? "line-through" : ""}`}
      >
        {todo.text}
      </span>
      <button onClick={() => deleteTodo(todo.id)}>❌</button>
    </li>
  );
}
