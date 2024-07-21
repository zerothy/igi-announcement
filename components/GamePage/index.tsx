import Logo from '@/atoms/Logo'

import LeftGroup from '@/molecules/LeftGroup'
import RightGroup from '@/molecules/RightGroup'

import Board from '@/organisms/Board'

export default function GamePage() {
    return (
        <div className="flex flex-col w-screen h-screen justify-center items-center bg-[#00090A]">
            <div className='absolute w-screen h-full z-0 flex justify-between'>
                <LeftGroup />
                <RightGroup />
            </div>
            <Logo />
            <Board />
        </div>
    )
}