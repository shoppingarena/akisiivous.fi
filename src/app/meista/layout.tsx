import React from 'react'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    alternates: {
        canonical: '/meista',
    },
    title: 'Meista',
    description: 'Me olemme nuori, kunnianhimoinen ja kärsivällinen tiimi, joka haluaa muuttaa siivouspalveluiden perinteitä. Uskomme siihen, että puhtaus on enemmän kuin vain pinta – se on osa hyvää elämää, turvallisuutta ja hyvinvointia.'
}

export default function MeistaLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <section>{children}</section>
}