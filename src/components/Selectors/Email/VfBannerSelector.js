import React, { useState, useEffect } from 'react';
import useAppContext from '../../../hook/useAppContext.jsx';
import useFormState from '../../../hook/useFormState.jsx';
import StatusIcon from '../../Icons/StatusIcon.jsx';
import { useToggleState } from "../../../hook/useToogle.jsx";
import BaseIcon from '../../Icons/BaseIcon.jsx';
import GroupLabel from '../../Labels/GroupLabel.jsx';
import useStatusIcon from '../../../functions/fieldStatusChecker.jsx';
import IconButton from '../../Icons/IconButton.jsx';

const bannersArr = {
    '': {
        name: 'None',
        key: [],
        fieldsTitle: [],
        fields: []
    },
    'ms365': {
        name: 'Microsoft 365',
        key: 'banner',
        fieldsTitle: ['headline', 'copy', 'cta'],
        fields: ['headline', 'copy', 'cta'],
    },
    'msserver': {
        name: 'Microsoft Server',
        key: 'banner',
        fieldsTitle: ['headline', 'copy', 'cta'],
        fields: ['headline', 'copy', 'cta'],
    },
    'mcafee': {
        name: 'McAfee',
        key: 'banner',
        fieldsTitle: ['headline', 'copy', 'cta'],
        fields: ['headline', 'copy', 'cta'],
    },
}

export default function VfBannerSelector() {

    const { selectedModules, setSelectedModules, copyValues, setCopyValues } = useAppContext();

    const { vfbanner } = selectedModules

    const bannerCopy = copyValues.vfbanner;

    const setBannerCopy = (values) => setCopyValues({ ...copyValues, [bannersArr[vfbanner].key]: values });

    const { valid, handleFieldChange, handleBlur, initialState, tempFormState, resetFormState } = useFormState(setBannerCopy, bannerCopy, bannersArr);

    const { setStatusByField } = useStatusIcon();

    const [isOptionsOpen, toggleOptions] = useToggleState(false);
    const [isEditClicked, setIsEditClicked] = useToggleState(false);

    const [selected, setSelected] = useState({ vfbanner: false });

    const statusType = setStatusByField({
        type: "filledOnObj",
        value: bannerCopy,
        obj: vfbanner,
        array: bannersArr,
    });

    const handleBannerClick = (vfbanner) => {
        setSelectedModules(prevState => ({
            ...prevState,
            vfbanner: vfbanner
        }));
    };

    const handleResetClick = () => {
        setSelectedModules(prevState => ({
            ...prevState,
            vfbanner: null
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
                        <GroupLabel onClick={toggleOptions} type="open" size="s" name="Vf Banner" />
                        <sp-field-group>
                            <sp-picker placeholder="Selecione o banner" label="Selection type">
                                <sp-menu>
                                    {Object.entries(bannersArr).map(([vfbanner, { name }], index) => (
                                        <div key={`${vfbanner}-${index}`}>
                                            <sp-menu-item
                                                onClick={() => handleBannerClick(vfbanner)}
                                                selected={vfbanner === selectedModules.vfbanner ? selected.vfbanner : null}>
                                                {name}
                                            </sp-menu-item>
                                        </div>
                                    ))}
                                </sp-menu>
                            </sp-picker>
                            <IconButton state={vfbanner} size="xl" type="editPen" onClick={setIsEditClicked}></IconButton>
                        </sp-field-group>
                    </>
                ) : (
                    <GroupLabel onClick={toggleOptions} type="closed" name="Vf Banner" size="s" />
                )}

                {vfbanner && isOptionsOpen && isEditClicked && (
                    <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}>
                        {bannersArr[vfbanner].fieldsTitle.map((field, i) => (
                            <div key={field} style={{ margin: "4px 0px" }}>
                                <sp-detail for={`${field}-field`}>{field.toUpperCase()}</sp-detail>
                                <sp-textfield
                                    id={`${field}-field`}
                                    placeholder={`Insira o ${field}`}
                                    value={tempFormState[bannersArr[vfbanner].fields[i]]}
                                    onInput={(e) => handleInput(bannersArr[vfbanner].fields[i], e.target.value)}
                                    onBlur={() => handleBlur(bannersArr[vfbanner].fields[i])}
                                    valid={tempFormState[bannersArr[vfbanner].fields[i]] !== "" ? valid[bannersArr[vfbanner].fields[i]] : undefined}
                                ></sp-textfield>
                            </div>
                        ))}
                    </div>
                )}
            </div >
        </>
    );
}