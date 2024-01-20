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

    const [isEditClicked, setIsEditClicked] = useState(false);

    const handleEditClick = () => {
        setIsEditClicked((prevIsEditClicked) => !prevIsEditClicked);
    };


    return (
        <>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start" }} className="group">
                <sp-label>Skinny Banner</sp-label>
                <sp-field-group style={{ width: "100vw", display: "flex", flexDirection: "row", gap: "5px" }}>
                    <sp-picker style={{ margin: "0 4px 0 0" }} id="picker-m" size="m" label="Selection type" placeholder="Selecione o skinny banner">
                        <sp-menu>
                            <sp-menu-item onClick={() => handleSkinnyClick("")}>None</sp-menu-item>
                            <sp-menu-item onClick={() => handleSkinnyClick('left')}>Left</sp-menu-item>
                            <sp-menu-item disabled onClick={() => handleSkinnyClick('center')}>Center</sp-menu-item>
                            <sp-menu-item disabled onClick={() => handleSkinnyClick('right')}>Right</sp-menu-item>
                        </sp-menu>
                    </sp-picker>
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


                {selectedSkinny !== "" && (
                    <>
                        {isEditClicked && (
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
                    </>
                )}
            </div>
        </>
    );
}
