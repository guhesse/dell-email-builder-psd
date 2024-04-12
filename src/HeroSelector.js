import React, { useState, useEffect } from "react";
import useAppContext from "./hook/useAppContext.jsx";
import useFormState from "./hook/useFormState.jsx";
import { useToggleState, useToggleFunctionState } from "./hook/useToogle.jsx";
import StatusIcon from "./components/Icons/StatusIcon.jsx";
import BaseIcon from "./components/Icons/BaseIcon.jsx";
import GroupLabel from "./components/GroupLabel.jsx";


const herosArr = {
    'hero1-lifestyle-product': {
        path: 'assets/heros/images/hero1-lifestyle-product.png',
        name: 'Hero Layout 1 - Lifestyle & Product',
        brand: 'dell',
        fieldsTitle: ['badge', 'headline', 'subheadline', 'product name', 'supercharger', 'hero cta'],
        fields: ['badgeValue', 'headlineValue', 'subHeadlineValue', 'productNameValue', 'productSuperchargerValue', 'heroCtaValue']
    },
    'hero1-lifestyle': {
        path: 'assets/heros/images/hero1-lifestyle.png',
        name: 'Hero Layout 1 - Only Lifestyle',
        brand: 'dell',
        fieldsTitle: ['badge', 'headline', 'subheadline', 'hero cta'],
        fields: ['badgeValue', 'headlineValue', 'subHeadlineValue', 'heroCtaValue']
    },
    'hero1-product': {
        path: 'assets/heros/images/hero1-product.png',
        name: 'Hero Layout 1 - Only Product',
        brand: 'dell',
        fieldsTitle: ['badge', 'headline', 'OT', 'product name', 'subheadline', 'hero cta'],
        fields: ['badgeValue', 'headlineValue', 'OTValue', 'productNameValue', 'subHeadlineValue', 'heroCtaValue']
    },
    'aw-hero1-lifestyle-product': {
        path: 'assets/heros/images/aw-hero1-lifestyle-product.png',
        name: 'AW Hero Layout 1 - Lifestyle & Product',
        brand: 'alienware',
        fieldsTitle: ['badge', 'headline', 'subheadline', 'product name', 'hero cta'],
        fields: ['badgeValue', 'headlineValue', 'subHeadlineValue', 'productNameValue', 'heroCtaValue']
    },
    'hero2-promotion': {
        path: 'assets/heros/images/hero2-promotion.png',
        name: 'Hero Layout 2 - Promotion',
        brand: 'dell',
        fieldsTitle: ['badge', 'headline', 'subheadline', 'inline promo', 'product name', 'specs', 'price', 'hero cta'],
        fields: ['badgeValue', 'headlineValue', 'subHeadlineValue', 'inlinePromoValue', 'productNameValue', 'specsValue', 'priceValue', 'heroCtaValue']
    },
};

