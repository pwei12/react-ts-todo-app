import React from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import { plainCardStyles } from "../../styles/MuiStyles";

type PlainCardProps = {
	content: string;
};

const TodoItem = ({ content }: PlainCardProps) => {
	const classes = plainCardStyles();

	return (
		<Card variant="outlined" className={classes.cardcontent}>
			<div className={classes.cardcontent}>
				<Typography>{content}</Typography>
			</div>
		</Card>
	);
};

export default TodoItem;
