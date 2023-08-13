import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';

import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import KeyboardDoubleArrowLeftRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowLeftRounded';
import KeyboardDoubleArrowRightRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowRightRounded';
import styles from './CustomPagination.styles';
import { CustomPaginationProps } from './CustomPagination.types';
import { Button } from '@mui/material';

export default function CustomPagination(props: CustomPaginationProps) {
    const { table } = props;

    const pageIndex = table.getState().pagination.pageIndex;
    const pageCount = table.getPageCount();

    return (
        <Stack spacing={1} width="100%" direction="row" justifyContent="end" alignItems="center" height="100px">
            <Button sx={styles.paginationButton} onClick={() => table.setPageIndex(0)} disabled={!table.getCanPreviousPage()}>
                <KeyboardDoubleArrowLeftRoundedIcon />
            </Button>
            <Button sx={styles.paginationButton} onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
                <KeyboardArrowLeftRoundedIcon />
            </Button>

            {/* Display pages and dots logic */}
            {[...Array(pageCount)].map((_, index) => {
                if (Math.abs(index - pageIndex) <= 1 || index === 0 || index === pageCount - 1) {
                    return (
                        <Button
                            key={index}
                            sx={styles.paginationButton}
                            onClick={() => table.setPageIndex(index)}
                            variant={index === pageIndex ? 'contained' : 'outlined'}
                        >
                            {index + 1}
                        </Button>
                    );
                } else if (Math.abs(index - pageIndex) === 2) {
                    return (
                        <Button key={index} sx={styles.paginationButton}>
                            ...
                        </Button>
                    );
                }
                return null;
            })}

            <Button sx={styles.paginationButton} onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
                <KeyboardArrowRightRoundedIcon />
            </Button>
            <Button sx={styles.paginationButton} onClick={() => table.setPageIndex(table.getPageCount() - 1)} disabled={!table.getCanNextPage()}>
                <KeyboardDoubleArrowRightRoundedIcon />
            </Button>
        </Stack>
    );
}
