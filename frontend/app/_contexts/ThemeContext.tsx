'use client';
import React from 'react';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';

// this changes the font for MUI
const theme = createTheme({
    typography: {
        fontFamily: ['DM Sans', 'sans-serif'].join(','),
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
