import { makeStyles } from "@material-ui/core/styles";

export const actionBarStyles = makeStyles((theme) => ({
	container: {
		display: "grid",
		gridTemplateColumns: "minmax(200px, 600px) auto",
		alignItems: "center",
		justifyContent: "space-between",
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
		alignItems: "center"
	},
	cardAction: {
		display: "flex",
		justifyContent: "flex-end",

	},
	todoDone: {
		textDecoration: "line-through"
	},
	todoInput: {
		borderColor: 'red'
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
	}
}));

export const plainCardStyles = makeStyles((theme) => ({
	cardcontent: {
		minHeight: 140,
		display: "grid",
		justifyContent: "center",
		alignItems: "center",
	},
}));