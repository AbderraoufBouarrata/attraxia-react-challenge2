'use client';
import CustomInput from '@/app/_components/CustomInput/CustomInput';
import { Grid, Typography } from '@mui/material';
import React from 'react';
import { styles } from './Toolbar.styles';

export default function Toolbar() {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
                <CustomInput fullWidth placeholder="Search" category="search" />
            </Grid>
            <Grid item xs={12} sm={2} />
            <Grid item xs={12} sm={3} sx={styles.alignCenter}>
                <Typography variant="subtitle1">Status</Typography>
                <CustomInput fullWidth placeholder="Select Status" category="dropdown" />
            </Grid>
            <Grid item xs={12} sm={3} sx={styles.alignCenter}>
                <Typography variant="subtitle1">Date</Typography>
                <CustomInput fullWidth placeholder="mm/dd/yyyy" category="date" />
            </Grid>
        </Grid>
    );
}
