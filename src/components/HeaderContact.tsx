
const HeaderContact = ({ title }: { title: string }) => {
    return (
        <div className="flex items-center ">
            <h2 className="text-3xl font-bold w-72 ">{title}</h2>
            <div className="w-full h-1
                 bg-purple-900"></div>
        </div>
    )
}

export default HeaderContact