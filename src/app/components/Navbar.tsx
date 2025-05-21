// /components/Navbar.tsx
"use client";
import Link from "next/link";
import { CleanHome } from '../components/icons';
import { useState } from "react";
import Info from './Info';
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";

// Define types for nav items
interface NavItem {
    name: string;
    href: string;
    hasDropdown?: boolean; // optional property
}


export default function Navbar() {
    // State management in parent component
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

    // Main navigation items - shared data
    const navItems: NavItem[] = [
        { name: "Meistä", href: "/meista" },
        { name: "Palvelut", href: "#", hasDropdown: true },
        { name: "Yhteystiedot", href: "/yhteystiedot" },
    ];

    // Services submenu items - shared data
    const serviceItems: NavItem[] = [
        { name: "Kotisiivoukset", href: "/#kotisiivoukset" },
        { name: "Ikkunat", href: "/#ikkunat" },
        { name: "Erikoissiivoukset", href: "/#erikoissiivoukset" },
        { name: "Desinfioinnit ja pikasiivoukset", href: "/#desinfiointi" },
        { name: "Muuttosiivoukset", href: "/#muuttosiivoukset" },
        { name: "Remontin loppusiivoukset", href: "/#remonttisiivoukset" },
        { name: "Liiketila- ja toimistosiivoukset", href: "/#toimistosiivoukset" },
        { name: "Taloyhtiöiden porraskäytäväsiivoukset", href: "/#porraskäytäväsiivoukset" },

    ];

    // Shared function for scrolling to sections
    const scrollToSection = (sectionId: string): void => {
        const element = document.getElementById(sectionId);
        if (element) {
            const yOffset = -133; // 138 (navbar height) - 5px visual gap
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };


    return (
        <>
            <Info />
            <nav className="w-full px-4 py-3 bg-lime-500 bg-opacity-90 sticky top-[60px] shadow z-50">
                <div className="container mx-auto flex items-center justify-between text-slate-800 relative">
                    {/* LEFT: Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex flex-row font-medium text-2xl text-white hover:text-teal-600 items-center gap-2">
                            <CleanHome />
                            <h1>akisiivous.fi</h1>
                        </Link>
                    </div>

                    {/* CENTER: Desktop menu */}

                    <DesktopMenu
                        isServicesDropdownOpen={isServicesDropdownOpen}
                        setIsServicesDropdownOpen={setIsServicesDropdownOpen}
                        navItems={navItems}
                        serviceItems={serviceItems}
                        scrollToSection={scrollToSection}
                    />


                    {/* RIGHT: CTA (desktop only) and Mobile menu toggle */}
                    <div className="flex items-center gap-4">
                        {/* CTA */}
                        <div className="hidden lg:block">
                            <button className="bg-red-600 hover:bg-teal-600 text-white px-8 py-2 rounded-md text-xl font-medium">
                                Tilaa siivous
                            </button>
                        </div>
                        {/* MOBILE: hamburger */}
                        <div className="md:hidden">
                            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle mobile menu" className="cursor-pointer"
                                aria-expanded={isMobileMenuOpen}>

                                <svg width="40" height="40" viewBox="0 0 24 24" className="fill-white stroke-white hover:fill-teal-600 hover:stroke-teal-600">
                                    <path d="M20 7.125L4 7.125C3.37868 7.125 2.875 6.62132 2.875 6C2.875 5.37868 3.37868 4.875 4 4.875L20 4.875C20.6213 4.875 21.125 5.37868 21.125 6C21.125 6.62132 20.6213 7.125 20 7.125ZM20 13.125L4 13.125C3.37868 13.125 2.875 12.6213 2.875 12C2.875 11.3787 3.37868 10.875 4 10.875L20 10.875C20.6213 10.875 21.125 11.3787 21.125 12C21.125 12.6213 20.6213 13.125 20 13.125ZM20 19.125L4 19.125C3.37868 19.125 2.875 18.6213 2.875 18C2.875 17.3787 3.37868 16.875 4 16.875L20 16.875C20.6213 16.875 21.125 17.3787 21.125 18C21.125 18.6213 20.6213 19.125 20 19.125Z" />
                                </svg>
                            </button>
                        </div>
                    </div>


                    {/* Mobile Menu Component */}
                    <MobileMenu
                        isOpen={isMobileMenuOpen}
                        setIsOpen={setIsMobileMenuOpen}
                        isServicesDropdownOpen={isServicesDropdownOpen}
                        setIsServicesDropdownOpen={setIsServicesDropdownOpen}
                        navItems={navItems}
                        serviceItems={serviceItems}
                        scrollToSection={scrollToSection}
                    />


                </div>
            </nav >
        </>
    );
}