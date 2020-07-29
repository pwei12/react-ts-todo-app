import React, { ChangeEvent } from "react";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Selector from "../Selector/Selector";
import { actionBarStyles } from "../../styles/MuiStyles";
import appConst from "../../constants/App";

type ActionBarProps = {
	onAddTodo: () => void;
	onDeleteAll: () => void;
	filterValue: string;
	onFilterChange: (event: ChangeEvent<{ name?: string | undefined; value: unknown }>) => void;
};

const ActionBar = ({ onAddTodo, onDeleteAll, filterValue, onFilterChange }: ActionBarProps) => {
	const classes = actionBarStyles();
	const filterOptions = Object.values(appConst.FILTER_OPTIONS);

	const handleClickAddButton = () => {
		onAddTodo();
	};

	const handleClickDelete = () => {
		onDeleteAll();
	};

	return (
		<div className={classes.container}>
			<Selector filterValue={filterValue} onChange={onFilterChange} options={filterOptions} />
			<div className={classes.buttons}>
				<IconButton
					className={classes.buttonItem}
					onClick={handleClickDelete}
					disableRipple={true}
					data-testid="button-delete-all"
				>
					<DeleteIcon />
				</IconButton>
				<IconButton
					className={classes.buttonItem}
					onClick={handleClickAddButton}
					disableRipple={true}
					data-testid="button-add"
				>
					<AddCircleIcon fontSize="large" />
				</IconButton>
			</div>
		</div>
	);
};

export default ActionBar;
