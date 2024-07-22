import Background from "@/atoms/Background"

export default function End() {
    return (
        <div>
            <div className="flex flex-col justify-center items-center w-screen h-screen bg-[rgba(69,10,10,0.8)] z-[120] absolute top-0 left-0">
                <h1 className="text-xl md:text-2xl font-urbanist font-semibold text-[#FFEDFD] opacity-80 text-center">Congratulations! You have completed the game!</h1>
                <h1 className="text-xl md:text-2xl font-urbanist font-semibold text-[#FFEDFD] opacity-80">Thank you for playing</h1>
                <h1 className="text-xs md:text-sm font-urbanist font-semibold text-[#FFEDFD] opacity-40 pt-10">yang bocorin hasilnya diskualifikasi D:&lt;</h1>
            </div>
        </div>
    )
}