import { useState } from 'react';

const useStatusIcon = () => {
    const checkIsFilled = ({ obj, array, value }) => {
        const requiredFields = array[obj]?.fields || [];
        return requiredFields.every(field => value[field]);
    };

    const determineIconType = ({ array, obj, value }) => {
        if (value && array[value]) {
            return checkIsFilled({ obj, array, value }) ? 'check' : 'half';
        }
        return 'not';
    };

    return { determineIconType };
};

export default useStatusIcon;
