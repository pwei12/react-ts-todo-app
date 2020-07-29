import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

type MessageDialogProps = {
	open: boolean;
	onClose: (toDelete: boolean) => void;
	title: string;
	message: string;
	cancelButton: string;
	okButton: string;
};

const MessageDialog = ({ open, onClose, title, message, cancelButton, okButton }: MessageDialogProps) => {
    const handleOkClick = () => {
        onClose(true);
    } 

    const handleCancelClick = () => {
        onClose(false);
    } 

	return (
		<div>
			<Dialog
				open={open}
				onClose={onClose}
				aria-labelledby="delete-all-dialog"
				aria-describedby="alert-delete-all"
			>
				<DialogTitle id="delete-all-dialog">{title}</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-delete-all">
						{message}
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleCancelClick} color="primary">
                    {cancelButton}
					</Button>
					<Button onClick={handleOkClick} color="primary" autoFocus>
						{okButton}
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}

export default MessageDialog;
