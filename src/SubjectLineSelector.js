import React, { useState } from "react";

export default function SubjectLineSelector(props) {
    const [slValue, setSlValue] = useState(""); // State to store SL value
    const [sslValue, setSslValue] = useState(""); // State to store SSL value

    const handleSlChange = (event) => {
        setSlValue(event.target.value);
        props.onSubjectLineChange({
            slValue,
            sslValue
        });
    };

    const handleSslChange = (event) => {
        setSslValue(event.target.value);
        props.onSubjectLineChange({
            slValue,
            sslValue
        });
    };

return (
    <div>
        <sp-field-label for="sl-field">SL</sp-field-label>
        <sp-textfield
            style={{ width: "90vw" }}
            id="sl-field"
            placeholder="Insira o SL"
            value={slValue}
            onInput={handleSlChange}
        ></sp-textfield>
        <sp-field-label for="ssl-field">SSL</sp-field-label>
        <sp-textfield
            style={{ width: "90vw" }}
            id="ssl-field"
            placeholder="Insira o SSL"
            value={sslValue}
            onInput={handleSslChange}
        ></sp-textfield>
    </div>
);
}
