// /src/app/components/WhatsAppButton.tsx
import React from "react"
import { WhatsAppIcon } from '../components/icons'

const WhatsAppButton = () => {
    return (
        <>
            <a href="https://wa.me/+358445031813"
                target="_blank"
                className="fixed bottom-[98px] right-4 bg-[#25D366] text-white rounded-md px-6 py-3 font-medium z-50 transition-all hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                <WhatsAppIcon />
            </a>
        </>
    )
}

export default WhatsAppButton