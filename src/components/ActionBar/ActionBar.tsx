import React, { useState, SyntheticEvent } from "react";
import TextField from "@material-ui/core/TextField";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import IconButton from "@material-ui/core/IconButton";
import { actionBarStyles } from "../../styles/MuiStyles";
import "../../styles/ActionBar.scss";

type ActionBarProps = {
	onAddTodo: (s: string) => void;
};

const ActionBar = ({ onAddTodo }: ActionBarProps) => {
	const classes = actionBarStyles();
	const [todo, setTodo] = useState("");
	const [isButtonDisabled, setIsButtonDisabled] = useState(true);

	const handleInputChange = (event: SyntheticEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const input = event.currentTarget.value;
		setTodo(input);
		input ? setIsButtonDisabled(false) : setIsButtonDisabled(true);
	};

	const handleClickAddButton = () => {
		onAddTodo(todo);
		setTodo("");
		setIsButtonDisabled(true);
	};

	return (
		<div className="todo-creation">
			<TextField
				id="todo-textarea"
				placeholder="Add to-do"
				multiline
				variant="outlined"
				value={todo}
				onChange={handleInputChange}
				className={classes.textInput}
			/>
			<IconButton
				className={classes.buttonAdd}
				disabled={isButtonDisabled}
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
