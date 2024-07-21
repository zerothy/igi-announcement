import Logo from '@/atoms/Logo'

import Board from '@/organisms/Board'

export default function GamePage() {
    return (
        <div className="flex flex-col w-screen h-screen justify-center items-center bg-[#00090A]">
            <img src="/images/igi_bg.png" alt="IGI BG" className='z-0 absolute object-cover w-screen h-screen' />
            <Logo />
            <Board />
        </div>
    )
}