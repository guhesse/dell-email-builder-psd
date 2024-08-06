import React, { useState, useEffect } from 'react';
import useAppContext from '../../../hook/useAppContext.jsx';
import GroupLabel from '../../Labels/GroupLabel.jsx';
import StatusIcon from '../../Icons/StatusIcon.jsx';
import BaseIcon from '../../Icons/BaseIcon.jsx';
import { useToggleState } from '../../../hook/useToogle.jsx';
import useStatusIcon from '../../../functions/fieldStatusChecker.jsx';

const fposArr = {
    'sb': {
        name: 'SB',
        brand: 'dell',
        key: 'fpo',
        fieldsTitle: [],
        fields: [],
        selected: true
    },
    'isg': {
        name: 'ISG',
        brand: 'dell',
        key: 'fpo',
        disabled: 'true',
        fieldsTitle: [],
        fields: [],
        selected: false
    },
    'gaming': {
        name: 'Gaming',
        brand: 'dell',
        key: 'fpo',
        disabled: 'true',
        fieldsTitle: [],
        fields: [],
        selected: false
    },
    'alienware': {
        name: 'Alienware',
        brand: 'alienware',
        key: 'fpo',
        disabled: 'true',
        fieldsTitle: [],
        fields: [],
        selected: false
    },
}

export default function FpoSelector() {

    const { selectedModules, setSelectedModules, copyValues, setCopyValues } = useAppContext();

    const { fpo } = selectedModules;

    const fpoCount = copyValues.fpo.number

    const { checkIsSelected } = useStatusIcon();

    const [isOptionsOpen, toggleOptions] = useToggleState(false);

    const [selected, setSelected] = useState({ fpoCount: false, fpoSegment: false });


    const handleResetClick = () => {
        setCopyValues(prevState => ({
            ...prevState,
            fpo: {
                ...prevState.fpo,
                number: null
            }
        }));
        setSelectedModules(prevState => ({
            ...prevState,
            fpo: null
        }));
        toggleOptions(false)
    };

    const handleFpoCount = (fpoCount) => {
        setCopyValues(prevState => ({
            ...prevState,
            fpo: {
                ...prevState.fpo,
                number: fpoCount
            }
        }));

        setSelectedModules(prevState => ({
            ...prevState,
            fpo: 'sb'
        }));

    };

    const handleFpoSegment = (fpo) => {
        setSelectedModules(prevState => ({
            ...prevState,
            fpo: fpo
        }));
    };

    const statusType = checkIsSelected({
        value: fpo && fpoCount,
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
                                            selected={fpoCount === copyValues.fpo.number ? selected.fpoCount : undefined}
                                            onClick={() => handleFpoCount(fpoCount)}>
                                            {fpoCount !== 0 ? fpoCount : 'None'}
                                        </sp-menu-item>
                                    ))}
                                </sp-menu>
                            </sp-picker>
                        </sp-field-group>
                    </>) : (
                    <GroupLabel onClick={toggleOptions} type="closed" size="s" name="FPO" />
                )}

                {fpoCount !== null && fpoCount !== "" && fpoCount !== 0 && isOptionsOpen && (
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <sp-detail for="fpo-segment-field">SEGUIMENTO</sp-detail>
                        <sp-field-group>
                            <sp-picker class='largePicker' placeholder="Seguimento do FPO" id="picker-m" size="m" label="Selection type">
                                <sp-menu>
                                    {Object.keys(fposArr).map((fpo) => (
                                        <sp-menu-item
                                            key={fpo}
                                            disabled={fposArr[fpo].disabled === 'true' ? true : undefined}
                                            selected={fpo === selectedModules.fpo ? selected.fpo : undefined}
                                            onClick={() => handleFpoSegment(fpo)}>
                                            {fposArr[fpo].name}
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