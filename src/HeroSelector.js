import React, { useState } from 'react';
import { Theme } from "@swc-react/theme";

export default function HeroSelector({ handleHeroSelect, onHeroCopyChange }) {

    const [selectedHero, setSelectedHero] = useState(null);

    const handleHeroClick = (hero) => {
        setSelectedHero(hero);
        handleHeroSelect(hero); // Executa a função passada pelo pai (handleHeroSelect) com o hero selecionado
    };

    const [badgeValue, setBadgeValue] = useState("");
    const [headlineValue, setHeadlineValue] = useState("");
    const [subHeadlineValue, setSubHeadlineValue] = useState("");

    const handleBadgeChange = (event) => {
        const value = event.target.value;
        setBadgeValue(value);
        onHeroCopyChange({
            badgeValue: value,
            headlineValue,
            subHeadlineValue
        });
    };

    const handleHeadlineChange = (event) => {
        const value = event.target.value;
        setHeadlineValue(value);
        onHeroCopyChange({
            badgeValue,
            headlineValue: value,
            subHeadlineValue
        });
    };
    const handleSubHeadlineChange = (event) => {
        const value = event.target.value;
        setSubHeadlineValue(value);
        onHeroCopyChange({
            badgeValue,
            headlineValue,
            subHeadlineValue: value
        });
    };


    return (
        <>

            <sp-field-label for="hero-field">Hero:</sp-field-label>
            <sp-field-group style={{ width: "100vw", display: "flex", flexDirection: "row", gap: "5px" }}>
                <sp-picker placeholder="Selecione o hero" style={{ width: "45vw", padding: "0" }} id="picker-m" size="m" label="Selection type">
                    <sp-menu>
                        <sp-menu-item onClick={() => handleHeroClick('null')}>None</sp-menu-item>
                        <sp-menu-item disabled onClick={() => handleHeroClick('hero1-promotion')}>Hero Layout 1 - Promotion 1</sp-menu-item>
                        <sp-menu-item disabled onClick={() => handleHeroClick('hero1-promotion2')}>Hero Layout 1 - Promotion 2</sp-menu-item>
                        <sp-menu-item disabled onClick={() => handleHeroClick('hero1-business')}>Hero Layout 1 - Business</sp-menu-item>
                        <sp-menu-item onClick={() => handleHeroClick('hero2-promotion')}>Hero Layout 2 - Promotion</sp-menu-item>
                        <sp-menu-item disabled onClick={() => handleHeroClick('hero2-showcase')}>Hero Layout 2 - Showcase</sp-menu-item>
                        <sp-menu-item disabled onClick={() => handleHeroClick('hero3-promotion')}>Hero Layout 3 - Promotion</sp-menu-item>
                        <sp-menu-item disabled onClick={() => handleHeroClick('hero4-promotion')}>Hero Layout 4 - Promotion</sp-menu-item>
                        <sp-menu-item disabled onClick={() => handleHeroClick('hero5-promotion')}>Hero Layout 5 - Promotion</sp-menu-item>
                        <sp-menu-item disabled onClick={() => handleHeroClick('hero6-promotion')}>Hero Layout 6 - Showcase</sp-menu-item>
                        <sp-menu-item disabled onClick={() => handleHeroClick('hero7-promotion')}>Hero Layout 7 - Business</sp-menu-item>
                        <sp-menu-item onClick={() => handleHeroClick('hero8-showcase')}>Hero Layout 8 - Showcase</sp-menu-item>
                        <sp-menu-item disabled onClick={() => handleHeroClick('hero9-promotion')}>Hero Layout 9 - Promotion</sp-menu-item>
                        <sp-menu-item disabled onClick={() => handleHeroClick('hero10-showcase')}>Hero Layout 10 - Showcase</sp-menu-item>
                        <sp-menu-item disabled onClick={() => handleHeroClick('hero11-showcase')}>Hero Layout 11 - Showcase 1</sp-menu-item>
                        <sp-menu-item disabled onClick={() => handleHeroClick('hero11-showcase2')}>Hero Layout 11 - Showcase 2</sp-menu-item>
                        <sp-menu-item disabled onClick={() => handleHeroClick('hero12-showcase')}>Hero Layout 12 - Promotion</sp-menu-item>
                    </sp-menu>
                </sp-picker>
            </sp-field-group>

            {selectedHero === 'hero2-promotion' && (
                <>
                    <div>
                        <sp-field-label for="badge-field">Badge</sp-field-label>
                        <sp-textfield
                            style={{ width: "90vw" }}
                            id="badge-field"
                            placeholder="Insira o Badge"
                            value={badgeValue}
                            onInput={handleBadgeChange}
                        ></sp-textfield>
                        <sp-field-label for="headline-field">Headline</sp-field-label>
                        <sp-textfield
                            style={{ width: "90vw" }}
                            id="haedline-field"
                            placeholder="Insira o Headline"
                            value={headlineValue}
                            onInput={handleHeadlineChange}
                        ></sp-textfield>
                        <sp-field-label for="subheadline-field">SubHeadline</sp-field-label>
                        <sp-textfield
                            style={{ width: "90vw" }}
                            id="subheadline-field"
                            placeholder="Insira o SubHeadline"
                            value={subHeadlineValue}
                            onInput={handleSubHeadlineChange}
                        ></sp-textfield>
                    </div>
                </>
            )}

            {selectedHero === 'hero8-showcase' && (
                <>
                    <div>
                        <sp-field-label for="badge-field">Badge</sp-field-label>
                        <sp-textfield
                            style={{ width: "90vw" }}
                            id="badge-field"
                            placeholder="Insira o Badge"
                            value={badgeValue}
                            onInput={handleBadgeChange}
                        ></sp-textfield>
                        <sp-field-label for="headline-field">Headline</sp-field-label>
                        <sp-textfield
                            style={{ width: "90vw" }}
                            id="haedline-field"
                            placeholder="Insira o Headline"
                            value={headlineValue}
                            onInput={handleHeadlineChange}
                        ></sp-textfield>
                        <sp-field-label for="subheadline-field">SubHeadline</sp-field-label>
                        <sp-textfield
                            style={{ width: "90vw" }}
                            id="subheadline-field"
                            placeholder="Insira o SubHeadline"
                            value={subHeadlineValue}
                            onInput={handleSubHeadlineChange}
                        ></sp-textfield>
                    </div>
                </>
            )}

        </>
    );
}
