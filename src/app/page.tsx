// app/page.tsx
'use client'
import React, { useEffect } from 'react'
import { ServiceComponent } from './components/HeroSection'

export default function Home() {
    useEffect(() => {
        const sectionId = sessionStorage.getItem("scrollTarget");
        if (sectionId) {
            // Wait for DOM to render (especially nested components)
            setTimeout(() => {
                const el = document.getElementById(sectionId);
                if (el) {
                    const yOffset = -133;
                    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                }
                sessionStorage.removeItem("scrollTarget");
            }, 300); // 300ms delay should be safe for most cases
        }
    }, []);


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