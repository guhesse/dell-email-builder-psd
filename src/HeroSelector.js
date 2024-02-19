import React, { useState, useEffect } from "react";
import useAppContext from "./hook/useAppContext.jsx";

const heroPaths = {
    'hero1-lifestyle': {
        path: 'assets/heros/images/hero1-lifestyle.png',
        name: 'Hero Layout 1 - Lifestyle',
    },
    'hero1-standard': {
        path: 'assets/heros/images/hero1-standard.png',
        name: 'Hero Layout 1 - Standard',
    },
    'hero2-promotion': {
        path: 'assets/heros/images/hero2-promotion.png',
        name: 'Hero Layout 2 - Promotion',
    },
};

export default function HeroSelector() {
    const { csvValues, setCsvValues, selectedHero, setSelectedHero, heroCopyValues, setHeroCopyValues } = useAppContext();

    const {
        badgeValue,
        headlineValue,
        OTValue,
        subHeadlineValue,
        inlinePromoValue,
        inlinePromo2Value,
        productNameValue,
        productSuperchargerValue,
        heroCtaValue,
    } = heroCopyValues || {};

    const handleHeroClick = (selectedHero) => {
        setSelectedHero(selectedHero);
    };

    const [formState, setFormState] = useState({
        badgeValue: csvValues['Badge Text'] || "",
        headlineValue: csvValues['Headline Text'] || "",
        subHeadlineValue: csvValues['SHL'] || "",
        inlinePromoValue: csvValues['HERO1 Product Inline Promo'] || "",
        inlinePromo2Value: csvValues['HERO2 Product Inline Promo'] || "",
        productNameValue: csvValues['HERO1 Product Name'] || "",
        productSuperchargerValue: csvValues['HERO1 Product Inline Promo'] || "",
        heroCtaValue: csvValues['HERO CTA1 Text'] || "",
    });

    const [tempFormState, setTempFormState] = useState({
        badgeValue: "",
        headlineValue: "",
        OTValue: "",
        subHeadlineValue: "",
        inlinePromoValue: "",
        inlinePromo2Value: "",
        productNameValue: "",
        productSuperchargerValue: "",
        heroCtaValue: "",
    });

    const [valid, setValid] = useState({
        badgeValue: false,
        headlineValue: false,
        OTValue: false,
        subHeadlineValue: false,
        inlinePromoValue: false,
        inlinePromo2Value: false,
        productNameValue: false,
        productSuperchargerValue: false,
        heroCtaValue: false,
    });

    useEffect(() => {

        // Limpe o estado temporário ao montar o componente
        setTempFormState({
            badgeValue: badgeValue || "",
            headlineValue: headlineValue || "",
            OTValue: OTValue || "",
            subHeadlineValue: subHeadlineValue || "",
            inlinePromoValue: inlinePromoValue || "",
            inlinePromo2Value: inlinePromo2Value || "",
            productNameValue: productNameValue || "",
            productSuperchargerValue: productSuperchargerValue || "",
            heroCtaValue: heroCtaValue || "",
        });

        // Limpe o estado ao montar o componente
        setFormState({
            badgeValue: badgeValue || "",
            headlineValue: headlineValue || "",
            OTValue: OTValue || "",
            subHeadlineValue: subHeadlineValue || "",
            inlinePromoValue: inlinePromoValue || "",
            inlinePromo2Value: inlinePromo2Value || "",
            productNameValue: productNameValue || "",
            productSuperchargerValue: productSuperchargerValue || "",
            heroCtaValue: heroCtaValue || "",
        });

    }, [selectedHero]);

    const handleInputChange = (key, value) => {
        setTempFormState((prevTempFormState) => ({
            ...prevTempFormState,
            [key]: value,
        }));

        setValid((prevValid) => ({
            ...prevValid,
            [key]: value !== "",
        }));
    };

    const handleBlur = (key) => {
        // Atualize o CsvContext com os valores editados
        setCsvValues({
            ...csvValues,
            [key]: tempFormState[key],
        });

        // Atualize diretamente os valores no contexto
        setHeroCopyValues((prevHeroCopyValues) => ({
            ...prevHeroCopyValues,
            [key]: tempFormState[key],
        }));

        // Atualize o estado final com os valores do estado temporário
        setFormState({
            ...formState,
            [key]: tempFormState[key],
        });
    };

    const [isEditClicked, setIsEditClicked] = useState(false);

    const handleEditClick = () => {
        setIsEditClicked((prevIsEditClicked) => !prevIsEditClicked);
    };

    return (
        <>

            <div className="group">
                <sp-label>Hero</sp-label>
                <sp-field-group style={{ width: "100vw", display: "flex", flexDirection: "row", gap: "5px" }}>
                    <sp-picker placeholder="Selecione o hero" style={{ width: '45vw', padding: '0', margin: "0 4px 0 0" }} id="picker-m" size="m" label="Selection type">
                        <sp-menu>
                            {Object.entries(heroPaths).map(([hero, { path, name }]) => (
                                <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }} key={hero} onClick={() => handleHeroClick(hero)}>
                                    <sp-menu-item selected={selectedHero === `${hero}`} style={{ width: "100%", alignItems: "center", display: "flex", justifyContent: "space-between" }}>
                                        <div style={{ display: "flex", alignItems: "center" }}>
                                            <img style={{ width: '30px', height: 'auto', marginRight: '10px' }} src={path} alt={`Hero Layout - ${hero}`} />
                                            {name}
                                        </div>
                                    </sp-menu-item>
                                </div>
                            ))}
                        </sp-menu>
                    </sp-picker>
                    <div className="sp-tab-page" id="sp-spectrum-widgets-tab-page">
                        <sp-action-button label="Edit" onClick={handleEditClick}>
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
                        {isEditClicked && (
                            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}>
                                <div style={{ margin: "4px" }}>
                                    <sp-detail for="badge-field">BADGE</sp-detail>
                                    <sp-textfield
                                        id="badge-field"
                                        placeholder="Insira o Badge"
                                        value={tempFormState.badgeValue}
                                        onInput={(e) => handleInputChange('badgeValue', e.target.value)}
                                        onBlur={() => handleBlur('badgeValue')}
                                        valid={badgeValue !== "" ? valid.badgeValue : undefined}
                                    ></sp-textfield>
                                </div>
                                <div style={{ margin: "4px" }}>
                                    <sp-detail for="headline-field">HEADLINE</sp-detail>
                                    <sp-textfield
                                        id="headline-field"
                                        placeholder="Insira o Headline"
                                        value={tempFormState.headlineValue}
                                        onInput={(e) => handleInputChange('headlineValue', e.target.value)}
                                        onBlur={() => handleBlur('headlineValue')}
                                        valid={headlineValue !== "" ? valid.headlineValue : undefined}
                                    ></sp-textfield>
                                </div>
                                <div style={{ margin: "4px" }}>
                                    <sp-detail for="subheadline-field">SUBHEADLINE</sp-detail>
                                    <sp-textfield
                                        id="subheadline-field"
                                        placeholder="Insira o SubHeadline"
                                        value={tempFormState.subHeadlineValue}
                                        onInput={(e) => handleInputChange('subHeadlineValue', e.target.value)}
                                        onBlur={() => handleBlur('subHeadlineValue')}
                                        valid={subHeadlineValue !== "" ? valid.subHeadlineValue : undefined}
                                    ></sp-textfield>
                                </div>
                                <div style={{ margin: "4px" }}>
                                    <sp-detail for="pname-field">PRODUCT NAME</sp-detail>
                                    <sp-textfield
                                        id="pname-field"
                                        placeholder="Insira o Product Name"
                                        value={tempFormState.productNameValue}
                                        onInput={(e) => handleInputChange('productNameValue', e.target.value)}
                                        onBlur={() => handleBlur('productNameValue')}
                                        valid={productNameValue !== "" ? valid.productNameValue : undefined}
                                    ></sp-textfield>
                                </div>
                                <div style={{ margin: "4px" }}>
                                    <sp-detail for="pname-field">PRODUCT SUPERCHARGER</sp-detail>
                                    <sp-textfield
                                        id="pname-field"
                                        placeholder="Insira o Supercharger do Produto"
                                        value={tempFormState.productSuperchargerValue}
                                        onInput={(e) => handleInputChange('productSuperchargerValue', e.target.value)}
                                        onBlur={() => handleBlur('productSuperchargerValue')}
                                        valid={productSuperchargerValue !== "" ? valid.productSuperchargerValue : undefined}
                                    ></sp-textfield>
                                </div>
                                <div style={{ margin: "4px" }}>
                                    <sp-detail for="hero-cta-field">HERO CTA</sp-detail>
                                    <sp-textfield
                                        id="hero-cta-field"
                                        placeholder="Insira o CTA"
                                        value={tempFormState.heroCtaValue}
                                        onInput={(e) => handleInputChange('heroCtaValue', e.target.value)}
                                        valid={heroCtaValue !== "" ? valid.heroCtaValue : undefined}
                                    ></sp-textfield>
                                </div>
                            </div>
                        )}
                    </>
                )}


                {selectedHero === 'hero1-standard' && (
                    <>
                        {isEditClicked && (
                            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}>
                                <div style={{ margin: "4px" }}>
                                    <sp-detail for="badge-field">BADGE</sp-detail>
                                    <sp-textfield
                                        id="badge-field"
                                        placeholder="Insira o Badge"
                                        value={tempFormState.badgeValue}
                                        onInput={(e) => handleInputChange('badgeValue', e.target.value)}
                                        onBlur={() => handleBlur('badgeValue')}
                                        valid={badgeValue !== "" ? valid.badgeValue : undefined}
                                    ></sp-textfield>
                                </div>
                                <div style={{ margin: "4px" }}>
                                    <sp-detail for="headline-field">HEADLINE</sp-detail>
                                    <sp-textfield
                                        id="headline-field"
                                        placeholder="Insira o Headline"
                                        value={tempFormState.headlineValue}
                                        onInput={(e) => handleInputChange('headlineValue', e.target.value)}
                                        onBlur={() => handleBlur('headlineValue')}
                                        valid={headlineValue !== "" ? valid.headlineValue : undefined}
                                    ></sp-textfield>
                                </div>
                                <div style={{ margin: "4px" }}>
                                    <sp-detail for="ot-field">OT</sp-detail>
                                    <sp-textfield
                                        id="ot-field"
                                        placeholder="Insira o OT"
                                        value={tempFormState.OTValue}
                                        onInput={(e) => handleInputChange('OTValue', e.target.value)}
                                        onBlur={() => handleBlur('OTValue')}
                                        valid={OTValue !== "" ? valid.OTValue : undefined}
                                    ></sp-textfield>
                                </div>
                                <div style={{ margin: "4px" }}>
                                    <sp-detail for="pname-field">PRODUCT NAME</sp-detail>
                                    <sp-textfield
                                        id="pname-field"
                                        placeholder="Insira o Product Name"
                                        value={tempFormState.productNameValue}
                                        onInput={(e) => handleInputChange('productNameValue', e.target.value)}
                                        onBlur={() => handleBlur('productNameValue')}
                                        valid={productNameValue !== "" ? valid.productNameValue : undefined}
                                    ></sp-textfield>
                                </div>
                                <div style={{ margin: "4px" }}>
                                    <sp-detail for="subheadline-field">SUBHEADLINE</sp-detail>
                                    <sp-textfield
                                        id="subheadline-field"
                                        placeholder="Insira o SubHeadline"
                                        value={tempFormState.subHeadlineValue}
                                        onInput={(e) => handleInputChange('subHeadlineValue', e.target.value)}
                                        onBlur={() => handleBlur('subHeadlineValue')}
                                        valid={subHeadlineValue !== "" ? valid.subHeadlineValue : undefined}
                                    ></sp-textfield>
                                </div>
                                <div style={{ margin: "4px" }}>
                                    <sp-detail for="hero-cta-field">HERO CTA</sp-detail>
                                    <sp-textfield
                                        id="hero-cta-field"
                                        placeholder="Insira o CTA"
                                        value={tempFormState.heroCtaValue}
                                        onInput={(e) => handleInputChange('heroCtaValue', e.target.value)}
                                        valid={heroCtaValue !== "" ? valid.heroCtaValue : undefined}
                                    ></sp-textfield>
                                </div>
                            </div>
                        )}
                    </>
                )}

                {/* {selectedHero === 'hero1-business' && (
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
                )} */}
            </div >

        </>
    );
}
