import React, { useState } from 'react';
import useAppContext from './hook/useAppContext.jsx';

export default function FpoSelector() {

    const { csvValues, setCsvValues, selectedFpoSegment, setSelectedFpoSegment, selectedFpoValue, setSelectedFpoValue } = useAppContext();

    const handleFpoSegmentClick = (selectedFpoSegment) => {
        setSelectedFpoSegment(selectedFpoSegment);
    };

    const handleFpoValueClick = (selectedFpoValue) => {
        setSelectedFpoValue(selectedFpoValue);
    };

    return (
        <>

            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start" }} className="group"><sp-label>FPO</sp-label>
                <div style={{ display: "flex", flexDirection: "column", flexWrap: "wrap", alignItems: "flex-start" }}>
                    <sp-detail for="fpo-value-field">QUANTIDADE</sp-detail>
                    <sp-field-group style={{ display: "flex", flexDirection: "row" }}>
                        <sp-picker placeholder="Selecione quantos FPO's" style={{ padding: "0" }} id="picker-m" size="m" label="Selection type">
                            <sp-menu>
                                <sp-menu-item onClick={() => handleFpoValueClick("")}>None</sp-menu-item>
                                <sp-menu-item onClick={() => handleFpoValueClick(1)}>1</sp-menu-item>
                                <sp-menu-item onClick={() => handleFpoValueClick(2)}>2</sp-menu-item>
                                <sp-menu-item onClick={() => handleFpoValueClick(3)}>3</sp-menu-item>
                                <sp-menu-item onClick={() => handleFpoValueClick(4)}>4</sp-menu-item>
                                <sp-menu-item disabled onClick={() => handleFpoValueClick(5)}>5</sp-menu-item>
                            </sp-menu>
                        </sp-picker>
                    </sp-field-group>
                </div>

                {selectedFpoValue !== "" && (
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <sp-detail for="fpo-segment-field">SEGUIMENTO</sp-detail>
                        <sp-field-group>
                            <sp-picker placeholder="Seguimento do FPO" style={{ padding: "0" }} id="picker-m" size="m" label="Selection type">
                                <sp-menu>
                                    <sp-menu-item onClick={() => handleFpoSegmentClick('sb')}>SB</sp-menu-item>
                                    <sp-menu-item disabled onClick={() => handleFpoSegmentClick('isg')}>ISG</sp-menu-item>
                                    <sp-menu-item disabled onClick={() => handleFpoSegmentClick('gaming')}>Gaming</sp-menu-item>
                                    <sp-menu-item disabled onClick={() => handleFpoSegmentClick('alienware')}>Alienware</sp-menu-item>
                                </sp-menu>
                            </sp-picker>
                        </sp-field-group>
                    </div>
                )}
            </div>
        </>
    );
}
