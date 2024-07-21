export default function LeftGroup() {
    return (
        <div className="flex flex-col w-[24rem]">
            <img src="/images/icons/subtract.png" alt="Subtract" className="w-[18rem] h-[18rem] rotate-90 translate-x-20" />
            <img src="/images/icons/subtract.png" alt="Subtract" className="w-[12rem] h-[12rem]" />
            <img src="/images/icons/subtract.png" alt="Subtract" className="w-[24rem] h-[24rem] -rotate-45 -translate-x-40" />
            
            <div className="w-[32rem] h-[32rem] rounded-full bg-[#FF7373] absolute blur-3xl bottom-0 -translate-x-20 -translate-y-40 opacity-20"></div>
        </div>
    )
}