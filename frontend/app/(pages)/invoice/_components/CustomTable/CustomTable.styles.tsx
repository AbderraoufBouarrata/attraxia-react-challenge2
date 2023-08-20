import ArrowDown from '@/app/_assets/icons/Arrow-Down-2.svg';
import { colors } from '@/app/_utils/colors';
import Image from 'next/image';

export const styles = {
    table: {
        width: '100%',
        borderCollapse: 'separate',
        padding: '0 0px',
        borderSpacing: '0 10px',
    },
    tableHeader: {
        backgroundColor: 'transparent',
        fontWeight: 400,
        textAlign: 'left',
        color: colors.text,
        padding: '0 10px',
        cursor: 'pointer',
    },
    alignCenter: {
        display: 'flex',
        alignItems: 'center',
    },
    checkbox: {
        width: '20px',
        height: '20px',
        backgroundColor: 'transparent',
        border: '2px solid lightgrey',
        borderRadius: '3px',
        color: 'lightgrey',
        margin: '0',
        //appearance: 'none',
    },
    sortingIconUp: {
        transform: 'rotate(180deg)',
        translate: '0 -4px',
    },
    sortingIconDown: {},
};

export const Asc = () => (
    <>
        {' '}
        <Image src={ArrowDown} alt="" style={styles.sortingIconUp} />
    </>
);

export const Desc = () => (
    <>
        {' '}
        <Image src={ArrowDown} alt="" style={styles.sortingIconDown} />
    </>
);
