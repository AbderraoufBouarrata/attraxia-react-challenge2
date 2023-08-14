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
        height: '50px',
        gap: '20px',
        marginLeft: '-30px',
    },
    listItemIcon: {
        display: 'flex',
        justifyContent: 'end',
        alignItems: 'center',

        opacity: 0.5,
    },
    selectedListItemIcon: {
        width: 'auto',
        display: 'flex',
        justifyContent: 'end',
        alignItems: 'center',
        height: '100%',
        opacity: 1,
        borderRadius: '0px 10px 10px 0px',
        backgroundColor: colors.blue_secondary,
    },
    listItemText: {
        '& .MuiTypography-root': {
            fontWeight: 600,
        },
        fontSize: '16px',
        color: colors.text,
    },
    selectedListItemText: {
        '& .MuiTypography-root': {
            fontWeight: 600,
        },
        fontSize: '16px',
        color: colors.blue_primary,
    },
    icons: {
        width: '25px',
        height: '25px',
    },
};

export default SideBarStyles;
