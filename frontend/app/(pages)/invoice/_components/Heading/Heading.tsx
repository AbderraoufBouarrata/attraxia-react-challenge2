'use client';
import CustomButton from '@/app/_components/CustomButton/CustomButton';
import { Box, Typography } from '@mui/material';
import React from 'react';
import { styles } from './Heading.styles';
import Image from 'next/image';
import Add from '@/app/_assets/icons/Plus.svg';

export default function Heading() {
    return (
        <Box sx={styles.container}>
            <Typography variant="h2">Invoice list</Typography>
            <CustomButton sx={styles.button}>
                <Image src={Add} alt="plus" width={20} height={20} />
                Add New
            </CustomButton>
        </Box>
    );
}
