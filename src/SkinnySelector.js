import React, { useState } from "react";

export default function SkinnySelector({onSkinnyChange, handleSkinnySelect}) {
    const [skinnyHeadlineValue, setSkinnyHeadlineValue] = useState(""); // State to store SL value
    const [skinnyCopyValue, setSkinnyCopyValue] = useState(""); // State to store SSL value
    const [selectedSkinny, setSelectedSkinny] = useState(null);

    const handleSkinnyClick = (skinny) => {
        setSelectedSkinny(skinny);
        handleSkinnySelect(skinny); // Executa a função passada pelo pai (handleHeaderSelect) com o header selecionado
    };

    const handleSkinnyHeadlineChange = (event) => {
        const value = event.target.value;
        setSkinnyHeadlineValue(value);
        onSkinnyChange({
            skinnyHeadlineValue: value,
            skinnyCopyValue
        });
    };
    
    const handleSkinnyCopyChange = (event) => {
        const value = event.target.value;
        setSkinnyCopyValue(value);
        onSkinnyChange({
            skinnyHeadlineValue,
            skinnyCopyValue: value,
        });
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
                                onChange={handleSkinnyHeadlineChange}
                                // valid={skinnyHeadlineValue !== "" ? true : undefined}
                            ></sp-textfield>
                        </div>
                        <div style={{ margin: "0 4px" }}>
                            <sp-detail for="skinny-copy">COPY</sp-detail>
                            <sp-textfield
                                id="skinny-copy-field"
                                placeholder="Skinny banner copy here"
                                value={skinnyCopyValue}
                                onChange={handleSkinnyCopyChange}
                                // valid={skinnyCopyValue !== "" ? true : undefined}
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
