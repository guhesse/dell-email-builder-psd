import React from "react";

export default function SubjectLineSelector() {
    return (
        <div style={{ display: "flex", flexDirection: "column", alignContent:"flex-start", justifyContent: "flex-start", maxWidth: "90%" }}>
            <div style={{ maxWidth: "100%" }}>
                <sp-field-label for="name-0-m">SL</sp-field-label>
                <sp-textfield style={{ width: "100%" }} id="name-0-m" placeholder="Insira o SL"></sp-textfield>
            </div>
            <div style={{ maxWidth: "100%" }}>
                <sp-field-label for="name-0-m">SSL</sp-field-label>
                <sp-textfield style={{ width: "100%" }} id="name-0-m" placeholder="Insira o SSL"></sp-textfield>
            </div>
        </div>
    )
}