export default function RetryButton({ onClick }: { onClick: () => void }) {
    return (
        <button
            className="bg-[#FFEDFD] text-[#A61E24] font-lexend font-semibold text-lg md:text-2xl py-2 px-4 rounded-lg transition-all duration-200 hover:bg-[#A61E24] hover:text-[#FFEDFD]   "
            onClick={onClick}
        >
            Retry
        </button>
    )
}