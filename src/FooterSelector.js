import React, { useState, useEffect } from 'react';
import useAppContext from './hook/useAppContext.jsx';

export default function FooterSelector() {

    const { csvValues, selectedFooter, setSelectedFooter } = useAppContext();

    const handleFooterClick = (selectedFooter) => {
        setSelectedFooter(selectedFooter);
    };

    useEffect(() => {

        handleFooterClick(csvValues['Segment']);
    }, [csvValues['Segment']]);

    return (
        <>
            <div style={{ display: "flex", flexWrap: "wrap", flexDirection: "column", alignItems: "flex-start" }} className="group">
                <sp-label>Footer</sp-label>
                <sp-field-group width={{ base: 'size-3000', L: "single-line-width" }}>
                    <div>
                        <sp-picker id="picker-m" size="m" label="Selection type" placeholder="Selecione o footer">
                            <sp-menu >
                                <sp-menu-item selected={selectedFooter === ''} onClick={() => handleFooterClick('')}>None</sp-menu-item>
                                <sp-menu-divider></sp-menu-divider>
                                <sp-menu-item selected={selectedFooter === 'sb-four-btn'} onClick={() => handleFooterClick('sb-four-btn')}>SB 4 Button</sp-menu-item>
                                <sp-menu-item selected={selectedFooter === 'csb-four-btn'} onClick={() => handleFooterClick('csb-four-btn')}>CSB 4 Button</sp-menu-item>
                                <sp-menu-item disabled selected={selectedFooter === 'con'} onClick={() => handleFooterClick('con')}>CON</sp-menu-item>
                                <sp-menu-divider></sp-menu-divider>
                                <sp-menu-item disabled selected={selectedFooter === 'aw-three-btn'} onClick={() => handleFooterClick('aw-three-btn')}>Alienware 3 Button</sp-menu-item>
                                <sp-menu-item selected={selectedFooter === 'csb-four-btn'} onClick={() => handleFooterClick('aw-four-btn')}>Alienware 4 Button</sp-menu-item>
                                <sp-menu-item disabled selected={selectedFooter === 'gaming'} onClick={() => handleFooterClick('gaming')}>Gaming</sp-menu-item>
                                <sp-menu-divider></sp-menu-divider>
                                <sp-menu-item disabled selected={selectedFooter === 'outlet'} onClick={() => handleFooterClick('outlet')}>Outlet</sp-menu-item>
                                <sp-menu-item selected={selectedFooter === 'experts'} onClick={() => handleFooterClick('experts')}>Experts</sp-menu-item>
                            </sp-menu>
                        </sp-picker>
                    </div>
                </sp-field-group>
            </div>

        </>
    );
}
