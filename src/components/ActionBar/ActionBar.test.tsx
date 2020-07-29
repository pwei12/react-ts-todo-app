import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ActionBar from "./ActionBar";

describe("Action Bar", () => {
	const onAddTodo = jest.fn();
	const onDeleteAll = jest.fn();
	const onFilterChange = jest.fn();
	const defaultFilterValue = "All";
	const defaultIsDeletable = false;
	const renderActionBar = (filterValue: string, isDeletable: boolean) => {
		render(
			<ActionBar
				onAddTodo={onAddTodo}
				onDeleteAll={onDeleteAll}
				onFilterChange={onFilterChange}
				filterValue={filterValue}
				isDeletable={isDeletable}
			/>
		);
	};

	test("calls onAddTodo handler when add-button is clicked", () => {
		renderActionBar(defaultFilterValue, defaultIsDeletable);
		const buttonAdd = screen.getByTestId("button-add");
		fireEvent.click(buttonAdd);

		expect(onAddTodo).toHaveBeenCalledTimes(1);
	});

	test("calls onDeleteAll handler when delete-button is clicked", () => {
		renderActionBar(defaultFilterValue, true);
		const button = screen.getByTestId("button-delete-all");
		fireEvent.click(button);

		expect(onDeleteAll).toHaveBeenCalledTimes(1);
	});

	test("disable delete-button when it is not deletable", () => {
		renderActionBar(defaultFilterValue, defaultIsDeletable);
		const button = screen.getByTestId("button-delete-all");
		fireEvent.click(button);
		expect(screen.getByTestId("button-delete-all").closest('button')).toBeDisabled();
	});

	test("calls onFilterChange when another value is selected", async () => {
		renderActionBar(defaultFilterValue, defaultIsDeletable);
		const uncompletedOption = "Uncompleted";
		const select = screen.getByTestId("filter-testid");
		fireEvent.change(select, { target: { value: uncompletedOption } });

		expect(onFilterChange).toHaveBeenCalledTimes(1);
	});
});
