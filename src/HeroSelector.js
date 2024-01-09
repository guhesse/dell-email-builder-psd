import React, { useState } from 'react';

export default function HeroSelector({ handleHeroSelect, onHeroCopyChange }) {

    const [selectedHero, setSelectedHero] = useState("");

    const handleHeroClick = (hero) => {
        setSelectedHero(hero);
        handleHeroSelect(hero); // Executa a função passada pelo pai (handleHeroSelect) com o hero selecionado
    };

    const useFormState = (initialState) => {
        const [formState, setFormState] = useState(initialState);

        const handleInputChange = (key, value) => {
            setFormState({
                ...formState,
                [key]: value,
            });

            onHeroCopyChange({ ...formState, [key]: value });
        };

        return [formState, handleInputChange];
    };

    const [
        {
            badgeValue,
            headlineValue,
            subHeadlineValue,
            inlinePromoValue,
            inlinePromo2Value,
            productNameValue,
            productName2Value,
            productName3Value,
            specsValue,
            specs2Value,
            priceValue,
            price2Value,
            heroCtaValue,
        },
        setFormValue,
    ] = useFormState({
        badgeValue: "",
        headlineValue: "",
        subHeadlineValue: "",
        inlinePromoValue: "",
        inlinePromo2Value: "",
        productNameValue: "",
        productName2Value: "",
        productName3Value: "",
        specsValue: "",
        specs2Value: "",
        priceValue: "",
        price2Value: "",
        heroCtaValue: "",
    });

    console.log("Badge Value:", badgeValue)

    const handleInputChange = (key) => (event) => {
        const value = event.target.value;
        setFormValue(key, value);
    };

    const [valid, setValid] = useState(undefined);

    const handleBlur = () => {
        const inputValue = badgeValue !== "" ? true : undefined;
        setValid(inputValue);
    };

    return (
        <>

            <div className="group"><sp-label>Hero</sp-label>
                <sp-field-group style={{ width: "100vw", display: "flex", flexDirection: "row", gap: "5px" }}>
                    <sp-picker placeholder="Selecione o hero" style={{ width: "45vw", padding: "0" }} id="picker-m" size="m" label="Selection type">
                        <sp-menu>
                            <sp-menu-item onClick={() => handleHeroClick(null)}>None</sp-menu-item>
                            <sp-menu-item onClick={() => handleHeroClick('hero1-lifestyle')}>Hero Layout 1 - Lifestyle</sp-menu-item>
                            <sp-menu-item onClick={() => handleHeroClick('hero1-standard')}>Hero Layout 1 - Standard</sp-menu-item>
                            <sp-menu-item onClick={() => handleHeroClick('hero2-promotion')}>Hero Layout 2 - Promotion</sp-menu-item>
                            <sp-menu-item disabled onClick={() => handleHeroClick('hero2-showcase')}>Hero Layout 2 - Showcase</sp-menu-item>
                            <sp-menu-item disabled onClick={() => handleHeroClick('hero3-promotion')}>Hero Layout 3 - Promotion</sp-menu-item>
                            <sp-menu-item disabled onClick={() => handleHeroClick('hero4-promotion')}>Hero Layout 4 - Promotion</sp-menu-item>
                            <sp-menu-item onClick={() => handleHeroClick('hero5-promotion')}>Hero Layout 5 - Promotion</sp-menu-item>
                            <sp-menu-item onClick={() => handleHeroClick('hero6-promotion')}>Hero Layout 6 - Showcase</sp-menu-item>
                            <sp-menu-item onClick={() => handleHeroClick('hero7-promotion')}>Hero Layout 7 - Business</sp-menu-item>
                            <sp-menu-item onClick={() => handleHeroClick('hero8-showcase')}>Hero Layout 8 - Showcase</sp-menu-item>
                            <sp-menu-item onClick={() => handleHeroClick('hero9-promotion')}>Hero Layout 9 - Promotion</sp-menu-item>
                            <sp-menu-item onClick={() => handleHeroClick('hero10-showcase')}>Hero Layout 10 - Showcase</sp-menu-item>
                            <sp-menu-item onClick={() => handleHeroClick('hero11-showcase')}>Hero Layout 11 - Showcase 1</sp-menu-item>
                            <sp-menu-item onClick={() => handleHeroClick('hero11-showcase2')}>Hero Layout 11 - Showcase 2</sp-menu-item>
                            <sp-menu-item onClick={() => handleHeroClick('hero12-showcase')}>Hero Layout 12 - Promotion</sp-menu-item>
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



                {/* Inputs for hero selection */}

                {selectedHero === 'hero1-lifestyle' && (
                    <>
                        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}>
                            <div style={{ margin: "4px" }}>
                                <sp-detail for="badge-field">BADGE</sp-detail>
                                <sp-textfield
                                    id="badge-field"
                                    placeholder="Insira o Badge"
                                    value={badgeValue}
                                    onInput={handleInputChange('badgeValue')}
                                    onBlur={handleBlur}
                                    valid={valid}
                                ></sp-textfield>
                            </div>
                            <div style={{ margin: "4px" }}>
                                <sp-detail for="headline-field">HEADLINE</sp-detail>
                                <sp-textfield
                                    id="headline-field"
                                    placeholder="Insira o Headline"
                                    value={headlineValue}
                                    onInput={handleInputChange('headlineValue')}
                                ></sp-textfield>
                            </div>
                            <div style={{ margin: "4px" }}>
                                <sp-detail for="subheadline-field">SUBHEADLINE</sp-detail>
                                <sp-textfield
                                    id="subheadline-field"
                                    placeholder="Insira o SubHeadline"
                                    value={subHeadlineValue}
                                    onInput={handleInputChange('subHeadlineValue')}
                                ></sp-textfield>
                            </div>
                            <div style={{ margin: "4px" }}>
                                <sp-detail for="pname-field">PRODUCT NAME</sp-detail>
                                <sp-textfield
                                    id="pname-field"
                                    placeholder="Insira o Product Name"
                                    value={productNameValue}
                                    onInput={handleInputChange('productNameValue')}
                                ></sp-textfield>
                            </div>
                            <div style={{ margin: "4px" }}>
                                <sp-detail for="hero-cta-field">HERO CTA</sp-detail>
                                <sp-textfield
                                    id="hero-cta-field"
                                    placeholder="Insira as Specs"
                                    value={heroCtaValue}
                                    onInput={handleInputChange('heroCtaValue')}
                                ></sp-textfield>
                            </div>
                        </div>
                    </>
                )}

                {selectedHero === 'hero1-standard' && (
                    <>
                        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}>
                            <div style={{ margin: "4px" }}>
                                <sp-detail for="badge-field">BADGE</sp-detail>
                                <sp-textfield
                                    id="badge-field"
                                    placeholder="Insira o Badge"
                                    value={badgeValue}
                                    onInput={handleBadgeChange}
                                ></sp-textfield>
                            </div>
                            <div style={{ margin: "4px" }}>
                                <sp-detail for="headline-field">HEADLINE</sp-detail>
                                <sp-textfield
                                    id="headline-field"
                                    placeholder="Insira o Headline"
                                    value={headlineValue}
                                    onInput={handleHeadlineChange}
                                ></sp-textfield>
                            </div>
                            <div style={{ margin: "4px" }}>
                                <sp-detail for="subheadline-field">SUBHEADLINE</sp-detail>
                                <sp-textfield
                                    id="subheadline-field"
                                    placeholder="Insira o SubHeadline"
                                    value={subHeadlineValue}
                                    onInput={handleSubHeadlineChange}
                                ></sp-textfield>
                            </div>
                            <div style={{ margin: "4px" }}>
                                <sp-detail for="pname-field">PRODUCT NAME 1</sp-detail>
                                <sp-textfield
                                    id="pname-field"
                                    placeholder="Insira o Product Name"
                                    value={productNameValue}
                                    onInput={handleProductNameChange}
                                ></sp-textfield>
                            </div>
                            <div style={{ margin: "4px" }}>
                                <sp-detail for="pname-field2">PRODUCT NAME 2</sp-detail>
                                <sp-textfield
                                    id="pname-field2"
                                    placeholder="Insira o Product Name"
                                    value={productNameValue}
                                    onInput={handleProductNameChange}
                                ></sp-textfield>
                            </div>
                            <div style={{ margin: "4px" }}>
                                <sp-detail for="pname-field3">PRODUCT NAME 3</sp-detail>
                                <sp-textfield
                                    id="pname-field3"
                                    placeholder="Insira o Product Name"
                                    value={productNameValue}
                                    onInput={handleProductNameChange}
                                ></sp-textfield>
                            </div>
                            <div style={{ margin: "4px" }}>
                                <sp-detail for="hero-cta-field">HERO CTA</sp-detail>
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

                {selectedHero === 'hero1-business' && (
                    <>
                        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}>
                            <div style={{ margin: "4px" }}>
                                <sp-detail for="badge-field">BADGE</sp-detail>
                                <sp-textfield
                                    id="badge-field"
                                    placeholder="Insira o Badge"
                                    value={badgeValue}
                                    onInput={handleBadgeChange}
                                ></sp-textfield>
                            </div>
                            <div style={{ margin: "4px" }}>
                                <sp-detail for="headline-field">HEADLINE</sp-detail>
                                <sp-textfield
                                    id="headline-field"
                                    placeholder="Insira o Headline"
                                    value={headlineValue}
                                    onInput={handleHeadlineChange}
                                ></sp-textfield>
                            </div>
                            <div style={{ margin: "4px" }}>
                                <sp-detail for="subheadline-field">SUBHEADLINE</sp-detail>
                                <sp-textfield
                                    id="subheadline-field"
                                    placeholder="Insira o SubHeadline"
                                    value={subHeadlineValue}
                                    onInput={handleSubHeadlineChange}
                                ></sp-textfield>
                            </div>
                            <div style={{ margin: "4px" }}>
                                <sp-detail for="pname-field">PRODUCT NAME 1</sp-detail>
                                <sp-textfield
                                    id="pname-field"
                                    placeholder="Insira o Product Name"
                                    value={productNameValue}
                                    onInput={handleProductNameChange}
                                ></sp-textfield>
                            </div>
                            <div style={{ margin: "4px" }}>
                                <sp-detail for="pname-field2">PRODUCT NAME 2</sp-detail>
                                <sp-textfield
                                    id="pname-field2"
                                    placeholder="Insira o Product Name"
                                    value={productNameValue}
                                    onInput={handleProductNameChange}
                                ></sp-textfield>
                            </div>
                            <div style={{ margin: "4px" }}>
                                <sp-detail for="hero-cta-field">HERO CTA</sp-detail>
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

                {selectedHero === 'hero2-showcase' && (
                    <>
                        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}>
                            <div style={{ margin: "4px" }}>
                                <sp-detail for="badge-field">BADGE</sp-detail>
                                <sp-textfield
                                    id="badge-field"
                                    placeholder="Insira o Badge"
                                    value={badgeValue}
                                    onInput={handleBadgeChange}
                                ></sp-textfield>
                            </div>
                            <div style={{ margin: "4px" }}>
                                <sp-detail for="headline-field">HEADLINE</sp-detail>
                                <sp-textfield
                                    id="headline-field"
                                    placeholder="Insira o Headline"
                                    value={headlineValue}
                                    onInput={handleHeadlineChange}
                                ></sp-textfield>
                            </div>
                            <div style={{ margin: "4px" }}>
                                <sp-detail for="subheadline-field">SUBHEADLINE</sp-detail>
                                <sp-textfield
                                    id="subheadline-field"
                                    placeholder="Insira o SubHeadline"
                                    value={subHeadlineValue}
                                    onInput={handleSubHeadlineChange}
                                ></sp-textfield>
                            </div>
                            <div style={{ margin: "4px" }}>
                                <sp-detail for="pname-field">PRODUCT NAME 1</sp-detail>
                                <sp-textfield
                                    id="pname-field"
                                    placeholder="Insira o Product Name"
                                    value={productNameValue}
                                    onInput={handleProductNameChange}
                                ></sp-textfield>
                            </div>
                            <div style={{ margin: "4px" }}>
                                <sp-detail for="pname-field2">PRODUCT NAME 2</sp-detail>
                                <sp-textfield
                                    id="pname-field2"
                                    placeholder="Insira o Product Name"
                                    value={productNameValue}
                                    onInput={handleProductNameChange}
                                ></sp-textfield>
                            </div>
                            <div style={{ margin: "4px" }}>
                                <sp-detail for="pname-field3">PRODUCT NAME 3</sp-detail>
                                <sp-textfield
                                    id="pname-field3"
                                    placeholder="Insira o Product Name"
                                    value={productNameValue}
                                    onInput={handleProductNameChange}
                                ></sp-textfield>
                            </div>
                            <div style={{ margin: "4px" }}>
                                <sp-detail for="hero-cta-field">HERO CTA</sp-detail>
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
                                ></sp-textfield>
                            </div>
                            <div style={{ margin: "4px" }}>
                                <sp-detail for="headline-field">HEADLINE</sp-detail>
                                <sp-textfield
                                    id="headline-field"
                                    placeholder="Insira o Headline"
                                    value={headlineValue}
                                    onInput={handleHeadlineChange}
                                ></sp-textfield>
                            </div>
                            <div style={{ margin: "4px" }}>
                                <sp-detail for="subheadline-field">SUBHEADLINE</sp-detail>
                                <sp-textfield
                                    id="subheadline-field"
                                    placeholder="Insira o SubHeadline"
                                    value={subHeadlineValue}
                                    onInput={handleSubHeadlineChange}
                                ></sp-textfield>
                            </div>
                            <div style={{ margin: "4px" }}>
                                <sp-detail for="inline-promo-field">INLINE PROMO</sp-detail>
                                <sp-textfield
                                    id="inline-promo-field"
                                    placeholder="Insira o Inline Promo"
                                    value={inlinePromoValue}
                                    onInput={handleInlinePromoChange}
                                ></sp-textfield>
                            </div>
                            <div style={{ margin: "4px" }}>
                                <sp-detail for="pname-field">PRODUCT NAME</sp-detail>
                                <sp-textfield
                                    id="pname-field"
                                    placeholder="Insira o Product Name"
                                    value={productNameValue}
                                    onInput={handleProductNameChange}
                                ></sp-textfield>
                            </div>
                            <div style={{ margin: "4px" }}>
                                <sp-detail for="specs-field">SPECS</sp-detail>
                                <sp-textfield
                                    id="specs-field"
                                    placeholder="Insira as Specs"
                                    value={specsValue}
                                    onInput={handleSpecsChange}
                                ></sp-textfield>
                            </div>
                            <div style={{ margin: "4px" }}>
                                <sp-detail for="price-field">PRICE</sp-detail>
                                <sp-textfield
                                    id="price-field"
                                    placeholder="Insira o Valor"
                                    value={priceValue}
                                    onInput={handlePriceChange}
                                ></sp-textfield>
                            </div>
                            <div style={{ margin: "4px" }}>
                                <sp-detail for="hero-cta-field">HERO CTA</sp-detail>
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

                {selectedHero === 'hero3-promotion' && (
                    <>
                        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}>
                            <div style={{ margin: "4px" }}>
                                <sp-detail for="badge-field">BADGE</sp-detail>
                                <sp-textfield
                                    id="badge-field"
                                    placeholder="Insira o Badge"
                                    value={badgeValue}
                                    onInput={handleBadgeChange}
                                ></sp-textfield>
                            </div>
                            <div style={{ margin: "4px" }}>
                                <sp-detail for="headline-field">HEADLINE</sp-detail>
                                <sp-textfield
                                    id="headline-field"
                                    placeholder="Insira o Headline"
                                    value={headlineValue}
                                    onInput={handleHeadlineChange}
                                ></sp-textfield>
                            </div>
                            <div style={{ margin: "4px" }}>
                                <sp-detail for="subheadline-field">SUBHEADLINE</sp-detail>
                                <sp-textfield
                                    id="subheadline-field"
                                    placeholder="Insira o SubHeadline"
                                    value={subHeadlineValue}
                                    onInput={handleSubHeadlineChange}
                                ></sp-textfield>
                            </div>
                            <div style={{ margin: "4px" }}>
                                <sp-detail for="inline-promo-field">INLINE PROMO</sp-detail>
                                <sp-textfield
                                    id="inline-promo-field"
                                    placeholder="Insira o Inline Promo"
                                    value={inlinePromoValue}
                                    onInput={handleInlinePromoChange}
                                ></sp-textfield>
                            </div>
                            <div style={{ margin: "4px" }}>
                                <sp-detail for="pname-field">PRODUCT NAME</sp-detail>
                                <sp-textfield
                                    id="pname-field"
                                    placeholder="Insira o Product Name"
                                    value={productNameValue}
                                    onInput={handleProductNameChange}
                                ></sp-textfield>
                            </div>
                            <div style={{ margin: "4px" }}>
                                <sp-detail for="specs-field">SPECS</sp-detail>
                                <sp-textfield
                                    id="specs-field"
                                    placeholder="Insira as Specs"
                                    value={specsValue}
                                    onInput={handleSpecsChange}
                                ></sp-textfield>
                            </div>
                            <div style={{ margin: "4px" }}>
                                <sp-detail for="price-field">PRICE</sp-detail>
                                <sp-textfield
                                    id="price-field"
                                    placeholder="Insira o Valor"
                                    value={priceValue}
                                    onInput={handlePriceChange}
                                ></sp-textfield>
                            </div>
                            <div style={{ margin: "4px" }}>
                                <sp-detail for="hero-cta-field">HERO CTA</sp-detail>
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

                {selectedHero === 'hero4-promotion' && (
                    <>
                        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}>
                            <div style={{ margin: "4px" }}>
                                <sp-detail for="badge-field">BADGE</sp-detail>
                                <sp-textfield
                                    id="badge-field"
                                    placeholder="Insira o Badge"
                                    value={badgeValue}
                                    onInput={handleBadgeChange}
                                ></sp-textfield>
                            </div>
                            <div style={{ margin: "4px" }}>
                                <sp-detail for="headline-field">HEADLINE</sp-detail>
                                <sp-textfield
                                    id="headline-field"
                                    placeholder="Insira o Headline"
                                    value={headlineValue}
                                    onInput={handleHeadlineChange}
                                ></sp-textfield>
                            </div>
                            <div style={{ margin: "4px" }}>
                                <sp-detail for="subheadline-field">SUBHEADLINE</sp-detail>
                                <sp-textfield
                                    id="subheadline-field"
                                    placeholder="Insira o SubHeadline"
                                    value={subHeadlineValue}
                                    onInput={handleSubHeadlineChange}
                                ></sp-textfield>
                            </div>
                            <div style={{ margin: "4px" }}>
                                <sp-detail for="inline-promo-field">INLINE PROMO 1</sp-detail>
                                <sp-textfield
                                    id="inline-promo-field"
                                    placeholder="Insira o Inline Promo"
                                    value={inlinePromoValue}
                                    onInput={handleInlinePromoChange}
                                ></sp-textfield>
                            </div>
                            <div style={{ margin: "4px" }}>
                                <sp-detail for="pname-field">PRODUCT NAME 1</sp-detail>
                                <sp-textfield
                                    id="pname-field"
                                    placeholder="Insira o Product Name"
                                    value={productNameValue}
                                    onInput={handleProductNameChange}
                                ></sp-textfield>
                            </div>
                            <div style={{ margin: "4px" }}>
                                <sp-detail for="specs-field">SPECS 1</sp-detail>
                                <sp-textfield
                                    id="specs-field"
                                    placeholder="Insira as Specs"
                                    value={specsValue}
                                    onInput={handleSpecsChange}
                                ></sp-textfield>
                            </div>
                            <div style={{ margin: "4px" }}>
                                <sp-detail for="price-field">PRICE 1</sp-detail>
                                <sp-textfield
                                    id="price-field"
                                    placeholder="Insira o Valor"
                                    value={priceValue}
                                    onInput={handlePriceChange}
                                ></sp-textfield>
                            </div>
                            <div style={{ margin: "4px" }}>
                                <sp-detail for="inline-promo-field2">INLINE PROMO 2</sp-detail>
                                <sp-textfield
                                    id="inline-promo-field"
                                    placeholder="Insira o Inline Promo2"
                                    value={inlinePromo2Value}
                                    onInput={handleInlinePromo2Change}
                                ></sp-textfield>
                            </div>
                            <div style={{ margin: "4px" }}>
                                <sp-detail for="pname-field2">PRODUCT NAME 2</sp-detail>
                                <sp-textfield
                                    id="pname-field2"
                                    placeholder="Insira o Product Name"
                                    value={productName2Value}
                                    onInput={handleProductName2Change}
                                ></sp-textfield>
                            </div>
                            <div style={{ margin: "4px" }}>
                                <sp-detail for="specs-field2">SPECS 2</sp-detail>
                                <sp-textfield
                                    id="specs-field2"
                                    placeholder="Insira as Specs"
                                    value={specs2Value}
                                    onInput={handleSpecs2Change}
                                ></sp-textfield>
                            </div>
                            <div style={{ margin: "4px" }}>
                                <sp-detail for="price-field2">PRICE 2</sp-detail>
                                <sp-textfield
                                    id="price-field2"
                                    placeholder="Insira o Valor"
                                    value={price2Value}
                                    onInput={handlePrice2Change}
                                ></sp-textfield>
                            </div>
                            <div style={{ margin: "4px" }}>
                                <sp-detail for="hero-cta-field">HERO CTA</sp-detail>
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
