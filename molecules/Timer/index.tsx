import { useState, useEffect } from "react"

import { useSolved } from "@/context/SolvedContext"

import RetryButton from "../../atoms/RetryButton"

export default function Timer({ time }: { time: number }) {
    const [timeLeft, setTimeLeft] = useState(time)
    const { isSolved, setIsFailed, totalWins } = useSolved()

    useEffect(() => {
        const interval = setInterval(() => {
            if (!isSolved && timeLeft > 0) {
                setTimeLeft(timeLeft - 1)
            }
        }, 1000)

        return () => clearInterval(interval)
    }, [timeLeft, isSolved])

    useEffect(() => {
        if(totalWins === 3) setTimeLeft(999)
        else setTimeLeft(time)
    }, [time, totalWins])

    return (
        <div>
            {
                timeLeft === 0 ? (
                    <div className="bg-[rgba(69,10,10,0.6)] w-screen h-screen z-[100] absolute top-0 left-0 flex flex-col justify-center items-center">
                        <h1 className="text-5xl pb-16 font-lexend font-semibold text-[#FFEDFD] cursor-default" style={{ textShadow: '0px 4px 3px #A61E24' }} unselectable="on">YOU LOSE!</h1>

                        <RetryButton onClick={() => {
                            setTimeLeft(time)
                            setIsFailed(true)
                        }} />
                    </div>
                ) : (
                    <h1 className="font-lexend font-semibold text-[#FFEDFD] text-2xl md:text-4xl z-[10] relative">Time left: {timeLeft}</h1>
                )
            }
        </div>
    )
}