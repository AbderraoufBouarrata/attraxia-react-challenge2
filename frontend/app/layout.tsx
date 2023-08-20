'use client';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import SideBar from './_components/SideBar';

import Contexts from './_contexts';
import { colors } from './_utils/colors';
import { usePathname, useRouter } from 'next/navigation';
import { store } from './_redux/store';
import { Provider } from 'react-redux';
import useFetchUser from './_hooks/useFetchUser';
import { useEffect } from 'react';
import { isAuthentified } from './_utils/isAuthentified';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Attraxia React Challenge',
    description: 'Attraxia React Challenge',
};

const Head = (
    <head>
        <title>Attraxia React Challenge</title>
    </head>
);

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    useEffect(() => {
        if (isAuthentified() === false) return router.push('/signin');
    }, []);

    const pathname = usePathname();
    if (pathname === '/signin' || pathname === '/signup') {
        return (
            <html lang="en">
                {Head}
                <body className={inter.className} style={{ backgroundColor: colors.background }}>
                    <Contexts>{children}</Contexts>
                </body>
            </html>
        );
    }
    return (
        <html lang="en">
            {Head}
            <body className={inter.className} style={{ backgroundColor: colors.background }}>
                <Contexts>
                    <SideBar>{children}</SideBar>
                </Contexts>
            </body>
        </html>
    );
}
