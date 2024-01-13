import React, { useState, useEffect } from "react";
import useCsvContext from "./hook/useCsvContext.jsx";

export default function SubjectLineSelector(props) {
    const { csvValues } = useCsvContext();

    const [formState, setFormState] = useState({
        slValue: csvValues.SL || "",
        sslValue: csvValues.SSL || "",
    });

    const [valid, setValid] = useState({
        slValue: false,
        sslValue: false,
    });

    useEffect(() => {
        setFormState({
            slValue: csvValues.SL || "",
            sslValue: csvValues.SSL || "",
        });

        props.onSubjectLineChange({
            slValue: csvValues.SL || "",
            sslValue: csvValues.SSL || "",
        });
    }, [csvValues.SL, csvValues.SSL]);

    const handleInputChange = (key, value) => {
        setFormState((prevFormState) => ({
            ...prevFormState,
            [key]: value,
        }));

        props.onSubjectLineChange({
            ...formState,
            [key]: value,
        });

        setValid((prevValid) => ({
            ...prevValid,
            [key]: value !== "" ? true : false,
        }));
    };

    return (
        <div
            style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "flex-start",
            }}
            className="group"
        >
            <sp-label>SL & SSL</sp-label>
            <div style={{ margin: "0 4px" }}>
                <sp-detail for="sl-field">SL</sp-detail>
                <sp-textfield
                    id="sl-field"
                    placeholder="Insira o SL"
                    value={formState.slValue}
                    onInput={(event) => handleInputChange("slValue", event.target.value)}
                    onBlur={() => handleInputChange("slValue", formState.slValue)}
                    valid={formState.slValue !== "" ? valid.slValue : undefined}
                ></sp-textfield>
            </div>
            <div style={{ margin: "0 4px" }}>
                <sp-detail for="ssl-field">SSL</sp-detail>
                <sp-textfield
                    id="ssl-field"
                    placeholder="Insira o SSL"
                    value={formState.sslValue}
                    onInput={(event) => handleInputChange("sslValue", event.target.value)}
                    onBlur={() => handleInputChange("sslValue", formState.sslValue)}
                    valid={formState.sslValue !== "" ? valid.sslValue : undefined}
                ></sp-textfield>
            </div>
        </div>
    );
}
