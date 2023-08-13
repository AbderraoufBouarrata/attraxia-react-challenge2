import { colors } from '@/app/_utils/colors';

const styles = {
    pagination: {
        '& .MuiButtonBase-root': {
            backgroundColor: 'white',
            fontWeight: 'bold',
        },
        '& .Mui-selected': {
            backgroundColor: colors.blue_primary,
        },
    },
    paginationButton: {
        fontWeight: 'bold',
        color: 'black',
        padding: 0,
        margin: '0 ',
        minWidth: '40px',
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        backgroundColor: 'white',
        border: 'none',
        '&.MuiButton-contained': {
            backgroundColor: colors.blue_primary,
            color: 'white',
        },
    },
};
export default styles;
