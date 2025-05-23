import React from "react"
import { WhatsAppIcon } from './icons'

export default function Footer() {
    return (
        <>
            <footer className="bg-teal-600 text-white py-12">
                <div className="flex flex-wrap">
                    <div>First col</div>
                    <div>Second</div>
                    <div>Third</div>
                </div>
                {/* copyright last line */}
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <p>© 2025 akisiivous.fi</p>
                    <p className='text-xs'><a href="https://www.flaticon.com/free-animated-icons/cleaning" title="cleaning animated icons">Cleaning animated icons created by Freepik - Flaticon</a></p>
                </div>
            </footer>
        </>
    )
}