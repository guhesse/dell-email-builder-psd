import React from 'react';
import { ArtboardSelector } from '../components/Selectors/Banner/BannerSelectors.jsx'
import BannerBuilder from '../components/Builder/Banner/BannerBuilder.jsx'

export default function BannerView() {
    return (
        <>
            <ArtboardSelector />
            <BannerBuilder />
        </>
    )
}