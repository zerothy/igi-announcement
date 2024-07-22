import { useState, useEffect } from 'react';
import confetti from 'canvas-confetti'

import { useSolved } from '@/context/SolvedContext';

export default function Wins() {
    const { isSolved, setIsSolved, isFailed, setIsFailed, totalWins } = useSolved();

    const [isContinue, setIsContinue] = useState<boolean>(false);

    function randomInRange(min: number, max: number) {
        return Math.random() * (max - min) + min;
    }

    const handleOnContinue = () => {
        if (isContinue) {
            setIsSolved(false);
            setIsFailed(false);
            setIsContinue(false);
        }
    }

    useEffect(() => {
        if (isSolved) {
            setTimeout(() => {
                setIsContinue(true);
            }, 2000);
        }
    }, [isSolved]);

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

            setTimeout(() => {
                document.querySelectorAll('canvas').forEach(canvas => {
                    canvas.style.zIndex = '120';
                    canvas.style.position = 'fixed';
                });
            }, 100);
        }
    }, [isSolved]);

    return (
        <div className="bg-[rgba(69,10,10,0.8)] w-screen h-screen z-[120] absolute top-0 left-0 flex flex-col justify-between items-center cursor-default" onClick={handleOnContinue}>
            {
                isContinue && (
                    <h1 className="text-xl md:text-2xl font-urbanist font-semibold text-[#FFEDFD] opacity-80 absolute md:top-2 top-1">Click anywhere to continue</h1>
                )
            }
            <h1 className="text-3xl md:text-5xl font-lexend font-semibold text-[#FFEDFD] pt-48 md:pt-32" style={{ textShadow: '0px 4px 3px #A61E24' }}>CONGRATULATIONS!</h1>
            <div className="flex flex-row overflow-hidden">
                <div className='flex flex-col items-center justify-center translate-y-28 translate-x-2 md:translate-x-3 lg:translate-y-44 lg:translate-x-7'>
                    {
                        <h1 className={`flex justify-center text-center w-28 md:w-44 lg:w-72 text-2xl lg:text-3xl font-lexend font-semibold text-[#FFEDFD] ${totalWins >= 1 ? 'opacity-100' : 'opacity-0' } transition-all duration-1000 delay-300`} style={{ textShadow: '0px 4px 3px #A61E24' }}>Dummy dum Dummy</h1>
                    }
                    <img src="/images/podium.png" alt="Podium" className="w-36 md:w-44 h-[28rem] md:h-[36rem] lg:w-72" />
                    <h1 className='text-xs md:text-lg lg:text-3xl bg-[rgba(69,10,10,0.8)] rounded-lg p-1 font-lexend font-semibold text-[#FFEDFD] absolute -translate-y-5' style={{ textShadow: '0px 4px 3px #A61E24' }}>2nd RUNNER UP</h1>
                </div>
                <div className='flex flex-col items-center justify-center translate-y-10 lg:translate-y-10'>
                    {
                        <h1 className={`flex justify-center text-center w-28 md:w-44 lg:w-72 text-2xl lg:text-3xl font-lexend font-semibold text-[#FFEDFD] ${totalWins >= 3 ? 'opacity-100' : 'opacity-0' } transition-all duration-1000 delay-300`} style={{ textShadow: '0px 4px 3px #A61E24' }}>Dummy dum Dummy</h1>
                    }
                    <img src="/images/podium.png" alt="Podium" className="w-36 md:w-44 h-[34rem] md:h-[36rem] lg:w-72" />
                    <h1 className='text-xs md:text-lg lg:text-3xl bg-[rgba(69,10,10,0.8)] rounded-lg p-1 font-lexend font-semibold text-[#FFEDFD] absolute' style={{ textShadow: '0px 4px 3px #A61E24' }}>CHAMPION</h1>
                </div>
                <div className='flex flex-col items-center justify-center -translate-x-2 md:-translate-x-3 translate-y-20 lg:translate-y-28 lg:-translate-x-6'>
                    {
                        <h1 className={`flex justify-center text-center w-28 md:w-44 lg:w-72 text-2xl lg:text-3xl font-lexend font-semibold text-[#FFEDFD] ${totalWins >= 2 ? 'opacity-100' : 'opacity-0' } transition-all duration-1000 delay-300`} style={{ textShadow: '0px 4px 3px #A61E24' }}>Dummy dum Dummy</h1>
                    }
                    <img src="/images/podium.png" alt="Podium" className="w-36 md:w-44 h-[30rem] md:h-[36rem] lg:w-72" />
                    <h1 className='text-xs md:text-lg lg:text-3xl bg-[rgba(69,10,10,0.8)] rounded-lg p-1 font-lexend font-semibold text-[#FFEDFD] absolute' style={{ textShadow: '0px 4px 3px #A61E24' }}>1st RUNNER UP</h1>
                </div>
            </div>
        </div>
    )
}