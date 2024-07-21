import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import Level1Puzzle from '@/atoms/Level1Puzzle';

import { useSolved } from '@/context/SolvedContext';

export default function Board() {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const { isSolved, setIsSolved } = useSolved();

    const [rows, setRows] = useState<number>(3);
    const [columns, setColumns] = useState<number>(3);

    const [currTile, setCurrTile] = useState<number | null>(null); // The tile that is currently being moved
    const [otherTile, setOtherTile] = useState<number | null>(null); // The blank tile

    const [turns, setTurns] = useState<number>(0);

    // const [order, setOrder] = useState<number[]>(Level1Puzzle[Math.floor(Math.random() * Level1Puzzle.length)]);
    const [order, setOrder] = useState<number[]>(Level1Puzzle[0]);

    useEffect(() => {
        const puzzleOrder = Level1Puzzle[Math.floor(Math.random() * Level1Puzzle.length)];
        setOrder(puzzleOrder);
        // setOrder([1,2,3,4,5,6,7,9,8]);
        setIsLoading(false);

        return () => {
            setIsLoading(true);
        }
    }, [])

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
        if(currTile === null || otherTile === null || otherTile !== 9) return

        const currCoord = order.indexOf(currTile);
        const otherCoord = order.indexOf(otherTile);

        if(currCoord % columns !== 0 && currCoord - 1 === otherCoord) swapTiles(currTile, otherTile);
        if(currCoord % columns !== columns - 1 && currCoord + 1 === otherCoord) swapTiles(currTile, otherTile);
        if(currCoord >= columns && currCoord - columns === otherCoord) swapTiles(currTile, otherTile);
        if(currCoord < rows * columns - columns && currCoord + columns === otherCoord) swapTiles(currTile, otherTile);

        setTurns(turns + 1);
    }

    const handleOnClick = (e: any) => {
        const tile = parseInt(e.currentTarget.alt);
        const tileIndex = order.indexOf(tile);
        const blankIndex = order.indexOf(9);

        if(tileIndex % columns !== 0 && tileIndex - 1 === blankIndex) swapTiles(tile, 9);
        if(tileIndex % columns !== columns - 1 && tileIndex + 1 === blankIndex) swapTiles(tile, 9);
        if(tileIndex >= columns && tileIndex - columns === blankIndex) swapTiles(tile, 9);
        if(tileIndex < rows * columns - columns && tileIndex + columns === blankIndex) swapTiles(tile, 9);

        setTurns(turns + 1);
    }

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
                        src={`/images/level1/${tile}.png`} 
                        alt={`${tile}`}
                        className={`w-[6rem] md:w-[10rem] h-[6rem] md:h-[10rem] border border-solid border-gray-500 ${tile === 9 ? 'opacity-0' : ''}`}
                        key={tile}
                        onDragStart={handleDragStart}   // NOTE: Click an image to drag
                        onDragOver={handleDragOver}     // NOTE: Moving the image while being clicked
                        onDragEnter={handleDragEnter}   // NOTE: Dragging the image into the other image
                        onDragLeave={handleDragLeave}   // NOTE: Dragged image leaving other image
                        onDrop={handleDrop}             // NOTE: Dragged image then dropped the image on other image
                        onDragEnd={handleDragEnd}       // NOTE: After drop, swap the tiles
                        onClick={handleOnClick}         // NOTE: Click the image to move the tile
                        draggable={tile !== 9}          // NOTE: If the tile is not the blank tile, it can be dragged

                        layout
                        layoutId={`tile-${tile}`}
                        transition={{ duration: 0.2 }}
                        initial={{opacity: tile === 9 ? 0 : 1 }}
                    />
                )))
            }
        </div>
    )
}