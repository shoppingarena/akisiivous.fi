// /components/MobileMenu.tsx
"use client";
import Link from "next/link";
import { Dispatch, SetStateAction, useCallback } from "react";
import { useRouter, usePathname } from "next/navigation";
import { CleanHome } from "../components/icons"

interface NavItem {
    name: string;
    href: string;
    hasDropdown?: boolean;
}

interface ServiceItem {
    name: string;
    href: string;
}

interface MobileMenuProps {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    isServicesDropdownOpen: boolean;
    setIsServicesDropdownOpen: Dispatch<SetStateAction<boolean>>;
    navItems: NavItem[];
    serviceItems: ServiceItem[];
    scrollToSection: (sectionId: string) => void;
}

export default function MobileMenu({
    isOpen,
    setIsOpen,
    isServicesDropdownOpen,
    setIsServicesDropdownOpen,
    navItems,
    serviceItems,
    scrollToSection
}: MobileMenuProps) {

    const router = useRouter();
    const pathname = usePathname()

    const handleScrollLink = useCallback(
        (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
            const sectionId = href.split("#")[1];
            e.preventDefault();

            if (pathname === "/") {
                scrollToSection(sectionId);
            } else {
                // Store sectionId in sessionStorage and redirect
                sessionStorage.setItem("scrollTarget", sectionId);
                router.push("/");
            }
        },
        [pathname, router, scrollToSection]
    );


    return (
        <div className={`fixed top-0 left-0 min-h-screen w-64 bg-slate-100 shadow-lg transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:hidden z-50`}>
            <div className="flex items-center pb-4">
                <Link onClick={(e) => {
                    handleScrollLink(e, '/');
                    setIsOpen(false)
                }}
                    href="/" className="font-bold text-xl text-red-600 pt-4 ps-4">
                    <CleanHome />
                </Link>
                <button onClick={(e) => {
                    // handleScrollLink(e, '/');
                    setIsOpen(false)
                }} className="absolute top-4 right-4 text-slate-600 hover:text-red-500">
                    {/* Close Icon */}
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <ul className="flex flex-col h-full gap-4 p-4">
                {navItems.map((item, idx) => (
                    <li key={idx} className="font-medium text-xl text-slate-600 hover:text-teal-600">
                        {item.hasDropdown ? (
                            <div>
                                <button
                                    onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                                    className="flex items-center justify-between w-full cursor-pointer"
                                >
                                    {item.name}
                                    <svg className={`w-4 h-4 transition-transform ${isServicesDropdownOpen ? 'rotate-180' : ''}`}
                                        fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                {isServicesDropdownOpen && (
                                    <ul className="pl-4 mt-2 space-y-2 text-base">
                                        {serviceItems.map((service, serviceIdx) => (
                                            <li key={serviceIdx}>
                                                <Link
                                                    href={service.href}
                                                    key={serviceIdx}
                                                    onClick={(e) => {
                                                        handleScrollLink(e, service.href);
                                                        setIsOpen(false)
                                                    }
                                                    }
                                                    className="block w-full text-left text-slate-600 hover:text-teal-600"

                                                >
                                                    {service.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ) : (
                            <Link href={item.href} onClick={() => setIsOpen(false)}>
                                {item.name}
                            </Link>
                        )}
                    </li>
                ))}
                <li className="mt-4">
                    <button className="bg-red-600 text-white px-8 py-2 rounded-md hover:bg-red-500 font-bold cursor-pointer">Tilaa siivous</button>
                </li>
            </ul>
        </div>
    );
}