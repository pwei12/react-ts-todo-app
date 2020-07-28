import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoDialog from "./TodoDialog";

const content = "to clean up";
const todo = { id: "123", content, done: false };

test("renders title of dialog", () => {
    const title = "dialog title";
	render(
		<TodoDialog
			open={true}
			onClose={() => {}}
			onChange={() => {}}
			onSave={() => {}}
			todo={todo}
			title={title}
			cancelButton=""
			okButton=""
		/>
	);

	const dialogTitle = screen.getByText(title);
	expect(dialogTitle).toBeInTheDocument();
});

test("displays content of todo in text field", () => {
	render(
		<TodoDialog
			open={true}
			onClose={() => {}}
			onChange={() => {}}
			onSave={() => {}}
			todo={todo}
			title=""
			cancelButton=""
			okButton=""
		/>
	);

	const textInput = screen.getByLabelText("To-do");
	expect(textInput.value).toBe(content);
});

test("calls onClose handler when button 'Cancel' is clicked", () => {
	const onClose = jest.fn();
	render(
		<TodoDialog
			open={true}
			onClose={onClose}
			onChange={() => {}}
			onSave={() => {}}
			todo={todo}
			title=""
			cancelButton=""
			okButton=""
		/>
	);

	const buttonCancel = screen.getByTestId("button-cancel");
	fireEvent.click(buttonCancel);
	expect(onClose).toBeCalledTimes(1);
});

test("calls onSave handler when button 'Ok' is clicked", () => {
	const onSave = jest.fn();
	render(
		<TodoDialog
			open={true}
			onClose={() => {}}
			onChange={() => {}}
			onSave={onSave}
			todo={todo}
			title=""
			cancelButton=""
			okButton=""
		/>
	);

	const buttonOk = screen.getByTestId("button-ok");
	fireEvent.click(buttonOk);
	expect(onSave).toBeCalledTimes(1);
});

test("calls onChange handler when text field is being typed", () => {
	const onChange = jest.fn();
	render(
		<TodoDialog
			open={true}
			onClose={() => {}}
			onChange={onChange}
			onSave={() => {}}
			todo={todo}
			title=""
			cancelButton=""
			okButton=""
		/>
	);

	const textField = screen.getByLabelText("To-do");
	fireEvent.change(textField, { target: { value: "testing" } });
	expect(onChange).toBeCalledTimes(1);
});
