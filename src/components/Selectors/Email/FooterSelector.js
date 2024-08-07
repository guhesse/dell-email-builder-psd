import React, { useState, useEffect } from 'react';
import useAppContext from '../../../hook/useAppContext.jsx';
import BaseIcon from '../../Icons/BaseIcon.jsx';
import GroupLabel from '../../Labels/GroupLabel.jsx';
import StatusIcon from '../../Icons/StatusIcon.jsx';
import useStatusIcon from '../../../functions/fieldStatusChecker.jsx';
import { useToggleState } from '../../../hook/useToogle.jsx';

const footersArr = {
    '': {
        name: 'None',
    },
    'sb-four-btn': {
        name: 'SB 4 Button',
        brand: 'dell',
    },
    'csb-four-btn': {
        name: 'CSB 4 Button',
        brand: 'dell',
    },
    'aw-three-btn': {
        name: 'Alienware 3 Button',
        brand: 'alienware',
    },
    'aw-four-btn': {
        name: 'Alienware 4 Button',
        brand: 'alienware',
    },
    'gaming': {
        name: 'Gaming',
        brand: 'dell',
    },
    // 'outlet': {
    //     name: 'Outlet',
    //     brand: 'dell',
    // },
    'experts': {
        name: 'Experts',
        brand: 'alienware',
    },
};

export default function FooterSelector() {

    const { selectedModules, setSelectedModules } = useAppContext();
    const { checkIsSelected } = useStatusIcon();
    const [isOptionsOpen, toggleOptions] = useToggleState(false);

    var { footer } = selectedModules

    const [selected, setSelected] = useState({ footer: false });

    const statusType = checkIsSelected({ value: footer, });

    const handleFooterClick = (footer) => {
        setSelectedModules(prevState => ({
            ...prevState,
            footer: footer
        }));
    };

    const handleResetClick = () => {
        setSelectedModules(prevState => ({
            ...prevState,
            footer: null
        }));
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
                        <GroupLabel onClick={toggleOptions} type="open" size="s" name="Footer" />
                        <sp-field-group>
                            <sp-picker placeholder="Select a Footer" label="Selection type">
                                <sp-menu>
                                    {Object.entries(footersArr).map(([footer, { name }], index) => (
                                        <sp-menu-item
                                            key={`${footer}-${index}`}
                                            onClick={() => handleFooterClick(footer)}
                                            selected={footer === selectedModules.footer ? selected.footer : null}>
                                            {name}
                                        </sp-menu-item>
                                    ))}
                                </sp-menu>
                            </sp-picker>
                        </sp-field-group>
                    </>
                ) : (
                    <GroupLabel onClick={toggleOptions} type="closed" name="Footer" size="s" />
                )}
            </div>
        </div >
    );
}
