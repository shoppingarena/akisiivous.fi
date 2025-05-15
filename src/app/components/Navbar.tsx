// /components/Navbar.tsx
"use client";
import Link from "next/link";
import { CleanHome } from '../components/icons';
import { useState } from "react";
import Info from './Info';
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";

export default function Navbar() {
    // State management in parent component
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

    // Main navigation items - shared data
    const navItems = [
        //{ name: "Home", href: "/" },
        { name: "Meistä", href: "/meistä" },
        { name: "Palvelut", href: "#", hasDropdown: true },
        // { name: "Hinnasto", href: "/hinnasto" },
        { name: "Yhteystiedot", href: "/yhteystiedot" },
    ];

    // Services submenu items - shared data
    const serviceItems = [
        { name: "Kotisiivoukset", href: "/#kotisiivoukset" },
        { name: "Ikkunat", href: "/#ikkunat" },
        { name: "Erikoissiivoukset", href: "/#erikoissiivoukset" },
        { name: "Desinfiointi ja pikasiivoukset", href: "/#desinfiointi" },
        { name: "Muuttosiivoukset", href: "/#muuttosiivoukset" },
        { name: "Remontin loppusiivoukset", href: "/#remonttisiivoukset" },
        { name: "Liiketila- ja toimistosiivoukset", href: "/#toimistosiivoukset" },
        { name: "Taloyhtiöiden porraskäytäväsiivoukset", href: "/#porraskäytäväsiivoukset" },
        { name: "Kuolinpesien raivaukset ja siivous", href: "/#kuolinpesät" },
    ];

    // Shared function for scrolling to sections
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            // Close menus
            setIsMobileMenuOpen(false);
            setIsServicesDropdownOpen(false);

            // Scroll to section with offset for the navbar
            const navbarHeight = 100; // Approximate height of your navbar
            const y = element.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <>
            <Info />
            <nav className="w-full px-4 py-4 bg-lime-500 bg-opacity-90 sticky top-15 shadow z-50">
                <div className="container mx-auto flex items-center justify-between text-slate-800 relative">
                    {/* Left: Logo */}
                    <div className="flex-shrink-0 z-10">
                        <Link href="/" className="flex flex-row font-bold text-2xl text-white hover:text-teal-600 items-center gap-2">
                            <CleanHome />
                            <div>akisiivous.fi</div>
                        </Link>
                    </div>

                    {/* Right: Mobile menu button */}
                    <div className="flex-shrink-0 z-10 lg:hidden">
                        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                            <svg width="40" height="40" viewBox="0 0 24 24" className="fill-white stroke-white">
                                <path d="M20 7.125L4 7.125C3.37868 7.125 2.875 6.62132 2.875 6C2.875 5.37868 3.37868 4.875 4 4.875L20 4.875C20.6213 4.875 21.125 5.37868 21.125 6C21.125 6.62132 20.6213 7.125 20 7.125ZM20 13.125L4 13.125C3.37868 13.125 2.875 12.6213 2.875 12C2.875 11.3787 3.37868 10.875 4 10.875L20 10.875C20.6213 10.875 21.125 11.3787 21.125 12C21.125 12.6213 20.6213 13.125 20 13.125ZM20 19.125L4 19.125C3.37868 19.125 2.875 18.6213 2.875 18C2.875 17.3787 3.37868 16.875 4 16.875L20 16.875C20.6213 16.875 21.125 17.3787 21.125 18C21.125 18.6213 20.6213 19.125 20 19.125Z" />
                            </svg>
                        </button>
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

                    {/* Center: DesktopMenu centered absolutely */}
                    <div className="hidden lg:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <DesktopMenu
                            isServicesDropdownOpen={isServicesDropdownOpen}
                            setIsServicesDropdownOpen={setIsServicesDropdownOpen}
                            navItems={navItems}
                            serviceItems={serviceItems}
                            scrollToSection={scrollToSection}
                        />
                    </div>
                </div>
            </nav>
        </>
    );
}