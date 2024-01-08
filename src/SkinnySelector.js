import React, { useState } from "react";

export default function SkinnySelector(props) {
    const [skinnyHeadlineValue, setSkinnyHeadlineValue] = useState(""); // State to store SL value
    const [skinnyCopyValue, setSkinnyCopyValue] = useState(""); // State to store SSL value

    const handleSkinnyHeadlineChange = (event) => {
        const value = event.target.value;
        setSkinnyHeadlineValue(value);
        props.onSkinnyChange({
            skinnyHeadlineValue: value, // Update with the latest value
            skinnyCopyValue // Keep the existing value of sslValue
        });
    };

    const handleSkinnyCopyChange = (event) => {
        const value = event.target.value;
        setSkinnyCopyValue(value);
        props.onSkinnyChange({
            skinnyHeadlineValue, // Update with the latest value
            skinnyCopyValue :value // Keep the existing value of sslValue
        });
    };

    return (
        <>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start" }} className="group"><sp-label>Skinny Banner</sp-label>
                <div style={{ margin: "0 4px" }}>
                    <sp-detail for="sl-field" >Headline</sp-detail>
                    <sp-textfield
                        id="skinny-headline-field"
                        placeholder="Insira o Skinny Banner Headline"
                        value={skinnyHeadlineValue}
                        onInput={handleSkinnyHeadlineChange}
                        {...(skinnyHeadlineValue !== "" && { valid: true })}
                    ></sp-textfield>
                </div>
                <div style={{ margin: "0 4px" }}>
                    <sp-detail for="ssl-field">Copy</sp-detail>
                    <sp-textfield
                        id="skinny-copy-field"
                        placeholder="Insira o Skinny Banner Copy"
                        value={skinnyCopyValue}
                        onInput={handleSkinnyCopyChange}
                        {...(skinnyCopyValue !== "" && { valid: true })}
                    ></sp-textfield>
                </div>
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
