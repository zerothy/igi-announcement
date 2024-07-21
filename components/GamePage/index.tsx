import React, { useEffect } from 'react'

import Logo from '@/atoms/Logo'
import Background from '@/atoms/Background'
import Wins from '@/atoms/Wins'

import Widgets from '@/organisms/Widgets'
import Board from '@/organisms/Board'

import { useSolved } from '@/context/SolvedContext'

import confetti from 'canvas-confetti'

export default function GamePage() {
    const { isSolved } = useSolved();

    function randomInRange(min: number, max: number) {
        return Math.random() * (max - min) + min;
    }

    useEffect(() => {
        if (isSolved) {
            confetti({
                angle: randomInRange(55, 125),
                spread: randomInRange(50, 70),
                particleCount: randomInRange(50, 100),
                origin: { y: 0.6 },
            });

            confetti({
                angle: randomInRange(55, 125),
                spread: randomInRange(50, 70),
                particleCount: randomInRange(50, 100),
                origin: { y: 0.6 },
            });
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
                <Widgets timeLeft={60} />
            </div>
        </div>
    )
}