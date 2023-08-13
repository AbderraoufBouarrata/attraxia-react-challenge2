import { colors } from '@/app/_utils/colors';
import { css } from '@emotion/react';

export const styles = {
    table: {
        width: '100%',
        borderCollapse: 'separate',
        padding: '0 10px',
        borderSpacing: '0 10px',
    },
    tableHeader: {
        backgroundColor: '#f5f5f5',
        fontWeight: 400,
        textAlign: 'left',
        color: colors.text,
        padding: '0 10px',
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
};

export const TableRowStyles = () => (
    <style>
        {`
            .tableRow{
                background-color: white;
                height: 60px;
                padding: 0 10px;

            }
            .tableRow td {
                padding: 0 10px;
            }
            .tableRow td:first-child{
                border-top-left-radius: 10px;
                border-bottom-left-radius: 10px;
                
            }
            .tableRow td:last-child{
                border-top-right-radius: 10px;
                border-bottom-right-radius: 10px;
            }
            .cursor-pointer{
                cursor: pointer;
            }

        `}
    </style>
);
