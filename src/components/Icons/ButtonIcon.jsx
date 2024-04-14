import React from "react";
import BaseIcon from "./BaseIcon.jsx";

const IconButton = ({ label, onClick, size, type }) => {

    return (
        <sp-action-button label={label}>
            <div slot="icon" className="icon">
                <BaseIcon size={size} type={type} onClick={onClick}></BaseIcon>
            </div>
        </sp-action-button>
    );


}

export default IconButton;