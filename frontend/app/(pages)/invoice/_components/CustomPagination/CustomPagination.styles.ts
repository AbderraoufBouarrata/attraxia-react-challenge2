import { colors } from '@/app/_utils/colors';

const styles = {
    mainContainer: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
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
    select: {
        border: 'none',
        borderRadius: '15px',
        width: '80px',
        height: '35px',
        backgroundColor: 'white',
        borderColor: 'white',
        '&.MuiInputBase-root': {
            padding: '0 10px 0 0',
        },
        '& .MuiSelect-select': {
            padding: '0 10px',
        },
        '& .MuiSelect-icon': {
            color: 'gray',
        },
        '& .MuiOutlinedInput-notchedOutline': {
            border: 'none',
        },
    },
};
export default styles;
