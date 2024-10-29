import HeaderContact from "@/components/HeaderContact"
import { fetchOvas } from "../utils/actions"
import LoadMoreOvas from "@/components/LoadMoreOvas"

const OvasPage = async () => {
    const { data } = await fetchOvas(1)
    return (
        <main className="sm:p-6 py-16 px-8 flex flex-col gap-10 bg-[#0F1117]   ">
            <HeaderContact title="Ovas" />
            <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
                {data}
            </section>
            <LoadMoreOvas />
        </main>
    )
}

export default OvasPage