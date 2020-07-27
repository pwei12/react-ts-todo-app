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
	cardcontent: {
		minHeight: 250,
		display: "grid",
		justifyContent: "center",
		alignItems: "center"
	},
	card: {
		marginTop: 20,
		minWidth: 200,
		maxWidth: 800,
		borderRadius: 8,
	},
}));
