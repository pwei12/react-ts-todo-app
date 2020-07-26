import React, { useState, SyntheticEvent } from "react";
import TextField from "@material-ui/core/TextField";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import '../../styles/ActionBar.scss'
import { actionBarStyles } from '../../styles/MuiStyles';

type ActionBarProps = {
    onAddTodo: (s: string) => void
}

const ActionBar = ({ onAddTodo }: ActionBarProps) => {
    const classes = actionBarStyles();
    const [todo, setTodo] = useState("");

    const handleInputChange = (event: SyntheticEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setTodo(event.currentTarget.value);
    };

    const handleClickAddButton = () => {
        onAddTodo(todo);
        setTodo('');
    }
    
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
            <AddCircleIcon
                onClick={handleClickAddButton}
                className="button-add"
                data-testid="button-add"
            />
		</div>
	);
};

export default ActionBar;
