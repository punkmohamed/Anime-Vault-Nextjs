const TableSkeleton = () => (
    <div className="animate-pulse">
        <div className="h-20 bg-[#c6cad5] mb-4 rounded-lg"></div>
        {[...Array(10)].map((_, i) => (
            <div key={i} className="h-16 bg-[#161921] mb-2 rounded-lg opacity-60"></div>
        ))}
    </div>
);
export default TableSkeleton