import React from "react";
import { render, screen, fireEvent, waitForElement } from "@testing-library/react";
import App from "./App";

describe("To Do App", () => {
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
});
