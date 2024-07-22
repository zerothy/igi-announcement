import Logo from '@/atoms/Logo'
import Background from '@/atoms/Background'
import Wins from '@/atoms/Wins'

import Widgets from '@/organisms/Widgets'
import Board from '@/organisms/Board'

import { useSolved } from '@/context/SolvedContext'
import { useEffect } from 'react'

export default function GamePage() {
    const { isSolved, setTotalWins } = useSolved();

    useEffect(() => {
        if (isSolved) {
            setTotalWins((prev) => prev + 1);
        }
    }, [isSolved]);

    return (
        <div className="flex flex-col w-screen h-screen justify-center items-center bg-[#00090A]">
            {
                isSolved && <Wins />
            }
            <Background />
            <Logo title='SOLVE TO REVEAL IGI GAME JAM 2ND RUNNER UP' size={4} />
            <div className='flex flex-col lg:flex-row'>
                <div className='lg:w-[16rem] lg:mr-6' />
                <Board />
                <Widgets timeLeft={180} />
            </div>
        </div>
    )
}