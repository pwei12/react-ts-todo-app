import React, { waitForElement } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ActionBar from "./ActionBar";

describe("Action Bar", () => {
	const onAddTodo = jest.fn();
	const onDeleteAll = jest.fn();
	const onFilterChange = jest.fn();
	const defaultFilterValue = "All";
	const renderActionBar = (filterValue: string) => {
		render(
			<ActionBar
				onAddTodo={onAddTodo}
				onDeleteAll={onDeleteAll}
				onFilterChange={onFilterChange}
				filterValue={filterValue}
			/>
		);
	};

	test("calls onAddTodo handler when add-button is clicked", () => {
		renderActionBar(defaultFilterValue);
		const buttonAdd = screen.getByTestId("button-add");
		fireEvent.click(buttonAdd);

		expect(onAddTodo).toHaveBeenCalledTimes(1);
	});

	test("calls onDeleteAll handler when delete-button is clicked", () => {
		renderActionBar(defaultFilterValue);
		const button = screen.getByTestId("button-delete-all");
		fireEvent.click(button);

		expect(onDeleteAll).toHaveBeenCalledTimes(1);
	});

	test("calls onFilterChange when another value is selected", async () => {
		renderActionBar(defaultFilterValue);
		const uncompletedOption = "Uncompleted";
		const select = screen.getByTestId("filter-testid");
		fireEvent.change(select, { target: { value: uncompletedOption } });

		expect(onFilterChange).toHaveBeenCalledTimes(1);
	});
});
