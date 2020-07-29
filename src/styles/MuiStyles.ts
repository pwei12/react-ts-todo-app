import { makeStyles } from "@material-ui/core/styles";

export const actionBarStyles = makeStyles((theme) => ({
	container: {
		maxWidth: 600,
		margin: "auto",
		display: "grid",
		justifyContent: "space-around",
		justifyItems: "start",
		alignItems: "center",
		gridTemplateColumns: "repeat(auto-fit, minmax(40px, 1fr))",
	},
	buttonAddItem: {
		padding: 12,
		justifySelf: "end",
		color: theme.palette.primary.main,
		"&:hover": {
			color: theme.palette.primary.dark,
			cursor: "pointer",
			backgroundColor: "transparent",
		},
		"&:disabled": {
			color: theme.palette.primary.light,
		},
	},
}));

export const todoListStyles = makeStyles((theme) => ({
	todoList: {
		margin: "20px auto",
		textAlign: "center",
		maxWidth: 600,
	},
}));

export const todoItemStyles = makeStyles((theme) => ({
	card: {
		marginTop: 20,
		minWidth: 200,
		maxWidth: 800,
		borderRadius: 8,
	},
	cardcontent: {
		minHeight: 85,
		display: "grid",
		justifyContent: "center",
		alignItems: "center",
	},
	cardAction: {
		display: "flex",
		justifyContent: "flex-end",
	},
	todoDone: {
		textDecoration: "line-through",
	},
	editIcon: {
		marginRight: 8,
		color: theme.palette.primary.main,
		"&:hover": {
			color: theme.palette.primary.dark,
			cursor: "pointer",
			backgroundColor: "transparent",
		},
		"&:disabled": {
			color: theme.palette.primary.light,
		},
	},
	deleteIcon: {
		marginRight: 8,
		color: theme.palette.primary.main,
		"&:hover": {
			color: theme.palette.primary.dark,
			cursor: "pointer",
			backgroundColor: "transparent",
		},
	},
}));

export const plainCardStyles = makeStyles((theme) => ({
	cardcontent: {
		minHeight: 140,
		display: "grid",
		placeItems: "center",
	},
}));

export const statusBarStyles = makeStyles((theme) => ({
	container: {
		display: "grid",
		gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
		justifyItems: "start",
		alignItems: "center",
		maxWidth: 600,
		margin: "auto",
		borderWidth: 1,
		borderStyle: "solid",
		borderColor: theme.palette.primary.main,
		borderRadius: 4,
		backgroundColor: theme.palette.primary.light,
		fontSize: 16,
	},
	counterStatus: {
		padding: 12,
	}
}));

export const filterSelectorStyles = makeStyles((theme) => ({
	filterSelect: {
		minWidth: 120,
		maxHeight: 40,
		backgroundColor: theme.palette.background.paper,
	},
}));
