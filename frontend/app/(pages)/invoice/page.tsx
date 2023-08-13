'use client';
import { Grid } from '@mui/material';
import React from 'react';
import Heading from './_components/Heading/Heading';
import Toolbar from './_components/Toolbar/Toolbar';
import CustomTable from './_components/CustomTable';
import useFetchUser from '@/app/_hooks/useFetchUser';
import useFetchInvoices from '@/app/_hooks/useFetchInvoices/useFetchInvoices';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/_redux/store';

export default function page() {
    useFetchUser();
    const { user } = useSelector((state: RootState) => state.user);

    if (!user) return <div>Loading</div>;
    console.log(user);
    return (
        <Grid container rowGap={4}>
            <Grid item xs={12}>
                <Heading />
            </Grid>
            <Grid item xs={12}>
                <Toolbar />
            </Grid>
            <Grid item xs={12}>
                <CustomTable user={user} />
            </Grid>
        </Grid>
    );
}
