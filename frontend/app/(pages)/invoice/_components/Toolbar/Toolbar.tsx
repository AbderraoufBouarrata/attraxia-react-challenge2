'use client';
import CustomInput from '@/app/_components/CustomInput/CustomInput';
import { FormControl, Grid, MenuItem, Select, SelectChangeEvent, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import { styles } from './Toolbar.styles';
import Image from 'next/image';
import ArrowDown from '@/app/_assets/icons/Arrow-Down-2.svg';
import { ToolbarProps } from './Toolbar.types';

export default function Toolbar(props: ToolbarProps) {
    const { table, filtering, setFiltering } = props;
    const [loading, setLoading] = useState(false);
    const [selectedStatus, setSelectedStatus] = useState('Select a status');

    function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
        setLoading(true);
        setFiltering(e.target.value);
        handleStatusChange(e);
    }
    function handleStatusChange(e: React.ChangeEvent<{ value: unknown }>) {
        setSelectedStatus(e.target.value as string);
    }

    return (
        <Grid container spacing={2} my="1rem">
            <Grid item xs={12} sm={4}>
                <CustomInput
                    fullWidth
                    placeholder="Search"
                    category="search"
                    value={filtering}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        handleSearchChange(e);
                    }}
                />
            </Grid>
            <Grid item xs={12} sm={2} />
            <Grid item xs={12} sm={3} sx={styles.alignCenter}>
                <Typography variant="subtitle1">Status </Typography>
                <Select
                    fullWidth
                    sx={styles.select}
                    value={selectedStatus}
                    onChange={(e: any) => {
                        handleSearchChange(e);
                    }}
                    IconComponent={() => <Image src={ArrowDown} alt="arrow-down" width={8} height={8} />}
                >
                    {['Complete', 'Pending', 'Cancel'].map((status, index) => (
                        <MenuItem key={index} value={status}>
                            {status}
                        </MenuItem>
                    ))}
                </Select>
            </Grid>
            <Grid item xs={12} sm={3} sx={styles.alignCenter}>
                <Typography variant="subtitle1">Date</Typography>
                <CustomInput fullWidth placeholder="mm/dd/yyyy" category="date" type="date" />
            </Grid>
        </Grid>
    );
}
