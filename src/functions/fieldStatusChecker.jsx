import { useState } from 'react';

const useStatusIcon = () => {

    const checkIsFilled = ({ obj, array, value }) => {
        const requiredFields = array[obj]?.fields || [];
        return requiredFields.every(field => value[field]);
    };

    const checkIsFilledNoChildren = ({ array, value }) => {
        const requiredFields = array?.fields || [];
        return requiredFields.every(field => value[field]);
    };

    const checkIsSelected = ({ value }) => {
        if (value !== null && value !== undefined) {
            return 'check'
        } else {
            return 'not'
        }
    };

    const setStatusByField = ({ obj, array, value, type }) => {

        if (type === "filledOnObj") {
            if (!obj) {
                return 'not';
            } else {
                return checkIsFilled({ obj, array, value }) ? 'check' : 'half';
            }
        } else if (type === "filledOnArr") {
            return checkIsFilledNoChildren({ array, value }) ? 'check' : 'half';
        } else if (type === "selected") {
            return 'not';
        }
    };


    return { checkIsSelected, setStatusByField };
};

export default useStatusIcon;
