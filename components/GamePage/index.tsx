import { useState, useEffect } from 'react'

import Logo from '@/atoms/Logo'
import Background from '@/atoms/Background'
import Wins from '@/atoms/Wins'
import End from '@/atoms/End'
import RetryButton from '@/atoms/RetryButton'

import Widgets from '@/organisms/Widgets'
import Board from '@/organisms/Board'

import { useSolved } from '@/context/SolvedContext'
import { time } from 'console'

export default function GamePage() {
    const { isSolved, setTotalWins, totalWins, setIsFailed } = useSolved();

    const [timeLeft, setTimeLeft] = useState<number>(totalWins === 0 ? 90 : (totalWins === 1 ? 300 : 500));

    useEffect(() => {
        if (isSolved) {
            setTotalWins((prev) => prev + 1);
        }
    }, [isSolved]);

    useEffect(() => {
        setTimeLeft(totalWins === 0 ? 90 : (totalWins === 1 ? 300 : 500));
    }, [totalWins]);

    return (
        <div className="flex flex-col w-screen h-screen justify-center items-center bg-[#00090A]">
            {
                totalWins === 3 && <End />
            }
            {
                isSolved && <Wins />
            }
            <Background />
            <Logo title={`${totalWins === 0 ? 'SOLVE TO REVEAL IGI GAME JAM 2ND RUNNER UP' : totalWins === 1 ? 'SOLVE TO REVEAL IGI GAME JAM 1ST RUNNER UP' : 'SOLVE TO REVEAL IGI GAME JAM CHAMPION'}`} size={4} />
            <div className='flex flex-col lg:flex-row'>
                <div className='lg:w-[16rem] lg:mr-6 h-full flex flex-col justify-between z-[90] relative'>
                    <h1 className="text-xl md:text-2xl bg-[rgba(69,10,10,0.8)] font-urbanist font-semibold text-[#FFEDFD] opacity-80 text-center">Click on the tile you wish to move!</h1>
                    <RetryButton onClick={() => {
                        setTimeLeft(totalWins === 0 ? 90 : (totalWins === 1 ? 300 : 500));
                        setIsFailed(true)
                    }} />
                </div>
                <Board />
                <Widgets timeLeft={timeLeft} />
            </div>
        </div>
    )
}