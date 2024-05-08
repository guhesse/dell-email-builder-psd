import React, { useState, useEffect } from 'react';
import useAppContext from './hook/useAppContext.jsx';
import StatusIcon from './components/Icons/StatusIcon.jsx';
import BaseIcon from './components/Icons/BaseIcon.jsx';
import GroupLabel from './components/GroupLabel.jsx';
import IconButton from './components/Icons/IconButton.jsx';
import useStatusIcon from './functions/fieldStatusChecker.jsx';
import { useToggleState } from './hook/useToogle.jsx';
import useFormState from './hook/useFormState.jsx';

const vfArr = {
    '': {
        name: 'No Vendor Funding',
        fieldsTitle: [],
        fields: []
    },
    'win11': {
        name: 'Windows 11',
        fieldsTitle: ['funding copy'],
        fields: ['vfCopyValue']
    },
}


export default function FundingSelector() {

    const { fundingCopyValues, setFundingCopyValues, selectedModules, setSelectedModules } = useAppContext();

    const { valid, handleFieldChange, handleBlur, initialState, setInitialState, tempFormState, setTempFormState } = useFormState(setFundingCopyValues, fundingCopyValues);

    const { setStatusByField, checkIsSelected } = useStatusIcon();

    const [isOptionsOpen, toggleOptions] = useToggleState(false);
    const [isEditClicked, setIsEditClicked] = useToggleState(false);

    var vf = selectedModules.vf

    const [selected, setSelected] = useState({ vf: false });

    const handleFundingClick = (vf) => {
        setSelectedModules(prevState => ({
            ...prevState,
            vf: vf
        }));
    };

    const handleResetClick = () => {
        setSelectedModules(prevState => ({
            ...prevState,
            vf: null
        }));
        setFundingCopyValues(initialState);
        toggleOptions(false);
    };

    const fieldKeys = Object.keys(fundingCopyValues || {});

    useEffect(() => {
        const newInitialState = {}
        const newTempFormState = {};

        fieldKeys.forEach(field => {
            newInitialState[field] = "";
            newTempFormState[field] = fundingCopyValues[field] || "";
        });

        setInitialState(newInitialState);
        setTempFormState(newTempFormState);
    }, [fundingCopyValues]);

    let statusType = {}

    if (vf === "") {
        statusType = checkIsSelected({
            value: vf,
        });
    } else {
        statusType = setStatusByField({
            type: "filledOnObj",
            value: fundingCopyValues,
            obj: vf,
            array: vfArr,
        });
    }

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
                        <GroupLabel onClick={toggleOptions} type="open" size="s" name="Funding" />
                        <sp-field-group>
                            <sp-picker placeholder="Selecione o funding" label="Selection type">
                                <sp-menu>
                                    {Object.entries(vfArr).map(([vf, { name }], index) => (
                                        <div key={`${vf}-${index}`}>
                                            <sp-menu-item
                                                onClick={() => handleFundingClick(vf)}
                                                selected={vf === selectedModules.vf ? selected.vf : null}>
                                                {name}
                                            </sp-menu-item>
                                        </div>
                                    ))}
                                </sp-menu>
                            </sp-picker>
                            <IconButton state={vf} size="xl" type="editPen" onClick={setIsEditClicked}></IconButton>
                        </sp-field-group>
                    </>
                ) : (
                    <GroupLabel onClick={toggleOptions} type="closed" name="Funding" size="s" />
                )}

                {vf && isOptionsOpen && isEditClicked && (
                    <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}>
                        {vfArr[vf].fieldsTitle.map((field, i) => (
                            <div key={field} style={{ margin: "4px 0px" }}>
                                <sp-detail for={`${field}-field`}>{field.toUpperCase()}</sp-detail>
                                <sp-textfield
                                    id={`${field}-field`}
                                    placeholder={`Insira o ${field}`}
                                    value={tempFormState[vfArr[vf].fields[i]]}
                                    onInput={(e) => handleFieldChange(vfArr[vf].fields[i], e.target.value)}
                                    onBlur={() => handleBlur(vfArr[vf].fields[i])}
                                    valid={tempFormState[vfArr[vf].fields[i]] !== "" ? valid[vfArr[vf].fields[i]] : undefined}
                                ></sp-textfield>
                            </div>
                        ))}
                    </div>
                )}

            </div>
        </>
    );
}