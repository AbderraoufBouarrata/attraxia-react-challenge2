'use client';
import React from 'react';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { colors } from '../_utils/colors';
import { grey } from '@mui/material/colors';

// this changes the font for MUI
const theme = createTheme({
    typography: {
        fontFamily: ['DM Sans', 'sans-serif'].join(','),
        subtitle1: {
            fontWeight: 500,
            fontSize: 16,
            color: colors.text,
        },
        h2: {
            fontWeight: 700,
            fontSize: 32,
        },
        h4: {
            fontWeight: 600,
            fontSize: 24,
        },
        h6: {
            fontWeight: 500,
            fontSize: 16,
        },
    },
});

export default function ThemeContextProvider({ children }: { children: React.ReactNode }) {
    return (
        <>
            <ThemeProvider theme={theme}>
                {' '}
                <CssBaseline />
                {children}
            </ThemeProvider>
        </>
    );
}
