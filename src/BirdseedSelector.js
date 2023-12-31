import React, { useState, useEffect } from 'react';
import { Theme } from "@swc-react/theme";



export default function BirdseedSelector({ handleBirdseedSelect, handleBirdseedCopy, onBirdseedCopyChange, onDateChange }) {

    const [selectedBirdseed, setSelectedBirdseed] = useState(null);

    const handleBirdseedClick = (birdseed) => {
        setSelectedBirdseed(birdseed);
        handleBirdseedSelect(birdseed);
    }

    const [selectedBirdseedCopy, setSelectedBirdseedCopy] = useState(null)

    const handleBirdseedCopyClick = (birdseedcopy) => {
        if (selectedBirdseedCopy === birdseedcopy) {
            setSelectedBirdseedCopy(null);
            handleBirdseedCopy(null);
        } else {
            setSelectedBirdseedCopy(birdseedcopy);
            handleBirdseedCopy(birdseedcopy);
        }
    }

    const [birdseedCopyValue, setBirdseedCopyValue] = useState("");
    const handleBirdseedCopyChange = (event) => {
        const value = event.target.value;
        setBirdseedCopyValue(value);
        onBirdseedCopyChange({
            birdseedCopyValue: value
        });
    };


    const [selectedDay, setSelectedDay] = useState(1);
    const [selectedMonth, setSelectedMonth] = useState(1);
    const [selectedYear, setSelectedYear] = useState(2023);

    const handleDateChange = ({ selectedDay, selectedMonth, selectedYear }) => {
        setSelectedDay(selectedDay);
        setSelectedMonth(selectedMonth);
        setSelectedYear(selectedYear);

        // Chamada para atualização externa, se necessário
        onDateChange({ selectedDay, selectedMonth, selectedYear });
    };


    useEffect(() => {

        // Chama a função externa para notificar sobre a mudança na data
        onDateChange({ selectedDay, selectedMonth, selectedYear });
    }, [selectedDay, selectedMonth, selectedYear, onDateChange]);




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
                                            <sp-menu-item key={index + 1} onClick={() => {
                                                setSelectedDay(index + 1);
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
                                            <sp-menu-item key={index + 1} onClick={() => {
                                                setSelectedMonth(index + 1);
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
                                        {[...Array(2)].map((_, index) => (
                                            <sp-menu-item key={2023 + index} onClick={() => {
                                                setSelectedYear(2023 + index);
                                                handleDateChange({ selectedDay, selectedMonth, selectedYear: 2023 + index });
                                            }}>
                                                {2023 + index}
                                            </sp-menu-item>
                                        ))}
                                    </sp-menu-group>
                                </sp-menu>
                            </sp-picker>
                        </div>
                    </div>
                )}

                <div style={{margin:"-5px 0 0 10px",}}>
                    {selectedBirdseed !== null && (
                        <>
                            <div>
                                <sp-field-group>
                                    <sp-checkbox size="m" onClick={() => handleBirdseedCopyClick('birdseedcopy')} >Copy extra</sp-checkbox>
                                </sp-field-group>
                            </div>
                        </>
                    )
                    }

                    {
                        selectedBirdseedCopy === "birdseedcopy" && (
                            <>
                                <div style={{marginTop:"10px"}}>
                                    <sp-textfield
                                        id="birdseed-copy-field"
                                        placeholder="Texto extra para o Birdseed"
                                        value={birdseedCopyValue}
                                        onInput={handleBirdseedCopyChange}
                                        {...(birdseedCopyValue !== "" && { valid: true })}
                                    ></sp-textfield>
                                </div>
                            </>
                        )
                    }
                </div>
            </div>

        </>
    );
}