import React, { useState } from 'react';

export default function FpoSelector({ handleFpoValueSelect, handleFpoSegmentSelect }) {

    const [selectedFpoValue, setSelectedFpoValue] = useState(null);
    const [selectedFpoSegment, setSelectedFpoSegment] = useState('sb');

    const handleFpoValueClick = (value) => {
        setSelectedFpoValue(value);
        handleFpoValueSelect(value);
    };

    const handleFpoSegmentClick = (segment) => {
        setSelectedFpoSegment(segment);
        handleFpoSegmentSelect(segment);
    };


    return (
        <>

            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start" }} class="group"><sp-label>Accent Color</sp-label>
                <div style={{ display: "flex", flexDirection: "column", flexWrap: "wrap", alignItems: "flex-start" }}>
                    <sp-detail for="fpo-value-field">FPO'S</sp-detail>
                    <sp-field-group style={{ display: "flex", flexDirection: "row" }}>
                        <sp-picker placeholder="Selecione quantos FPO's" style={{ padding: "0" }} id="picker-m" size="m" label="Selection type">
                            <sp-menu>
                                <sp-menu-item onClick={() => handleFpoValueClick(null)}>None</sp-menu-item>
                                <sp-menu-item onClick={() => handleFpoValueClick('1')}>1</sp-menu-item>
                                <sp-menu-item onClick={() => handleFpoValueClick('2')}>2</sp-menu-item>
                                <sp-menu-item onClick={() => handleFpoValueClick('3')}>3</sp-menu-item>
                                <sp-menu-item onClick={() => handleFpoValueClick('4')}>4</sp-menu-item>
                                <sp-menu-item onClick={() => handleFpoValueClick('5')}>5</sp-menu-item>
                            </sp-menu>
                        </sp-picker>
                    </sp-field-group>
                </div>

                {selectedFpoValue !== null && (
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <sp-detail for="fpo-segment-field">SEGUIMENTO DO FPO</sp-detail>
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
