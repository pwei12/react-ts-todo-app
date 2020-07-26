import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ActionBar from "./ActionBar";

test("clears text field when add-button is clicked", () => {
	render(<ActionBar onAddTodo={() => {}} />);
    const textInput = screen.getByPlaceholderText("Add to-do");
	const buttonAdd = screen.getByTestId("button-add");
	const todoText = "hello";

	fireEvent.change(textInput, { target: { value: todoText } });
    expect(textInput.value).toBe(todoText);
	fireEvent.click(buttonAdd);
    expect(textInput.value).toBe('');
});

test("calls onClick handler when add-button is clicked", () => {
    const onAddTodo = jest.fn();
    render(<ActionBar onAddTodo={onAddTodo} />);
	const textInput = screen.getByPlaceholderText("Add to-do");
	const buttonAdd = screen.getByTestId("button-add");

	fireEvent.change(textInput, { target: { value: 'todoText' } });
	fireEvent.click(buttonAdd);
	expect(onAddTodo).toHaveBeenCalledTimes(1);
});
