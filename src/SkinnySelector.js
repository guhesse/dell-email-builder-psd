import React, { useState, useEffect } from "react";
import useAppContext from "./hook/useAppContext.jsx";

export default function SkinnySelector() {
    const {
        csvValues,
        setCsvValues,
        selectedSkinny,
        setSelectedSkinny,
        skinnyTitleValue,
        setSkinnyTitleValue,
        skinnyCopyValue,
        setSkinnyCopyValue,
    } = useAppContext();

    const handleSkinnyClick = (selectedSkinny) => {
        console.log("Clicked on:", selectedSkinny);
        setSelectedSkinny(selectedSkinny);
    };
    
    // console.log("seleceted skinny", selectedSkinny)

    const [formState, setFormState] = useState({
        skinnyTitleValue: "",
        skinnyCopyValue: "",
    });

    const [tempFormState, setTempFormState] = useState({
        skinnyTitleValue: "",
        skinnyCopyValue: "",
    });

    const [valid, setValid] = useState({
        skinnyTitleValue: false,
        skinnyCopyValue: false,
    });

    useEffect(() => {
        // Limpe o estado temporário ao montar o componente
        setTempFormState({
            skinnyTitleValue: "",
            skinnyCopyValue: "",
        });

        // Atualize o estado final com os valores do contexto
        setFormState({
            skinnyTitleValue: skinnyTitleValue || "",
            skinnyCopyValue: skinnyCopyValue || "",
        });
    }, [selectedSkinny]);

    const handleInputChange = (key, value) => {
        // Atualize o estado temporário imediatamente
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
        if (key === "skinnyTitleValue") {
            setSkinnyTitleValue(tempFormState.skinnyTitleValue);
        } else if (key === "skinnyCopyValue") {
            setSkinnyCopyValue(tempFormState.skinnyCopyValue);
        }

        // Atualize o estado final com os valores do estado temporário
        setFormState({
            ...formState,
            [key]: tempFormState[key],
        });

        // Atualize a validação usando formState em vez de tempFormState
        setValid((prevValid) => ({
            ...prevValid,
            [key]: formState[key] !== "",
        }));
    };

    return (
        <>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start" }} className="group">
                <sp-label>Skinny Banner</sp-label>
                <sp-field-group style={{ width: "100vw", display: "flex", flexDirection: "row", gap: "5px" }}>
                    <sp-picker id="picker-m" size="m" label="Selection type" placeholder="Selecione o skinny banner">
                        <sp-menu>
                            <sp-menu-item onClick={() => handleSkinnyClick("")}>None</sp-menu-item>
                            <sp-menu-item onClick={() => handleSkinnyClick('left')}>Left</sp-menu-item>
                            <sp-menu-item disabled onClick={() => handleSkinnyClick('center')}>Center</sp-menu-item>
                            <sp-menu-item disabled  onClick={() => handleSkinnyClick('right')}>Right</sp-menu-item>
                        </sp-menu>
                    </sp-picker>
                </sp-field-group>
                

                {selectedSkinny !== "" && (
                    <>
                        <div style={{ margin: "0 4px" }}>
                            <sp-detail for="skinny-title">TITLE</sp-detail>
                            <sp-textfield
                                id="skinny-headline-field"
                                placeholder="Skinny banner title here"
                                value={tempFormState.skinnyTitleValue}
                                onInput={(e) => handleInputChange('skinnyTitleValue', e.target.value)}
                                onBlur={() => handleBlur('skinnyTitleValue')}
                                valid={skinnyTitleValue !== "" ? valid.skinnyTitleValue : undefined}
                            ></sp-textfield>
                        </div>
                        <div style={{ margin: "0 4px" }}>
                            <sp-detail for="skinny-copy">COPY</sp-detail>
                            <sp-textfield
                                id="skinny-copy-field"
                                placeholder="Skinny banner copy here"
                                value={tempFormState.skinnyCopyValue}
                                onInput={(e) => handleInputChange('skinnyCopyValue', e.target.value)}
                                onBlur={() => handleBlur('skinnyCopyValue')}
                                valid={skinnyCopyValue !== "" ? valid.skinnyCopyValue : undefined}
                            ></sp-textfield>
                        </div>
                    </>
                )}
            </div>
        </>
    );
}
