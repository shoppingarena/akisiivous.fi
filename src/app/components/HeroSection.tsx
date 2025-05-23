'use client'
import React, { useEffect, useState, } from "react";
import { WindowCleaningIcon, Trolley, Duster, Cleaning, Tools, Vacuum, Spray, Mop, Hand } from '../components/icons';

interface Section {
    section_id: string;
    title: string;
    text: string;
    id: string;
    service_title: string;
}
interface Service {
    service_id: string;
    icon: string;
    service_name: string;
    description: string;
}
// Type guard to check if an item is a Section
function isSection(item: unknown): item is Section {
    return (
        typeof item === 'object' &&
        item !== null &&
        'section_id' in item &&
        typeof (item as Section).section_id === 'string'
    );
}
// Type guard to check if an item is a Service
function isService(item: unknown): item is Service {
    return (
        typeof item === 'object' &&
        item !== null &&
        'service_id' in item &&
        typeof (item as Service).service_id === 'string'
    );
}
// Type guard to check if an item is an array of Services
function isServiceArray(item: unknown): item is Service[] {
    return Array.isArray(item) && item.every(isService);
}

// Icon map to dynamically render icons based on name
const IconMap: Record<string, React.ComponentType<Record<string, unknown>>> = {
    WindowCleaningIcon,
    Trolley,
    Duster,
    Cleaning,
    Tools,
    Vacuum,
    Spray,
    Mop,
    Hand
};

export const ServiceComponent = () => {
    const [data, setData] = useState<(Section | Service[])[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Access the JSON file directly
                const response = await fetch('/HeroData.json');
                if (!response.ok) throw new Error('Failed to fetch content');
                const jsonData = await response.json();
                setData(jsonData);

            } catch (err) {
                setError('Error loading data. Please try again later.')
                console.error('Error fetching content:', err);
                // Fallback in case of failure

            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    // Ensure we have content before rendering
    if (isLoading) {
        return <div className="py-20 text-center">
            <p className="text-xl">Loading service...</p>
        </div>;
    }

    // Safety check if content is empty
    if (error) {
        return <div className="py-20 text-center">
            <p className="text-xl text-red-500">{error}</p>
        </div>;
    }

    // Group sections with their corresponding services
    const renderContent = () => {
        const content = [];

        for (let i = 0; i < data.length; i += 2) {
            const section = data[i];
            const services = data[i + 1];

            if (isSection(section) && isServiceArray(services)) {
                content.push(
                    <div key={section.section_id} className="mb-20">
                        {/* Section Header */}
                        <section id={section.section_id} className="pt-32 pb-24 bg-gradient-to-r from-teal-600 to-lime-500">
                            <div className="text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                                <h2 className="text-4xl sm:text-4xl md:text-6xl font-bold text-white mb-8">{section.title}</h2>
                                <p className="text-xl text-white opacity-90 mb-12 max-w-3xl mx-auto">{section.text}</p>
                                <a href="https://wa.me/+358445031813" target="_blank"
                                    className="bg-red-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:text-white hover:bg-teal-600 transition duration-300">
                                    Tilaa siivous
                                </a>
                            </div>
                        </section>

                        {/* Services Cards */}
                        <div className="container mx-auto px-1 sm:px-4 lg:px-8 py-16">
                            <h3 className="text-teal-600 text-3xl font-bold text-center mb-12">{section.service_title}</h3>
                            <div className="grid md:grid lg:grid-cols-3 gap-8">
                                {services.map((service) => {
                                    // Dynamically render the correct icon component
                                    const IconComponent = service.icon ? IconMap[service.icon] : null;

                                    return (
                                        <div id={service.service_id}
                                            key={service.service_id || `service-${Math.random()}`}
                                            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
                                        >
                                            {IconComponent && (
                                                <div className="text-teal-600 mb-4">
                                                    <IconComponent className="w-12 h-12" />
                                                </div>
                                            )}
                                            <h3 className="text-teal-600 text-xl font-semibold mb-3">{service.service_name || "Service Name"}</h3>
                                            <p className="text-gray-600">{service.description || "Service description will be added soon."}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                );
            }
        }

        return content;
    };

    return <>{renderContent()}</>;
};