import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import MessageDialog from "./MessageDialog";

describe("Todo Dialog", () => {
	const title = "Delete Todo";
	const message = "Confirm to delete?";
	const cancelButton = "cancel delete";
	const okButton = "confirm delete";

	const renderDialog = (onClose: () => void) => {
		render(
			<MessageDialog
				open={true}
				onClose={onClose}
				title={title}
				message={message}
				cancelButton={cancelButton}
				okButton={okButton}
			/>
		);
	};

	test("renders title of dialog", () => {
		renderDialog(() => {});
		const dialogTitle = screen.getByText(title);
		expect(dialogTitle).toBeInTheDocument();
	});

	test("displays dialog message", () => {
		renderDialog(() => {});
		const dialogMsg = screen.getByText(message);
		expect(dialogMsg).toBeInTheDocument();
	});

	test("calls onClose handler with boolean value false when button 'Cancel' is clicked", () => {
		const onClose = jest.fn();
		renderDialog(onClose);
		const button = screen.getByText(cancelButton);
		fireEvent.click(button);

		expect(onClose).toBeCalledTimes(1);
		expect(onClose).toHaveBeenCalledWith(false);
	});

	test("calls onClose handler with boolean value true when button 'Ok' is clicked", () => {
		const onClose = jest.fn();
		renderDialog(onClose);
		const button = screen.getByText(okButton);
		fireEvent.click(button);

		expect(onClose).toBeCalledTimes(1);
		expect(onClose).toHaveBeenCalledWith(true);
	});
});
