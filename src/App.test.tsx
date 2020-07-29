import React from "react";
import { render, screen, fireEvent, waitForElement, waitForElementToBeRemoved } from "@testing-library/react";
import App from "./App";

describe("To Do App", () => {
	const addNewTodo = (todo: string) => {
		const buttonAdd = screen.getByTestId("button-add");
		fireEvent.click(buttonAdd);
		const dialogInput = screen.getByLabelText("To-do");
		fireEvent.change(dialogInput, { target: { value: todo } });
		const buttonOk = screen.getByTestId("button-ok");
		fireEvent.click(buttonOk);
	};

	test("renders title of to-do app", () => {
		render(<App />);
		const header = screen.getByText(/to-do app/i);
		expect(header).toBeInTheDocument();
	});

	test("renders to-do item added", async () => {
		render(<App />);
		const task = "new task";
		const buttonAdd = screen.getByTestId("button-add");
		fireEvent.click(buttonAdd);
		const dialogInput = screen.getByLabelText("To-do");
		fireEvent.change(dialogInput, { target: { value: task } });
		const buttonOk = screen.getByTestId("button-ok");
		fireEvent.click(buttonOk);
		await waitForElement(() => screen.getByText(task));
		expect(screen.getByText(task)).toBeInTheDocument();
	});

	test("renders message when todo list is empty", () => {
		render(<App />);
		const message = screen.getByText(/you don't have any to-do item/i);
		expect(message).toBeInTheDocument();
	});

	test("opens dialog when the add-button is clicked", () => {
		render(<App />);
		const buttonAdd = screen.getByTestId("button-add");
		fireEvent.click(buttonAdd);
		const dialogTitle = screen.getByText("Add To-Do");
		const dialogInput = screen.getByLabelText("To-do");

		expect(dialogTitle).toBeInTheDocument();
		expect(dialogInput).toBeInTheDocument();
	});

	test("shows number of total/completed/uncompleted tasks when todo is added", () => {
		render(<App />);
		const task = "new task";
		addNewTodo(task);
		const allCounter = screen.getByText("All: 1");
		const completedCounter = screen.getByText("Completed: 0");
		const uncompletedCounter = screen.getByText("Uncompleted: 1");
		
		expect(allCounter).toBeInTheDocument();
		expect(completedCounter).toBeInTheDocument();
		expect(uncompletedCounter).toBeInTheDocument();
	});

	test("updates number of completed/uncompleted tasks when todo is marked as done", () => {
		render(<App />);
		const task = "new task";

		addNewTodo(task);
		const toggleSwitch = screen.getByLabelText("Done");
		fireEvent.click(toggleSwitch);

		const completedCounter = screen.getByText("Completed: 1");
		const uncompletedCounter = screen.getByText("Uncompleted: 0");
		expect(completedCounter).toBeInTheDocument();
		expect(uncompletedCounter).toBeInTheDocument();
	});

	test("displays all tasks when filter is selected to be all", async () => {
		render(<App />);
		const taskOne = "1st new task";
		const taskTwo = "2nd task";

		addNewTodo(taskOne);
		const toggleSwitch = screen.getByLabelText("Done");
		fireEvent.click(toggleSwitch);
		addNewTodo(taskTwo);
		await waitForElement(() => screen.getByText(taskTwo));
		
		expect(screen.getByText(taskOne)).toBeInTheDocument();
		expect(screen.getByText(taskTwo)).toBeInTheDocument();
	});

	test("displays only completed tasks when filter is selected to be completed", async () => {
		render(<App />);
		const taskOne = "first new task";
		const taskTwo = "2nd task";
		
		addNewTodo(taskOne);
		const toggleSwitch = screen.getByLabelText("Done");
		fireEvent.click(toggleSwitch);
		addNewTodo(taskTwo);
		const select = screen.getByTestId("filter-testid")
		fireEvent.change(select, { target: { value: "Completed" } });

		expect(screen.getByText(taskOne)).toBeInTheDocument();
		await waitForElementToBeRemoved(() => screen.queryByText(taskTwo));
		expect(screen.queryByText(taskTwo)).not.toBeInTheDocument();
	});

	test("displays only uncompleted tasks when filter is selected to be uncompleted", async () => {
		render(<App />);
		const taskOne = "first new task";
		const taskTwo = "hello there";
		
		addNewTodo(taskOne);
		const toggleSwitch = screen.getByLabelText("Done");
		fireEvent.click(toggleSwitch);
		addNewTodo(taskTwo);
		const select = screen.getByTestId("filter-testid");
		fireEvent.change(select, { target: { value: "Uncompleted" } });
		
		expect(screen.queryByText(taskOne)).not.toBeInTheDocument();
		await waitForElement(() => screen.queryByText(taskTwo));
		expect(screen.getByText(taskTwo)).toBeInTheDocument();
	});
});
