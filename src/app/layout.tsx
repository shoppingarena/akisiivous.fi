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
    metadataBase: new URL('https://akisiivous.fi'),
    alternates: {
        canonical: '/',
    },
    title: {
        template: '%s | AKI Siivouspalvelut - akisiivous.fi',
        default: 'AKI Siivouspalvelut akisiivous.fi'
    },
    description: 'Haluatko säästää aikaa ja energiaa kotisiivouksesta? Tarjoamme ammattimaisia siivouspalveluita, joilla varmistamme, että kotisi pysyy aina puhtaana ja kunnossa.',
    openGraph: {
        title: 'AKI Siivouspalvelut - akisiivous.fi',
        description: 'Haluatko säästää aikaa ja energiaa kotisiivouksesta? Tarjoamme ammattimaisia siivouspalveluita, joilla varmistamme, että kotisi pysyy aina puhtaana ja kunnossa.',
        url: 'https://nextjs.org',
        siteName: 'https://akisiivous.fi',
        images: [
            {
                url: 'https://akisiivous.fi/public/og-1200x600.png', // Must be an absolute URL
                width: 1200,
                height: 600,
            }],
        locale: 'fi_FI',
        type: 'website',
    }
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