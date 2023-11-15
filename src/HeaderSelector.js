import React, { useState } from 'react';
import { Theme } from "@swc-react/theme";


export default function HeaderSelector({ handleHeaderSelect }) {
    const [selectedHeader, setSelectedHeader] = useState(null);

    const handleHeaderClick = (header) => {
        setSelectedHeader(header);
        handleHeaderSelect(header); // Executa a função passada pelo pai (handleHeaderSelect) com o header selecionado
    };


    <sp-picker label="Label">
        <sp-label slot="label">Label</sp-label>
        <sp-menu slot="options">
            <sp-menu-item value="value1" selected="true">Value 1</sp-menu-item>
            <sp-menu-item value="value2">Value 2</sp-menu-item>
            <sp-menu-item value="value3">Value 3</sp-menu-item>
        </sp-menu>
    </sp-picker>

0
    return (
        <>
            <Theme theme="dark" scale="medium" color="dark">
                <p>Header</p>
                <sp-field-group style={{ width: "100vw", display: "flex", flexDirection: "row", gap: "5px" }}>
                    <sp-picker style={{ width: "45vw", padding: "0" }} id="picker-m" size="m" label="Selection type" placeholder="Selecione o header">
                        <sp-menu>
                            <sp-menu-item onClick={() => handleHeaderClick('SB')}>SB</sp-menu-item>
                            <sp-menu-item onClick={() => handleHeaderClick('CON')}>CON</sp-menu-item>
                            <sp-menu-divider></sp-menu-divider>
                            <sp-menu-item onClick={() => handleHeaderClick('Alienware')}>Alienware</sp-menu-item>
                            <sp-menu-item onClick={() => handleHeaderClick('Gaming')}>Gaming</sp-menu-item>
                            <sp-menu-divider></sp-menu-divider>
                            <sp-menu-item onClick={() => handleHeaderClick('Outlet')}>Outlet</sp-menu-item>
                            <sp-menu-item onClick={() => handleHeaderClick('Experts')}>Experts</sp-menu-item>
                        </sp-menu>
                    </sp-picker>
                </sp-field-group>
            </Theme>
        </>
    );
}
