import React from "react";
import { Call } from '../components/icons'

export default function Info() {
    return (
        <div className="flex flex-row items-center justify-end w-full px-1 pt-0.5 pb-1 bg-teal-600 bg-opacity-90 sticky top-0 shadow backdrop-blur-lg z-50">
            <p className="flex fler-row items-center font-bold text-lg text-white my-1.5 mx-1"><span className="mx-4">Ota yhteyttä</span><a href="tel:+358445031813" className="flex flex-row items-center text-white bg-lime-500 px-6 py-1 rounded-full text-lg font-semibold hover:text-white hover:bg-green-600 transition duration-300 "><Call /><span>+358445031813</span></a></p>

        </div>
    )
} 