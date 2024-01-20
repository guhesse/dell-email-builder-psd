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
        selectedDay: birdseedDate.selectedDay.day || "",
        selectedMonth: birdseedDate.selectedMonth.month || "",
        selectedYear: birdseedDate.selectedYear.year || "",
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
            selectedDay: birdseedDate.selectedDay.day || "",
            selectedMonth: birdseedDate.selectedMonth.month || "",
            selectedYear: birdseedDate.selectedYear.year || "",
            birdseedCopyValues: csvValues['Birdseed 1A'] || "",
        });

        // Limpe o estado ao montar o componente
        setFormState({
            selectedDay: birdseedDate.selectedDay.day || "",
            selectedMonth: birdseedDate.selectedMonth.month || "",
            selectedYear: birdseedDate.selectedYear.year || "",
            birdseedCopyValues: csvValues['Birdseed 1A'] || "",
        });
    }, [selectedBirdseed, birdseedDate, csvValues]);

    console.log("birdseed depois do useeffect", birdseedDate)



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
        console.log("Selected Date:", selectedDay, selectedMonth, selectedYear);
    };

    const isEditChecked = selectedBirdseedCopy


    return (
        <>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start" }} className="group"><sp-label>Birdseed</sp-label>
                <sp-field-group width={{ base: 'size-3000', L: "single-line-width" }}>
                    <div>
                        <sp-picker id="picker-m" size="m" label="Selection type" placeholder="Selecione o birdseed">
                            <sp-menu>
                                <sp-menu-group>
                                    <sp-menu-item onClick={() => handleBirdseedClick('standard')}>Standard</sp-menu-item>
                                    <sp-menu-item onClick={() => handleBirdseedClick('outlet')}>Outlet</sp-menu-item>
                                </sp-menu-group>
                            </sp-menu>
                        </sp-picker>
                    </div>
                </sp-field-group>

                {selectedBirdseed === 'standard' && (
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
                                        {[...Array(31)].map((_, index) => (
                                            <sp-menu-item key={index + 1}
                                                selected={index + 1 === selectedDay}
                                                onClick={() => {
                                                    setBirdseedDate((prevBirdseedDate) => ({
                                                        ...prevBirdseedDate,
                                                        selectedDay: index + 1,
                                                    }));
                                                    handleDateChange({ selectedDay: index + 1, selectedMonth, selectedYear });
                                                }}>
                                                {index + 1}
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
                                        {[...Array(12)].map((_, index) => (
                                            <sp-menu-item key={index + 1}
                                                selected={index + 1 === selectedMonth}
                                                onClick={() => {
                                                    setBirdseedDate((prevBirdseedDate) => ({
                                                        ...prevBirdseedDate,
                                                        selectedMonth: index + 1,
                                                    }));
                                                    handleDateChange({ selectedDay, selectedMonth: index + 1, selectedYear });
                                                }}>
                                                {index + 1}
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
                                        {[...Array(1)].map((_, index) => (
                                            <sp-menu-item key={2024 + index}
                                                selected={index + 1 === selectedYear}
                                                onClick={() => {
                                                    setBirdseedDate((prevBirdseedDate) => ({
                                                        ...prevBirdseedDate,
                                                        selectedYear: 2024 + index,
                                                    }));
                                                    handleDateChange({ selectedDay, selectedMonth, selectedYear: 2023 + index });
                                                }}>
                                                {2024 + index}
                                            </sp-menu-item>
                                        ))}
                                    </sp-menu-group>
                                </sp-menu>
                            </sp-picker>
                        </div>
                    </div>
                )}

                <div style={{ margin: "-5px 0 0 10px", }}>
                    {selectedBirdseed !== null && (
                        <>
                            <div>
                                <sp-field-group>
                                    <sp-checkbox checked={isEditChecked} size="m" onClick={() => handleBirdseedCopyClick(selectedBirdseedCopy)} >Copy extra</sp-checkbox>
                                </sp-field-group>
                            </div>
                        </>
                    )}


                    {selectedBirdseedCopy && (
                        <>
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
                        </>
                    )}


                </div>

            </div>
        </>
    );
}
