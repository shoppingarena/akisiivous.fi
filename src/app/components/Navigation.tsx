// app/components/Navbar.tsx
//http://localhost:8080/c/af923f82-eae5-41f8-84af-70a34251365a
"use client"
import React from 'react';
import ThemeSwitcher from './ThemeSwitcher';
import { Sidebar } from './Sidebar';
import { useState, useEffect } from 'react';
import Link from 'next/link';


export default function Navbar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsSidebarOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <nav className="fixed top-0 bg-white shadow-md z-10">
                <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                    <div className="flex items-center">
                        <button
                            className="md:hidden text-gray-700"
                            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                        <Link href="/" className="ml-2 text-xl font-bold text-blue-600">
                            akisiivous.fi
                        </Link>
                    </div>

                    <div className="hidden md:flex space-x-4">
                        <Link href="/auth/sign-in" className="text-gray-600 hover:text-blue-600">
                            Sign In
                        </Link>
                        <Link href="/auth/sign-up" className="text-gray-600 hover:text-blue-600">
                            Sign Up
                        </Link>
                        <Link href="/premium" className="text-gray-600 hover:text-blue-600">
                            Premium
                        </Link>
                        <Link href="/settings" className="text-gray-600 hover:text-blue-600">
                            Settings
                        </Link>
                        <ThemeSwitcher />
                    </div>
                </div>
                {isSidebarOpen && <Sidebar onClose={() => setIsSidebarOpen(false)} />}
            </nav>
        </>
    );
}
