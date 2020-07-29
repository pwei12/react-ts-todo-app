import React, { ChangeEvent } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import appConst from "../../constants/App";
import { filterSelectorStyles } from "../../styles/MuiStyles";

type FilterSelectorProps = {
	filterValue: string;
	onChange: (event: ChangeEvent<{ name?: string | undefined; value: unknown }>) => void;
	options: string[];
};

function FilterSelector({ filterValue, onChange, options }: FilterSelectorProps) {
	const classes = filterSelectorStyles();
	return (
		<div>
			<FormControl variant="outlined">
				<InputLabel id="filter-todo-select-label">{appConst.FILTER_LABEL}</InputLabel>
				<Select
					labelId="filter-todo-select-label"
					id="filter-todo-select"
					value={filterValue}
					onChange={onChange}
					className={classes.filterSelect}
					label={appConst.FILTER_LABEL}
					inputProps={{
						"data-testid": "filter-testid"
					  }}
				>
					{options.map((option, index) => (
						<MenuItem key={index} value={option}>
							{option}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</div>
	);
}

export default FilterSelector;
