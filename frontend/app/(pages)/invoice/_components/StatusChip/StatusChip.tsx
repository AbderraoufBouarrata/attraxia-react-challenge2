import React from 'react';
import { StatusChipProps } from './StatusChip.types';
import { Box, Typography } from '@mui/material';
import styles from './StatusChip.styles';

export default function StatusChip(props: StatusChipProps) {
    switch (props.status) {
        case 'Complete':
            return <Box sx={styles.completedChip}>Complete</Box>;
        case 'Pending':
            return <Box sx={styles.pendingChip}>Pending</Box>;
        case 'Cancel':
            return <Box sx={styles.cancelChip}>Cancel</Box>;
        default:
            return <Box sx={styles.pendingChip}>Pending</Box>;
    }
}
