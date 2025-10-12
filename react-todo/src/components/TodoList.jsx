// src/components/TodoList.jsx
import React, { useState } from "react";
import "./TodoList.css"; // optional for styling

const TodoList = () => {
  // Initial demo todos
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Write Tests", completed: false },
    { id: 3, text: "Build Todo App", completed: false },
  ]);

  const [newTodo, setNewTodo] = useState("");

  // Add a new todo
  const handleAddTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim() === "") return;
    const todo = {
      id: Date.now(),
      text: newTodo.trim(),
      completed: false,
    };
    setTodos([...todos, todo]);
    setNewTodo("");
  };

  // Toggle todo completion
  const handleToggleTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  // Delete a todo
  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h2>Todo List</h2>

      {/* Add Todo Form */}
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          placeholder="Add a new todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      {/* Todo Items */}
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            data-testid="todo-item"
            onClick={() => handleToggleTodo(todo.id)}
            className={todo.completed ? "completed" : ""}
            style={{
              cursor: "pointer",
              textDecoration: todo.completed ? "line-through" : "none",
            }}
          >
            {todo.text}
            <button
              onClick={(e) => {
                e.stopPropagation(); // Prevent toggle when deleting
                handleDeleteTodo(todo.id);
              }}
              style={{ marginLeft: "10px" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
