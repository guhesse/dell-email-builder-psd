import React, { useState } from 'react';
import { Theme } from "@swc-react/theme";

export default function HeroSelector({ handleHeroSelect, onHeroCopyChange }) {

    const [selectedHero, setSelectedHero] = useState('hero2-promotion');

    const handleHeroClick = (hero) => {
        setSelectedHero(hero);
        handleHeroSelect(hero); // Executa a função passada pelo pai (handleHeroSelect) com o hero selecionado
    };

    const [badgeValue, setBadgeValue] = useState(""); // Armazena o Valor do Badge
    const [headlineValue, setHeadlineValue] = useState(""); // Armazena o Valor do Headline
    const [subHeadlineValue, setSubHeadlineValue] = useState(""); // Armazena o Valor do SubHeadline
    const [inlinePromoValue, setInlinePromoValue] = useState(""); // Armazena o Valor do Inline Promo
    const [productNameValue, setProductNameValue] = useState(""); // Armazena o Valor do Product Name
    const [specsValue, setSpecsValue] = useState("");  // Armazena o Valor dos Specs
    const [priceValue, setPriceValue] = useState("");  // Armazena o Valor dos Specs
    const [heroCtaValue, setHeroCtaValue] = useState("") // Estado que Arma

    const handleBadgeChange = (event) => {
        const value = event.target.value;
        setBadgeValue(value);
        onHeroCopyChange({
            badgeValue: value,
            badgeValue,
            headlineValue,
            subHeadlineValue,
            inlinePromoValue,
            productNameValue,
            priceValue,
            specsValue,
            heroCtaValue,
        });
    };

    const handleHeadlineChange = (event) => {
        const value = event.target.value;
        setHeadlineValue(value);
        onHeroCopyChange({
            badgeValue,
            headlineValue: value,
            subHeadlineValue,
            inlinePromoValue,
            productNameValue,
            priceValue,
            specsValue,
            heroCtaValue,
        });
    };

    const handleSubHeadlineChange = (event) => {
        const value = event.target.value;
        setSubHeadlineValue(value);
        onHeroCopyChange({
            badgeValue,
            headlineValue,
            subHeadlineValue: value,
            inlinePromoValue,
            productNameValue,
            priceValue,
            specsValue,
            heroCtaValue,
        });
    };

    const handleInlinePromoChange = (event) => {
        const value = event.target.value;
        setInlinePromoValue(value);
        onHeroCopyChange({
            badgeValue,
            headlineValue,
            subHeadlineValue,
            inlinePromoValue: value,
            productNameValue,
            priceValue,
            specsValue,
            heroCtaValue,
        });
    };

    const handleProductNameChange = (event) => {
        const value = event.target.value;
        setProductNameValue(value);
        onHeroCopyChange({
            badgeValue,
            headlineValue,
            subHeadlineValue,
            inlinePromoValue,
            productNameValue: value,
            priceValue,
            specsValue,
            heroCtaValue,
        });
    };

    const handlePriceChange = (event) => {
        const value = event.target.value;
        setPriceValue(value);
        onHeroCopyChange({
            badgeValue,
            headlineValue,
            subHeadlineValue,
            inlinePromoValue,
            productNameValue,
            priceValue: value,
            specsValue,
            heroCtaValue,
        });
    };

    const handleSpecsChange = (event) => {
        const value = event.target.value;
        setSpecsValue(value);
        onHeroCopyChange({
            badgeValue,
            headlineValue,
            subHeadlineValue,
            inlinePromoValue,
            productNameValue,
            priceValue,
            specsValue: value,
            heroCtaValue,
        });
    };

    const handleHeroCtaChange = (event) => {
        const value = event.target.value;
        setHeroCtaValue(value);
        onHeroCopyChange({
            badgeValue,
            headlineValue,
            subHeadlineValue,
            inlinePromoValue,
            productNameValue,
            priceValue,
            specsValue,
            heroCtaValue: value,
        });
    };

    console.log("Badge:", badgeValue)
    console.log("Headline:", headlineValue)
    console.log("Subheadline:", subHeadlineValue)
    console.log("Inline Promo:", inlinePromoValue)
    console.log("Product Name:", productNameValue)
    console.log("Specs:", specsValue)
    console.log("Price:", priceValue)
    console.log("Cta:", heroCtaValue)


    return (
        <>

            <sp-field-label for="hero-field">Hero:</sp-field-label>
            <sp-field-group style={{ width: "100vw", display: "flex", flexDirection: "row", gap: "5px" }}>
                <sp-picker placeholder="Selecione o hero" style={{ width: "45vw", padding: "0" }} id="picker-m" size="m" label="Selection type">
                    <sp-menu>
                        <sp-menu-item onClick={() => handleHeroClick(null)}>None</sp-menu-item>
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
                    <div style={{ display: "flex", flexWrap: "wrap" }}>
                        <div>
                            <sp-field-label for="badge-field">Badge:</sp-field-label>
                            <sp-textfield
                                id="badge-field"
                                placeholder="Insira o Badge"
                                value={badgeValue}
                                onInput={handleBadgeChange}
                            ></sp-textfield>
                        </div>
                        <div>
                            <sp-field-label for="headline-field">Headline:</sp-field-label>
                            <sp-textfield
                                id="headline-field"
                                placeholder="Insira o Headline"
                                value={headlineValue}
                                onInput={handleHeadlineChange}
                            ></sp-textfield>
                        </div>
                        <div>
                            <sp-field-label for="subheadline-field">SubHeadline:</sp-field-label>
                            <sp-textfield
                                id="subheadline-field"
                                placeholder="Insira o SubHeadline"
                                value={subHeadlineValue}
                                onInput={handleSubHeadlineChange}
                            ></sp-textfield>
                        </div>
                        <div>
                            <sp-field-label for="inline-promo-field">Inline Promo:</sp-field-label>
                            <sp-textfield
                                id="inline-promo-field"
                                placeholder="Insira o Inline Promo"
                                value={inlinePromoValue}
                                onInput={handleInlinePromoChange}
                            ></sp-textfield>
                        </div>
                        <div>
                            <sp-field-label for="pname-field">Product Name:</sp-field-label>
                            <sp-textfield
                                id="pname-field"
                                placeholder="Insira o Product Name"
                                value={productNameValue}
                                onInput={handleProductNameChange}
                            ></sp-textfield>
                        </div>
                        <div>
                            <sp-field-label for="specs-field">Specs:</sp-field-label>
                            <sp-textfield
                                id="specs-field"
                                placeholder="Insira as Specs"
                                value={specsValue}
                                onInput={handleSpecsChange}
                            ></sp-textfield>
                        </div>
                        <div>
                            <sp-field-label for="price-field">Price:</sp-field-label>
                            <sp-textfield
                                id="price-field"
                                placeholder="Insira o Valor"
                                value={priceValue}
                                onInput={handlePriceChange}
                            ></sp-textfield>
                        </div>
                        <div>
                            <sp-field-label for="hero-cta-field">Hero CTA:</sp-field-label>
                            <sp-textfield
                                id="hero-cta-field"
                                placeholder="Insira as Specs"
                                value={heroCtaValue}
                                onInput={handleHeroCtaChange}
                            ></sp-textfield>
                        </div>
                    </div>
                </>
            )}

            {selectedHero === 'hero8-showcase' && (
                <>
                    <div style={{ display: "flex", flexWrap: "wrap" }}>
                        <div>
                            <sp-field-label for="badge-field">Badge</sp-field-label>
                            <sp-textfield
                                id="badge-field"
                                placeholder="Insira o Badge"
                                value={badgeValue}
                                onInput={handleBadgeChange}
                            ></sp-textfield>
                        </div>
                        <div>
                            <sp-field-label for="headline-field">Headline</sp-field-label>
                            <sp-textfield
                                id="headline-field"
                                placeholder="Insira o Headline"
                                value={headlineValue}
                                onInput={handleHeadlineChange}
                            ></sp-textfield>
                        </div>
                        <div>
                            <sp-field-label for="subheadline-field">SubHeadline</sp-field-label>
                            <sp-textfield
                                id="subheadline-field"
                                placeholder="Insira o SubHeadline"
                                value={subHeadlineValue}
                                onInput={handleSubHeadlineChange}
                            ></sp-textfield>
                        </div>
                    </div>
                </>
            )}

        </>
    );
}
