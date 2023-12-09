import React, { useState } from 'react';

export default function HeroSelector({ handleHeroSelect, onHeroCopyChange }) {

    const [selectedHero, setSelectedHero] = useState("");

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


    return (
        <>

            <div className="group"><sp-label>Hero</sp-label>
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
                    <div className="sp-tab-page" id="sp-spectrum-widgets-tab-page">
                        <sp-action-button label="Edit">
                            <div slot="icon" className="icon">
                                <svg id="spectrum-icon-18-Edit" viewBox="0 0 36 36">
                                    <path d="M33.567 8.2L27.8 2.432a1.215 1.215 0 0 0-.866-.353H26.9a1.371 1.371 0 0 0-.927.406L5.084 23.372a.99.99 0 0 0-.251.422L2.055 33.1c-.114.377.459.851.783.851a.251.251 0 0 0 .062-.007c.276-.063 7.866-2.344 9.311-2.778a.972.972 0 0 0 .414-.249l20.888-20.889a1.372 1.372 0 0 0 .4-.883 1.221 1.221 0 0 0-.346-.945zM11.4 29.316c-2.161.649-4.862 1.465-6.729 2.022l2.009-6.73z"></path>
                                </svg>
                            </div>
                        </sp-action-button>
                    </div>
                </sp-field-group>


                {selectedHero === 'hero2-promotion' && (
                    <>
                        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}>
                            <div style={{ margin: "4px" }}>
                                <sp-detail for="badge-field">BADGE</sp-detail>
                                <sp-textfield
                                    id="badge-field"
                                    placeholder="Insira o Badge"
                                    value={badgeValue}
                                    onInput={handleBadgeChange}
                                    {...(badgeValue !== "" && { valid: true })}
                                ></sp-textfield>
                            </div>
                            <div style={{ margin: "4px" }}>
                                <sp-detail for="headline-field">HEADLINE</sp-detail>
                                <sp-textfield
                                    id="headline-field"
                                    placeholder="Insira o Headline"
                                    value={headlineValue}
                                    onInput={handleHeadlineChange}
                                    {...(headlineValue !== "" && { valid: true })}
                                ></sp-textfield>
                            </div>
                            <div style={{ margin: "4px" }}>
                                <sp-detail for="subheadline-field">SUBHEADLINE</sp-detail>
                                <sp-textfield
                                    id="subheadline-field"
                                    placeholder="Insira o SubHeadline"
                                    value={subHeadlineValue}
                                    onInput={handleSubHeadlineChange}
                                    {...(subHeadlineValue !== "" && { valid: true })}
                                ></sp-textfield>
                            </div>
                            <div style={{ margin: "4px" }}>
                                <sp-detail for="inline-promo-field">INLINE PROMO</sp-detail>
                                <sp-textfield
                                    id="inline-promo-field"
                                    placeholder="Insira o Inline Promo"
                                    value={inlinePromoValue}
                                    onInput={handleInlinePromoChange}
                                    {...(inlinePromoValue !== "" && { valid: true })}
                                ></sp-textfield>
                            </div>
                            <div style={{ margin: "4px" }}>
                                <sp-detail for="pname-field">PRODUCT NAME</sp-detail>
                                <sp-textfield
                                    id="pname-field"
                                    placeholder="Insira o Product Name"
                                    value={productNameValue}
                                    onInput={handleProductNameChange}
                                    {...(productNameValue !== "" && { valid: true })}
                                ></sp-textfield>
                            </div>
                            <div style={{ margin: "4px" }}>
                                <sp-detail for="specs-field">SPECS</sp-detail>
                                <sp-textfield
                                    id="specs-field"
                                    placeholder="Insira as Specs"
                                    value={specsValue}
                                    onInput={handleSpecsChange}
                                    {...(specsValue !== "" && { valid: true })}
                                ></sp-textfield>
                            </div>
                            <div style={{ margin: "4px" }}>
                                <sp-detail for="price-field">PRICE</sp-detail>
                                <sp-textfield
                                    id="price-field"
                                    placeholder="Insira o Valor"
                                    value={priceValue}
                                    onInput={handlePriceChange}
                                    {...(priceValue !== "" && { valid: true })}
                                ></sp-textfield>
                            </div>
                            <div style={{ margin: "4px" }}>
                                <sp-detail for="hero-cta-field">HERO CTA</sp-detail>
                                <sp-textfield
                                    id="hero-cta-field"
                                    placeholder="Insira as Specs"
                                    value={heroCtaValue}
                                    onInput={handleHeroCtaChange}
                                    {...(heroCtaValue !== "" && { valid: true })}
                                ></sp-textfield>
                            </div>

                        </div>
                    </>
                )}

                {selectedHero === 'hero8-showcase' && (
                    <>
                        <div style={{ display: "flex", flexWrap: "wrap" }}>
                            <div>
                                <sp-detail for="badge-field">BADGE</sp-detail>
                                <sp-textfield
                                    id="badge-field"
                                    placeholder="Insira o Badge"
                                    value={badgeValue}
                                    onInput={handleBadgeChange}
                                ></sp-textfield>
                            </div>
                            <div>
                                <sp-detail for="headline-field">HEADLINE</sp-detail>
                                <sp-textfield
                                    id="headline-field"
                                    placeholder="Insira o Headline"
                                    value={headlineValue}
                                    onInput={handleHeadlineChange}
                                ></sp-textfield>
                            </div>
                            <div>
                                <sp-detail for="subheadline-field">SUBHEADLINE</sp-detail>
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
            </div >

        </>
    );
}
