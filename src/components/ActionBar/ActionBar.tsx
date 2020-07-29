import React, { ChangeEvent } from "react";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import IconButton from "@material-ui/core/IconButton";
import Selector from "../Selector/Selector";
import { actionBarStyles } from "../../styles/MuiStyles";
import appConst from "../../constants/App";

type ActionBarProps = {
	onAddTodo: () => void;
	filterValue: string;
	handleFilterChange: (event: ChangeEvent<{ name?: string | undefined; value: unknown }>) => void;
};

const ActionBar = ({ onAddTodo, filterValue, handleFilterChange }: ActionBarProps) => {
	const classes = actionBarStyles();
	const filterOptions = Object.values(appConst.FILTER_OPTIONS);

	const handleClickAddButton = () => {
		onAddTodo();
	};

	return (
		<div className={classes.container}>
			<Selector filterValue={filterValue} onChange={handleFilterChange} options={filterOptions} />
			<IconButton
				className={classes.buttonAddItem}
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
