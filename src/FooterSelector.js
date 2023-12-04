import React, { useState } from 'react';
import { Theme } from "@swc-react/theme";


export default function FooterSelector({ handleFooterSelect }) {
    const [selectedFooter, setSelectedFooter] = useState(null);

    const handleFooterClick = (footer) => {
        setSelectedFooter(footer);
        handleFooterSelect(footer);
    };


    return (
        <>
            <div style={{ display: "flex", flexWrap: "wrap", flexDirection: "column", alignItems: "flex-start" }} className="group">
                <sp-label>Footer</sp-label>
                <sp-field-group width={{ base: 'size-3000', L: "single-line-width" }}>
                    <div>
                        <sp-picker id="picker-m" size="m" label="Selection type" placeholder="Selecione o footer">
                            <sp-menu >
                                <sp-menu-item onClick={() => handleFooterClick('sb-four-btn')}>SB 4 Button</sp-menu-item>
                                <sp-menu-item onClick={() => handleFooterClick('csb-four-btn')}>CSB 4 Button</sp-menu-item>
                                <sp-menu-item disabled onClick={() => handleFooterClick('CON')}>CON</sp-menu-item>
                                <sp-menu-divider></sp-menu-divider>
                                <sp-menu-item disabled onClick={() => handleFooterClick('aw-three-btn')}>Alienware 3 Button</sp-menu-item>
                                <sp-menu-item onClick={() => handleFooterClick('aw-four-btn')}>Alienware 4 Button</sp-menu-item>
                                <sp-menu-item disabled onClick={() => handleFooterClick('Gaming')}>Gaming</sp-menu-item>
                                <sp-menu-divider></sp-menu-divider>
                                <sp-menu-item disabled onClick={() => handleFooterClick('Outlet')}>Outlet</sp-menu-item>
                                <sp-menu-item disabled onClick={() => handleFooterClick('Experts')}>Experts</sp-menu-item>
                            </sp-menu>
                        </sp-picker>
                    </div>
                </sp-field-group>
            </div>

        </>
    );
}
