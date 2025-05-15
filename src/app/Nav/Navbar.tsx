"use client";
import Link from "next/link";
import { useState } from "react";
import ThemeSwitcher from "../components/ThemeSwitcher";
import ScrollMenu from "../components/ScrollMenu";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navItems = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Palvelut", href: "/palvelut" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <nav className="w-full px-4 py-4 bg-white bg-opacity-90 sticky top-3 shadow backdrop-blur-lg z-50">
            <div className="container flex items-center justify-between mx-auto text-slate-800">
                <Link href="/" className="font-bold text-2xl text-red-600">
                    AKISIIVOUS
                </Link>
                <div className="lg:hidden">
                    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        {/* Hamburger Icon */}
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
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
                            <button className="bg-red-600 text-white px-8 py-2 rounded-md hover:bg-red-500">Login</button>
                        </li>
                    </ul>
                </div>
                {/* Desktop Menu */}
                <div className="hidden lg:block">
                    <ul className="flex gap-6 items-center">
                        {navItems.map((item, idx) => (
                            <li key={idx} className="text-lg text-slate-600 hover:text-red-500">
                                <Link href={item.href}>{item.name}</Link>
                            </li>

                        ))}
                        <ScrollMenu />
                        <ThemeSwitcher />
                        <li>
                            <button className="bg-red-600 hover:bg-red-500 text-white px-8 py-2 rounded-md">Login</button>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
}
