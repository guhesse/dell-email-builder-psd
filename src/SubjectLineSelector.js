import React, { useState } from "react";

export default function SubjectLineSelector(props) {
    const [slValue, setSlValue] = useState(""); // State to store SL value
    const [sslValue, setSslValue] = useState(""); // State to store SSL value

    const handleSlChange = (event) => {
        const value = event.target.value;
        setSlValue(value);
        props.onSubjectLineChange({
            slValue: value, // Update with the latest value
            sslValue // Keep the existing value of sslValue
        });
    };

    const handleSslChange = (event) => {
        const value = event.target.value;
        setSslValue(value);
        props.onSubjectLineChange({
            slValue, // Keep the existing value of slValue
            sslValue: value // Update with the latest value
        });
    };


    return (
        <>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start" }} class="group"><sp-label>SL & SSL</sp-label>
                <div style={{ margin:"-2px 0"}}>
                    <sp-detail for="sl-field" >SL</sp-detail>
                    <sp-textfield
                        id="sl-field"
                        placeholder="Insira o SL"
                        value={slValue}
                        onInput={handleSlChange}
                    ></sp-textfield>
                </div>
                <div style={{ margin:"-2px 0"}}>
                    <sp-detail for="ssl-field">SSL</sp-detail>
                    <sp-textfield
                        id="ssl-field"
                        placeholder="Insira o SSL"
                        value={sslValue}
                        onInput={handleSslChange}
                    ></sp-textfield>
                </div>
            </div>
        </>
    );
}
