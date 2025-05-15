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
        <div className="flex items-center justify-between gap-12">
            {/* Left side menu */}
            <ul className="flex gap-6 items-center">
                {navItems.map((item, idx) => (
                    <li key={idx} className="relative group font-bold text-lg text-white hover:text-teal-600">
                        {item.hasDropdown ? (
                            <div className="flex items-center gap-1 cursor-pointer">
                                {item.name}
                                <svg className="w-4 h-4 group-hover:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>

                                {/* Dropdown menu on hover */}
                                <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-1 z-50 hidden group-hover:block">
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
                            </div>
                        ) : (
                            <Link href={item.href}>{item.name}</Link>
                        )}
                    </li>
                ))}
            </ul>


        </div>

    );
}