import React, { SyntheticEvent } from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Switch from "@material-ui/core/Switch";
import { todoItemStyles } from "../../styles/MuiStyles";
import { Todo } from "../../interfaces/Todos";

type TodoItemProps = {
	todo: Todo;
	handleToggleDone: (s: string) => void;
};

const SWITCH_LABEL = "Done:";

const TodoItem = ({ todo, handleToggleDone }: TodoItemProps) => {
	const classes = todoItemStyles();
	const { id, content, done } = todo;
	
	const handler = (event: SyntheticEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		handleToggleDone(event.currentTarget.value);
	};

	return (
		<Card variant="outlined" className={classes.card}>
			<div className={classes.cardcontent}>
				<Typography className={done ? classes.todoDone : ""}>{content}</Typography>
			</div>
			{id && (
				<CardActions className={classes.cardAction}>
					{SWITCH_LABEL}
					<Switch
						checked={done}
						onChange={handler}
						value={id}
						color="primary"
					/>
				</CardActions>
			)}
		</Card>
	);
};

export default TodoItem;
