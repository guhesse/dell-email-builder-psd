import React, { useState, useEffect, useCallback } from 'react';
import { Theme } from "@swc-react/theme";
import useAppContext from './hook/useAppContext.jsx';

export default function BirdseedSelector() {

    const { csvValues, setCsvValues,
        selectedBirdseed,
        setSelectedBirdseed,
        selectedBirdseedCopy,
        setSelectedBirdseedCopy,
        birdseedCopyValues,
        setBirdseedCopyValues,
        birdseedDate,
        setBirdseedDate, } = useAppContext();

    const {
        selectedDay,
        selectedMonth,
        selectedYear,
    } = birdseedDate || {};

    const handleBirdseedClick = (selectedBirdseed) => {
        setSelectedBirdseed(selectedBirdseed);
    }

    const handleBirdseedCopyClick = () => {
        setSelectedBirdseedCopy((prevSelectedBirdseedCopy) => !prevSelectedBirdseedCopy);
    };

    const [formState, setFormState] = useState({
        selectedDay: selectedDay || "",
        selectedMonth: selectedMonth || "",
        selectedYear: selectedYear || "",
        birdseedCopyValues: csvValues['Birdseed 1A'] || "",
    });

    const [tempFormState, setTempFormState] = useState({
        selectedDay: "",
        selectedMonth: "",
        selectedYear: "",
        birdseedCopyValues: "",
    });

    const [valid, setValid] = useState({
        birdseedCopyValues: false,
    });

    useEffect(() => {
        // Limpe o estado temporário ao montar o componente
        setTempFormState({
            selectedDay: selectedDay || "",
            selectedMonth: selectedMonth || "",
            selectedYear: selectedYear || "",
            birdseedCopyValues: csvValues['Birdseed 1A'] || "",
        });

        // Limpe o estado ao montar o componente
        setFormState({
            selectedDay: selectedDay || "",
            selectedMonth: selectedMonth || "",
            selectedYear: selectedYear || "",
            birdseedCopyValues: csvValues['Birdseed 1A'] || "",
        });

    }, [selectedBirdseed, birdseedDate, csvValues]);

    const handleInputChange = (key, value) => {
        setTempFormState((prevTempFormState) => ({
            ...prevTempFormState,
            [key]: value,
        }));

        setValid((prevValid) => ({
            ...prevValid,
            [key]: value !== "",
        }));
    };

    const handleBlur = (key) => {
        // Atualize o CsvContext com os valores editados
        setCsvValues({
            ...csvValues,
            [key]: tempFormState[key],
        });

        // Atualize diretamente os valores no contexto
        setBirdseedDate((prevBirdseedDate) => ({
            ...prevBirdseedDate,
            [key]: tempFormState[key],
        }));

        // Atualize diretamente os valores no contexto
        setBirdseedCopyValues((prevBirdseedCopyValues) => ({
            ...prevBirdseedCopyValues,
            [key]: tempFormState[key],
        }));

        // Atualize o estado final com os valores do estado temporário
        setFormState({
            ...formState,
            [key]: tempFormState[key],
        });
    };

    const handleDateChange = ({ selectedDay, selectedMonth, selectedYear }) => {
        setBirdseedDate({
            selectedDay,
            selectedMonth,
            selectedYear,
        });
    };

    const [isChecked, setChecked] = useState(false);

    const handleCheckboxChange = () => {
        setChecked((prevChecked) => !prevChecked);
    };

    const [isEditClicked, setIsEditClicked] = useState(false);

    const handleEditClick = () => {
        setIsEditClicked((prevIsEditClicked) => !prevIsEditClicked);
    };

    return (
        <>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start" }} className="group"><sp-label>Birdseed</sp-label>
                <sp-field-group style={{ width: "100vw", display: "flex", flexDirection: "row", gap: "5px" }}>
                    <div>
                        <sp-picker id="picker-m" size="m" label="Selection type" placeholder="Selecione o birdseed">
                            <sp-menu>
                                <sp-menu-group>
                                    <sp-menu-item selected={selectedBirdseed === 'standard'} onClick={() => handleBirdseedClick('standard')}>Standard</sp-menu-item>
                                    <sp-menu-item selected={selectedBirdseed === "outlet"} onClick={() => handleBirdseedClick('outlet')}>Outlet</sp-menu-item>
                                </sp-menu-group>
                            </sp-menu>
                        </sp-picker>
                    </div>
                    <div className="sp-tab-page" id="sp-spectrum-widgets-tab-page">
                        <sp-action-button label="Edit" onClick={handleEditClick}>
                            <div slot="icon" className="icon">
                                <svg id="spectrum-icon-18-Edit" viewBox="0 0 36 36">
                                    <path d="M33.567 8.2L27.8 2.432a1.215 1.215 0 0 0-.866-.353H26.9a1.371 1.371 0 0 0-.927.406L5.084 23.372a.99.99 0 0 0-.251.422L2.055 33.1c-.114.377.459.851.783.851a.251.251 0 0 0 .062-.007c.276-.063 7.866-2.344 9.311-2.778a.972.972 0 0 0 .414-.249l20.888-20.889a1.372 1.372 0 0 0 .4-.883 1.221 1.221 0 0 0-.346-.945zM11.4 29.316c-2.161.649-4.862 1.465-6.729 2.022l2.009-6.73z"></path>
                                </svg>
                            </div>
                        </sp-action-button>
                    </div>
                </sp-field-group>

                {selectedBirdseed === 'standard' && (
                    <>
                        {isEditClicked && (
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                <sp-detail>DATA DE DISPARO</sp-detail>
                                <div style={{ display: 'flex', flexWrap: "wrap" }}>

                                    <sp-picker
                                        size="m"
                                        label="Dia"
                                        placeholder="Dia"
                                        id="day-picker"
                                    >
                                        <sp-menu>
                                            <sp-menu-group>
                                                {[...Array(31).keys()].map((selectedDay) => (
                                                    <sp-menu-item key={selectedDay + 1}
                                                        selected={selectedDay + 1}
                                                        onClick={() => {
                                                            setBirdseedDate((prevBirdseedDate) => ({
                                                                ...prevBirdseedDate,
                                                                selectedDay: selectedDay + 1,
                                                            }));
                                                            handleDateChange({ selectedDay: selectedDay + 1, selectedMonth, selectedYear });
                                                        }}>
                                                        {selectedDay + 1}
                                                    </sp-menu-item>
                                                ))}
                                            </sp-menu-group>
                                        </sp-menu>
                                    </sp-picker>


                                    <sp-picker
                                        size="m"
                                        label="Mês"
                                        placeholder="Mês"
                                        id="month-picker"
                                    >
                                        <sp-menu>
                                            <sp-menu-group>
                                                {[...Array(12).keys()].map((selectedMonth) => (
                                                    <sp-menu-item
                                                        key={selectedMonth + 1}
                                                        selected={selectedMonth + 1}
                                                        onClick={() => {
                                                            setBirdseedDate((prevBirdseedDate) => ({
                                                                ...prevBirdseedDate,
                                                                selectedMonth: selectedMonth + 1,
                                                            }));
                                                            handleDateChange({ selectedDay, selectedMonth: selectedMonth + 1, selectedYear });
                                                        }}
                                                    >
                                                        {selectedMonth + 1}
                                                    </sp-menu-item>
                                                ))}
                                            </sp-menu-group>
                                        </sp-menu>
                                    </sp-picker>

                                    <sp-picker
                                        size="m"
                                        label="Ano"
                                        placeholder="Ano"
                                        id="year-picker"
                                    >
                                        <sp-menu>
                                            <sp-menu-group>
                                                {[...Array(1).keys()].map(() => (
                                                    <sp-menu-item
                                                        key={selectedYear}
                                                        selected={selectedYear}
                                                        onClick={() => {
                                                            setBirdseedDate((prevBirdseedDate) => ({
                                                                ...prevBirdseedDate,
                                                                selectedYear: selectedYear, // Altere para year diretamente
                                                            }));
                                                            handleDateChange({ selectedDay, selectedMonth, selectedYear: selectedYear + 1 });
                                                        }}
                                                    >
                                                        {selectedYear}
                                                    </sp-menu-item>
                                                ))}
                                            </sp-menu-group>
                                        </sp-menu>
                                    </sp-picker>

                                </div>
                            </div>
                        )}
                    </>
                )}


                <div style={{ margin: "-5px 0 0 10px", }}>
                    {selectedBirdseed !== "" && (
                        <>
                            {isEditClicked && (
                                <div>
                                    <sp-field-group>
                                        <sp-checkbox checked={isChecked} onChange={handleCheckboxChange} size="m" onClick={() => handleBirdseedCopyClick(selectedBirdseedCopy)} >Copy extra</sp-checkbox>
                                    </sp-field-group>
                                </div>
                            )}
                        </>
                    )}

                    {selectedBirdseedCopy && (
                        <>
                            {isEditClicked && (
                                <div style={{ marginTop: "10px" }}>
                                    <sp-textfield
                                        id="birdseed-copy-field"
                                        placeholder="Texto extra para o Birdseed"
                                        value={tempFormState.birdseedCopyValues}
                                        onInput={(e) => handleInputChange('birdseedCopyValues', e.target.value)}
                                        onBlur={() => handleBlur('birdseedCopyValues')}
                                        valid={birdseedCopyValues !== "" ? valid.birdseedCopyValues : undefined}
                                    ></sp-textfield>
                                </div>
                            )}
                        </>
                    )}


                </div>

            </div>
        </>
    );
}
