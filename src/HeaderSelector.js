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


    return (
        <>
            <Theme theme="dark" scale="medium" color="dark">
                <sp-field-group style={{ width: "100vw", display: "flex", flexDirection: "row", gap: "5px" }}>
                    <div>
                        <sp-field-label for="picker-m" size="m">Header:</sp-field-label>
                        <sp-picker style={{ width: "45vw", padding: "0" }} id="picker-m" size="m" label="Selection type" placeholder="Selecione o header">
                            <sp-menu>
                                <sp-menu-item onClick={() => handleHeaderClick('SB')}>SB</sp-menu-item>
                                <sp-menu-item disabled onClick={() => handleHeaderClick('CON')}>CON</sp-menu-item>
                                <sp-menu-divider></sp-menu-divider>
                                <sp-menu-item onClick={() => handleHeaderClick('Alienware')}>Alienware</sp-menu-item>
                                <sp-menu-item disabled onClick={() => handleHeaderClick('Gaming')}>Gaming</sp-menu-item>
                                <sp-menu-divider></sp-menu-divider>
                                <sp-menu-item disabled onClick={() => handleHeaderClick('Outlet')}>Outlet</sp-menu-item>
                                <sp-menu-item disabled onClick={() => handleHeaderClick('Experts')}>Experts</sp-menu-item>
                            </sp-menu>
                        </sp-picker>
                    </div>
                </sp-field-group>
            </Theme>
        </>
    );
}
