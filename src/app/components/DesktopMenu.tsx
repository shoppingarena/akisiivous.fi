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
    navItems,
    serviceItems,
    scrollToSection
}: DesktopMenuProps) {
    return (
        <div className="hidden md:flex space-x-4">
            {/* Left side menu */}
            <ul className="flex gap-6 items-center">
                {navItems.map((item, idx) => (
                    <li
                        key={idx}
                        className="relative group font-bold text-lg text-white hover:text-teal-600"
                    >
                        {item.hasDropdown ? (
                            <>
                                {/* Hover Target: "Palvelut" */}
                                <div className="flex items-center gap-1 cursor-pointer">
                                    {item.name}
                                    <svg
                                        className="w-4 h-4 group-hover:rotate-180 transition-transform"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </div>

                                {/* ✅ Dropdown placed correctly */}
                                <div className="absolute left-0 top-full mt-2 w-64 bg-white rounded-md shadow-lg py-1 z-50 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-200">

                                    {serviceItems.map((service, serviceIdx) => (
                                        <Link
                                            href={service.href}
                                            key={serviceIdx}
                                            onClick={(e) => {
                                                e.preventDefault(); // 🛑 Stop native anchor scrolling
                                                const sectionId = service.href.split("#")[1];
                                                scrollToSection(sectionId);
                                            }}
                                            className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-teal-600 hover:text-white"
                                        >
                                            {service.name}
                                        </Link>
                                    ))}
                                </div>
                            </>
                        ) : (
                            <Link href={item.href}>{item.name}</Link>
                        )}
                    </li>
                ))}
            </ul>


        </div>

    );
}