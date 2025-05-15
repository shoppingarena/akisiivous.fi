// /components/Navbar.tsx
"use client";
import Link from "next/link";
import { CleanHome } from '../components/icons';
import { useState } from "react";
import Info from './Info';

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navItems = [
        //{ name: "Home", href: "/" },
        { name: "Meistä", href: "/meistä" },
        { name: "Palvelut", href: "/palvelut" },
        // { name: "Hinnasto", href: "/hinnasto" },
        { name: "Yhteystiedot", href: "/yhteystiedot" },
    ];

    return (
        <>
            <Info />
            <nav className="w-full px-4 py-4 bg-lime-500 bg-opacity-90 sticky top-15 shadow  z-50">

                <div className="container flex flex-row items-center justify-between mx-auto text-slate-800">
                    <Link href="/" className="flex flex-row font-bold text-2xl text-white hover:text-teal-600 items-center gap-2">
                        <CleanHome /><div className="">akisiivous.fi</div>
                    </Link>
                    <div className="lg:hidden">
                        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                            {/* Hamburger Icon */}
                            <svg width="40" height="40" viewBox="0 0 24 24" className="fill-white stroke-white" xmlns="http://www.w3.org/2000/svg" transform="rotate(0 0 0)">
                                <path d="M20 7.125L4 7.125C3.37868 7.125 2.875 6.62132 2.875 6C2.875 5.37868 3.37868 4.875 4 4.875L20 4.875C20.6213 4.875 21.125 5.37868 21.125 6C21.125 6.62132 20.6213 7.125 20 7.125ZM20 13.125L4 13.125C3.37868 13.125 2.875 12.6213 2.875 12C2.875 11.3787 3.37868 10.875 4 10.875L20 10.875C20.6213 10.875 21.125 11.3787 21.125 12C21.125 12.6213 20.6213 13.125 20 13.125ZM20 19.125L4 19.125C3.37868 19.125 2.875 18.6213 2.875 18C2.875 17.3787 3.37868 16.875 4 16.875L20 16.875C20.6213 16.875 21.125 17.3787 21.125 18C21.125 18.6213 20.6213 19.125 20 19.125Z" />
                            </svg>
                        </button>
                    </div>
                    {/* Mobile Menu */}
                    <div className={`fixed top-0 left-0 min-h-screen w-64 bg-slate-100 shadow-lg transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"} lg:hidden z-50`}>
                        <div className="flex items-center border-b pb-4">
                            <Link href="/" className="font-bold text-xl text-red-600 pt-4 ps-4">
                                HOME
                            </Link>
                            <button onClick={() => setIsMobileMenuOpen(false)} className="absolute top-4 right-4 text-slate-600 hover:text-red-500">
                                {/* Close Icon */}
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <ul className="flex flex-col h-full gap-4 p-4">
                            {navItems.map((item, idx) => (
                                <li key={idx} className="text-lg text-slate-600 hover:text-red-500">
                                    <Link href={item.href} onClick={() => setIsMobileMenuOpen(false)}>{item.name}</Link>
                                </li>
                            ))}
                            <li className="mt-4">
                                <button className="bg-red-600 text-white px-8 py-2 rounded-md hover:bg-red-500 font-bold">Tilaa siivous</button>
                            </li>
                        </ul>
                    </div>
                    {/* Desktop Menu */}
                    <div className="hidden lg:block">
                        <ul className="flex gap-6 items-center">
                            {navItems.map((item, idx) => (
                                <li key={idx} className="font-bold text-lg text-white hover:text-teal-600">
                                    <Link href={item.href}>{item.name}</Link>
                                </li>
                            ))}
                            <li>
                                <button className="bg-red-600 hover:bg-teal-600 text-white px-8 py-2 rounded-md font-bold">Tilaa siivous</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
