import React, { useState, useEffect } from "react";
import useAppContext from "./hook/useAppContext.jsx";

const heroPaths = {
    'hero1-lifestyle-product': {
        path: 'assets/heros/images/hero1-lifestyle-product.png',
        name: 'Hero Layout 1 - Lifestyle & Product',
        brand: 'dell'
    },
    'hero1-lifestyle': {
        path: 'assets/heros/images/hero1-lifestyle.png',
        name: 'Hero Layout 1 - Only Lifestyle',
        brand: 'dell'
    },
    'hero1-product': {
        path: 'assets/heros/images/hero1-product.png',
        name: 'Hero Layout 1 - Only Product',
        brand: 'dell'
    },
    'aw-hero1-lifestyle-product': {
        path: 'assets/heros/images/aw-hero1-lifestyle-product.png',
        name: 'AW Hero Layout 1 - Lifestyle & Product',
        brand: 'alienware'
    },
    'hero2-promotion': {
        path: 'assets/heros/images/hero2-promotion.png',
        name: 'Hero Layout 2 - Promotion',
        brand: 'dell'
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
        specsValue,
        priceValue,
        productNameValue,
        productSuperchargerValue,
        heroCtaValue,
    } = heroCopyValues || {};

    const [isOptionsOpen, setIsOptionsOpen] = useState(true);

    const toggleOptions = () => {
        setIsOptionsOpen(!isOptionsOpen);
    };

    const [selected, setSelected] = useState({
        selectedHero: false
    });

    const handleHeroClick = (selectedHero) => {
        setSelectedHero(selectedHero);
    };

    const handleResetClick = () => {
        setSelectedHero(null)
        setHeroCopyValues({
            badgeValue: "",
            headlineValue: "",
            OTValue: "",
            subHeadlineValue: "",
            inlinePromoValue: "",
            inlinePromo2Value: "",
            specsValue: "",
            priceValue: "",
            productNameValue: "",
            productSuperchargerValue: "",
            heroCtaValue: "",
        });
    };

    const [formState, setFormState] = useState({
        badgeValue: csvValues['Badge Text'] || "",
        headlineValue: csvValues['Headline Text'] || "",
        OTValue: "",
        subHeadlineValue: csvValues['SHL'] || "",
        inlinePromoValue: csvValues['HERO1 Product Inline Promo'] || "",
        inlinePromo2Value: csvValues['HERO2 Product Inline Promo'] || "",
        specsValue: csvValues['HERO1 Product Description'] || "",
        priceValue: "",
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
        specsValue: "",
        priceValue: "",
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
        specsValue: false,
        priceValue: false,
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
            specsValue: specsValue || "",
            priceValue: priceValue || "",
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
            specsValue: specsValue || "",
            priceValue: priceValue || "",
            productNameValue: productNameValue || "",
            productSuperchargerValue: productSuperchargerValue || "",
            heroCtaValue: heroCtaValue || "",
        });

    }, []);

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

    const [isEditClicked, setIsEditClicked] = useState(true);

    const handleEditClick = () => {
        setIsEditClicked((prevIsEditClicked) => !prevIsEditClicked);
    };

    // console.log("hello")

    return (
        <>
            <div className="group">
                <sp-icons>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        {selectedHero !== null ? (
                            (selectedHero === "hero1-lifestyle-product" &&
                                badgeValue &&
                                headlineValue &&
                                subHeadlineValue &&
                                productNameValue &&
                                productSuperchargerValue &&
                                heroCtaValue) ||
                            (selectedHero === "hero1-lifestyle" &&
                                badgeValue &&
                                headlineValue &&
                                subHeadlineValue &&
                                heroCtaValue) ||
                            (selectedHero === "hero1-product" &&
                                badgeValue &&
                                headlineValue &&
                                OTValue &&
                                productNameValue &&
                                subHeadlineValue &&
                                heroCtaValue) ||
                            (selectedHero === "aw-hero1-lifestyle-product" &&
                                badgeValue &&
                                headlineValue &&
                                subHeadlineValue &&
                                productNameValue &&
                                heroCtaValue) ||
                            (selectedHero === "hero2-promotion" &&
                                badgeValue &&
                                headlineValue &&
                                subHeadlineValue &&
                                inlinePromoValue &&
                                productNameValue &&
                                specsValue &&
                                priceValue &&
                                heroCtaValue)) ? (
                            <div className="sp-icon" id="status-check">
                                <svg xmlns="http://www.w3.org/2000/svg" height="14" viewBox="0 0 18 18" width="14">
                                    <title>Check</title>
                                    <rect id="Canvas" fill="#ff13dc" opacity="0" width="18" height="18" /><path d="M9,1a8,8,0,1,0,8,8A8,8,0,0,0,9,1Zm5.333,4.54L8.009,13.6705a.603.603,0,0,1-.4375.2305H7.535a.6.6,0,0,1-.4245-.1755L3.218,9.829a.6.6,0,0,1-.00147-.84853L3.218,8.979l.663-.6625A.6.6,0,0,1,4.72953,8.315L4.731,8.3165,7.4,10.991l5.257-6.7545a.6.6,0,0,1,.8419-.10586L13.5,4.1315l.7275.5685A.6.6,0,0,1,14.333,5.54Z" />
                                </svg>
                            </div>
                        ) : (
                            <div className="sp-icon" id="status-half">
                                <svg xmlns="http://www.w3.org/2000/svg" height="14" viewBox="0 0 18 18" width="14">
                                    <title>Half</title>
                                    <rect id="Canvas" fill="#ff13dc" opacity="0" width="18" height="18" /><path d="M9.05,1.1A7.95,7.95,0,1,0,17,9.05,7.95,7.95,0,0,0,9.05,1.1Zm0,14.906A6.956,6.956,0,1,1,16.006,9.05,6.956,6.956,0,0,1,9.05,16.006Zm4.49072-9.68845-5.436,6.98773a.5.5,0,0,1-.74839.04628L4.2779,10.28586a.50035.50035,0,0,1,.00021-.70736l.66226-.66226a.5.5,0,0,1,.70709,0l1.939,1.92155,4.43735-5.701a.50006.50006,0,0,1,.70176-.08744h0l.72764.56642A.50016.50016,0,0,1,13.54072,6.31755Z" />
                                </svg>
                            </div>
                        ) : (
                            <div className="sp-icon" id="status-not">
                                <svg xmlns="http://www.w3.org/2000/svg" height="14" viewBox="0 0 18 18" width="14">
                                    <title>Status</title>
                                    <rect id="Canvas" fill="#ff13dc" opacity="0" width="14" height="14" /><path d="M5.9,2.73l-.327-.95A8.01151,8.01151,0,0,0,3,3.714l.8285.5795A7.00718,7.00718,0,0,1,5.9,2.73Z" />
                                    <path d="M2.804,5.7465l-.8285-.58a7.91953,7.91953,0,0,0-.922,2.944H2.062A6.95948,6.95948,0,0,1,2.804,5.7465Z" />
                                    <path d="M2.062,9.8885H1.05a8.01058,8.01058,0,0,0,1.0725,3.18l.8-.603A6.94592,6.94592,0,0,1,2.062,9.8885Z" />
                                    <path d="M3.992,13.886l-.803.605a7.93456,7.93456,0,0,0,2.6365,1.85l.295-.9645A7.0131,7.0131,0,0,1,3.992,13.886Z" />
                                    <path d="M9,16a6.98925,6.98925,0,0,1-1.1785-.107l-.295.9665a7.931,7.931,0,0,0,3.22-.058L10.42,15.855A7,7,0,0,1,9,16Z" />
                                    <path d="M12.1,15.2695l.3265.95A7.99992,7.99992,0,0,0,15,14.2845l-.8265-.579A7.01919,7.01919,0,0,1,12.1,15.2695Z" />
                                    <path d="M15.937,9.8885a6.95007,6.95007,0,0,1-.742,2.364l.828.5795a7.921,7.921,0,0,0,.922-2.9435Z" />
                                    <path d="M15.937,8.1105H16.95A8.01009,8.01009,0,0,0,15.8765,4.93l-.8.6035A6.94357,6.94357,0,0,1,15.937,8.1105Z" />
                                    <path d="M14.0065,4.113l.8035-.6055a7.94254,7.94254,0,0,0-2.637-1.85l-.295.965A7.01144,7.01144,0,0,1,14.0065,4.113Z" />
                                    <path d="M9,2a7.03464,7.03464,0,0,1,1.178.1065l.2955-.9675a7.9399,7.9399,0,0,0-3.22.0585l.3265.947A7.02938,7.02938,0,0,1,9,2Z" />
                                </svg>
                            </div>
                        )}

                        <div onClick={handleResetClick} className="sp-icon" id="bin">
                            <svg xmlns="http://www.w3.org/2000/svg" height="14" viewBox="0 0 18 18" width="14">
                                <title>Bin</title>
                                <rect id="Canvas" fill="#ff13dc" opacity="0" width="18" height="18" /><path d="M15.75,3H12V2a1,1,0,0,0-1-1H6A1,1,0,0,0,5,2V3H1.25A.25.25,0,0,0,1,3.25v.5A.25.25,0,0,0,1.25,4h1L3.4565,16.55a.5.5,0,0,0,.5.45H13.046a.5.5,0,0,0,.5-.45L14.75,4h1A.25.25,0,0,0,16,3.75v-.5A.25.25,0,0,0,15.75,3ZM5.5325,14.5a.5.5,0,0,1-.53245-.46529L5,14.034l-.5355-8a.50112.50112,0,0,1,1-.067l.5355,8a.5.5,0,0,1-.46486.53283ZM9,14a.5.5,0,0,1-1,0V6A.5.5,0,0,1,9,6ZM11,3H6V2h5Zm1,11.034a.50112.50112,0,0,1-1-.067l.5355-8a.50112.50112,0,1,1,1,.067Z" />
                            </svg>
                        </div>
                    </div>
                </sp-icons>
                {isOptionsOpen ? (
                    <>
                        <sp-label onClick={toggleOptions} style={{ cursor: "pointer" }}>
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <p>Hero</p>
                                <span style={{ marginLeft: "8px", display: "flex", alignItems: "center", fill: "#8a8a8a" }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 14 16" >
                                        <title>S ChevronDown 18 N</title>
                                        <rect id="Canvas" fill="#8a8a8a" opacity="0" width="11" height="11" />
                                        <path d="M4,7.01a1,1,0,0,1,1.7055-.7055l3.289,3.286,3.289-3.286a1,1,0,0,1,1.437,1.3865l-.0245.0245L9.7,11.7075a1,1,0,0,1-1.4125,0L4.293,7.716A.9945.9945,0,0,1,4,7.01Z" />
                                    </svg>
                                </span>
                            </div>
                        </sp-label>
                        <sp-field-group style={{ width: "100vw", display: "flex", flexDirection: "row", gap: "5px" }}>
                            <sp-picker placeholder="Selecione o hero" style={{  padding: '0', margin: "0 4px 0 0" }} id="picker-m" size="m" label="Selection type">
                                <sp-menu>
                                    {Object.entries(heroPaths).map(([hero, { path, name }]) => (
                                        <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }} id="" key={hero} onClick={() => handleHeroClick(hero)}>
                                            <sp-menu-item selected={selectedHero === `${hero}` ? selected.selectedHero : undefined}
                                                style={{ width: "100%", alignItems: "center", display: "flex", justifyContent: "space-between" }}>
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
                    </>
                ) : (
                    <sp-label onClick={toggleOptions} style={{ cursor: "pointer" }}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <p>Hero</p>
                            <span style={{ marginLeft: "10px", display: "flex", alignItems: "center", fill: "#8a8a8a" }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 10 10" >
                                    <g id="ChevronSize75">
                                        <rect id="Frame" width="7" height="7" fill="black" opacity="0" />
                                        <path d="M7.4834,4.40625,3.85986.7832a.83969.83969,0,0,0-1.1875,1.1875L5.70166,5,2.67236,8.0293a.83969.83969,0,1,0,1.1875,1.1875l3.62354-3.623A.83933.83933,0,0,0,7.4834,4.40625Z" />
                                    </g>
                                </svg>

                            </span>
                        </div>
                    </sp-label>
                )}


                {/* Inputs for hero selection */}

                {selectedHero === 'hero1-lifestyle-product' && isOptionsOpen && isEditClicked && (
                    <>
                        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}>
                            <div style={{ margin: "4px 0px" }}>
                                <sp-detail for="badge-field">BADGE</sp-detail>
                                <sp-textfield
                                    id="badge-field"
                                    placeholder="Insira o Badge"
                                    value={badgeValue}
                                    onInput={(e) => handleInputChange('badgeValue', e.target.value)}
                                    onBlur={() => handleBlur('badgeValue')}
                                    valid={badgeValue !== "" ? valid.badgeValue : undefined}
                                ></sp-textfield>
                            </div>
                            <div style={{ margin: "4px 0px" }}>
                                <sp-detail for="headline-field">HEADLINE</sp-detail>
                                <sp-textfield
                                    id="headline-field"
                                    placeholder="Insira o Headline"
                                    value={headlineValue}
                                    onInput={(e) => handleInputChange('headlineValue', e.target.value)}
                                    onBlur={() => handleBlur('headlineValue')}
                                    valid={headlineValue !== "" ? valid.headlineValue : undefined}
                                ></sp-textfield>
                            </div>
                            <div style={{ margin: "4px 0px" }}>
                                <sp-detail for="subheadline-field">SUBHEADLINE</sp-detail>
                                <sp-textfield
                                    id="subheadline-field"
                                    placeholder="Insira o SubHeadline"
                                    value={subHeadlineValue}
                                    onInput={(e) => handleInputChange('subHeadlineValue', e.target.value)}
                                    onBlur={() => handleBlur('subHeadlineValue')}
                                    valid={subHeadlineValue !== "" ? valid.subHeadlineValue : undefined}
                                ></sp-textfield>
                            </div>
                            <div style={{ margin: "4px 0px" }}>
                                <sp-detail for="pname-field">PRODUCT NAME</sp-detail>
                                <sp-textfield
                                    id="pname-field"
                                    placeholder="Insira o Product Name"
                                    value={productNameValue}
                                    onInput={(e) => handleInputChange('productNameValue', e.target.value)}
                                    onBlur={() => handleBlur('productNameValue')}
                                    valid={productNameValue !== "" ? valid.productNameValue : undefined}
                                ></sp-textfield>
                            </div>
                            <div style={{ margin: "4px 0px" }}>
                                <sp-detail for="pname-field">PRODUCT SUPERCHARGER</sp-detail>
                                <sp-textfield
                                    id="pname-field"
                                    placeholder="Insira o Supercharger do Produto"
                                    value={productSuperchargerValue}
                                    onInput={(e) => handleInputChange('productSuperchargerValue', e.target.value)}
                                    onBlur={() => handleBlur('productSuperchargerValue')}
                                    valid={productSuperchargerValue !== "" ? valid.productSuperchargerValue : undefined}
                                ></sp-textfield>
                            </div>
                            <div style={{ margin: "4px 0px" }}>
                                <sp-detail for="hero-cta-field">HERO CTA</sp-detail>
                                <sp-textfield
                                    id="hero-cta-field"
                                    placeholder="Insira o CTA"
                                    value={heroCtaValue}
                                    onInput={(e) => handleInputChange('heroCtaValue', e.target.value)}
                                    onBlur={() => handleBlur('heroCtaValue')}
                                    valid={heroCtaValue !== "" ? valid.heroCtaValue : undefined}
                                ></sp-textfield>
                            </div>
                        </div>
                    </>
                )}

                {selectedHero === 'hero1-lifestyle' && isOptionsOpen && isEditClicked && (
                    <>
                        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}>
                            <div style={{ margin: "4px 0px" }}>
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
                            <div style={{ margin: "4px 0px" }}>
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
                            <div style={{ margin: "4px 0px" }}>
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
                            <div style={{ margin: "4px 0px" }}>
                                <sp-detail for="hero-cta-field">HERO CTA</sp-detail>
                                <sp-textfield
                                    id="hero-cta-field"
                                    placeholder="Insira o CTA"
                                    value={tempFormState.heroCtaValue}
                                    onInput={(e) => handleInputChange('heroCtaValue', e.target.value)}
                                    onBlur={() => handleBlur('heroCtaValue')}
                                    valid={heroCtaValue !== "" ? valid.heroCtaValue : undefined}
                                ></sp-textfield>
                            </div>
                        </div>
                    </>
                )}


                {selectedHero === 'hero1-product' && isOptionsOpen && isEditClicked && (
                    <>
                        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}>
                            <div style={{ margin: "4px 0px" }}>
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
                            <div style={{ margin: "4px 0px" }}>
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
                            <div style={{ margin: "4px 0px" }}>
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
                            <div style={{ margin: "4px 0px" }}>
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
                            <div style={{ margin: "4px 0px" }}>
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
                            <div style={{ margin: "4px 0px" }}>
                                <sp-detail for="hero-cta-field">HERO CTA</sp-detail>
                                <sp-textfield
                                    id="hero-cta-field"
                                    placeholder="Insira o CTA"
                                    value={tempFormState.heroCtaValue}
                                    onInput={(e) => handleInputChange('heroCtaValue', e.target.value)}
                                    onBlur={() => handleBlur('heroCtaValue')}
                                    valid={heroCtaValue !== "" ? valid.heroCtaValue : undefined}
                                ></sp-textfield>
                            </div>
                        </div>
                    </>
                )}


                {selectedHero === 'aw-hero1-lifestyle-product' && isOptionsOpen && isEditClicked && (
                    <>
                        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}>
                            <div style={{ margin: "4px 0px" }}>
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
                            <div style={{ margin: "4px 0px" }}>
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
                            <div style={{ margin: "4px 0px" }}>
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
                            <div style={{ margin: "4px 0px" }}>
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
                            <div style={{ margin: "4px 0px" }}>
                                <sp-detail for="hero-cta-field">HERO CTA</sp-detail>
                                <sp-textfield
                                    id="hero-cta-field"
                                    placeholder="Insira o CTA"
                                    value={tempFormState.heroCtaValue}
                                    onInput={(e) => handleInputChange('heroCtaValue', e.target.value)}
                                    onBlur={() => handleBlur('heroCtaValue')}
                                    valid={heroCtaValue !== "" ? valid.heroCtaValue : undefined}
                                ></sp-textfield>
                            </div>
                        </div>
                    </>
                )}

                {selectedHero === 'hero2-promotion' && isOptionsOpen && isEditClicked && (
                    <>
                        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}>
                            <div style={{ margin: "4px 0px" }}>
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
                            <div style={{ margin: "4px 0px" }}>
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
                            <div style={{ margin: "4px 0px" }}>
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
                            <div style={{ margin: "4px 0px" }}>
                                <sp-detail for="pname-field">INLINE PROMO</sp-detail>
                                <sp-textfield
                                    id="inline-promo-field"
                                    placeholder="Insira o Inline Promo"
                                    value={tempFormState.inlinePromoValue}
                                    onInput={(e) => handleInputChange('inlinePromoValue', e.target.value)}
                                    onBlur={() => handleBlur('inlinePromoValue')}
                                    valid={inlinePromoValue !== "" ? valid.inlinePromoValue : undefined}
                                ></sp-textfield>
                            </div>
                            <div style={{ margin: "4px 0px" }}>
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
                            <div style={{ margin: "4px 0px" }}>
                                <sp-detail for="specs-field">SPECS</sp-detail>
                                <sp-textfield
                                    id="specs-field"
                                    placeholder="Insira as Specs"
                                    value={tempFormState.specsValue}
                                    onInput={(e) => handleInputChange('specsValue', e.target.value)}
                                    onBlur={() => handleBlur('specsValue')}
                                    valid={specsValue !== "" ? valid.specsValue : undefined}
                                ></sp-textfield>
                            </div>
                            <div style={{ margin: "4px 0px" }}>
                                <sp-detail for="price-field">PRICE</sp-detail>
                                <sp-textfield
                                    id="price-field"
                                    placeholder="Insira o Valor"
                                    value={tempFormState.priceValue}
                                    onInput={(e) => handleInputChange('priceValue', e.target.value)}
                                    onBlur={() => handleBlur('priceValue')}
                                    valid={priceValue !== "" ? valid.priceValue : undefined}
                                ></sp-textfield>
                            </div>
                            <div style={{ margin: "4px 0px" }}>
                                <sp-detail for="hero-cta-field">HERO CTA</sp-detail>
                                <sp-textfield
                                    id="hero-cta-field"
                                    placeholder="Insira o CTA"
                                    value={tempFormState.heroCtaValue}
                                    onInput={(e) => handleInputChange('heroCtaValue', e.target.value)}
                                    onBlur={() => handleBlur('heroCtaValue')}
                                    valid={heroCtaValue !== "" ? valid.heroCtaValue : undefined}
                                ></sp-textfield>
                            </div>

                        </div>
                    </>
                )}
            </div>
        </>
    );
}
