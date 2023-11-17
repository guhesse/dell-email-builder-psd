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
        <div>
            <sp-field-label for="sl-field">SL</sp-field-label>
            <sp-textfield
                style={{ width: "100%" }}
                id="sl-field"
                placeholder="Insira o SL"
                value={slValue}
                onInput={handleSlChange}
            ></sp-textfield>
            <sp-field-label for="ssl-field">SSL</sp-field-label>
            <sp-textfield
                style={{ width: "100%" }}
                id="ssl-field"
                placeholder="Insira o SSL"
                value={sslValue}
                onInput={handleSslChange}
            ></sp-textfield>
        </div>
    );
}
