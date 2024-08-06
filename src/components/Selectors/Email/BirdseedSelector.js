import React, { useState, useEffect } from 'react';
import useAppContext from '../../../hook/useAppContext.jsx';
import IconButton from '../../Icons/IconButton.jsx';
import GroupLabel from '../../Labels/GroupLabel.jsx';
import useFormState from '../../../hook/useFormState.jsx';
import { useToggleState } from '../../../hook/useToogle.jsx';
import StatusIcon from '../../Icons/StatusIcon.jsx';
import BaseIcon from '../../Icons/BaseIcon.jsx';
import Picker from '../../Picker.jsx';
import useStatusIcon from '../../../functions/fieldStatusChecker.jsx';

const birdseedArr = [
    {
        type: '',
        label: 'None',
        key: [],
        values: []
    },
    {
        type: 'standard',
        label: 'Standard',
        key: 'birdseed',
        values: ['day', 'month', 'year', 'copy']
    },
    {
        type: 'outlet',
        label: 'Outlet',
        key: 'birdseed',
        values: ['copy']
    }
];

export default function BirdseedSelector() {

    const { selectedModules, setSelectedModules, copyValues, setCopyValues } = useAppContext();

    const { birdseed } = selectedModules

    const birdseedValues = copyValues.birdseed;

    const setBirdseedValues = (values) => {
        const birdseedObj = birdseedArr.find(item => item.type === birdseed);
        if (birdseedObj) {
            setCopyValues({ ...copyValues, [birdseedObj.key]: values });
        }
    };

    const { valid, handleFieldChange, handleBlur, initialState, tempFormState, resetFormState } = useFormState(setBirdseedValues, birdseedValues, birdseedArr);

    const { setStatusByField, checkIsSelected } = useStatusIcon();

    var { copy, day, month, year } = birdseedValues;

    const [isOptionsOpen, toggleOptions] = useToggleState(false);
    const [isEditClicked, setIsEditClicked] = useToggleState(false);
    const [isChecked, setIsChecked] = useState(false);

    const handleBirdseedClick = (birdseed) => {
        setSelectedModules(prevState => ({
            ...prevState,
            birdseed: birdseed
        }));
    };

    const handleResetClick = () => {
        setSelectedModules(prevState => ({
            ...prevState,
            birdseed: null
        }));
        setBirdseedValues({
            copy: '',
            day: null,
            month: null,
            year: null,
        })
        resetFormState();
        toggleOptions(false);
        setIsChecked(false)
    };

    const handleInput = (field, value) => {
        handleFieldChange(field, value);
        setBirdseedValues({ ...birdseedValues, [field]: value });
    };

    const handleCopyCheck = () => {
        setIsChecked(isChecked ? undefined : true);
    };

    let statusType = {}

    if (birdseed === '') {
        statusType = checkIsSelected({
            value: birdseed,
        });
    } else {
        statusType = setStatusByField({
            type: 'filledOnObj',
            array: birdseedArr,
            value: birdseedValues.copy,
        });
    }
    

    return (
        <>
            <div className='group'>
                <sp-icons>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <StatusIcon type={statusType} size='s' />
                        <BaseIcon onClick={handleResetClick} size='s' type='bin' />
                    </div>
                </sp-icons>
                {isOptionsOpen ? (
                    <>
                        <GroupLabel onClick={toggleOptions} type='open' size='s' name='Birdseed' />
                        <sp-field-group>
                            <sp-picker placeholder='Selecione o birdseed' id='picker-m' size='m' label='Selection type'>
                                <sp-menu>

                                    {birdseedArr.map((option, index) => (
                                        <sp-menu-item
                                            key={index}
                                            selected={birdseed === option.type ? selectedModules.birdseed : undefined}
                                            onClick={() => handleBirdseedClick(option.type)}
                                        >
                                            {option.label}
                                        </sp-menu-item>
                                    ))}

                                </sp-menu>
                            </sp-picker>
                            <IconButton state={birdseed} size='xl' type='editPen' onClick={setIsEditClicked}></IconButton>
                        </sp-field-group>
                    </>
                ) : (
                    <GroupLabel onClick={toggleOptions} type='closed' name='Birdseed' size='s' />
                )}

                {birdseed === 'standard' && isEditClicked && isOptionsOpen && (
                    <>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <sp-detail>DATA DE DISPARO</sp-detail>
                            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                                <Picker
                                    label='Dia'
                                    placeholder='Dia'
                                    id='day-picker'
                                    options={[...Array(31).keys()].map(day => ({ label: day + 1, value: day + 1 }))}
                                    selectedValue={day}
                                    onSelect={(selectedDay) => {
                                        if (selectedDay !== null) {
                                            handleInput('day', selectedDay);
                                        }
                                    }}
                                />

                                <Picker
                                    label='Mês'
                                    placeholder='Mês'
                                    id='month-picker'
                                    options={[...Array(12).keys()].map(month => ({ label: month + 1, value: month + 1 }))}
                                    selectedValue={month}
                                    onSelect={(selectedMonth) => {
                                        if (selectedMonth !== null) {
                                            handleInput('month', selectedMonth);
                                        }
                                    }}
                                />

                                <Picker
                                    label='Ano'
                                    placeholder='Ano'
                                    id='year-picker'
                                    options={[...Array(2).keys()].map((_, index) => {
                                        const currentYear = new Date().getFullYear();
                                        return { label: currentYear + index, value: currentYear + index };
                                    })}
                                    selectedValue={year}
                                    onSelect={(selectedYear) => {
                                        if (selectedYear !== null) {
                                            handleInput('year', selectedYear);
                                        }
                                    }}
                                />
                            </div>
                        </div>
                    </>
                )}

                {(birdseed !== null && birdseed !== '') && isEditClicked && isOptionsOpen && (
                    <>
                        <div>
                            <sp-field-group>
                                <sp-checkbox 
                                    checked={isChecked === true ? true : undefined} 
                                    style={{ margin: '0 0 0 2px', }} 
                                    size='m' 
                                    onClick={handleCopyCheck}
                                >
                                    Copy extra
                                </sp-checkbox>
                            </sp-field-group>
                        </div>
                    </>
                )}

                {(birdseed !== null && birdseed !== '') && isChecked && isEditClicked && isOptionsOpen && (
                    <>
                        <div style={{ marginTop: '5px' }}>
                            <sp-textfield
                                id='birdseed-copy-field'
                                placeholder='Texto extra para o Birdseed'
                                value={tempFormState.copy}
                                onInput={(e) => handleInput('copy', e.target.value)}
                                onBlur={() => handleBlur('copy')}
                                valid={tempFormState.copy !== '' ? valid.copy : undefined}
                            ></sp-textfield>
                        </div>
                    </>
                )}
            </div>
        </>
    );
}