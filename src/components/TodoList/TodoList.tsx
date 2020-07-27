import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { todoListStyles } from "../../styles/MuiStyles"

type TodoListProps = {
	todoList: string[];
};

const TodoList = ({ todoList }: TodoListProps) => {
	const classes = todoListStyles();

	return (
		<div className={classes.todoList}>
			{todoList.length === 0 ?
				<Card variant="outlined" className={classes.card}>
				<div className={classes.cardcontent}>
					<Typography color="textSecondary">
						You Don't Have Any To-Do Item
					</Typography>
				</div>
				</Card>
				:
				todoList.map((todo, index) => (
					<Card key={index} variant="outlined" className={classes.card}>
						<CardContent>
							<Typography color="textSecondary" gutterBottom>
								{todo}
							</Typography>
						</CardContent>
					</Card>
				))
			}
		</div>
	);
};

export default TodoList;
