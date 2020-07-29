import { makeStyles } from "@material-ui/core/styles";

export const actionBarStyles = makeStyles((theme) => ({
	container: {
		minWidth: 300,
		maxWidth: 700,
		margin: "auto",
		padding: 0,
	},
	textInput: {
		backgroundColor: "white",
		borderRadius: 8,
	},
	buttonAdd: {
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
		minWidth: 300,
		maxWidth: 700,
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
		justifyContent: "center",
		alignItems: "center",
	},
}));

export const statusBarStyles = makeStyles((theme) => ({
	container: {
		display: "grid",
		gridTemplateColumns: "75% 25%",
		gridGap: 12,
		justifyContent: "space-around",
		alignItems: "center",
		minWidth: 300,
		maxWidth: 680,
		margin: "auto",
		padding: "10px 18px",
		borderWidth: 1,
		borderStyle: "solid",
		borderColor: theme.palette.primary.main,
		borderRadius: 4,
		backgroundColor: theme.palette.primary.light,
	},
	statusBarItem: {
		padding: 12,
		width: "100%"
	},
	counters: {
		display: "grid",
		gridTemplateColumns: "repeat(3, 1fr)",
		gridGap: 12
	},
}));

export const filterSelectorStyles = makeStyles((theme) => ({
	filterSelect: {
		minWidth: 120,
		backgroundColor: theme.palette.background.paper,
	},
}));