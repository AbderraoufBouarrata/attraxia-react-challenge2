'use client';
import { Grid, Toolbar } from '@mui/material';
import React from 'react';
import ProfileDetails from './_components/ProfileDetails/ProfileDetails';
import Profile from './_components/Profile/Profile';
import Copyright from '@/app/_components/Copyright/Copyright';
import useFetchUser from '@/app/_hooks/useFetchUser/useFetchUser';
import { useRouter } from 'next/navigation';
import ProfileInvoices from './_components/ProfileInvoices/ProfileInvoices';

export default function page() {
    const router = useRouter();
    const { user, loading } = useFetchUser();

    if (loading) return <div>Loading...</div>;
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
