import React, { useState, useEffect } from 'react';
import useAppContext from '../../hook/useAppContext.jsx';
import IconButton from '../Icons/IconButton.jsx';
import GroupLabel from '../GroupLabel.jsx';
import useFormState from '../../hook/useFormState.jsx';
import { useToggleState } from '../../hook/useToogle.jsx';
import StatusIcon from '../Icons/StatusIcon.jsx';
import BaseIcon from '../Icons/BaseIcon.jsx';
import Picker from '../Picker.jsx';

const birdseedArr = [
    {
        type: "",
        label: "None",
        values: []
    },
    {
        type: "standard",
        label: "Standard",
        values: ['day', 'month', 'year', 'copy']
    },
    {
        type: "outlet",
        label: "Outlet",
        values: ['copy']
    }
];

export default function BirdseedSelector() {

    const { selectedBirdseed, setSelectedBirdseed, birdseedValues, setBirdseedValues } = useAppContext();

    const { valid, handleFieldChange, handleBlur, initialState, setInitialState, tempFormState, setTempFormState } = useFormState(setBirdseedValues, birdseedValues);

    var birdseed = selectedBirdseed
    var setBirdseed = setSelectedBirdseed

    const { copy, day, month, year, } = birdseedValues || {};

    const [isOptionsOpen, toggleOptions] = useToggleState(false);
    const [isEditClicked, setIsEditClicked] = useToggleState(false);
    const [isChecked, setIsChecked] = useToggleState(false);

    const handleBirdseedClick = (birdseed) => {
        setBirdseed(birdseed);
    }

    const handleResetClick = () => {
        setSelectedBirdseed(null);
        setBirdseedValues(initialState);
        toggleOptions(false);
        setIsChecked(false)
    };

    const valueKeys = Object.keys(birdseedValues || {});

    useEffect(() => {
        const newInitialState = {}
        const newTempFormState = {};

        valueKeys.forEach(value => {
            newInitialState[value] = "";
            newTempFormState[value] = copy || "";
        });

        setInitialState(newInitialState);
        setTempFormState(newTempFormState);
    }, [birdseed]);


    const handleBirdseedValues = ({ copy, day, month, year }) => {
        setBirdseedValues({ copy, day, month, year, });
    };

    const handleCopyCheck = () => {
        setIsChecked(!isChecked);
    };

    return (
        <>
            <div className={isOptionsOpen ? "group-open" : "group"}>
                <sp-icons>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <StatusIcon type={'check'} size="s" />
                        <BaseIcon onClick={handleResetClick} size="s" type="bin" />
                    </div>
                </sp-icons>
                {isOptionsOpen ? (
                    <>
                        <GroupLabel onClick={toggleOptions} type="open" size="s" name="Birdseed" />
                        <sp-picker placeholder="Selecione o birdseed" id="picker-m" size="m" label="Selection type">
                            <sp-menu>
                                <sp-menu-group>
                                    {birdseedArr.map((option, index) => (
                                        <sp-menu-item
                                            key={index}
                                            selected={birdseed === option.type ? selectedBirdseed : undefined}
                                            onClick={() => handleBirdseedClick(option.type)}
                                        >
                                            {option.label}
                                        </sp-menu-item>
                                    ))}
                                </sp-menu-group>
                            </sp-menu>
                        </sp-picker>
                        <IconButton state={birdseed} size="xl" type="editPen" onClick={setIsEditClicked}></IconButton>
                    </>
                ) : (
                    <GroupLabel onClick={toggleOptions} type="closed" name="Birdseed" size="s" />
                )}

                {selectedBirdseed === 'standard' && isEditClicked && isOptionsOpen && (
                    <>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <sp-detail>DATA DE DISPARO</sp-detail>
                            <div style={{ display: 'flex', flexWrap: "wrap" }}>
                                <Picker
                                    label="Dia"
                                    placeholder="Dia"
                                    id="day-picker"
                                    options={[...Array(31).keys()].map(day => ({ label: day + 1, value: day + 1 }))}
                                    selectedValue={day}
                                    onSelect={(selectedDay) => {
                                        setBirdseedValues((prevBirdseedValues) => ({
                                            ...prevBirdseedValues, day: selectedDay
                                        }));
                                        handleBirdseedValues({
                                            copy, day: selectedDay, month, year
                                        });
                                    }}
                                />
                                <Picker
                                    label="Mês"
                                    placeholder="Mês"
                                    id="month-picker"
                                    options={[...Array(12).keys()].map(month => ({ label: month + 1, value: month + 1 }))}
                                    selectedValue={month}
                                    onSelect={(selectedMonth) => {
                                        setBirdseedValues((prevBirdseedValues) => ({
                                            ...prevBirdseedValues, month: selectedMonth
                                        }));
                                        handleBirdseedValues({
                                            copy, day, month: selectedMonth, year
                                        });
                                    }}
                                />
                                <Picker
                                    label="Ano"
                                    placeholder="Ano"
                                    id="year-picker"
                                    options={[...Array(2).keys()].map((_, index) => {
                                        const currentYear = new Date().getFullYear();
                                        return { label: currentYear + index, value: currentYear + index };
                                    })}
                                    selectedValue={year}
                                    onSelect={(selectedYear) => {
                                        setBirdseedValues((prevBirdseedValues) => ({
                                            ...prevBirdseedValues, year: selectedYear
                                        }));
                                        handleBirdseedValues({
                                            copy, day, month, year: selectedYear
                                        });
                                    }}
                                />
                            </div>
                        </div>
                    </>
                )}

                {(selectedBirdseed !== null && selectedBirdseed !== '') && isEditClicked && isOptionsOpen && (
                    <>
                        <div>
                            <sp-field-group>
                                <sp-checkbox style={{ margin: "0 0 0 2px", }} size="m" onClick={() => handleCopyCheck(setIsChecked)}>Copy extra</sp-checkbox>
                            </sp-field-group>
                        </div>
                    </>
                )}

                {isChecked && isEditClicked && isOptionsOpen && (
                    <>
                        <div style={{ marginTop: "5px" }}>
                            <sp-textfield
                                id="birdseed-copy-field"
                                placeholder="Texto extra para o Birdseed"
                                value={tempFormState.copy}
                                onInput={(e) => handleFieldChange('copy', e.target.value)}
                                onBlur={() => handleBlur('copy')}
                                valid={tempFormState.copy !== "" ? valid.copy : undefined}
                            ></sp-textfield>
                        </div>
                    </>
                )}
            </div>
        </>
    );
}