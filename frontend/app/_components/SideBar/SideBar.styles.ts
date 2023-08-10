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
    listItemIcon: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    listItemText: {
        fontSize: '16px',
        fontWeight: 500,
    },
    icons: {
        width: '25px',
        height: '25px',
    },
};

export default SideBarStyles;
