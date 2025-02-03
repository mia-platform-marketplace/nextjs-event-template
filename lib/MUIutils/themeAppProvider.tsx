'use client'
import { ThemeProvider, createTheme } from '@mui/material';
import React from 'react'
import theme from './theme';


const ThemeAppProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <ThemeProvider theme={createTheme(theme)}>
            {children}
        </ThemeProvider>
    )
}

export default ThemeAppProvider;
