import React from "react";
import { statusBarStyles } from "../../styles/MuiStyles";
import appConst from "../../constants/App";

type StatusBarProps = {
	total: number;
	completed: number;
	uncompleted: number;
};

const StatusBar = ({ total, completed, uncompleted }: StatusBarProps) => {
	const classes = statusBarStyles();
	return (
		<div className={classes.container}>
			<div className={classes.counterStatus}>
				{appConst.FILTER_OPTIONS.ALL}: {total}
			</div>
			<div className={classes.counterStatus}>
				{appConst.FILTER_OPTIONS.COMPLETED}: {completed}
			</div>
			<div className={classes.counterStatus}>
				{appConst.FILTER_OPTIONS.UNCOMPLETED}: {uncompleted}
			</div>
		</div>
	);
}

export default StatusBar;
