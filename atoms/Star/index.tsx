import { useState, useEffect } from 'react';
import { useSolved } from '@/context/SolvedContext';

export default function Star() {
    const [starPoint1, setStarPoint1] = useState<boolean>(false);
    const [starPoint2, setStarPoint2] = useState<boolean>(false);
    const [starPoint3, setStarPoint3] = useState<boolean>(false);
    const [starPoint4, setStarPoint4] = useState<boolean>(false);
    const [starPoint5, setStarPoint5] = useState<boolean>(false);

    const { isFailed, isSolved, setIsSolved, setIsFailed, totalWins } = useSolved();

    const retryPuzzle = () => {
        setIsSolved(false);
        setIsFailed(false);

        const points = [
            Math.random() < 0.5,
            Math.random() < 0.5,
            Math.random() < 0.5,
            Math.random() < 0.5,
            Math.random() < 0.5,
        ];


        if (points.every(point => point === true)) {
            const randomIndex = Math.floor(Math.random() * points.length);
            points[randomIndex] = false;
        }

        setStarPoint1(points[0]);
        setStarPoint2(points[1]);
        setStarPoint3(points[2]);
        setStarPoint4(points[3]);
        setStarPoint5(points[4]);
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
        const points = [
            Math.random() < 0.5,
            Math.random() < 0.5,
            Math.random() < 0.5,
            Math.random() < 0.5,
            Math.random() < 0.5,
        ];
    
        if (points.every(point => point === true)) {
            const randomIndex = Math.floor(Math.random() * points.length);
            points[randomIndex] = !points[randomIndex];
        }
    
        setStarPoint1(points[0]);
        setStarPoint2(points[1]);
        setStarPoint3(points[2]);
        setStarPoint4(points[3]);
        setStarPoint5(points[4]);
    }, []);

    const handleOnClick = (index: number) => {
        if(index === 1){
            setStarPoint1(!starPoint1)
            setStarPoint3(!starPoint3)
            setStarPoint4(!starPoint4)
        }else if(index === 2){
            setStarPoint2(!starPoint2)
            setStarPoint5(!starPoint5)
            setStarPoint4(!starPoint4)
        }else if(index === 3){
            setStarPoint3(!starPoint3)
            setStarPoint1(!starPoint1)
            setStarPoint5(!starPoint5)
        }else if(index === 4){
            setStarPoint4(!starPoint4)
            setStarPoint1(!starPoint1)
            setStarPoint2(!starPoint2)
        }else if(index === 5){
            setStarPoint5(!starPoint5)
            setStarPoint2(!starPoint2)
            setStarPoint3(!starPoint3)
        }
    }

    useEffect(() => {
        if(starPoint1 && starPoint2 && starPoint3 && starPoint4 && starPoint5){
            setIsSolved(true);
        }
    }, [starPoint1, starPoint2, starPoint3, starPoint4, starPoint5]);

    return (
        <div className="w-[18.5rem] md:w-[30.5rem] h-[18.5rem] md:h-[30.5rem] z-[80] bg-[#671111] border-4 border-solid border-primary">
            <div className="w-full h-full relative -translate-x-4">
                <div className={`point ${starPoint1 ? 'bg-green-500' : 'bg-[#f4f4f4]'}`} style={{ top: '15%', left: '50%' }} onClick={() => handleOnClick(1)}></div>
                <div className={`point ${starPoint2 ? 'bg-green-500' : 'bg-[#f4f4f4]'}`} style={{ top: '40%', left: '85%' }} onClick={() => handleOnClick(2)}></div>
                <div className={`point ${starPoint3 ? 'bg-green-500' : 'bg-[#f4f4f4]'}`} style={{ top: '80%', left: '70%' }} onClick={() => handleOnClick(3)}></div>
                <div className={`point ${starPoint4 ? 'bg-green-500' : 'bg-[#f4f4f4]'}`} style={{ top: '80%', left: '30%' }} onClick={() => handleOnClick(4)}></div>
                <div className={`point ${starPoint5 ? 'bg-green-500' : 'bg-[#f4f4f4]'}`} style={{ top: '40%', left: '15%' }} onClick={() => handleOnClick(5)}></div>
            </div>
        </div>
    )
}