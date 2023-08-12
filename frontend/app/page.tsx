'use client';
import { Box } from '@mui/material';
import dotenv from 'dotenv';
import { useRouter } from 'next/navigation';
import { isAuthentified } from './_utils/isAuthentified';
import { config } from './_config/config';
import { useEffect } from 'react';

dotenv.config({});

export default function Home() {
    const router = useRouter();
    useEffect(() => {
        if (!isAuthentified()) router.push('/signin');
    }, []);

    return (
        <Box>
            <Box>api at {config.API_URL}</Box>
        </Box>
    );
}
