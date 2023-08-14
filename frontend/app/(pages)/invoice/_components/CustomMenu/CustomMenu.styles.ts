import { colors } from '@/app/_utils/colors';

export const styles = {
    menuIcon: {
        cursor: 'pointer',
        height: '10px',
        width: '20px',
    },
    menu: {
        padding: '50px',
        '& .MuiPaper-root': {
            borderRadius: '10px',
            width: '130px',
        },
        '& .MuiList-root': {
            padding: '5px 10px',
        },
    },
    menuItemEdit: {
        my: '5px',
        borderRadius: '10px',
        color: colors.blue_primary,
        backgroundColor: colors.blue_secondary,
        '&:hover': {
            backgroundColor: colors.blue_secondary,
        },
    },
    menuItemDelete: {
        my: '5px',
        borderRadius: '10px',
        color: colors.red_primary,
        backgroundColor: colors.red_secondary,
        '&:hover': {
            backgroundColor: colors.red_secondary,
        },
    },
};
