import React from 'react'
import type { Metadata } from 'next'
import { ThemeProvider } from '../components/ThemeProvider'
import Navbar from '../components/Navbar'
// These styles apply to every route in the application
import './globals.css'

export const metadata: Metadata = {
    title: 'Siivouspalvelut | akisiivous.fi',
    description: 'Siivouspalvelut',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="fi" suppressHydrationWarning>
            <body className="">
                <ThemeProvider>
                    <Navbar />
                    <main>{children}</main>
                </ThemeProvider>
            </body>
        </html>
    )
}