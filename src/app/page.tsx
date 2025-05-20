// app/page.tsx
import React from 'react'
import { ServiceComponent } from './components/HeroSection'

export default function Home() {
    return (
        <>
            <div className='pt-2'>
                <div>
                    <ServiceComponent />
                </div>
            </div>

        </>
    )
}