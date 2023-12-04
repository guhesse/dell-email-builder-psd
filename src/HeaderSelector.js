import React, { useState } from 'react';
import { Theme } from "@swc-react/theme";


export default function HeaderSelector({ handleHeaderSelect }) {
    const [selectedHeader, setSelectedHeader] = useState(null);

    const handleHeaderClick = (header) => {
        setSelectedHeader(header);
        handleHeaderSelect(header); // Executa a função passada pelo pai (handleHeaderSelect) com o header selecionado
    };


    return (
        <div>
            <sp-detail for="header-field">HEADER</sp-detail>
            <sp-overlay>
                <sp-picker slot="trigger" id="picker-m" size="m" label="Selection type" placeholder="Selecione o header">
                    <sp-menu>
                        <sp-menu-item onClick={() => handleHeaderClick('csb')}>CSB & SB</sp-menu-item>
                        <sp-menu-item onClick={() => handleHeaderClick('outlet')}>CSB Outlet</sp-menu-item>
                        <sp-menu-divider></sp-menu-divider>
                        <sp-menu-item onClick={() => handleHeaderClick('sb-rd')}>SB RD</sp-menu-item>
                        <sp-menu-item onClick={() => handleHeaderClick('sb-gdo')}>SB GDO</sp-menu-item>
                        <sp-menu-divider></sp-menu-divider>
                        <sp-menu-item onClick={() => handleHeaderClick('alienware')}>Alienware</sp-menu-item>
                    </sp-menu>
                </sp-picker>
                <sp-popover
                    offset="5"
                    placement="right"
                    alignment="center"
                    appearance="none"
                    slot="hover"
                    style={{ borderRadius: "5px" }}
                >
                    <sp-body style={{ padding: "5px 8px", width: "150px", fontSize: "12px", margin: 0 }}>
                        <h4>CSB & SB</h4>
                        <p style={{ fontSize: 12, lineHeight: 1, margin: 0, padding: 0 }}>
                            Padrão
                        </p>

                        <h4 style={{ marginTop: 2 }}>CSB Outlet</h4>
                        <p style={{ fontSize: 12, lineHeight: 1, margin: 0, padding: 0 }}>
                            Confira os produtos
                        </p>

                        <h4 style={{ marginTop: 2 }}>SB RD</h4>
                        <p style={{ fontSize: 12, lineHeight: 1, margin: 0, padding: 0 }}>
                            Fale com o seu consultor
                        </p>

                        <h4 style={{ marginTop: 2 }}>SB GDO</h4>
                        <p style={{ fontSize: 12, lineHeight: 1, margin: 0, padding: 0 }}>
                            Fale com o seu gerente
                        </p>
                    </sp-body>
                </sp-popover>
            </sp-overlay>
        </div>
    );
}
