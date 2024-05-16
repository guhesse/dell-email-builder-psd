import React, { useState, useEffect } from 'react';
import useAppContext from '../../hook/useAppContext.jsx';
import StatusIcon from '../Icons/StatusIcon.jsx';
import BaseIcon from '../Icons/BaseIcon.jsx';
import GroupLabel from '../GroupLabel.jsx';
import IconButton from '../Icons/IconButton.jsx';
import useStatusIcon from '../../functions/fieldStatusChecker.jsx';
import { useToggleState } from '../../hook/useToogle.jsx';
import useFormState from '../../hook/useFormState.jsx';

const vfArr = {
    '': {
        name: 'No Vendor Funding',
        key: [],
        fieldsTitle: [],
        fields: []
    },
    'win11': {
        name: 'Windows 11',
        key: 'vf',
        fieldsTitle: ['funding copy'],
        fields: ['copy']
    },
}

export default function FundingSelector() {
    const { selectedModules, setSelectedModules, copyValues, setCopyValues } = useAppContext();
    const { vf } = selectedModules;

    const vfCopy = copyValues[vfArr.key];
    const setVfCopy = (values) => setCopyValues({ ...copyValues, [vfArr[vf].key]: values });

    const { valid, handleFieldChange, handleBlur, resetFormState, tempFormState } = useFormState(setVfCopy, vfCopy, vfArr);

    const { setStatusByField, checkIsSelected } = useStatusIcon();

    const [isOptionsOpen, toggleOptions] = useToggleState(false);
    const [isEditClicked, setIsEditClicked] = useToggleState(false);

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
        setVfCopy({ copy: "" });
        resetFormState();
        toggleOptions(false);
    };

    const handleInput = (field, value) => {
        handleFieldChange(field, value);
        setVfCopy({ ...vfCopy, [field]: value });
    };

    let statusType = {}

    if (vf === "") {
        statusType = checkIsSelected({
            value: vf,
        });
    } else {
        statusType = setStatusByField({
            type: "filledOnObj",
            array: vfArr,
            value: vfCopy,
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

                {vf && isOptionsOpen && isEditClicked && vfArr[vf] && (
                    <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}>
                        {vfArr[vf].fieldsTitle.map((field, i) => (
                            <div key={field} style={{ margin: "4px 0px" }}>
                                <sp-detail for={`${field}-field`}>{field.toUpperCase()}</sp-detail>
                                <sp-textfield
                                    id={`${field}-field`}
                                    placeholder={`Insira o ${field}`}
                                    value={tempFormState[vfArr[vf].fields[i]]}
                                    onInput={(e) => handleInput(vfArr[vf].fields[i], e.target.value)}
                                    onBlur={() => handleBlur(vfArr[vf].fields[i], tempFormState[vfArr[vf].fields[i]])}
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