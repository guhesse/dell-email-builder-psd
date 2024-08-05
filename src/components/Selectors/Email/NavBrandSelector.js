import React, { useState } from 'react';
import useAppContext from '../../../hook/useAppContext.jsx';

export default function NavBrandSelector() {
    const { selectedModules, setSelectedModules } = useAppContext();
    const { brand } = selectedModules;
    const [switchState, setSwitchState] = useState(false);

    const [isOptionsOpen, setIsOptionsOpen] = useState(false);

    const toggleOptions = () => {
        setIsOptionsOpen(!isOptionsOpen);
    };

    const handleBrandClick = () => {
        setSwitchState(!switchState);
        setSelectedModules({ ...selectedModules, brand: switchState ? 'dell' : 'alienware' });
    };

    return (
        <div style={{ position: "absolute", right: "65px", height: "10px", top: "0.6em"}}>
            <div className="sp-icon" id="brand" onClick={handleBrandClick}>
                <p className='brandLabel' style={{ backgroundColor: brand === "dell" ? "#0672CB" : "#6633CC", color: "#FFFFFF" }}>
                {brand === "dell" ? "Dell" : "Alienware"}</p>
            </div>
        </div>
    );
}

