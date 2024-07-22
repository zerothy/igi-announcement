import React, { createContext, useContext, useState } from 'react';
import { Dispatch, SetStateAction } from 'react';

const SolvedContext = createContext({ 
    isSolved: false, 
    setIsSolved: (() => {}) as Dispatch<SetStateAction<boolean>>,
    isFailed: false,
    setIsFailed: (() => {}) as Dispatch<SetStateAction<boolean>>,
    totalWins: 0,
    setTotalWins: (() => {}) as Dispatch<SetStateAction<number>>,
});

export const useSolved = () => useContext(SolvedContext);

export const SolvedProvider = ({ children }: { children: React.ReactNode }) => {
    const [isSolved, setIsSolved] = useState(false);
    const [isFailed, setIsFailed] = useState(false);
    const [totalWins, setTotalWins] = useState(0);

    return (
        <SolvedContext.Provider value={{ isSolved, setIsSolved, isFailed, setIsFailed, totalWins, setTotalWins }}>
            {children}
        </SolvedContext.Provider>
    );
};