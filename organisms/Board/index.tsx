import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import Level1Puzzle from '@/atoms/Level1Puzzle';
import Level2Puzzle from '@/atoms/Level2Puzzle';
import Level3Puzzle from '@/atoms/Level3Puzzle';

import { useSolved } from '@/context/SolvedContext';

export default function Board() {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const { isFailed, isSolved, setIsSolved, setIsFailed, totalWins } = useSolved();

    const [rows, setRows] = useState<number>(3);
    const [columns, setColumns] = useState<number>(3);

    const [currTile, setCurrTile] = useState<number | null>(null); // The tile that is currently being moved
    const [otherTile, setOtherTile] = useState<number | null>(null); // The blank tile

    const [turns, setTurns] = useState<number>(0);

    // const [order, setOrder] = useState<number[]>(Level1Puzzle[Math.floor(Math.random() * Level1Puzzle.length)]);
    const [order, setOrder] = useState<number[]>([]);

    useEffect(() => {
        if(totalWins === 1) {
            const puzzleOrder = Level1Puzzle[Math.floor(Math.random() * Level1Puzzle.length)];
            setOrder(puzzleOrder);
            // setOrder([1, 2, 3, 4, 5, 6, 7, 9, 8]);
        }else if(totalWins === 2) {
            const puzzleOrder = Level2Puzzle[Math.floor(Math.random() * Level2Puzzle.length)];
            setOrder(puzzleOrder);
            // setOrder([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 25, 24]);
        }
        // else if(totalWins === 2 || totalWins === 3) {
        //     const puzzleOrder = Level3Puzzle[Math.floor(Math.random() * Level3Puzzle.length)];
        //     setOrder(puzzleOrder);
        //     // setOrder([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 49, 48]);
        // }
        setIsLoading(false);
        setIsLoading(false);

        return () => {
            setIsLoading(true);
        }
    }, []);

    useEffect(() => {
        if(isFailed) retryPuzzle();
    }, [isFailed]);

    useEffect(() => {
        if(!isSolved) {
            retryPuzzle();
        }
    }, [isSolved]);

    useEffect(() => {
        if(totalWins === 1){
            setRows(3);
            setColumns(3);
        }else if(totalWins === 2){
            setRows(5);
            setColumns(5);
        }
    }, [totalWins])

    const retryPuzzle = async () => {
        setIsLoading(true); // Start loading
    
        await new Promise(resolve => setTimeout(resolve, 0)); // Simulate async operation
    
        if(totalWins === 1) {
            const puzzleOrder = Level1Puzzle[Math.floor(Math.random() * Level1Puzzle.length)];
            setOrder(puzzleOrder);
            // setOrder([1, 2, 3, 4, 5, 6, 7, 9, 8]);
        } else if(totalWins === 2) {
            const puzzleOrder = Level2Puzzle[Math.floor(Math.random() * Level2Puzzle.length)];
            setOrder(puzzleOrder);
            // setOrder([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 25, 24]);
        } 
        // else if(totalWins === 2 || totalWins === 3) {
        //     const puzzleOrder = Level3Puzzle[Math.floor(Math.random() * Level3Puzzle.length)];
        //     setOrder(puzzleOrder);
        //     // setOrder([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 49, 48]);
        // }
    
        setIsSolved(false);
        setIsFailed(false);
        setTurns(0);
    
        setIsLoading(false);
    }

    const handleDragStart = (e: any) => {
        const tile = parseInt(e.currentTarget.alt);
        setCurrTile(tile);
    }

    const handleDragOver = (e: React.DragEvent<HTMLImageElement>) => {
        e.preventDefault();
    }

    const handleDragEnter = (e: React.DragEvent<HTMLImageElement>) => {
        e.preventDefault();
    }

    const handleDragLeave = (e: React.DragEvent<HTMLImageElement>) => {
        e.preventDefault();
    }

    const handleDrop = (e: React.DragEvent<HTMLImageElement>) => {
        const tile = parseInt(e.currentTarget.alt);
        setOtherTile(tile);
    }

    const swapTiles = (currTile: number, otherTile: number) => {
        const currIndex = order.indexOf(currTile);
        const otherIndex = order.indexOf(otherTile);

        const newOrder = [...order];
        newOrder[currIndex] = otherTile;
        newOrder[otherIndex] = currTile;
        setOrder(newOrder);

        if(newOrder.toString() === Array.from({ length: rows * columns }, (_, i) => i + 1).toString()) {
            setIsSolved(true);
        }
    }

    const handleDragEnd = () => {
        if(currTile === null || otherTile === null) return
        if(totalWins === 1 && otherTile !== 9) return 
        if(totalWins === 2 && otherTile !== 25) return
        // if(totalWins === 2 && otherTile !== 49) return

        const currCoord = order.indexOf(currTile);
        const otherCoord = order.indexOf(otherTile);

        if(currCoord % columns !== 0 && currCoord - 1 === otherCoord) swapTiles(currTile, otherTile);
        if(currCoord % columns !== columns - 1 && currCoord + 1 === otherCoord) swapTiles(currTile, otherTile);
        if(currCoord >= columns && currCoord - columns === otherCoord) swapTiles(currTile, otherTile);
        if(currCoord < rows * columns - columns && currCoord + columns === otherCoord) swapTiles(currTile, otherTile);

        setTurns(turns + 1);
    }

    const handleOnClick = (e: any) => {
        const blankTile = totalWins === 1 ? 9 : (totalWins === 1 ? 25 : 49);
        
        const tile = parseInt(e.currentTarget.alt);
        const tileIndex = order.indexOf(tile);
        const blankIndex = order.indexOf(blankTile);
        console.log(tileIndex, blankIndex);

        if(tileIndex % columns !== 0 && tileIndex - 1 === blankIndex) swapTiles(tile, blankTile);
        if(tileIndex % columns !== columns - 1 && tileIndex + 1 === blankIndex) swapTiles(tile, blankTile);
        if(tileIndex >= columns && tileIndex - columns === blankIndex) swapTiles(tile, blankTile);
        if(tileIndex < rows * columns - columns && tileIndex + columns === blankIndex) swapTiles(tile, blankTile);

        setTurns(turns + 1);
    }

    const handleTouchStart = (e: React.TouchEvent<HTMLImageElement>) => {
        const tile = parseInt(e.currentTarget.alt);
        setCurrTile(tile);
    };
    
    const handleTouchMove = (e: React.TouchEvent<HTMLImageElement>) => {
        e.preventDefault(); // Prevent scrolling when touching and moving on puzzle pieces
    };

    return (
        <div className='w-[18.5rem] md:w-[30.5rem] h-[18.5rem] md:h-[30.5rem] z-[80] bg-[#671111] border-4 border-solid border-primary flex flex-wrap'>
            {
                (isLoading) ? (
                    <div className='w-full h-full flex justify-center items-center'>
                        <h1 className='font-urbanist text-2xl text-[#FFEDFD]'>Loading...</h1>
                    </div>
                ) :
                (order.map((tile, index) => (
                    <motion.img
                        src={`/images/level${totalWins}/${tile}.${totalWins !== 2 ? 'png' : 'jpg'}`} 
                        alt={`${tile}`}
                        className={`${totalWins === 1 ? 'w-[6rem] h-[6rem] md:w-[10rem] md:h-[10rem]' : (totalWins === 2 ? 'w-[3.6rem] h-[3.6rem] md:w-[6rem] md:h-[6rem]' : '')} border border-solid border-gray-500 ${((totalWins === 1 && tile === 9) || (totalWins === 2 && tile === 25)) ? 'opacity-0' : 'opacity-100'}`}
                        key={tile}
                        onDragStart={handleDragStart}   // NOTE: Click an image to drag
                        onDragOver={handleDragOver}     // NOTE: Moving the image while being clicked
                        onDragEnter={handleDragEnter}   // NOTE: Dragging the image into the other image
                        onDragLeave={handleDragLeave}   // NOTE: Dragged image leaving other image
                        onDrop={handleDrop}             // NOTE: Dragged image then dropped the image on other image
                        onDragEnd={handleDragEnd}       // NOTE: After drop, swap the tiles
                        onClick={handleOnClick}         // NOTE: Click the image to move the tile
                        onTouchStart={handleTouchStart} // NOTE: Touch the image to move the tile
                        onTouchMove={handleTouchMove}   // NOTE: Moving the image while being touched
                        draggable={tile !== (totalWins === 1 ? 9 : (totalWins === 2 ? 25 : 49))} // NOTE: If the tile is not the blank tile, it can be dragged

                        layout
                        layoutId={`tile-${tile}`}
                        transition={{ duration: 0.2 }}
                        initial={{opacity: tile === (totalWins === 1 ? 9 : (totalWins === 2 ? 25 : 49)) ? 0 : 1}}
                    />
                )))
            }
        </div>
    )
}