export default function HeroSelector() {

    const { csvValues, setCsvValues, selectedHero, setSelectedHero, heroCopyValues, setHeroCopyValues } = useAppContext();
    const { badgeValue, headlineValue, OTValue, subHeadlineValue, inlinePromoValue, inlinePromo2Value, specsValue, priceValue, productNameValue, productSuperchargerValue, heroCtaValue, } = heroCopyValues || {};

    const { valid, handleFieldChange, handleBlur, initialState, setInitialState, tempFormState, setTempFormState } = useFormState(setHeroCopyValues, heroCopyValues);

    const [isOptionsOpen, toggleOptions] = useToggleState(true);

    const [isEditClicked, toggleEditClicked, setIsEditClicked] = useToggleFunctionState(true);

    var hero = selectedHero

    // Função para determinar o tipo de ícone
    const determineIconType = () => {
        const currentHero = herosArr[hero];
        if (currentHero) {
            const { fields } = currentHero;
            // Verifique se todos os campos necessários estão presentes e são verdadeiros
            return fields.every(field => field in currentHero && currentHero[field]) ? 'check' : 'half';
        }
        return 'not'; // Caso o herói selecionado não seja encontrado no herosArr
    };

    // Determine o tipo de ícone
    const iconType = determineIconType();

    const handleEditClick = () => {
        setIsEditClicked((prevIsEditClicked) => !prevIsEditClicked);
    };

    const [selected, setSelected] = useState({
        selectedHero: false
    });

    const handleHeroClick = (hero) => {
        setSelectedHero(hero);
    };

    const handleResetClick = () => {
        setSelectedHero(null);
        setHeroCopyValues(initialState);
    };

    const [formState, setFormState] = useState({
        badgeValue: csvValues['Badge Text'] || "",
        headlineValue: csvValues['Headline Text'] || "",
        subHeadlineValue: csvValues['SHL'] || "",
        inlinePromoValue: csvValues['HERO1 Product Inline Promo'] || "",
        inlinePromo2Value: csvValues['HERO2 Product Inline Promo'] || "",
        specsValue: csvValues['HERO1 Product Description'] || "",
        priceValue: "",
        productNameValue: csvValues['HERO1 Product Name'] || "",
        productSuperchargerValue: csvValues['HERO1 Product Inline Promo'] || "",
        heroCtaValue: csvValues['HERO CTA1 Text'] || "",
    });

    const fieldKeys = Object.keys(heroCopyValues || {});

    useEffect(() => {
        const newInitialState = {}
        const newTempFormState = {};

        fieldKeys.forEach(field => {
            newInitialState[field] = "";
            newTempFormState[field] = heroCopyValues[field] || "";
        });

        setInitialState(newInitialState);
        setTempFormState(newTempFormState);
        setFormState(newTempFormState);
    }, [hero]);

    let type = '';

    return (
        <>
            <div className="group">
                <sp-icons>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        {hero !== null ? (
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
                            <StatusIcon type={"check"} />
                        ) : (
                            <StatusIcon type={"half"} />
                        ) : (
                            <StatusIcon type={"not"} />
                        )}
                        <BaseIcon onClick={handleResetClick} type="bin" />
                    </div>
                </sp-icons>
                {isOptionsOpen ? (
                    <>
                        <GroupLabel onClick={toggleOptions} type="open" size="s" name="Hero" />
                        <sp-field-group>
                            <sp-picker placeholder="Selecione o hero">
                                <sp-menu>
                                    {Object.entries(herosArr).map(([hero, { path, name }], index) => (
                                        <div className="flexCenter" key={`${hero}-${index}`}>
                                            <sp-menu-item
                                                onClick={() => handleHeroClick(hero)}
                                                selected={hero ? selected.hero : undefined}>
                                                <div className="flexCenter">
                                                    <img className="heroThumbnail"
                                                        src={path}
                                                        alt={`Hero Layout - ${hero}`} />
                                                    {name}
                                                </div>
                                            </sp-menu-item>
                                        </div>
                                    ))}

                                </sp-menu>
                            </sp-picker>
                            <div className="sp-tab-page">
                                <sp-action-button label="edit" onClick={handleEditClick}>
                                    <div slot="icon" className="icon">
                                        <svg viewBox="0 0 36 36">
                                            <path d="M33.567 8.2L27.8 2.432a1.215 1.215 0 0 0-.866-.353H26.9a1.371 1.371 0 0 0-.927.406L5.084 23.372a.99.99 0 0 0-.251.422L2.055 33.1c-.114.377.459.851.783.851a.251.251 0 0 0 .062-.007c.276-.063 7.866-2.344 9.311-2.778a.972.972 0 0 0 .414-.249l20.888-20.889a1.372 1.372 0 0 0 .4-.883 1.221 1.221 0 0 0-.346-.945zM11.4 29.316c-2.161.649-4.862 1.465-6.729 2.022l2.009-6.73z"></path>
                                        </svg>
                                    </div>
                                </sp-action-button>
                            </div>
                        </sp-field-group>
                    </>
                ) : (
                    <GroupLabel onClick={toggleOptions} type="closed" name="Hero" size="s" />
                )}


                {selectedHero && isOptionsOpen && isEditClicked && (
                    <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}>
                        {herosArr[hero].fieldsTitle.map((field, i) => (
                            <div key={field} style={{ margin: "4px 0px" }}>
                                <sp-detail for={`${field}-field`}>{field.toUpperCase()}</sp-detail>
                                <sp-textfield
                                    id={`${field}-field`}
                                    placeholder={`Insira o ${field}`}
                                    value={tempFormState[herosArr[hero].fields[i]]}
                                    onInput={(e) => handleFieldChange(herosArr[hero].fields[i], e.target.value)}
                                    onBlur={() => handleBlur(herosArr[hero].fields[i])}
                                    valid={tempFormState[herosArr[hero].fields[i]] !== "" ? valid[herosArr[hero].fields[i]] : undefined}
                                ></sp-textfield>
                            </div>
                        ))}
                    </div>
                )}

            </div >
        </>
    );
}
