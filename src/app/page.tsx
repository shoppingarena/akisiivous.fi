// app/page.tsx
import React from 'react'
import { WindowCleaningIcon, Trolley, Duster, Cleaning, Tools, Vacuum, Spray, Mop, Hand } from '../app/components/icons'

export default function Home() {
    return (
        <>
            <div className='pt-16'>
                <div>
                    {/* 1 Hero Kotisiivoukset Section */}
                    <section id="kotisiivoukset" className="pt-32 pb-24 bg-gradient-to-r from-teal-600 to-lime-500">
                        <div className="text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                            <h1 className="text-4xl sm:text-4xl md:text-6xl font-bold text-white mb-8">Kotisiivoukset</h1>
                            <p className="text-xl text-white opacity-90 mb-12 max-w-3xl mx-auto">Haluatko säästää aikaa ja energiaa kotisiivouksesta?  Tarjoamme ammattimaisia puhdistuspalveluita, joilla varmistamme, että kotisi pysyy aina puhtana ja kunnossa. Kotisiivoukset on helpointa luottaa asiantuntijoille – pyydä tarjous ja vakuuttaudu parhaista siivouspalveluista tänään!</p>
                            <a href="https://wa.me/+358445031813" target="_blank"
                                className="bg-red-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:text-white hover:bg-teal-600 transition duration-300">Tilaa siivous</a>
                        </div>
                    </section>

                    {/* First Services Section */}
                    <section className="py-20 bg-white">
                        <div className="max-w-6xl mx-auto px-4">
                            <h2 className="text-3xl text-teal-600 font-bold text-center mb-16">Siivouspalvelut</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {/* Kotisiivoukset Card - Detailed section already exists above */}
                                <div id="kotisiivoukset-card" className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                                    <div className="text-blue-600 text-4xl mb-4"><Duster /></div>
                                    <h3 className="text-teal-600 text-xl font-semibold mb-4">Kotisiivoukset</h3>
                                    <p className="text-gray-600">Ikkunoiden puhdistus on keskeinen osa kotisiivouksia. Tarjoamme nopeaa ja tehokasta puhdistusta, joka poistaa likaa ja huonekalujen kertynyttä likaa. Ikkunoiden siivous on helpointa luottaa ammattilaisille – pyydä tarjous ja vakuuttaudu puhtauden palautumisesta tänään!</p>
                                </div>

                                {/* Ikkunat Card */}
                                <div id="ikkunat" className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                                    <div className="text-blue-600 text-4xl mb-4"><WindowCleaningIcon /></div>
                                    <h3 className="text-teal-600 text-xl font-semibold mb-4">Ikkunat</h3>
                                    <p className="text-gray-600">Ikkunoiden puhdistus on keskeinen osa kotisiivouksia. Tarjoamme nopeaa ja tehokasta puhdistusta, joka poistaa likaa ja huonekalujen kertynyttä likaa. Ikkunoiden siivous on helpointa luottaa ammattilaisille – pyydä tarjous ja vakuuttaudu puhtauden palautumisesta tänään!</p>
                                </div>

                                {/* Liiketila- ja toimistosiivoukset Card */}
                                <div id="toimistosiivoukset" className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                                    <div className="text-blue-600 text-4xl mb-4"><Trolley /></div>
                                    <h3 className="text-teal-600 text-xl font-semibold mb-4">Liiketila- ja toimistosiivoukset</h3>
                                    <p className="text-gray-600">Liiketila- ja toimistosiivoukset ovat keskeinen osa toiminnan jatkamista. Tarjoamme ammattimaisia siivouspalveluita, jotka huolehtivat toimistojen ja liiketilojen puhtauden ja hygienian. Pyydä tarjous ja vakuuttaudu parhaista siivouspalveluista tänään!</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* 2 Hero Section */}
                    <section id="kotisiivoukset" className="pt-32 pb-24 bg-gradient-to-r from-teal-600 to-lime-500">
                        <div className="text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">Remontin loppusiivoukset</h1>
                            <p className="text-xl text-white opacity-90 mb-12 max-w-3xl mx-auto">
                                Remontin loppusiivoukset ovat kriittinen vaihe, jossa varmistamme, että tila on täysin valmis käyttöön. Tarjoamme ammattimaisia siivouspalveluita, jotka huolehtivat puhtauden palautumisesta. Pyydä tarjous ja vakuuttaudu parhaista siivouspalveluista tänään!</p>
                            <a href="https://wa.me/+358445031813" target="_blank"
                                className="bg-red-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:text-white hover:bg-teal-600 transition duration-300">Tilaa siivous</a>
                        </div>
                    </section>
                    {/* Second Services Section */}
                    <section className="py-20 bg-white">
                        <div className="max-w-6xl mx-auto px-2">
                            <h2 className="text-3xl text-teal-600 font-bold text-center mb-16">Siivoupalvelut</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {/* Remontin loppusiivoukset Card */}
                                <div id="remonttisiivoukset" className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                                    <div className="text-blue-600 text-4xl mb-4"><Cleaning /></div>
                                    <h3 className="text-teal-600 text-xl font-semibold mb-4">Remontin loppusiivoukset</h3>
                                    <p className="text-gray-600">Remontin loppusiivoukset ovat kriittinen vaihe, jossa varmistamme, että tila on täysin valmis käyttöön. Tarjoamme ammattimaisia siivouspalveluita, jotka huolehtivat puhtauden palautumisesta. Pyydä tarjous ja vakuuttaudu parhaista siivouspalveluista tänään!</p>
                                </div>
                                {/* Muuttosiivoukset Card */}
                                <div id="muuttosiivoukset" className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                                    <div className="text-blue-600 text-4xl mb-4"><Tools /></div>
                                    <h3 className="text-teal-600 text-xl font-semibold mb-4">Muuttosiivoukset</h3>
                                    <p className="text-gray-600">Muuttosiivoukset ovat helpointa luottaa ammattilaisille, jotka huolehtivat siivouksesta muuttopäivänä. Tarjoamme kattavan siivouspalvelun, joka varmistaa, että kotisi pysyy aina puhtana ja kunnossa. Pyydä tarjous ja vakuuttaudu parhaista siivouspalveluista tänään!</p>
                                </div>
                                {/* Desinfiointi ja pikasiivoukset Card */}
                                <div id="desinfiointi" className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                                    <div className="text-blue-600 text-4xl mb-4"><Vacuum /></div>
                                    <h3 className="text-teal-600 text-xl font-semibold mb-4">Desinfiointi ja pikasiivoukset</h3>
                                    <p className="text-gray-600">Desinfiointi ja pikasiivoukset ovat ratkaisuja nopeaan ja tehokkaaseen puhdistukseen. Tarjoamme nopeaa ja tehokasta siivouspalvelua, joka huolehtii tiettyjen kriteerien mukaisesta puhtauden palautumisesta. Pyydä tarjous ja vakuuttaudu parhaista siivouspalveluista tänään!</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* HERO Ikkunat Feature Section */}
                    <section className="pt-32 pb-24 bg-gradient-to-r from-teal-600 to-lime-500">
                        <div className="max-w-6xl mx-auto px-4 text-center">
                            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">Ikkunat</h1>
                            <p className="text-xl text-white opacity-90 mb-12 max-w-3xl mx-auto">
                                Ikkunoiden puhdistus on keskeinen osa kotisiivouksia. Tarjoamme nopeaa ja tehokasta puhdistusta, joka poistaa likaa ja huonekalujen kertynyttä likaa. Ikkunoiden siivous on helpointa luottaa ammattilaisille – pyydä tarjous ja vakuuttaudu puhtauden palautumisesta tänään!
                            </p>
                            <a href="https://wa.me/+358445031813" target="_blank"
                                className="bg-red-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:text-white hover:bg-teal-600 transition duration-300">Tilaa siivous</a>
                        </div>
                    </section>

                    {/* Additional Services Section */}
                    <section id="siivouspalvelut" className="py-20 bg-white">
                        <div className="max-w-6xl mx-auto px-4">
                            <h2 className="text-3xl text-teal-600 font-bold text-center mb-16">Siivouspalvelut</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {/* Erikoissiivoukset Card */}
                                <div id="erikoissiivoukset" className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                                    <div className="text-blue-600 text-4xl mb-4"><Spray /></div>
                                    <h3 className="text-teal-600 text-xl font-semibold mb-4">Erikoissiivoukset</h3>
                                    <p className="text-gray-600">Tarjoamme erikoissiivouksia, jotka sopivat erityistilanteisiin, kuten yksityishuoneiden puhdistus, kylpyhuoneiden siivous tai muiden tarkentuvien tarpeiden käsittely. Erikoissiivoukset on helpointa luottaa asiantuntijoille – pyydä tarjous ja vakuuttaudu ammattimaisuudestamme tänään!</p>
                                </div>

                                {/* Kuolinpesien raivaukset ja siivous Card */}
                                <div id="kuolinpesät" className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                                    <div className="text-blue-600 text-4xl mb-4"><Hand /></div>
                                    <h3 className="text-teal-600 text-xl font-semibold mb-4">Kuolinpesien raivaukset ja siivous</h3>
                                    <p className="text-gray-600">Kuolinpesien raivaukset ja siivous ovat huolellinen ja kunnioittava palvelu, joka varmistaa, että tila on kunnollisessa tilassa. Tarjoamme ammattimaisia siivouspalveluita, jotka huolehtivat puhtauden palautumisesta. Pyydä tarjous ja vakuuttaudu parhaista siivouspalveluista tänään!</p>
                                </div>

                                {/* Taloyhtiöiden porraskäytäväsiivoukset Card */}
                                <div id="porraskäytäväsiivoukset" className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                                    <div className="text-blue-600 text-4xl mb-4"><Mop /></div>
                                    <h3 className="text-teal-600 text-xl font-semibold mb-4">Taloyhtiöiden porraskäytäväsiivoukset</h3>
                                    <p className="text-gray-600">Taloyhtiöiden porraskäytäväsiivoukset ovat keskeinen osa yhteisöllisen hyvinvointia. Tarjoamme ammattimaisia siivouspalveluita, jotka huolehtivat yhteisöjen puhtauden ja hygienian. Pyydä tarjous ja vakuuttaudu parhaista siivouspalveluista tänään!</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}