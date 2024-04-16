import { useState } from 'react';

const useStatusIcon = () => {

    const checkIsFilled = ({ obj, array, value }) => {
        const requiredFields = array[obj]?.fields || [];
        return requiredFields.every(field => value[field]);
    };

    const checkIsSelected = ({ value }) => {
        if (value !== null && value !== undefined) {
            return 'check'
        } else {
            return 'not'
        }
    };

    const determineStatusByFields = ({ obj, array, value }) => {
        if (obj && array[obj]) {
            return checkIsFilled({ obj, array, value }) ? 'check' : 'half';
        }
        return 'not';
    };

    return { checkIsSelected, determineStatusByFields };
};

export default useStatusIcon;
