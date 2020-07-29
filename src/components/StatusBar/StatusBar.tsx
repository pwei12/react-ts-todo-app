import React from "react";
import { statusBarStyles } from "../../styles/MuiStyles";

type StatusBarProps = {
	total: number;
	completed: number;
	uncompleted: number;
};

function StatusBar({ total, completed, uncompleted }: StatusBarProps) {
	const classes = statusBarStyles();
	return (
		<div className={classes.container} >
			<span>All: {total}</span>
			<span>Completed: {completed}</span>
			<span>Uncompleted: {uncompleted}</span>
		</div>
	);
}

export default StatusBar;
