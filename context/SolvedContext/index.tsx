import React, { createContext, useContext, useState } from 'react';
import { Dispatch, SetStateAction } from 'react';

const SolvedContext = createContext({ 
    isSolved: false, 
    setIsSolved: (() => {}) as Dispatch<SetStateAction<boolean>>,
    isFailed: false,
    setIsFailed: (() => {}) as Dispatch<SetStateAction<boolean>>,
});

export const useSolved = () => useContext(SolvedContext);

export const SolvedProvider = ({ children }: { children: React.ReactNode }) => {
    const [isSolved, setIsSolved] = useState(false);
    const [isFailed, setIsFailed] = useState(false);

    return (
        <SolvedContext.Provider value={{ isSolved, setIsSolved, isFailed, setIsFailed }}>
            {children}
        </SolvedContext.Provider>
    );
};