import React, { useState } from 'react';
import useAppContext from '../../../hook/useAppContext.jsx';

export default function BrandSelector() {
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
        <div className="group">
            <sp-icons>
                <div className="sp-icon" id="brand" onClick={handleBrandClick}>
                    <p className='brandLabel'>{brand === "dell" ? "Dell" : "Alienware"}</p>
                </div>
            </sp-icons>
            <sp-label onClick={toggleOptions} style={{ cursor: "pointer" }}>Brand</sp-label>
            {isOptionsOpen ? (
                <>
                    <sp-label onClick={toggleOptions} style={{ cursor: "pointer" }}>
                        <div style={{ display: "flex", alignItems: "center", flexDirection: "row" }}>
                            <p>Brand</p>
                            <span style={{ marginLeft: "8px", display: "flex", alignItems: "center", fill: "#8a8a8a" }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 14 16" >
                                    <title>S ChevronDown 18 N</title>
                                    <rect id="Canvas" fill="#8a8a8a" opacity="0" width="11" height="11" />
                                    <path d="M4,7.01a1,1,0,0,1,1.7055-.7055l3.289,3.286,3.289-3.286a1,1,0,0,1,1.437,1.3865l-.0245.0245L9.7,11.7075a1,1,0,0,1-1.4125,0L4.293,7.716A.9945.9945,0,0,1,4,7.01Z" />
                                </svg>
                            </span>
                        </div>
                    </sp-label>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <div className='brandContainer' style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', width: "100%", height: '40px' }}>
                            <sp-detail for="header-field">SELECTED BRAND</sp-detail>
                            <sp-button variant="secondary" quiet class={`dellBtn ${brand === "dell" ? "dellBtn" : "alienwareBtn"}`} style={{ left: '13px', width: '100px', height: '30px' }} onClick={handleBrandClick}>
                                {brand === "dell" ? "Dell" : "Alienware"}
                            </sp-button>

                        </div>
                    </div>
                </>
            ) : (
                <sp-label onClick={toggleOptions} style={{ cursor: "pointer" }}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <p>Brand </p>
                        <span style={{ marginLeft: "10px", display: "flex", alignItems: "center", fill: "#8a8a8a" }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 10 10" >
                                <g id="ChevronSize75">
                                    <rect id="Frame" width="7" height="7" fill="black" opacity="0" />
                                    <path d="M7.4834,4.40625,3.85986.7832a.83969.83969,0,0,0-1.1875,1.1875L5.70166,5,2.67236,8.0293a.83969.83969,0,1,0,1.1875,1.1875l3.62354-3.623A.83933.83933,0,0,0,7.4834,4.40625Z" />
                                </g>
                            </svg>

                        </span>
                    </div>
                </sp-label>
            )}
        </div>
    );
}

