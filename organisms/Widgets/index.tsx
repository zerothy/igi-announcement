import Solution from "@/atoms/Solution"

import Timer from "@/molecules/Timer"

export default function Widgets({ timeLeft }: { timeLeft: number }) {
    return (
        <div className="flex flex-row lg:flex-col items-center lg:items-start justify-between lg:justify-between pt-6 lg:pt-0 lg:ml-6 w-[18rem] md:w-[30rem] lg:w-[16rem]">
            <Solution index={1} />
            <Timer time={timeLeft} />
        </div>
    )
}