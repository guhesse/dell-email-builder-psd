import React, { useState } from 'react';
import { Theme } from "@swc-react/theme";


export default function HeaderSelector({ handleHeaderSelect }) {
    const [selectedHeader, setSelectedHeader] = useState(null);

    const handleHeaderClick = (header) => {
        setSelectedHeader(header);
        handleHeaderSelect(header); // Executa a função passada pelo pai (handleHeaderSelect) com o header selecionado
    };


    return (
        <>
                <sp-field-group width={{base: 'size-3000', L: "single-line-width"}}>
                    <div>
                        <sp-field-label for="picker-m" size="m">Header:</sp-field-label>
                        <sp-picker id="picker-m" size="m" label="Selection type" placeholder="Selecione o header">
                            <sp-menu >
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
        </>
    );
}
