import React from 'react';
import ThemeContextProvider from './ThemeContext';
import { store } from '../_redux/store';
import { Provider } from 'react-redux';

export default function index({ children }: { children: React.ReactNode }) {
    return (
        <ThemeContextProvider>
            <Provider store={store}>{children}</Provider>
        </ThemeContextProvider>
    );
}
