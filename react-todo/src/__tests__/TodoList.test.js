import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
  test("renders initial todos", () => {
  render(<TodoList />);
  expect(screen.getByText("Learn React")).toBeInTheDocument();
  expect(screen.getByText("Build Projects")).toBeInTheDocument();
});

  test("adds a new todo", () => {
  render(<TodoList />);
  const input = screen.getByPlaceholderText("Add todo");
  fireEvent.change(input, { target: { value: "New Todo" } });

  const button = screen.getByText("Add");
  fireEvent.click(button);

  expect(screen.getByText("New Todo")).toBeInTheDocument();
});

  test("toggles todo completion", () => {
    render(<TodoList />);
    const todo = screen.getByText("Learn React");
    fireEvent.click(todo);
    expect(todo).toHaveStyle("text-decoration: line-through");
  });

  test("deletes a todo", async () => {
    render(<TodoList />);
    const todo = screen.getByText("Learn React");
    const deleteButton = screen.getAllByText("Delete")[0];
    fireEvent.click(deleteButton);

    await waitFor(() =>
      expect(screen.queryByText("Learn React")).not.toBeInTheDocument()
    );
  });
});
