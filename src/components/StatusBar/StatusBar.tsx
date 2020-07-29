import React, { ChangeEvent } from "react";
import Selector from "../Selector/Selector";
import { statusBarStyles } from "../../styles/MuiStyles";
import appConst from "../../constants/App";

type StatusBarProps = {
	total: number;
	completed: number;
	uncompleted: number;
	filterValue: string;
	handleFilterChange: (event: ChangeEvent<{ name?: string | undefined; value: unknown }>) => void;
};

function StatusBar({ total, completed, uncompleted, filterValue, handleFilterChange }: StatusBarProps) {
	const classes = statusBarStyles();
	const filterOptions = Object.values(appConst.FILTER_OPTIONS);
	return (
		<div className={classes.container}>
			<div className={classes.counters}>
				<div>
					{appConst.FILTER_OPTIONS.ALL}: {total}
				</div>
				<div>
					{appConst.FILTER_OPTIONS.COMPLETED}: {completed}
				</div>
				<div>
					{appConst.FILTER_OPTIONS.UNCOMPLETED}: {uncompleted}
				</div>
			</div>
			<div>
				<Selector filterValue={filterValue} onChange={handleFilterChange} options={filterOptions} />
			</div>
		</div>
	);
}

export default StatusBar;
