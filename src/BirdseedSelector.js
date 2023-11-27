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
        // Aqui, pode-se executar alguma ação após a atualização dos estados de data, se necessário
        console.log(`Data selecionada: Dia ${selectedDay}, Mês ${selectedMonth}, Ano ${selectedYear}`);
        
        // Chama a função externa para notificar sobre a mudança na data
        onDateChange({ selectedDay, selectedMonth, selectedYear });
    }, [selectedDay, selectedMonth, selectedYear, onDateChange]);




    return (
        <>
            <sp-field-group width={{ base: 'size-3000', L: "single-line-width" }}>
                <div>
                    <sp-field-label for="picker-m" size="m">Birdseed:</sp-field-label>
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
                    <sp-field-label>Data Birdseed:</sp-field-label>
                    <div style={{ display: 'flex', gap: '10px' }}>

                        <sp-picker
                            size="m"
                            label="Dia"
                            placeholder="Selecione o dia"
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
                            placeholder="Selecione o mês"
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
                            placeholder="Selecione o ano"
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


            {selectedBirdseed !== null && (
                <>
                    <div>
                        <sp-field-group>
                            <sp-checkbox size="m" onClick={() => handleBirdseedCopyClick('birdseedcopy')} >Extra Birdseed</sp-checkbox>
                        </sp-field-group>
                    </div>
                </>
            )
            }

            {
                selectedBirdseedCopy === "birdseedcopy" && (
                    <>
                        <div>
                            <sp-field-label for="funding-copy-field">Texto extra Birdseed</sp-field-label>
                            <sp-textfield
                                style={{ width: "90vw" }}
                                id="birdseed-copy-field"
                                placeholder="Texto extra para o Birdseed"
                                value={birdseedCopyValue}
                                onInput={handleBirdseedCopyChange}
                            ></sp-textfield>
                        </div>
                    </>
                )
            }

        </>
    );
}