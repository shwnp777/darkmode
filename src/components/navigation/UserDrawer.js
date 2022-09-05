import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import IconButton from '@mui/material/IconButton';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SideLogo from '../../images/logo.png';

const UserDrawer = () => {
	const [drawerOpen, setDrawerOpen] = useState(false);

	const toggleDrawer = (open) => (event) => {
		if (
			event.type === 'keydown' &&
			(event.key === 'Tab' || event.key === 'Shift')
		) {
			return;
		}

		setDrawerOpen(open);
	};

	const list = () => (
		<Box
			sx={{ width: 250 }}
			role='presentation'
			onClick={toggleDrawer(false)}
			onKeyDown={toggleDrawer(false)}
		>
			<List>
				<ListItem disablePadding>
					<Link to='/user/dashboard'>
						<ListItemButton>
							<ListItemIcon>
								<InboxIcon />
							</ListItemIcon>
							<ListItemText primary='Dashboard' />
						</ListItemButton>
					</Link>
				</ListItem>
				<ListItem disablePadding>
					<Link to='/'>
						<ListItemButton>
							<ListItemIcon>
								<InboxIcon />
							</ListItemIcon>
							<ListItemText primary='Groups' />
						</ListItemButton>
					</Link>
				</ListItem>
				<ListItem disablePadding>
					<Link to='/'>
						<ListItemButton>
							<ListItemIcon>
								<InboxIcon />
							</ListItemIcon>
							<ListItemText primary='Events' />
						</ListItemButton>
					</Link>
				</ListItem>
			</List>
			<Divider />
			<List>
				<ListItem disablePadding>
					<Link to='/'>
						<ListItemButton>
							<ListItemIcon>
								<InboxIcon />
							</ListItemIcon>
							<ListItemText primary='Mail' />
						</ListItemButton>
					</Link>
				</ListItem>
				<ListItem disablePadding>
					<Link to='/'>
						<ListItemButton>
							<ListItemIcon>
								<InboxIcon />
							</ListItemIcon>
							<ListItemText primary='Mail' />
						</ListItemButton>
					</Link>
				</ListItem>
			</List>
		</Box>
	);

	return (
		<Fragment>
			<IconButton
				className='drawerBTN'
				onClick={toggleDrawer(true)}
				aria-label='side drawer'
			>
				{drawerOpen ? <ArrowBackIcon /> : <ArrowForwardIcon />}
			</IconButton>
			<Drawer
				className='userDrawer'
				anchor='left'
				open={drawerOpen}
				onClose={toggleDrawer(false)}
			>
				<div className='logoSide'>
					<img src={SideLogo} alt='' />
				</div>
				{list()}
			</Drawer>
		</Fragment>
	);
};

export default UserDrawer;
