// app/page.tsx
import React from 'react'

export default function Home() {
    return (
        <>
            <div className='pt-16'>
                <div className="space-y-12">
                    <section id="section1" tabIndex={0}>
                        <h2 className="text-2xl font-bold">Kotisiivoukset</h2>
                        <p className="mt-2">Content for section 1 goes here.</p>
                    </section>
                    <section id="section2" tabIndex={0}>
                        <h2 className="text-2xl font-bold">Ikkunat</h2>
                        <p className="mt-2">Content for section 2 goes here.</p>
                    </section>
                </div>

                <div>


                    Erikoissiivoukset
                    Desinfiointi ja pikasiivoukset
                    Muuttosiivoukset
                    Remontin loppusiivoukset
                    Liiketila- ja toimistosiivoukset
                    Taloyhtiöiden porraskäytäväsiivoukset
                    Kuolinpesien raivaukset ja siivous

                    <section className="pt-32 pb-24 bg-gradient-to-r from-teal-600 to-lime-500">
                        <div className="max-w-6xl mx-auto px-4 text-center">
                            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">Kotisiivoukset</h1>
                            <p className="text-xl text-white opacity-90 mb-12 max-w-3xl mx-auto">

                            </p>
                            <a href="https://wa.me/+358445031813" target="_blank"
                                className="bg-red-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:text-white hover:bg-teal-600 transition duration-300">Tilaa siivous</a>
                        </div>
                    </section>


                    <section id="services" className="py-20 bg-white">
                        <div className="max-w-6xl mx-auto px-4">
                            <h2 className="text-3xl text-teal-600 font-bold text-center mb-16">Palvelut</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                                <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                                    <div className="text-blue-600 text-4xl mb-4">🌐</div>
                                    <h3 className="text-xl font-semibold mb-4">DNS Services</h3>
                                    <p className="text-gray-600">Expert DNS management and optimization for reliable domain resolution.</p>
                                </div>


                                <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                                    <div className="text-blue-600 text-4xl mb-4">☁️</div>
                                    <h3 className="text-xl font-semibold mb-4">Cloud Administration</h3>
                                    <p className="text-gray-600">Efficient cloud infrastructure management and optimization.</p>
                                </div>


                                <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                                    <div className="text-blue-600 text-4xl mb-4">💡</div>
                                    <h3 className="text-xl font-semibold mb-4">AI Development</h3>
                                    <p className="text-gray-600">Innovative AI solutions tailored to your business needs.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <a
                        href="https://wa.me/+358445031813"
                        target="_blank"
                        className="fixed bottom-4 right-4 bg-[#25D366] text-white rounded-md px-6 py-3 font-medium z-50 transition-all hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    >
                        Chat on WhatsApp
                    </a>

                    <footer className="bg-teal-600 text-white py-12">
                        <div className="max-w-6xl mx-auto px-4 text-center">
                            <p>© 2025 akisiivoukset.fi</p>
                        </div>
                    </footer>
                </div>
            </div >
        </>
    )
}