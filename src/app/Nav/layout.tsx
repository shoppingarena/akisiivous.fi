import React from 'react'
import type { Metadata } from 'next'
import { ThemeProvider } from '../components/ThemeProvider'
import Navbar from './Navbar'


export const metadata: Metadata = {
    title: 'Siivouspalvelut | akisiivous.fi',
    description: 'Siivouspalvelut',
}

export default function NavigationLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <ThemeProvider>
            <Navbar />
            <main>{children}</main>
        </ThemeProvider>
    )
}