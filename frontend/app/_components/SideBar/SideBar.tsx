'use client';
import MailIcon from '@mui/icons-material/Mail';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import * as React from 'react';
import SideBarStyles from './SideBar.styles';
import { MenuTitles } from './SideBar.helpers';
import { MenuIcons } from './SideBar.helpers';
import Image from 'next/image';
import Logo from '../../_assets/images/logo.png';

export default function ClippedDrawer({ children }: { children?: React.ReactNode }) {
    return (
        <Box sx={{ display: 'flex' }}>
            <Drawer variant="permanent" open={true} sx={SideBarStyles.drawer}>
                <Toolbar sx={SideBarStyles.listItemIcon}>
                    <Image src={Logo} alt="Logo" quality={100} />
                </Toolbar>
                <Box sx={{ overflow: 'auto' }}>
                    <List>
                        {MenuTitles.map((text, index) => (
                            // we can also disable padding here
                            <ListItem key={text} sx={SideBarStyles.list}>
                                <ListItemButton>
                                    <ListItemIcon sx={SideBarStyles.listItemIcon}>
                                        {<Image src={MenuIcons[index]} alt="Menu Icon" style={SideBarStyles.icons} />}
                                    </ListItemIcon>
                                    <ListItemText sx={SideBarStyles.listItemText} primary={text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
            <Box component="main" sx={SideBarStyles.main}>
                {children}
            </Box>
        </Box>
    );
}
