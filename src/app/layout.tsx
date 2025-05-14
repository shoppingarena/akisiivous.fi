import type { Metadata } from 'next'
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
        <html lang="fi">
            <body className="">
                <main className="">{children}</main>
            </body>
        </html>
    )
}