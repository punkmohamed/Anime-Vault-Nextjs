

const InfoItem = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
    <div className="flex items-center gap-3">
        {icon}
        <div>
            <span className="text-gray-400 text-sm">{label}: </span>
            <span className="text-sm text-white/90">{value}</span>
        </div>
    </div>
);
export default InfoItem