import React from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import { todoItemStyles } from "../../styles/MuiStyles";

type TodoItemProps = {
    content: string
}

const TodoItem = ({content} : TodoItemProps) => {
    const classes = todoItemStyles();
    
	return (
		<Card variant="outlined" className={classes.card}>
			<div className={classes.cardcontent}>
				<Typography color="textSecondary">{content}</Typography>
			</div>
		</Card>
	);
};

export default TodoItem;
