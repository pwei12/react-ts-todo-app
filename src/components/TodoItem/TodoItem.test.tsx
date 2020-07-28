import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoItem from "./TodoItem";

const onToggle = jest.fn();
const onEdit = jest.fn();
const renderTodoItem = () => {
	render(<TodoItem todo={{ id: "", content: "", done: false }} onToggle={onToggle} onEdit={onEdit} />);
};

test("calls onToggle handler when the 'done' switch is changed", () => {
	renderTodoItem();
	const toggleSwitch = screen.getByRole("checkbox");
	fireEvent.click(toggleSwitch);
	expect(onToggle).toBeCalledTimes(1);
});

test("calls onToggle handler when ", () => {
	renderTodoItem();
	const editButton = screen.getByTestId("button-edit");
	fireEvent.click(editButton);
	expect(onEdit).toBeCalledTimes(1);
});
