import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    alternates: {
        canonical: '/yhteystiedot',
    },
    title: 'Yhteystiedot',
    description: 'AKI Siivouspalvelut Turku'
}

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <section>{children}</section>
}