import React, { useState, useEffect } from "react";
import useAppContext from "./hook/useAppContext.jsx";
import useFormState from "./hook/useFormState.jsx";
import { useToggleState } from "./hook/useToogle.jsx";
import StatusIcon from "./components/Icons/StatusIcon.jsx";
import BaseIcon from "./components/Icons/BaseIcon.jsx";
import GroupLabel from "./components/GroupLabel.jsx";
import IconButton from "./components/Icons/IconButton.jsx";
import useStatusIcon from "./functions/fieldStatusChecker.jsx";

const herosArr = {
    'hero1-lifestyle-product': {
        path: 'assets/heros/images/hero1-lifestyle-product.png',
        name: 'Hero Layout 1 - Lifestyle & Product',
        brand: 'dell',
        fieldsTitle: ['badge', 'headline', 'subheadline', 'product name', 'supercharger', 'hero cta'],
        fields: ['badge', 'headline', 'subheadline', 'productName', 'productSupercharger', 'cta']
    },
    'hero1-lifestyle': {
        path: 'assets/heros/images/hero1-lifestyle.png',
        name: 'Hero Layout 1 - Only Lifestyle',
        brand: 'dell',
        fieldsTitle: ['badge', 'headline', 'subheadline', 'hero cta'],
        fields: ['badge', 'headline', 'subheadline', 'cta']
    },
    'hero1-product': {
        path: 'assets/heros/images/hero1-product.png',
        name: 'Hero Layout 1 - Only Product',
        brand: 'dell',
        fieldsTitle: ['badge', 'headline', 'OT', 'product name', 'subheadline', 'hero cta'],
        fields: ['badge', 'headline', 'ot', 'productName', 'subheadline', 'cta']
    },
    'aw-hero1-lifestyle-product': {
        path: 'assets/heros/images/aw-hero1-lifestyle-product.png',
        name: 'AW Hero Layout 1 - Lifestyle & Product',
        brand: 'alienware',
        fieldsTitle: ['badge', 'headline', 'subheadline', 'product name', 'hero cta'],
        fields: ['badge', 'headline', 'subheadline', 'productName', 'cta']
    },
    // 'hero2-promotion': {
    //     path: 'assets/heros/images/hero2-promotion.png',
    //     name: 'Hero Layout 2 - Promotion',
    //     brand: 'dell',
    //     fieldsTitle: ['badge', 'headline', 'subheadline', 'inline promo', 'product name', 'specs', 'price', 'hero cta'],
    //     fields: ['badge', 'headline', 'subheadline', 'inlinePromo', 'productName', 'specs', 'price', 'cta']
    // },
};

export default function HeroSelector() {
    const { selectedModules, setSelectedModules, heroValues, setHeroValues } = useAppContext();

    const { valid, handleFieldChange, handleBlur, initialState, setInitialState, tempFormState, setTempFormState } = useFormState(setHeroValues, heroValues);

    const { setStatusByField } = useStatusIcon();

    const [isOptionsOpen, toggleOptions] = useToggleState(false);
    const [isEditClicked, setIsEditClicked] = useToggleState(false);

    var hero = selectedModules.hero

    const [selected, setSelected] = useState({ hero: false });

    const statusType = setStatusByField({
        type: "filledOnObj",
        value: heroValues,
        obj: hero,
        array: herosArr,
    });

    const handleHeroClick = (hero) => {
        setSelectedModules(prevState => ({
            ...prevState,
            hero: hero
        }));
    };

    const handleResetClick = () => {
        setSelectedModules(prevState => ({
            ...prevState,
            hero: null
        }));
        setHeroValues(initialState);
        toggleOptions(false)
    };

    const fieldKeys = Object.keys(heroValues || {});

    useEffect(() => {
        const newInitialState = {}
        const newTempFormState = {};

        fieldKeys.forEach(field => {
            newInitialState[field] = "";
            newTempFormState[field] = heroValues[field] || "";
        });

        setInitialState(newInitialState);
        setTempFormState(newTempFormState);
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
                                                selected={hero === selectedModules.hero ? selected.hero : null}>
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
                            <IconButton state={hero} size="xl" type="editPen" onClick={setIsEditClicked}></IconButton>
                        </sp-field-group>
                    </>
                ) : (
                    <GroupLabel onClick={toggleOptions} type="closed" name="Hero" size="s" />
                )}

                {hero && isOptionsOpen && isEditClicked && (
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