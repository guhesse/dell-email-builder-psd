import React, { useState } from 'react';
import { Theme } from "@swc-react/theme";

export default function HeroSelector({ handleHeroSelect }) {
    const [selectedHero, setSelectedHero] = useState(null);

    const handleHeroClick = (hero) => {
        setSelectedHero(hero);
        handleHeroSelect(hero); // Executa a função passada pelo pai (handleHeroSelect) com o hero selecionado
    };

    return (
        <>
            <Theme theme="dark" scale="medium" color="dark">
                <p>Hero</p>
                <sp-field-group style={{ width: "100vw", display: "flex", flexDirection: "row", gap: "5px" }}>
                    <sp-picker style={{ width: "45vw", padding: "0" }} id="picker-m" size="m" label="Selection type">
                        <sp-menu-item onClick={() => handleHeroClick('hero1-promotion')}>Hero Layout 1 - Promotion 1</sp-menu-item>
                        <sp-menu-item onClick={() => handleHeroClick('hero1-promotion2')}>Hero Layout 1 - Promotion 2</sp-menu-item>
                        <sp-menu-item onClick={() => handleHeroClick('hero1-business')}>Hero Layout 1 - Promotion 2</sp-menu-item>
                        <sp-menu-item onClick={() => handleHeroClick('hero2-promotion')}>Hero Layout 2 - Promotion</sp-menu-item>
                        <sp-menu-item onClick={() => handleHeroClick('hero2-showcase')}>Hero Layout 2 - Showcase</sp-menu-item>
                        <sp-menu-item onClick={() => handleHeroClick('hero3-promotion')}>Hero Layout 3 - Promotion</sp-menu-item>
                        <sp-menu-item onClick={() => handleHeroClick('hero4-promotion')}>Hero Layout 4 - Promotion</sp-menu-item>
                        <sp-menu-item onClick={() => handleHeroClick('hero5-promotion')}>Hero Layout 5 - Promotion</sp-menu-item>
                        <sp-menu-item onClick={() => handleHeroClick('hero6-promotion')}>Hero Layout 6 - Showcase</sp-menu-item>
                        <sp-menu-item onClick={() => handleHeroClick('hero7-promotion')}>Hero Layout 7 - Business</sp-menu-item>
                        <sp-menu-item onClick={() => handleHeroClick('hero8-showcase')}>Hero Layout 8 - Showcase</sp-menu-item>
                        <sp-menu-item onClick={() => handleHeroClick('hero9-promotion')}>Hero Layout 9 - Promotion</sp-menu-item>
                        <sp-menu-item onClick={() => handleHeroClick('hero10-showcase')}>Hero Layout 10 - Showcase</sp-menu-item>
                        <sp-menu-item onClick={() => handleHeroClick('hero11-showcase')}>Hero Layout 11 - Showcase 1</sp-menu-item>
                        <sp-menu-item onClick={() => handleHeroClick('hero11-showcase2')}>Hero Layout 11 - Showcase 2</sp-menu-item>
                        <sp-menu-item onClick={() => handleHeroClick('hero12-showcase')}>Hero Layout 12 - Promotion</sp-menu-item>
                    </sp-picker>
                </sp-field-group>
            </Theme>
            {selectedHero && <p>Selecionado: {selectedHero}</p>}
        </>
    );
}
