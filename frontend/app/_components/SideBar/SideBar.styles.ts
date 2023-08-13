import { colors } from '@/app/_utils/colors';
import React from 'react';

const drawerWidth = 240;

const SideBarStyles = {
    drawer: {
        '& .MuiPaper-root': {
            border: 'none',
        },
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: 'border-box',
        },
    },
    main: {
        flexGrow: 1,
        p: 3,
    },
    list: {
        py: '5px',
    },
    listItemIcon: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    listItemText: {
        '& .MuiTypography-root': {
            fontWeight: 600,
        },
        fontSize: '16px',
        color: colors.text,
    },
    icons: {
        width: '25px',
        height: '25px',
    },
};

export default SideBarStyles;
