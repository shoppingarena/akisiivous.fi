// app/page.tsx
import React from 'react'
import { WindowCleaningIcon, Trolley, Duster, Cleaning, Tools, Vacuum, Spray, Mop, Hand } from '../app/components/icons'
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