import Image from 'next/image';
import React from 'react';
import Loading from '@/app/_assets/animations/loading.svg';
import { Box } from '@mui/material';

export default function loading() {
    const styles = {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        mt: '100px',
    };
    return (
        <Box sx={styles}>
            <Image src={Loading} alt="loading" height={150} width={150} />
        </Box>
    );
}
