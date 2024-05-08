import React, { useState, useEffect } from "react";
import useAppContext from "./hook/useAppContext.jsx";
import BaseIcon from "./components/Icons/BaseIcon.jsx";
import StatusIcon from "./components/Icons/StatusIcon.jsx";
import useStatusIcon from "./functions/fieldStatusChecker.jsx";
import useFormState from "./hook/useFormState.jsx";
import GroupLabel from "./components/GroupLabel.jsx";
import IconButton from "./components/Icons/IconButton.jsx";
import { useToggleState } from "./hook/useToogle.jsx";
useToggleState

const skinnyArr = {
    '': {
        name: 'None',
        fieldsTitle: [],
        fields: []
    },
    'left': {
        name: 'Left',
        fieldsTitle: ['headline', 'copy'],
        fields: ['headline', 'copy']
    },
    'center': {
        name: 'Center',
        fieldsTitle: ['headline', 'copy'],
        fields: ['headline', 'copy']
    },
    'right': {
        name: 'Right',
        fieldsTitle: ['headline', 'copy'],
        fields: ['headline', 'copy']
    },
}


export default function SkinnySelector() {
    const { selectedModules, setSelectedModules, skinnyValues, setSkinnyValues } = useAppContext();

    const { valid, handleFieldChange, handleBlur, initialState, setInitialState, tempFormState, setTempFormState } = useFormState(setSkinnyValues, skinnyValues);

    const { setStatusByField, checkIsSelected } = useStatusIcon();

    const [isOptionsOpen, toggleOptions] = useToggleState(false);
    const [isEditClicked, setIsEditClicked] = useToggleState(false);
    
    var skinny = selectedModules.skinny

    const [selected, setSelected] = useToggleState({ skinny: false });

    const handleSkinnyClick = (skinny) => {
        setSelectedModules(prevState => ({
            ...prevState,
            skinny: skinny
        }));
    };

    const handleResetClick = () => {
        setSelectedModules(prevState => ({
            ...prevState,
            skinny: null
        }));
        setSkinnyValues({initialState})
    };

    const fieldKeys = Object.keys(skinnyValues || {});

    useEffect(() => {
        const newInitialState = {}
        const newTempFormState = {};

        fieldKeys.forEach(field => {
            newInitialState[field] = "";
            newTempFormState[field] = skinnyValues[field] || "";
        });

        setInitialState(newInitialState);
        setTempFormState(newTempFormState);
    }, [skinny]);

    let statusType = {}

    if (skinny === "") {
        statusType = checkIsSelected({
            value: skinny,
        });
    } else {
        statusType = setStatusByField({
            type: "filledOnObj",
            value: skinnyValues,
            obj: skinny,
            array: skinnyArr,
        });
    }

    return (
        <>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start", flexDirection: "column" }} className="group">
                <sp-icons>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <StatusIcon type={statusType} size="s" />
                        <BaseIcon onClick={handleResetClick} size="s" type="bin" />
                    </div>
                </sp-icons>

                {isOptionsOpen ? (
                    <>
                        <GroupLabel onClick={toggleOptions} type="open" size="s" name="Skinny Banner" />
                        <sp-field-group>
                            <sp-picker placeholder="Selecione o skinny" label="Selection type">
                                <sp-menu>
                                    {Object.entries(skinnyArr).map(([skinny, { name }], index) => (
                                        <div key={`${skinny}-${index}`}>
                                            <sp-menu-item
                                                onClick={() => handleSkinnyClick(skinny)}
                                                selected={skinny === selectedModules.skinny ? selected.skinny : null}>
                                                {name}
                                            </sp-menu-item>
                                        </div>
                                    ))}
                                </sp-menu>
                            </sp-picker>
                            <IconButton state={skinny} size="xl" type="editPen" onClick={setIsEditClicked}></IconButton>
                        </sp-field-group>
                    </>
                ) : (
                    <GroupLabel onClick={toggleOptions} type="closed" name="Skinny Banner" size="s" />
                )}


                {skinny && isOptionsOpen && isEditClicked && (
                    <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}>
                        {skinnyArr[skinny].fieldsTitle.map((field, i) => (
                            <div key={field} style={{ margin: "4px 0px" }}>
                                <sp-detail for={`${field}-field`}>{field.toUpperCase()}</sp-detail>
                                <sp-textfield
                                    id={`${field}-field`}
                                    placeholder={`Insira o ${field}`}
                                    value={tempFormState[skinnyArr[skinny].fields[i]]}
                                    onInput={(e) => handleFieldChange(skinnyArr[skinny].fields[i], e.target.value)}
                                    onBlur={() => handleBlur(skinnyArr[skinny].fields[i])}
                                    valid={tempFormState[skinnyArr[skinny].fields[i]] !== "" ? valid[skinnyArr[skinny].fields[i]] : undefined}
                                ></sp-textfield>
                            </div>
                        ))}
                    </div>
                )}
            </div >
        </>
    );
}
