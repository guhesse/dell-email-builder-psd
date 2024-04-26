import React, { useState, useEffect } from 'react';
import useAppContext from './hook/useAppContext.jsx';
import GroupLabel from './components/GroupLabel.jsx';
import StatusIcon from './components/Icons/StatusIcon.jsx';
import BaseIcon from './components/Icons/BaseIcon.jsx';
import { useToggleState } from './hook/useToogle.jsx';
import useStatusIcon from './functions/fieldStatusChecker.jsx';

const fpoArr = {
    'sb': {
        name: 'SB',
        brand: 'dell',
        fieldsTitle: [],
        fields: []
    },
    'isg': {
        name: 'ISG',
        brand: 'dell',
        disabled: 'true',
        fieldsTitle: [],
        fields: []
    },
    'gaming': {
        name: 'Gaming',
        brand: 'dell',
        disabled: 'true',
        fieldsTitle: [],
        fields: []
    },
    'alienware': {
        name: 'Alienware',
        brand: 'alienware',
        disabled: 'true',
        fieldsTitle: [],
        fields: []
    },
}

export default function FpoSelector() {

    const { selectedFpoValue, setSelectedFpoValue, selectedFpoSegment, setSelectedFpoSegment } = useAppContext();

    var fpoCount = selectedFpoValue
    var setFpoCount = setSelectedFpoValue
    var fpo = selectedFpoSegment
    var setFpo = setSelectedFpoSegment

    const { checkIsSelected } = useStatusIcon();

    const [isOptionsOpen, toggleOptions] = useToggleState(false);

    const [selected, setSelected] = useState({ fpoCount: false, fpoSegment: false });

    const handleResetClick = () => {
        setFpoCount(null)
        setFpo(null)
    };

    const handleFpoValueClick = (fpoCount) => {
        setFpoCount(fpoCount);
    };

    const handleFpoSegmentClick = (fpo) => {
        setFpo(fpo);
    };

    // const value = {
    //     fpoCount: fpoCount,
    //     fpoSegment: fpoSegment
    // };

    // console.log(value)

    const statusType = checkIsSelected({
        value: fpo
    });


    return (
        <>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start" }} className="group">
                <sp-icons>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <StatusIcon type={statusType} size="s" />
                        <BaseIcon onClick={handleResetClick} size="s" type="bin" />
                    </div>
                </sp-icons>
                {isOptionsOpen ? (
                    <>
                        <GroupLabel onClick={toggleOptions} type="open" size="s" name="FPO" />
                        <sp-field-group>
                            <sp-detail for="fpo-count-field">QUANTIDADE</sp-detail>
                            <sp-picker class='largePicker' placeholder="Selecione quantos FPO's" id="fpo-count-field" label="Selection type">
                                <sp-menu>
                                    {[0, 1, 2, 3, 4, 5].map((fpoCount) => (
                                        <sp-menu-item
                                            key={fpoCount}
                                            selected={fpoCount === selectedFpoValue ? selected.fpoCount : undefined}
                                            onClick={() => handleFpoValueClick(fpoCount)}>
                                            {fpoCount !== 0 ? fpoCount : 'None'}
                                        </sp-menu-item>
                                    ))}
                                </sp-menu>
                            </sp-picker>
                        </sp-field-group>
                    </>) : (
                    <GroupLabel onClick={toggleOptions} type="closed" size="s" name="FPO" />
                )}

                {selectedFpoValue !== null && selectedFpoValue !== "" && selectedFpoValue !== 0 && isOptionsOpen && (
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <sp-detail for="fpo-segment-field">SEGUIMENTO</sp-detail>
                        <sp-field-group>
                            <sp-picker class='largePicker' placeholder="Seguimento do FPO" id="picker-m" size="m" label="Selection type">
                                <sp-menu>
                                    {Object.keys(fpoArr).map((fpo) => (
                                        <sp-menu-item
                                            key={fpo}
                                            disabled={fpoArr[fpo].disabled === 'true' ? true : undefined}
                                            selected={fpo === selectedFpoSegment ? selected.fpo : undefined}
                                            onClick={() => handleFpoSegmentClick(fpo)}>
                                            {fpoArr[fpo].name}
                                        </sp-menu-item>
                                    ))}
                                </sp-menu>
                            </sp-picker>
                        </sp-field-group>
                    </div>
                )}
            </div>
        </>
    );
}