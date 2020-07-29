import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ActionBar from "./ActionBar";

describe("Action Bar", () => {
	test("calls onClick handler when add-button is clicked", () => {
		const onAddTodo = jest.fn();
		render(<ActionBar onAddTodo={onAddTodo} />);
		const buttonAdd = screen.getByTestId("button-add");
		fireEvent.click(buttonAdd);
		
		expect(onAddTodo).toHaveBeenCalledTimes(1);
	});
});
