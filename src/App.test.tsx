import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import TodoItem from "./components/TodoItem/TodoItem";

test("renders title of to-do app", () => {
	render(<App />);
	const header = screen.getByText(/to-do app/i);
	expect(header).toBeInTheDocument();
});

test("renders to-do item added", () => {
	render(<App />);
	const textInput = screen.getByPlaceholderText("Add to-do");
	const buttonAdd = screen.getByTestId("button-add");
	const todoText = "hello";

	fireEvent.change(textInput, { target: { value: todoText } });
	fireEvent.click(buttonAdd);
	const todoItemAdded = screen.getByText(todoText);
	expect(todoItemAdded).toBeInTheDocument();
});

test("renders message when todo list is empty", () => {
	render(<App />);
	const message = screen.getByText(/you don't have any to-do item/i);
	expect(message).toBeInTheDocument();
});

test("updates todo content when ok button in dialog is click", () => {
	render(<App />);
	//Add todo
	const inputText = "abc";
	const todoInput = screen.getByPlaceholderText("Add to-do");
	const buttonAdd = screen.getByTestId("button-add");
	fireEvent.change(todoInput, { target: { value: inputText } });
	fireEvent.click(buttonAdd);
	//Open todo dialog
	const buttonEdit = screen.getByTestId("button-edit");
	fireEvent.click(buttonEdit);
	//Edit todo
	const dialogInput = screen.getByLabelText("To-do");
	fireEvent.change(dialogInput, { target: { value: "123" } });
	//Save edited todo
	const okButton = screen.getByTestId("button-ok");
	fireEvent.click(okButton);

	expect(screen.getByText("123")).toBeInTheDocument();
});
