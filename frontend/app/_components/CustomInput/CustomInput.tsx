'use client';
import React from 'react';
import Image from 'next/image';
import { BoxProps, InputAdornment, TextField, TextFieldProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import Calendar from '@/app/_assets/icons/Calendar.svg';
import ArrowDown from '@/app/_assets/icons/Arrow-Down-2.svg';

import SearchIcon from '@/app//_assets/icons/Search.svg';
import { blue, grey } from '@mui/material/colors';

const CssTextField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
        boxSizing: 'border-box',
        backgroundColor: 'white',
        border: 'none',
        '& fieldset': {
            border: 'none',
            transition: 'border-color 0.3s',
            backgroundColor: 'transparent',
        },
        '&:hover fieldset': {
            transition: 'border-color 0.3s',
        },
        '&.Mui-focused.MuiOutlinedInput-root': {
            border: 'none',
            backgroundColor: 'white', // Apply the desired focus state background color here
        },
    },
});

type MainInputProps = TextFieldProps &
    BoxProps & {
        category?: 'text' | 'search' | 'dropdown' | 'date';
    };

export default function CustomInput(props: MainInputProps) {
    const { category, ...restProps } = props;

    const styles = {
        input: {
            borderRadius: '10px',
            height: '60px',
            backgroundColor: 'white',
        },
        inputStyle: {
            sx: {
                backgroundColor: 'white',
                color: 'black',
                borderRadius: '10px',
                height: '60px',
                px: '1rem',
            },
            endAdornment:
                category === 'search' ? (
                    <InputAdornment position="start">
                        <Image src={SearchIcon} alt="search" />
                    </InputAdornment>
                ) : category === 'dropdown' ? (
                    <InputAdornment position="start">
                        <Image src={ArrowDown} alt="search" />
                    </InputAdornment>
                ) : category === 'date' ? (
                    <InputAdornment position="start">
                        <Image src={Calendar} style={{ opacity: 0.25 }} alt="search" />
                    </InputAdornment>
                ) : null,
        },
    };

    return <CssTextField sx={styles.input} InputProps={styles.inputStyle} {...restProps} />;
}
