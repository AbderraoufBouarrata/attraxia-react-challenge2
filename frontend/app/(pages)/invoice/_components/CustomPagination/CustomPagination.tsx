import ArrowDown from '@/app/_assets/icons/Arrow-Down-2.svg';
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import KeyboardDoubleArrowLeftRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowLeftRounded';
import KeyboardDoubleArrowRightRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowRightRounded';
import { Box, Button, FormControl, MenuItem, Select, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import Image from 'next/image';
import styles from './CustomPagination.styles';
import { CustomPaginationProps } from './CustomPagination.types';

export default function CustomPagination(props: CustomPaginationProps) {
    const { table } = props;

    const pageIndex = table.getState().pagination.pageIndex;
    const pageCount = table.getPageCount();

    return (
        <Box sx={styles.mainContainer}>
            <Stack direction="row" alignItems="center" height="100px" gap="10px">
                <Typography variant="subtitle1">Rows </Typography>
                <FormControl fullWidth>
                    <Select
                        sx={styles.select}
                        value={table.getState().pagination.pageSize}
                        onChange={(e) => {
                            table.setPageSize(Number(e.target.value));
                        }}
                        IconComponent={() => <Image src={ArrowDown} alt="arrow-down" width={8} height={8} />}
                    >
                        {[10, 20, 30, 40, 50].map((pageSize) => (
                            <MenuItem key={pageSize} value={pageSize}>
                                {pageSize}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Stack>
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
        </Box>
    );
}
