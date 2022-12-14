import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import { blue } from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';
import SettingsIcon from '@mui/icons-material/Settings';

const emails = ['username@gmail.com', 'user02@gmail.com'];

function SimpleDialog(props) {
	const { onClose, selectedValue, open } = props;

	const handleClose = () => {
		onClose(selectedValue);
	};

	const handleListItemClick = (value) => {
		onClose(value);
	};

	return (
		<Dialog onClose={handleClose} open={open}>
			<DialogTitle>Set backup account</DialogTitle>
			<List sx={{ pt: 0 }}>
				{emails.map((email) => (
					<ListItem
						button
						onClick={() => handleListItemClick(email)}
						key={email}
					>
						<ListItemAvatar>
							<Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
								<PersonIcon />
							</Avatar>
						</ListItemAvatar>
						<ListItemText primary={email} />
					</ListItem>
				))}

				<ListItem
					autoFocus
					button
					onClick={() => handleListItemClick('addAccount')}
				>
					<ListItemAvatar>
						<Avatar>
							<AddIcon />
						</Avatar>
					</ListItemAvatar>
					<ListItemText primary='Add account' />
				</ListItem>
			</List>
		</Dialog>
	);
}

SimpleDialog.propTypes = {
	onClose: PropTypes.func.isRequired,
	open: PropTypes.bool.isRequired,
	selectedValue: PropTypes.string.isRequired,
};

const SettingsIconMenu = () => {
	const [open, setOpen] = React.useState(false);
	const [selectedValue, setSelectedValue] = React.useState(emails[1]);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = (value) => {
		setOpen(false);
		setSelectedValue(value);
	};

	return (
		<div>
			<IconButton onClick={handleClickOpen}>
				<SettingsIcon />
			</IconButton>
			<SimpleDialog
				selectedValue={selectedValue}
				open={open}
				onClose={handleClose}
			/>
		</div>
	);
};

export default SettingsIconMenu;
