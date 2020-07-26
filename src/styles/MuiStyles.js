import { makeStyles } from "@material-ui/core/styles";

export const actionBarStyles = makeStyles((theme) => ({
	textInput: {
		backgroundColor: "white",
		borderRadius: 4,
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
