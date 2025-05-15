// /components/DesktopMenu.tsx
"use client";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

interface NavItem {
    name: string;
    href: string;
    hasDropdown?: boolean;
}

interface ServiceItem {
    name: string;
    href: string;
}

interface DesktopMenuProps {
    isServicesDropdownOpen: boolean;
    setIsServicesDropdownOpen: Dispatch<SetStateAction<boolean>>;
    navItems: NavItem[];
    serviceItems: ServiceItem[];
    scrollToSection: (sectionId: string) => void;
}

export default function DesktopMenu({
    isServicesDropdownOpen,
    setIsServicesDropdownOpen,
    navItems,
    serviceItems,
    scrollToSection
}: DesktopMenuProps) {
    return (
        <div className="hidden lg:block">
            <ul className="flex gap-6 items-center">
                {navItems.map((item, idx) => (
                    <li key={idx} className="font-bold text-lg text-white hover:text-teal-600 relative">
                        {item.hasDropdown ? (
                            <div className="relative">
                                <button
                                    onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                                    className="flex items-center gap-1"
                                >
                                    {item.name}
                                    <svg className={`w-4 h-4 transition-transform ${isServicesDropdownOpen ? 'rotate-180' : ''}`}
                                        fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                {isServicesDropdownOpen && (
                                    <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-1 z-50">
                                        {serviceItems.map((service, serviceIdx) => (
                                            <button
                                                key={serviceIdx}
                                                onClick={() => {
                                                    const sectionId = service.href.split('#')[1];
                                                    scrollToSection(sectionId);
                                                }}
                                                className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-teal-600 hover:text-white"
                                            >
                                                {service.name}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ) : (
                            <Link href={item.href}>{item.name}</Link>
                        )}
                    </li>
                ))}
                <li>
                    <button className="bg-red-600 hover:bg-teal-600 text-white px-8 py-2 rounded-md font-bold">Tilaa siivous</button>
                </li>
            </ul>
        </div>
    );
}