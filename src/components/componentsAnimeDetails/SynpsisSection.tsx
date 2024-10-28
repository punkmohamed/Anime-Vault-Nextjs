

const SynpsisSection = ({ synopsis }: { synopsis: string }) => {
    return (
        <div className="bg-[#161921] rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">Synopsis</h2>
            <p className="text-gray-300 leading-relaxed">{synopsis}</p>
        </div>
    )
}

export default SynpsisSection