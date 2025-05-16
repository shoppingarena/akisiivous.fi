import React from 'react'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import { ThemeProvider } from './components/ThemeProvider'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
// These styles apply to every route in the application
import './globals.css'

const inter = Inter({
    subsets: ['latin'],
})


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
        <html lang="fi" className={inter.className} suppressHydrationWarning>
            <body className="bg-white text-gray-900 min-h-screen flex flex-col">
                <ThemeProvider>
                    <Navbar />
                    <main className="flex-grow p-4 overflow-y-auto">{children}</main>
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    )
}