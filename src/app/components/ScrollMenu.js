"use client"
import { useEffect, useRef } from 'react';

const ScrollMenu = () => {
    const sections = useRef([]);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            element.focus(); // Focus on the heading
        }
    };

    return (
        <div className="container mx-auto p-4">
            {/* Navigation Menu */}
            <nav className="mb-8">
                <ul className="flex space-x-4">
                    <li>
                        <button
                            onClick={() => scrollToSection('section1')}
                            className="text-blue-600 hover:text-blue-800"
                        >
                            Section 1
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => scrollToSection('section2')}
                            className="text-blue-600 hover:text-blue-800"
                        >
                            Section 2
                        </button>
                    </li>
                </ul>
            </nav>

            {/* Scrollable Sections */}
            <div className="space-y-12">
                <section id="section1" tabIndex={0}>
                    <h2 className="text-2xl font-bold">Section 1</h2>
                    <p className="mt-2">Content for section 1 goes here.</p>
                </section>
                <section id="section2" tabIndex={0}>
                    <h2 className="text-2xl font-bold">Section 2</h2>
                    <p className="mt-2">Content for section 2 goes here.</p>
                </section>
            </div>
        </div>
    );
};

export default ScrollMenu;