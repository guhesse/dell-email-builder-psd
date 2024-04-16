import React, { useState, useEffect } from "react";
import useAppContext from "./hook/useAppContext.jsx";
import useFormState from "./hook/useFormState.jsx";
import { useToggleState, useToggleFunctionState } from "./hook/useToogle.jsx";
import StatusIcon from "./components/Icons/StatusIcon.jsx";
import BaseIcon from "./components/Icons/BaseIcon.jsx";
import GroupLabel from "./components/GroupLabel.jsx";
import ButtonIcon from "./components/Icons/IconButton.jsx";
import useStatusIcon from "./functions/fieldStatusChecker.jsx";

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
    const { csvValues, selectedHero, setSelectedHero, heroCopyValues, setHeroCopyValues } = useAppContext();

    const { valid, handleFieldChange, handleBlur, initialState, setInitialState, tempFormState, setTempFormState } = useFormState(setHeroCopyValues, heroCopyValues);

    const { setStatusByField } = useStatusIcon();

    const [isOptionsOpen, toggleOptions] = useToggleState(false);
    const [isEditClicked, setIsEditClicked] = useToggleState(true);

    var hero = selectedHero

    const [selected, setSelected] = useState({ hero: false });

    const statusType = setStatusByField({
        type: "filledOnObj",
        value: heroCopyValues,
        obj: hero,
        array: herosArr,
    });

    const handleHeroClick = (hero) => {
        setSelectedHero(hero);
    };

    const handleResetClick = () => {
        setSelectedHero(null);
        setHeroCopyValues(initialState);
        toggleOptions(false)
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


    // Vamos tentar depois transformar isso em mais um com ponente
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

    return (
        <>
            <div className="group">
                <sp-icons>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <StatusIcon type={statusType} size="s" />
                        <BaseIcon onClick={handleResetClick} size="s" type="bin" />
                    </div>
                </sp-icons>
                {isOptionsOpen ? (
                    <>
                        <GroupLabel onClick={toggleOptions} type="open" size="s" name="Hero" />
                        <sp-field-group>
                            <sp-picker placeholder="Selecione o hero" label="Selection type">
                                <sp-menu>
                                    {Object.entries(herosArr).map(([hero, { path, name }], index) => (
                                        <div className="flexCenter" key={`${hero}-${index}`}>
                                            <sp-menu-item
                                                onClick={() => handleHeroClick(hero)}
                                                selected={hero === selectedHero ? selected.hero : null}>
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
                            <ButtonIcon state={hero} size="xl" type="editPen" onClick={setIsEditClicked}></ButtonIcon>
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

            </div>
        </>
    );
}