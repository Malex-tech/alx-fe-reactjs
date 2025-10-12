import React, { useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build Projects", completed: true },
  ]);
  const [newTodo, setNewTodo] = useState("");

  // Add Todo
  const handleAddTodo = (e) => {
    e.preventDefault();
    if (!newTodo.trim()) return;
    setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
    setNewTodo("");
  };

  // Toggle Todo
  const handleToggle = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Delete Todo
  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Todo List</h2>

      <form onSubmit={handleAddTodo} data-testid="add-form">
        <input
          type="text"
          placeholder="Add todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          data-testid="todo-input"
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            onClick={() => handleToggle(todo.id)}
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              cursor: "pointer",
              marginBottom: "0.5rem",
            }}
          >
            {todo.text}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleDelete(todo.id);
              }}
              style={{
                marginLeft: "1rem",
                background: "crimson",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

