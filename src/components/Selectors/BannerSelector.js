import React, { useState, useEffect } from 'react';
import useAppContext from '../../hook/useAppContext.jsx';
import useFormState from '../../hook/useFormState.jsx';
import StatusIcon from '../Icons/StatusIcon.jsx';
import { useToggleState } from "../../hook/useToogle.jsx";
import BaseIcon from '../Icons/BaseIcon.jsx';
import GroupLabel from '../GroupLabel.jsx';
import useStatusIcon from '../../functions/fieldStatusChecker.jsx';
import IconButton from '../Icons/IconButton.jsx';

const bannersArr = {
    '': {
        name: 'None',
        key: [],
        fieldsTitle: [],
        fields: []
    },
    'left': {
        name: 'Left',
        key: 'banner',
        fieldsTitle: ['headline', 'copy', 'cta'],
        fields: ['headline', 'copy', 'cta'],
    },
    'right': {
        name: 'Right',
        key: 'banner',
        fieldsTitle: ['headline', 'copy', 'cta'],
        fields: ['headline', 'copy', 'cta'],
    },
}

export default function BannerSelector() {

    const { selectedModules, setSelectedModules, copyValues, setCopyValues } = useAppContext();

    const { banner } = selectedModules

    const bannerCopy = copyValues.banner;

    const setBannerCopy = (values) => setCopyValues({ ...copyValues, [bannersArr[banner].key]: values });

    const { valid, handleFieldChange, handleBlur, initialState, tempFormState, resetFormState } = useFormState(setBannerCopy, bannerCopy, bannersArr);

    const { setStatusByField } = useStatusIcon();

    const [isOptionsOpen, toggleOptions] = useToggleState(false);
    const [isEditClicked, setIsEditClicked] = useToggleState(false);

    const [selected, setSelected] = useState({ banner: false });

    const statusType = setStatusByField({
        type: "filledOnObj",
        value: bannerCopy,
        obj: banner,
        array: bannersArr,
    });

    const handleBannerClick = (banner) => {
        setSelectedModules(prevState => ({
            ...prevState,
            banner: banner
        }));
    };

    const handleResetClick = () => {
        setSelectedModules(prevState => ({
            ...prevState,
            banner: null
        }));
        setBannerCopy({
            headline: '',
            copy: '',
            cta: ''
        })
        resetFormState();
        toggleOptions(false)
    };

    const handleInput = (field, value) => {
        handleFieldChange(field, value);
        setBannerCopy({ ...bannerCopy, [field]: value });
    };

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
                        <GroupLabel onClick={toggleOptions} type="open" size="s" name="Banner" />
                        <sp-field-group>
                            <sp-picker placeholder="Selecione o banner" label="Selection type">
                                <sp-menu>
                                    {Object.entries(bannersArr).map(([banner, { name }], index) => (
                                        <div key={`${banner}-${index}`}>
                                            <sp-menu-item
                                                onClick={() => handleBannerClick(banner)}
                                                selected={banner === selectedModules.banner ? selected.banner : null}>
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

                {banner && isOptionsOpen && isEditClicked && (
                    <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}>
                        {bannersArr[banner].fieldsTitle.map((field, i) => (
                            <div key={field} style={{ margin: "4px 0px" }}>
                                <sp-detail for={`${field}-field`}>{field.toUpperCase()}</sp-detail>
                                <sp-textfield
                                    id={`${field}-field`}
                                    placeholder={`Insira o ${field}`}
                                    value={tempFormState[bannersArr[banner].fields[i]]}
                                    onInput={(e) => handleInput(bannersArr[banner].fields[i], e.target.value)}
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