export const styles = {
    alignCenter: {
        alignItems: 'center',
        display: 'flex',
        gap: '20px',
        justifyContent: 'center',
    },
    select: {
        border: 'none',
        borderRadius: '10px',
        width: '100%',
        height: '50px',
        backgroundColor: 'white',
        borderColor: 'white',
        '&.MuiInputBase-root': {
            padding: '0 10px ',
        },
        '& .MuiSelect-select': {},
        '& .MuiSelect-icon': {
            color: 'gray',
        },
        '& .MuiOutlinedInput-notchedOutline': {
            border: 'none',
        },
        cursor: 'pointer',
    },
};
