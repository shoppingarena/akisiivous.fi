import React from 'react';
import Link from 'next/link';

export default function MeistaPage() {
    return (
        <>
            <section id="services" className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl text-teal-600 font-bold text-center mb-16">Meistä</h2>
                    <div className="grid gap-8">


                        <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">

                            <h3 className="text-teal-600 text-xl font-semibold mb-4">Tietoa meistä</h3>
                            <div className="text-gray-600">


                                <p className="mb-2">Me olemme nuori, kunnianhimoinen ja kärsivällinen tiimi, joka haluaa muuttaa siivouspalveluiden perinteitä. Uskomme siihen, että puhtaus on enemmän kuin vain pinta – se on osa hyvää elämää, turvallisuutta ja hyvinvointia.</p>

                                <p className="mb-2">Meillä on suuret suunnitelmamme tarjota siivouspalveluja koko Suomessa, riippumatta siitä, onko kyseessä koti, liiketila, toimisto, tai erikoistilanne. Tarjoamme ammattimaisia ja ympäristöystävällisiä ratkaisuja, jotka soveltuvat kaikkiin tarpeisiin – kotisiivoukset, liiketila- ja toimistosiivoukset, erikoissiivoukset, desinfiointi ja pikasiivoukset, muuttosiivoukset, remontin loppusiivoukset sekä taloyhtiöiden porraskäytäväsiivoukset ja kuolinpesien raivaukset ja siivous.</p>
                            </div>
                        </div>




                    </div>
                </div>
            </section>

        </>
    );
}