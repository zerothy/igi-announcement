import { useState, useEffect } from 'react';
import { useSolved } from '@/context/SolvedContext';

export default function Star() {
    const [starPoint1, setStarPoint1] = useState<boolean>(false);
    const [starPoint2, setStarPoint2] = useState<boolean>(false);
    const [starPoint3, setStarPoint3] = useState<boolean>(false);
    const [starPoint4, setStarPoint4] = useState<boolean>(false);
    const [starPoint5, setStarPoint5] = useState<boolean>(false);
    const [starPoint6, setStarPoint6] = useState<boolean>(false);
    const [starPoint7, setStarPoint7] = useState<boolean>(false);
    const [starPoint8, setStarPoint8] = useState<boolean>(false);
    const [starPoint9, setStarPoint9] = useState<boolean>(false);

    const { isFailed, isSolved, setIsSolved, setIsFailed, totalWins } = useSolved();

    const retryPuzzle = () => {
        setIsSolved(false);
        setIsFailed(false);

        const points = [false, false, false, false, true, true, true, true, true];

        for (let i = points.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [points[i], points[j]] = [points[j], points[i]];
        }

        setStarPoint1(points[0]);
        setStarPoint2(points[1]);
        setStarPoint3(points[2]);
        setStarPoint4(points[3]);
        setStarPoint5(points[4]);
        setStarPoint6(points[5]);
        setStarPoint7(points[6]);
        setStarPoint8(points[7]);
        setStarPoint9(points[8]);
    }
    
    useEffect(() => {
        if(isFailed) retryPuzzle();
    }, [isFailed]);

    useEffect(() => {
        if(!isSolved) {
            retryPuzzle();
        }
    }, [isSolved]);

    useEffect(() => {
        const points = [false, false, false, false, true, true, true, true, true];

        for (let i = points.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [points[i], points[j]] = [points[j], points[i]];
        }

    
        setStarPoint1(points[0]);
        setStarPoint2(points[1]);
        setStarPoint3(points[2]);
        setStarPoint4(points[3]);
        setStarPoint5(points[4]);
        setStarPoint6(points[5]);
        setStarPoint7(points[6]);
        setStarPoint8(points[7]);
        setStarPoint9(points[8]);
    }, []);

    const handleOnClick = (index: number) => {
        if (index === 1) {
            setStarPoint1(!starPoint1);
            setStarPoint5(!starPoint5);
            setStarPoint6(!starPoint6);
            setStarPoint7(!starPoint7);
        } else if (index === 2) {
            setStarPoint2(!starPoint2);
            setStarPoint6(!starPoint6);
            setStarPoint7(!starPoint7);
            setStarPoint8(!starPoint8);
        } else if (index === 3) {
            setStarPoint3(!starPoint3);
            setStarPoint7(!starPoint7);
            setStarPoint8(!starPoint8);
            setStarPoint9(!starPoint9);
        } else if (index === 4) {
            setStarPoint4(!starPoint4);
            setStarPoint8(!starPoint8);
            setStarPoint9(!starPoint9);
            setStarPoint1(!starPoint1);
        } else if (index === 5) {
            setStarPoint5(!starPoint5);
            setStarPoint9(!starPoint9);
            setStarPoint1(!starPoint1);
            setStarPoint2(!starPoint2);
        } else if (index === 6) {
            setStarPoint6(!starPoint6);
            setStarPoint1(!starPoint1);
            setStarPoint2(!starPoint2);
            setStarPoint3(!starPoint3);
        } else if (index === 7) {
            setStarPoint7(!starPoint7);
            setStarPoint2(!starPoint2);
            setStarPoint3(!starPoint3);
            setStarPoint4(!starPoint4);
        } else if (index === 8) {
            setStarPoint8(!starPoint8);
            setStarPoint3(!starPoint3);
            setStarPoint4(!starPoint4);
            setStarPoint5(!starPoint5);
        } else if (index === 9) {
            setStarPoint9(!starPoint9);
            setStarPoint4(!starPoint4);
            setStarPoint5(!starPoint5);
            setStarPoint6(!starPoint6);
        }
    };

    useEffect(() => {
        if (starPoint1 && starPoint2 && starPoint3 && starPoint4 && starPoint5 && starPoint6 && starPoint7 && starPoint8 && starPoint9) {
            setIsSolved(true);
        }
    }, [starPoint1, starPoint2, starPoint3, starPoint4, starPoint5, starPoint6, starPoint7, starPoint8, starPoint9]);

    return (
        <div className="w-[18.5rem] md:w-[30.5rem] h-[18.5rem] md:h-[30.5rem] z-[80] bg-[#671111] border-4 border-solid border-primary">
            <div className="w-full h-full relative -translate-x-4">
                <div className={`point ${starPoint1 ? 'bg-green-500' : 'bg-[#f4f4f4]'}`} style={{ top: '10%', left: '50%' }} onClick={() => handleOnClick(1)}></div>
                <div className={`point ${starPoint2 ? 'bg-green-500' : 'bg-[#f4f4f4]'}`} style={{ top: '20%', left: '75%' }} onClick={() => handleOnClick(2)}></div>
                <div className={`point ${starPoint3 ? 'bg-green-500' : 'bg-[#f4f4f4]'}`} style={{ top: '40%', left: '90%' }} onClick={() => handleOnClick(3)}></div>
                <div className={`point ${starPoint4 ? 'bg-green-500' : 'bg-[#f4f4f4]'}`} style={{ top: '55%', left: '90%' }} onClick={() => handleOnClick(4)}></div>
                <div className={`point ${starPoint5 ? 'bg-green-500' : 'bg-[#f4f4f4]'}`} style={{ bottom: '20%', left: '75%' }} onClick={() => handleOnClick(5)}></div>
                <div className={`point ${starPoint6 ? 'bg-green-500' : 'bg-[#f4f4f4]'}`} style={{ bottom: '10%', left: '50%' }} onClick={() => handleOnClick(6)}></div>
                <div className={`point ${starPoint7 ? 'bg-green-500' : 'bg-[#f4f4f4]'}`} style={{ bottom: '20%', left: '25%' }} onClick={() => handleOnClick(7)}></div>
                <div className={`point ${starPoint8 ? 'bg-green-500' : 'bg-[#f4f4f4]'}`} style={{ bottom: '50%', left: '10%' }} onClick={() => handleOnClick(8)}></div>
                <div className={`point ${starPoint9 ? 'bg-green-500' : 'bg-[#f4f4f4]'}`} style={{ bottom: '75%', left: '25%' }} onClick={() => handleOnClick(9)}></div>
            </div>
        </div>
    )
}