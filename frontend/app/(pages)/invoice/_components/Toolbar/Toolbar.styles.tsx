import { colors } from '@/app/_utils/colors';

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
    datePicker: {
        backgroundColor: 'white',
        border: 'none',
        borderRadius: '10px',
        width: '100%',
        height: '50px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
};

export const DatePickerStyles = () => (
    <style>
        {`
            .rs-picker-menu{
                border-radius: 15px;
            }
            div.rs-calendar-header.rs-calendar-header-has-month > div > button.rs-calendar-header-title.rs-calendar-header-title-date.rs-btn.rs-btn-subtle.rs-btn-xs{
                font-size: 14px;
                color: black;
                font-weight: 500;
            }
            .rs-picker-daterange-menu .rs-picker-daterange-panel-show-one-calendar .rs-picker-toolbar {
                display: none;
            }
            .rs-picker-daterange-calendar-single{
                height: fit-content;
            }
            .rs-picker-daterange-calendar-single   .rs-calendar{
                height: fit-content;
            }

            body > div.rs-anim-fade.rs-anim-in.rs-picker-daterange-menu.rs-picker-menu.placement-bottom-start > div > div > div > div.rs-picker-daterange-content > div.rs-picker-daterange-calendar-single > div > div.rs-calendar-header.rs-calendar-header-has-month > div{
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 100%;
             }
            
            .rs-calendar-table {
                border-collapse: separate;
                padding: 0 0px;
                border-spacing: 0 10px;
                height: fit-content;
            }
            
            .rs-picker-daterange-header {
                display: none;
            }
            
            .rs-calendar .rs-calendar-table-row{
                height: 40px;
            }

            /* Border radius */
            .rs-picker-menu .rs-calendar .rs-calendar-table-cell-content {
                border-radius: 21px;
                display: inline-block;
            }
            
            /* Selected cells */
            .rs-calendar .rs-calendar-table-cell-selected  .rs-calendar-table-cell-content  {
                padding-left: 0;
                padding-right: 0;
                border-radius: 21px;
                background-color: ${colors.blue_primary};
                height: 40px;
                width: 40px;
                display: flex;
                justify-content: center;
                align-items: center;
            } 

            div.rs-calendar-table-cell.rs-calendar-table-cell-selected.rs-calendar-table-cell-selected-start {
                
                background-color: rgba(212, 211, 247, 1);
                border-top: 1px solid rgba(168, 167, 225, 1);
                border-bottom: 1px solid rgba(168, 167, 225, 1);
                border-radius: 30px 0 0 30px;
            }

            div.rs-calendar-table-cell.rs-calendar-table-cell-selected.rs-calendar-table-cell-selected-end {
                background-color: rgba(212, 211, 247, 1);
                border-top: 1px solid rgba(168, 167, 225, 1);
                border-bottom: 1px solid rgba(168, 167, 225, 1);
                border-radius: 0px 30px 30px 0px;
            }

            /* hover */
            .rs-picker-menu .rs-calendar .rs-calendar-table-cell:hover .rs-calendar-table-cell-content{
                background-color: ${colors.blue_primary};
                color: white;
            }

             /* in range */
            .rs-picker-menu .rs-calendar .rs-calendar-table-cell-in-range{
                background-color: rgba(212, 211, 247, 1);
                border-top: 1px solid rgba(168, 167, 225, 1);
                border-bottom: 1px solid rgba(168, 167, 225, 1);
            }

            /* in range background color*/
            .rs-picker-menu .rs-calendar .rs-calendar-table-cell-in-range .rs-calendar-table-cell-content{
                background-color: rgba(212, 211, 247, 1);
                
            } 
            /* in range background color*/
            .rs-calendar-table-cell-in-range:before  {
                background-color: rgba(212, 211, 247, 1);
                
            } 
            
            
        `}
    </style>
);
