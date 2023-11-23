import React, { useState } from 'react';

export default function FpoSelector({ handleFpoValueSelected, handleFpoSegmentSelected }) {

    const [selectedFpoValue, setSelectedFpoValue] = useState(null);
    const [selectedFpoSegment, setSelectedFpoSegment] = useState('sb');

    const handleFpoValueClick = (value) => {
        setSelectedFpoValue(value);
        handleFpoValueSelected(value);
    };

    const handleFpoSegmentClick = (segment) => {
        setSelectedFpoSegment(segment);
        handleFpoSegmentSelected(segment);
    };


    return (
        <>
            <sp-field-label for="fpo-value-field">FPO's:</sp-field-label>
            <sp-field-group style={{ width: "100vw", display: "flex", flexDirection: "row", gap: "5px" }}>
                <sp-picker placeholder="Selecione quantos FPO's" style={{ width: "45vw", padding: "0" }} id="picker-m" size="m" label="Selection type">
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

            {selectedFpoValue !== null && (
                <>
                    <sp-field-label for="fpo-segment-field">Seguimento de FPO:</sp-field-label>
                    <sp-field-group style={{ width: "100vw", display: "flex", flexDirection: "row", gap: "5px" }}>
                        <sp-picker placeholder="Seguimento do FPO" style={{ width: "45vw", padding: "0" }} id="picker-m" size="m" label="Selection type">
                            <sp-menu>
                                <sp-menu-item onClick={() => handleFpoSegmentClick('sb')}>SB</sp-menu-item>
                                <sp-menu-item onClick={() => handleFpoSegmentClick('isg')}>ISG</sp-menu-item>
                                <sp-menu-item onClick={() => handleFpoSegmentClick('gaming')}>Gaming</sp-menu-item>
                                <sp-menu-item onClick={() => handleFpoSegmentClick('alienware')}>Alienware</sp-menu-item>
                            </sp-menu>
                        </sp-picker>
                    </sp-field-group>
                </>
            )}
        </>
    );
}
