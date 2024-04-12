import React from 'react';

const Icon = ({ path }) => {

    // const sizesArr = {
    //     's': {
    //         width: "14",
    //         height: "14",
    //     },
    //     'xl': {
    //         width: "36",
    //         height: "36",
    //     },
    // };


    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="14" height="14">
            {path}
        </svg>
    );
};

export default Icon;
