import React from 'react';

export default function ContactPage() {
    return (
        <>
            <section id="services" className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl text-teal-600 font-bold text-center mb-16">Yhteystiedot</h2>
                    <div className="grid gap-8">


                        <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">

                            <h3 className="text-teal-600 text-xl font-semibold mb-4">Osoite</h3>
                            <div className="text-gray-600">
                                <p className="mb-2">AKI Siivouspalvelut</p>
                                <p className="mb-2">Suovantie 63C</p>
                                <p className="mb-2">20360 Turku</p>
                                <p className='mb-2'>info@akisiivous.fi</p>
                            </div>
                        </div>




                    </div>
                </div>
            </section>

        </>
    );
}