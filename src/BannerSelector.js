import React, { useState, useEffect } from 'react';
import useAppContext from './hook/useAppContext.jsx';
import useFormState from './hook/useFormState.jsx';
import StatusIcon from './components/Icons/StatusIcon.jsx';
import { useToggleState } from "./hook/useToogle.jsx";
import BaseIcon from './components/Icons/BaseIcon.jsx';
import GroupLabel from './components/GroupLabel.jsx';
import useStatusIcon from './functions/fieldStatusChecker.jsx';
import IconButton from './components/Icons/IconButton.jsx';

const bannersArr = {
    '': {
        name: 'None',
        fieldsTitle: [],
        fields: []
    },
    'left': {
        name: 'Left',
        fieldsTitle: ['headline', 'copy', 'cta'],
        fields: ['bannerHeadlineValue', 'bannerCopyValue', 'bannerCtaValue'],
    },
    'right': {
        name: 'Right',
        fieldsTitle: ['headline', 'copy', 'cta'],
        fields: ['bannerHeadlineValue', 'bannerCopyValue', 'bannerCtaValue'],
    },
}

export default function BannerSelector() {

    const { selectedBanner, setSelectedBanner, bannerCopyValues, setBannerCopyValues } = useAppContext();

    const { valid, handleFieldChange, handleBlur, initialState, setInitialState, tempFormState, setTempFormState } = useFormState(setBannerCopyValues, bannerCopyValues);

    const { setStatusByField } = useStatusIcon();

    var banner = selectedBanner
    var setBanner = setSelectedBanner

    const [isOptionsOpen, toggleOptions] = useToggleState(false);
    const [isEditClicked, setIsEditClicked] = useToggleState(false);

    const [selected, setSelected] = useState({ banner: false });

    const statusType = setStatusByField({
        type: "filledOnObj",
        value: bannerCopyValues,
        obj: banner,
        array: bannersArr,
    });

    const handleBannerClick = (banner) => {
        setBanner(banner);
    };

    const handleResetClick = () => {
        setSelectedBanner(null);
        setBannerCopyValues(initialState);
    };

    const fieldKeys = Object.keys(bannerCopyValues || {});

    useEffect(() => {
        const newInitialState = {}
        const newTempFormState = {};

        fieldKeys.forEach(field => {
            newInitialState[field] = "";
            newTempFormState[field] = bannerCopyValues[field] || "";
        });

        setInitialState(newInitialState);
        setTempFormState(newTempFormState);
    }, [banner]);

    return (
        <>
            <div style={{ display: "flex", flexWrap: "wrap", flexDirection: "column", alignItems: "flex-start" }} className="group">
                <sp-icons>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <StatusIcon type={statusType} size="s" />
                        <BaseIcon onClick={handleResetClick} size="s" type="bin" />
                    </div>
                </sp-icons>
                {isOptionsOpen ? (
                    <>
                        <GroupLabel onClick={toggleOptions} type="open" size="s" name="Banner" />
                        <sp-field-group>
                            <sp-picker placeholder="Selecione o banner" label="Selection type">
                                <sp-menu>
                                    {Object.entries(bannersArr).map(([banner, { name }], index) => (
                                        <div key={`${banner}-${index}`}>
                                            <sp-menu-item
                                                onClick={() => handleBannerClick(banner)}
                                                selected={banner === selectedBanner ? selected.banner : null}>
                                                {name}
                                            </sp-menu-item>
                                        </div>
                                    ))}
                                </sp-menu>
                            </sp-picker>
                            <IconButton state={banner} size="xl" type="editPen" onClick={setIsEditClicked}></IconButton>
                        </sp-field-group>
                    </>
                ) : (
                    <GroupLabel onClick={toggleOptions} type="closed" name="Banner" size="s" />
                )}

                {selectedBanner && isOptionsOpen && isEditClicked && (
                    <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}>
                        {bannersArr[banner].fieldsTitle.map((field, i) => (
                            <div key={field} style={{ margin: "4px 0px" }}>
                                <sp-detail for={`${field}-field`}>{field.toUpperCase()}</sp-detail>
                                <sp-textfield
                                    id={`${field}-field`}
                                    placeholder={`Insira o ${field}`}
                                    value={tempFormState[bannersArr[banner].fields[i]]}
                                    onInput={(e) => handleFieldChange(bannersArr[banner].fields[i], e.target.value)}
                                    onBlur={() => handleBlur(bannersArr[banner].fields[i])}
                                    valid={tempFormState[bannersArr[banner].fields[i]] !== "" ? valid[bannersArr[banner].fields[i]] : undefined}
                                ></sp-textfield>
                            </div>
                        ))}
                    </div>
                )}
            </div >
        </>
    );
}