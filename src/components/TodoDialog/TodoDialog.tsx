import React, { SyntheticEvent } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Todo } from "../../interfaces/Todos";

type DialogProps = {
	open: boolean;
	onClose: () => void;
	onChange: (event: SyntheticEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
	onSave: () => void;
	todo: Todo;
	title: string;
	cancelButton: string;
	okButton: string;
};

const TodoDialog = ({ open, onClose, onChange, onSave, todo, title, cancelButton, okButton }: DialogProps) => {
	return (
		<Dialog open={open} onClose={onClose} aria-labelledby="edit-todo-dialog">
			<DialogTitle id="edit-todo-dialog">{title}</DialogTitle>
			<DialogContent>
				<TextField
					autoFocus
					fullWidth
					margin="dense"
					id="edit-todo-input"
					label="To-do"
					type="text"
					value={todo.content}
					onChange={onChange}
				/>
			</DialogContent>
			<DialogActions>
				<Button variant="outlined" onClick={onClose} color="primary" data-testid="button-cancel">
					{cancelButton}
				</Button>
				<Button variant="contained" onClick={onSave} color="primary" data-testid="button-ok">
					{okButton}
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default TodoDialog;
