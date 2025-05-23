'use client'
import { useCallback } from 'react';
import Link from 'next/link'
import { useRouter, usePathname } from "next/navigation";
import { serviceItems } from './ServiceItems'
import { ArrowUp, EarthIcon, LinkedinIcon, TwitterIcon } from 'lucide-react'
import { FacebookIcon } from './icons'
{/*
const socialLinks = [
    {
        name: 'LinkedIn',
        link: '/',
        icon: <LinkedinIcon className="size-6" />,
    },
    {
        name: 'X',
        link: '/',
        icon: <TwitterIcon className="size-6" />,
    },
    {
        name: 'Facebook',
        link: '/',
        icon: <FacebookIcon className="size-6" />,
    },
    {
        name: 'Website',
        link: '/',
        icon: <EarthIcon className="size-6" />,
    },
]
*/}
{/*
const support = {
    title: 'Support',
    items: [
        { label: 'Contact', href: '' },
        { label: 'FAQs', href: '' },
        { label: 'Pricing Plans', href: '' },
        { label: 'Sitemap', href: '' },
    ],
}
*/}
{/*
const quickLinks = {
    title: 'Quick Links',
    items: [
        { label: 'Jobs', href: '' },
        { label: 'Courses', href: '' },
        { label: 'Paid Training', href: '' },
        { label: 'Blog', href: '' },
    ],
}
*/}
const contact = {
    address: 'Suovantie 63C, 20360 Turku',
    phone: 'Puhelin: +358 445 031 813',
    email: 'info@akisiivous.fi',
}

const Footer = () => {
    const router = useRouter();
    const pathname = usePathname()

    // Shared function for scrolling to sections
    const scrollToSection = (sectionId: string): void => {
        const element = document.getElementById(sectionId);
        if (element) {
            const yOffset = -133; // 138 (navbar height) - 5px visual gap
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

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




    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <>
            <footer className="bg-teal-600 text-white">
                <div className="mx-auto max-w-7xl px-4">
                    <div className="flex flex-wrap justify-evenly gap-6 py-12">
                        <div className="">
                            <a href="/" className="mb-8 flex items-center gap-5 text-white">
                                <img
                                    src="/icons-animated/cleaning-service.png"
                                    className="h-8"
                                    alt="Logo"
                                />
                                <h6 className="text-xl font-semibold tracking-wider">AKI Siivouspalvelut</h6>
                            </a>
                            <address className="mt-3 text-base font-normal text-white">
                                <p className="mt-3 max-w-64">{contact.address}</p>
                                <p className="mt-3">{contact.phone}</p>
                                <p className="mt-3">Sähköposti: {contact.email}</p>
                            </address>
                        </div>
                        {/*
                        <div>
                            <h6 className="mb-7 text-xl text-white">{support.title}</h6>
                            <ul>
                                {support.items.map(({ label, href }) => (
                                    <li
                                        key={label}
                                        className="mt-3 text-base font-normal text-white transition-all duration-150 ease-in hover:text-white hover:underline hover:decoration-[#00AAFF] hover:underline-offset-8"
                                    >
                                        <a href={href}>{label}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        */}
                        {/*
                        <div>
                            <h6 className="mb-7 text-xl text-white">{quickLinks.title}</h6>
                            <ul>
                                {quickLinks.items.map(({ label, href }) => (
                                    <li
                                        key={label}
                                        className="mt-3 text-base font-normal text-white transition-all duration-150 ease-in hover:text-white hover:underline hover:decoration-[#00AAFF] hover:underline-offset-8"
                                    >
                                        <a href={href}>{label}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        */}
                        <div>
                            <h6 className="mb-7 text-xl text-white">Palvelut</h6>
                            <ul>
                                {serviceItems.map(({ name, href }) => (
                                    <li
                                        key={name}
                                        className="mt-3 text-base font-normal text-white transition-all duration-150 ease-in hover:text-white hover:underline hover:decoration-lime-300 hover:underline-offset-8"
                                    >
                                        <Link href={href} onClick={(e) => handleScrollLink(e, href)}>{name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="relative bg-lime-500 bg-opacity-90 backdrop-blur-lg shadow">
                    {/*
                    <button
                        onClick={scrollToTop}
                        className="absolute -top-7 right-8 flex size-14 items-center justify-center rounded-full border-[6px] border-[#191F33] bg-[#00AAFF] md:right-16"
                    >
                        <ArrowUp color="#fff" size={22} />
                    </button>
                    */}

                    <div className="mx-auto flex max-w-7xl flex-col items-center gap-2 px-4 py-[26px] md:flex-row md:justify-between">
                        <p className="text-center text-white">
                            AKI Siivouspalvelut © 2025</p>

                        {/*
                        <ul className="flex items-center gap-6">
                            {socialLinks.map(({ name, icon, link }) => (
                                <li key={name}>
                                    <a
                                        href={link}
                                        title={name}
                                        className="text-[#767E94] hover:text-white"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {icon}
                                    </a>
                                    <span className="sr-only">{name} account</span>
                                </li>
                            ))}
                        </ul>
                        */}
                        <p className='text-xs'>
                            <a href="https://benes.fi" className="text-white ">Kehittänyt Jiri Benes.fi</a><br />
                            <a href="https://www.flaticon.com/free-animated-icons/cleaning" title="cleaning animated icons">Cleaning animated icons created by Freepik - Flaticon</a>
                        </p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer