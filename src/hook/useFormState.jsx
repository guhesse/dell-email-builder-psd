import { useEffect, useState } from "react";

const useFormState = (setValues, prevCopyValues, structure) => {
    const [initialState, setInitialState] = useState({});
    const [tempFormState, setTempFormState] = useState({});
    const [valid, setValid] = useState({});

    useEffect(() => {
        if (prevCopyValues && structure && structure.key && prevCopyValues[structure.key]) {
            const newInitialState = {};
            const newTempFormState = {};

            structure.fields.forEach(field => {
                newInitialState[field] = "";
                newTempFormState[field] = prevCopyValues[structure.key][field] || "";
            });

            setInitialState(newInitialState);
            setTempFormState(newTempFormState);
        }
    }, [prevCopyValues, structure]);

    const handleFieldChange = (field, value) => {

        setTempFormState(prevTempFormState => ({
            ...prevTempFormState,
            [field]: value,
        }));

        setValues(prevValues => ({
            ...prevValues,
            [structure.key]: {
                ...prevValues[structure.key],
                [field]: value,
            },
        }));
    };

    const handleBlur = (field, value) => {
        setValid(prevValid => ({
            ...prevValid,
            [field]: value !== "",
        }));
    };

    useEffect(() => {
        // console.log(tempFormState);
    }, [tempFormState]);

    const resetFormState = (field) => {
        setTempFormState(initialState)
        setValid({});
    };

    return {
        tempFormState,
        handleBlur,
        valid,
        initialState,
        setInitialState,
        handleFieldChange,
        resetFormState,
    };
};

export default useFormState;