// src/__tests__/TodoList.test.js
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {

  // Initial Render Test
  test("renders initial todos", () => {
    render(<TodoList />);
    const todos = screen.getAllByTestId("todo-item");
    expect(todos.length).toBe(3); // 3 demo todos
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Write Tests")).toBeInTheDocument();
    expect(screen.getByText("Build Todo App")).toBeInTheDocument();
  });

  // Test Adding Todos
  test("adds a new todo", () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText("Add a new todo");
    const addButton = screen.getByText("Add");

    fireEvent.change(input, { target: { value: "New Todo Item" } });
    fireEvent.click(addButton);

    const newTodo = screen.getByText("New Todo Item");
    expect(newTodo).toBeInTheDocument();
  });

  // Test Toggling Todos
  test("toggles a todo completion", () => {
    render(<TodoList />);
    const firstTodo = screen.getAllByTestId("todo-item")[0];

    // Initially not completed
    expect(firstTodo).not.toHaveClass("completed");

    fireEvent.click(firstTodo); // toggle
    expect(firstTodo).toHaveClass("completed");

    fireEvent.click(firstTodo); // toggle back
    expect(firstTodo).not.toHaveClass("completed");
  });

  // Test Deleting Todos
  test("deletes a todo", () => {
    render(<TodoList />);
    const firstTodo = screen.getAllByTestId("todo-item")[0];
    const deleteButton = screen.getAllByText("Delete")[0];

    fireEvent.click(deleteButton);

    expect(firstTodo).not.toBeInTheDocument();
  });
});
