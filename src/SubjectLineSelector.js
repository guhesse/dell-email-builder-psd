import React, { useState } from "react";

export default function SubjectLineSelector() {
    const [slValue, setSlValue] = useState(""); // Estado para armazenar o valor do campo SL
    const [sslValue, setSslValue] = useState(""); // Estado para armazenar o valor do campo SSL

    const handleSlChange = (event) => {
        setSlValue(event.target.value);
        props.onSubjectLineChange({
            slValue,
            sslValue,
        });
    };
    console.log("valor sl:", slValue)

    const handleSslChange = (event) => {
        setSslValue(event.target.value);
        props.onSubjectLineChange({
            slValue,
            sslValue,
        });
    };
    console.log("valor ssl:", sslValue)

    const getSubjectLineValues = () => {
        return {
            slValue,
            sslValue,
        };
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
