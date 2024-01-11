import React, { useState } from "react";

export default function SkinnySelector({ handleSkinnySelect, onSkinnyChange }) {

    const [selectedSkinny, setSelectedSkinny] = useState(null);

    const handleSkinnyClick = (skinny) => {
        setSelectedSkinny(skinny);
        handleSkinnySelect(skinny); 
    };

    const useFormState = (initialState) => {
        const [formState, setFormState] = useState(initialState);

        const handleInputChange = (key, value) => {
            setFormState({
                ...formState,
                [key]: value,
            });

            onSkinnyChange({ ...formState, [key]: value });
        };

        return [formState, handleInputChange];
    };

    const [
        {
            skinnyHeadlineValue,
            skinnyCopyValue
        },
        setFormValue,
    ] = useFormState({
        skinnyHeadlineValue: "",
        skinnyCopyValue: "",
    });

    const [valid, setValid] = useState({});

    // Função para validar um campo específico
    const validateField = (value) => {
        return value !== "";
    };

    // Função para manipular a mudança no valor do campo
    const handleInputChange = (key) => (event) => {
        const value = event.target.value;
        setFormValue(key, value);
    };

    // Função para manipular o blur do campo e atualizar a validação
    const handleBlur = (key, value) => {
        const isValid = validateField(value);
        setValid((prevValid) => ({
            ...prevValid,
            [key]: isValid,
        }));
    };

    return (
        <>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start" }} className="group">
                <sp-label>Skinny Banner</sp-label>
                <sp-field-group style={{ width: "100vw", display: "flex", flexDirection: "row", gap: "5px" }}>
                    <sp-picker id="picker-m" size="m" label="Selection type" placeholder="Selecione o header">
                        <sp-menu>
                            <sp-menu-item onClick={() => handleSkinnyClick(null)}>None</sp-menu-item>
                            <sp-menu-item onClick={() => handleSkinnyClick('left')}>Left</sp-menu-item>
                            <sp-menu-item disabled onClick={() => handleSkinnyClick('center')}>Center</sp-menu-item>
                            <sp-menu-item disabled onClick={() => handleSkinnyClick('right')}>Right</sp-menu-item>
                        </sp-menu>
                    </sp-picker>
                </sp-field-group>

                {selectedSkinny !== null && (
                    <>
                        <div style={{ margin: "0 4px" }}>
                            <sp-detail for="skinny-title" >TITLE</sp-detail>
                            <sp-textfield
                                id="skinny-headline-field"
                                placeholder="Skinny banner title here"
                                value={skinnyHeadlineValue}
                                onInput={handleInputChange('skinnyHeadlineValue')}
                                onBlur={() => handleBlur('skinnyHeadlineValue')}
                                valid={valid['skinnyHeadlineValue']}
                            ></sp-textfield>
                        </div>
                        <div style={{ margin: "0 4px" }}>
                            <sp-detail for="skinny-copy">COPY</sp-detail>
                            <sp-textfield
                                id="skinny-copy-field"
                                placeholder="Skinny banner copy here"
                                value={skinnyCopyValue}
                                onInput={handleInputChange('skinnyCopyValue')}
                                onBlur={() => handleBlur('skinnyCopyValue')}
                                valid={valid['skinnyCopyValue']}
                            ></sp-textfield>
                        </div>
                    </>
                )}


                {/* <div>
                    <sp-action-button label="left" style={{ margin: "0 1px"}}>
                        <div slot="icon" className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 18 18" width="18">
                                <rect id="Canvas" fill="#ff13dc" opacity="0" width="18" height="18" />
                                <rect className="fill" height="2" rx="0.5" width="12" x="2" y="14" />
                                <rect className="fill" height="2" rx="0.5" width="15" x="2" y="2" />
                                <rect className="fill" height="2" rx="0.5" width="12" x="2" y="6" />
                                <rect className="fill" height="2" rx="0.5" width="15" x="2" y="10" />
                            </svg></div>
                    </sp-action-button>
                    <sp-action-button label="center" style={{ margin: "0 1px" }}>
                        <div slot="icon" className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 18 18" width="18">
                                <rect id="Canvas" fill="#ff13dc" opacity="0" width="18" height="18" />
                                <rect className="fill" height="2" rx="0.5" width="10" x="4" y="14" />
                                <rect className="fill" height="2" rx="0.5" width="16" x="1" y="10" />
                                <rect className="fill" height="2" rx="0.5" width="16" x="1" y="2" />
                                <rect className="fill" height="2" rx="0.5" width="10" x="4" y="6" />
                            </svg></div>
                    </sp-action-button>
                    <sp-action-button label="right" style={{ margin: "0 1px" }}>
                        <div slot="icon" className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 18 18" width="18">
                                <rect id="Canvas" fill="#ff13dc" opacity="0" width="18" height="18" />
                                <rect className="fill" height="2" rx="0.5" width="12" x="4" y="14" />
                                <rect className="fill" height="2" rx="0.5" width="15" x="1" y="2" />
                                <rect className="fill" height="2" rx="0.5" width="12" x="4" y="6" />
                                <rect className="fill" height="2" rx="0.5" width="15" x="1" y="10" />
                            </svg></div>
                    </sp-action-button>
                </div> */}
            </div>
        </>
    );
}
