import React, { useState, useEffect } from 'react';
import useAppContext from './hook/useAppContext.jsx';

import BaseIcon from './components/Icons/BaseIcon.jsx';
import GroupLabel from './components/GroupLabel.jsx';
import StatusIcon from './components/Icons/StatusIcon.jsx';
import useStatusIcon from './functions/fieldStatusChecker.jsx';
import { useToggleState } from './hook/useToogle.jsx';

const headersArr = {
    '': {
        name: 'None',
        brand: 'dell',
    },
    'csb': {
        name: 'CSB & SB',
        brand: 'dell',
    },
    'outlet': {
        name: 'CSB Outlet',
        brand: 'dell',
    },
    'sb-rd': {
        name: 'SB & RD',
        brand: 'dell',
    },
    'sb-gdo-dexn': {
        name: 'SB GDO | DEXN',
        brand: 'dell',
    },
    'alienware': {
        name: 'Alienware',
        brand: 'alienware',
    },
};

export default function HeaderSelector() {

    const { selectedHeader, setSelectedHeader } = useAppContext();
    const { checkIsSelected } = useStatusIcon();
    const [isOptionsOpen, toggleOptions] = useToggleState(false);

    var header = selectedHeader
    var setHeader = setSelectedHeader

    const [selected, setSelected] = useState({ header: false });

    const statusType = checkIsSelected({ value: header, });

    const handleHeaderClick = (header) => {
        setHeader(header);
    };


    const handleResetClick = () => {
        setHeader(null)
        toggleOptions(false)
    };

    return (
        <div>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start", flexDirection: "column" }} className="group">
                <sp-icons>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <StatusIcon type={statusType} size="s" />
                        <BaseIcon onClick={handleResetClick} size="s" type="bin" />
                    </div>
                </sp-icons>
                {isOptionsOpen ? (
                    <>
                        <GroupLabel onClick={toggleOptions} type="open" size="s" name="Header" />
                        <sp-field-group>
                            <sp-picker placeholder="Select a header" label="Selection type">
                                <sp-menu>
                                    {Object.entries(headersArr).map(([header, { name }], index) => (
                                        <sp-menu-item
                                            key={`${header}-${index}`}
                                            onClick={() => handleHeaderClick(header)}
                                            selected={header === selectedHeader ? selected.header : null}>
                                            {name}
                                        </sp-menu-item>
                                    ))}
                                </sp-menu>
                            </sp-picker>
                        </sp-field-group>
                    </>
                ) : (
                    <GroupLabel onClick={toggleOptions} type="closed" name="Header" size="s" />
                )}
            </div>
        </div >
    );
}
