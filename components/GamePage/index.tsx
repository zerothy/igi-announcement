import Logo from '@/atoms/Logo'
import Background from '@/atoms/Background'
import Wins from '@/atoms/Wins'

import Widgets from '@/molecules/Widgets'

import Board from '@/organisms/Board'

import { useSolved } from '@/context/SolvedContext'

export default function GamePage() {
    const { isSolved } = useSolved();

    return (
        <div className="flex flex-col w-screen h-screen justify-center items-center bg-[#00090A]">
            {
                isSolved && <Wins />
            }
            <Background />
            <Logo />
            <div className='flex flex-col lg:flex-row'>
                <div className='lg:w-[16rem] lg:mr-6' />
                <Board />
                <Widgets />
            </div>
        </div>
    )
}