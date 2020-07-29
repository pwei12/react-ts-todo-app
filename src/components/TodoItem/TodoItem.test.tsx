import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoItem from "./TodoItem";

const onToggle = jest.fn();
const onEdit = jest.fn();
const onDelete = jest.fn();
const renderTodoItem = () => {
	render(
		<TodoItem todo={{ id: "", content: "", done: false }} onToggle={onToggle} onEdit={onEdit} onDelete={onDelete} />
	);
};
describe("Todo Item", () => {
	test("calls onToggle handler when the 'done' switch is changed", () => {
		renderTodoItem();
		const toggleSwitch = screen.getByLabelText("Done");
		fireEvent.click(toggleSwitch);
		expect(onToggle).toBeCalledTimes(1);
	});

	test("calls onEdit handler when edit-icon is clicked", () => {
		renderTodoItem();
		const editButton = screen.getByTestId("button-edit");
		fireEvent.click(editButton);
		expect(onEdit).toBeCalledTimes(1);
	});

	test("calls onDelete handler when delete-button is clicked", () => {
		renderTodoItem();
		const deleteButton = screen.getByTestId("button-delete");
		fireEvent.click(deleteButton);
		expect(onDelete).toBeCalledTimes(1);
	});
});
