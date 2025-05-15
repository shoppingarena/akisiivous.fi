import React from "react"
import { WhatsApp } from '../components/icons'

export default function Footer() {
    return (
        <>
            <a
                href="https://wa.me/+358445031813"
                target="_blank"
                className="fixed bottom-4 right-4 bg-[#25D366] text-white rounded-md px-6 py-3 font-medium z-50 transition-all hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
                <WhatsApp />
            </a>

            <footer className="bg-teal-600 text-white py-12">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <p>© 2025 akisiivous.fi</p>
                    <p className='text-xs'><a href="https://www.flaticon.com/free-animated-icons/cleaning" title="cleaning animated icons">Cleaning animated icons created by Freepik - Flaticon</a></p>
                </div>
            </footer>
        </>
    )
}