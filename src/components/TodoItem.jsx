export default function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <li className="flex items-center justify-between bg-gray-50 px-3 py-2 rounded shadow-sm">
      <span
        onClick={() => toggleTodo(todo.id)}
        className={`flex-grow cursor-pointer ${
          todo.completed ? "line-through text-gray-400" : ""
        }`}
      >
        {todo.text}
      </span>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="ml-3 bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded"
      >
        ❌
      </button>
    </li>
  );
}
