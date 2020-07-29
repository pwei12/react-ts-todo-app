import React from "react";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import IconButton from "@material-ui/core/IconButton";
import { actionBarStyles } from "../../styles/MuiStyles";

type ActionBarProps = {
	onAddTodo: () => void;
};

const ActionBar = ({ onAddTodo }: ActionBarProps) => {
	const classes = actionBarStyles();

	const handleClickAddButton = () => {
		onAddTodo();
	};

	return (
		<div className={classes.container}>
			<IconButton
				className={classes.buttonAdd}
				onClick={handleClickAddButton}
				disableRipple={true}
				data-testid="button-add"
			>
				<AddCircleIcon fontSize="large" />
			</IconButton>
		</div>
	);
};

export default ActionBar;
