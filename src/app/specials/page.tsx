import React from 'react'
import { fetchSpecials } from '../utils/actions'
import HeaderContact from '@/components/HeaderContact'
import LoadMoreSpecials from '@/components/LoadMoreSpecials'

const SpecialsPage = async () => {
    const { data } = await fetchSpecials(1)
    return (
        <main className="sm:p-6 py-16 px-8 flex flex-col gap-10 bg-[#0F1117]   ">
            <HeaderContact title="Specials" />
            <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
                {data}
            </section>
            <LoadMoreSpecials />
        </main>
    )
}

export default SpecialsPage