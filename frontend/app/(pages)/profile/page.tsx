'use client';
import { Grid, Toolbar } from '@mui/material';
import React from 'react';
import ProfileDetails from './_components/ProfileDetails/ProfileDetails';
import Profile from './_components/Profile/Profile';
import Copyright from '@/app/_components/Copyright/Copyright';
import useFetchUser from '@/app/_hooks/useFetchUser/useFetchUser';
import { useRouter } from 'next/navigation';
import ProfileInvoices from './_components/ProfileInvoices/ProfileInvoices';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/_redux/store';
import useFetchInvoices from '@/app/_hooks/useFetchInvoices';

export default function page() {
    const router = useRouter();
    useFetchUser();
    const { user } = useSelector((state: RootState) => state.user);

    if (!user) router.push('/signin');
    return (
        <>
            <Toolbar />
            <Grid container spacing={2}>
                <Grid item xs={12} sm={8}>
                    <ProfileDetails user={user} />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Profile user={user} />
                </Grid>
                <Grid item xs={12}>
                    <ProfileInvoices user={user} />
                </Grid>
            </Grid>
            <br />
            <Copyright />
        </>
    );
}
