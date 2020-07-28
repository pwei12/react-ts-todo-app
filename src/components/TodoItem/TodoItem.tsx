import React, { SyntheticEvent } from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Switch from "@material-ui/core/Switch";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { todoItemStyles } from "../../styles/MuiStyles";
import { Todo } from "../../interfaces/Todos";
import appConst from "../../constants/App";

type TodoItemProps = {
	todo: Todo;
	onToggle: (s: string) => void;
	onEdit: (todo: Todo) => void;
	onDelete: (id: string) => void;
};

const TodoItem = ({ todo, onToggle, onEdit, onDelete }: TodoItemProps) => {
	const classes = todoItemStyles();
	const { id, content, done } = todo;

	const handleSwitchChange = (event: SyntheticEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		onToggle(event.currentTarget.value);
	};

	const handleEditClick = () => {
		onEdit(todo);
	};

	const handleDeleteClick = () => {
		onDelete(id);
	};

	return (
		<Card variant="outlined" className={classes.card}>
			<div className={classes.cardcontent}>
				<Typography className={done ? classes.todoDone : ""}>{content}</Typography>
			</div>
			<CardActions className={classes.cardAction}>
				<IconButton
					className={classes.deleteIcon}
					onClick={handleDeleteClick}
					disableRipple={true}
					data-testid="button-delete"
				>
					<DeleteIcon />
				</IconButton>
				<IconButton
					className={classes.editIcon}
					disabled={todo.done}
					onClick={handleEditClick}
					disableRipple={true}
					data-testid="button-edit"
				>
					<EditIcon />
				</IconButton>
				{appConst.TODO_ITEM_SWITCH_LABEL}
				<Switch
					checked={done}
					onChange={handleSwitchChange}
					value={id}
					color="primary"
					data-testid="todo-done-switch"
				/>
			</CardActions>
		</Card>
	);
};

export default TodoItem;
