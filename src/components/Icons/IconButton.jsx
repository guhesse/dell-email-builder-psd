import React from 'react';
import BaseIcon from "./BaseIcon.jsx";


const IconButton = ({ label, size, type, onClick, state }) => {

    if (state === "" || state === null) {
        return (
            <sp-action-button
                style={{ marginLeft: "5px" }}
                disabled
                label={label}
                onClick={onClick}
            >
                <div slot="icon" className="icon">
                    <BaseIcon size={size} type={type} />
                </div>
            </sp-action-button>
        )
    } else {
        return (
            <sp-action-button
                style={{ marginLeft: "5px" }}
                label={label}
                onClick={onClick}
            >
                <div slot="icon" className="icon">
                    <BaseIcon size={size} type={type} />
                </div>
            </sp-action-button>
        )
    }
};

export default IconButton;
