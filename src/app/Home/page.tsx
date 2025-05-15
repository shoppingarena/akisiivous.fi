// app/page.tsx
import React from 'react'

export default function Home() {
    return (
        <>
            <div className='pt-16'>
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

                <div>
                    Kotisiivoukset
                    Ikkunat
                    Erikoissiivoukset
                    Desinfiointi ja pikasiivoukset
                    Muuttosiivoukset
                    Remontin loppusiivoukset
                    Liiketila- ja toimistosiivoukset
                    Taloyhtiöiden porraskäytäväsiivoukset
                    Kuolinpesien raivaukset ja siivous
                </div>
            </div >
        </>
    )
}