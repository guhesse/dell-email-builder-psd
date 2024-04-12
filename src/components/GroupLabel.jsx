import React from 'react';
import BaseIcon from './Icons/BaseIcon.jsx';

const GroupLabel = ({ type, name, onClick }) => {

    const status = {
        'open': (
            <BaseIcon type="arrowDown" />
        ),
        'closed': (
            <BaseIcon type="arrowRight" />
        )
    };


    return (
        <sp-label onClick={onClick} style={{ cursor: "pointer" }} >
            <div className='flexCenter'>
                <p>{name}</p>
                <span className="labelArrow">
                    {status[type]}
                </span>
            </div>
        </sp-label>
    );
};

export default GroupLabel;
