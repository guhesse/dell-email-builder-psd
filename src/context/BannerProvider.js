import React, { useContext, useState, useEffect } from 'react';
import { BannerContext } from './BannerContext.js';

export default function BannerProvider({ children }) {
    const [artboards, setArtboards] = useState({});
    const [sortedArtboards, setSortedArtboards] = useState({});

    useEffect(() => {
        // Agrupa os artboards por linha
        const artboardsByRow = {};
        for (const key of Object.keys(artboards)) {
            const ratio = artboards[key].ratio;
            let row;
            switch (true) {
                case (ratio < 1):
                    row = 5;
                    break;
                case (ratio < 1.5):
                    row = 4;
                    break;
                case (ratio < 2):
                    row = 3;
                    break;
                case (ratio < 3):
                    row = 2;
                    break;
                case (ratio < 4):
                    row = 1;
                    break;
                default:
                    row = 0;
                    break;
            }
            if (!artboardsByRow[row]) {
                artboardsByRow[row] = {};
            }
            artboardsByRow[row][key] = artboards[key];
        }
    
        // Ordena os artboards dentro de cada linha por altura
        for (const row of Object.keys(artboardsByRow)) {
            const sortedKeys = Object.keys(artboardsByRow[row]).sort((a, b) => artboardsByRow[row][b].height - artboardsByRow[row][a].height);
            const sortedArtboards = {};
            for (const key of sortedKeys) {
                sortedArtboards[key] = artboardsByRow[row][key];
            }
            artboardsByRow[row] = sortedArtboards;
        }
    
        // Combina todos os artboards em um único objeto
        const newSortedArtboards = Object.values(artboardsByRow).reduce((a, b) => ({ ...a, ...b }), {});
    
        setSortedArtboards(newSortedArtboards);
    }, [artboards]);

    return (
        <BannerContext.Provider value={{
            artboards: sortedArtboards,
            setArtboards
        }}>
            {children}
        </BannerContext.Provider>
    );
};

export const useBannerContext = () => {
    return useContext(BannerContext);
};