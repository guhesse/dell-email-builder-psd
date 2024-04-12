import { useEffect, useState } from "react";

const useFormState = (setCopyValues, prevCopyValues) => {

    const [initialState, setInitialState] = useState({});
    const [formState, setFormState] = useState({});
    const [tempFormState, setTempFormState] = useState({});
    const [valid, setValid] = useState({});

    const handleFieldChange = (key, value) => {
        setTempFormState((prevFormState) => ({
            ...prevFormState,
            [key]: value,
        }));

        setCopyValues((prevCopyValues) => ({
            ...prevCopyValues,
            [key]: tempFormState[key],
        }));
        
    };

    const handleBlur = (key, value) => {
        setFormState({
            ...formState,
            [key]: tempFormState[key],
        });

        setValid((prevValid) => ({
            ...prevValid,
            [key]: value !== "",
        }));
    };

    return {
        formState,
        tempFormState,
        handleBlur,
        valid,
        initialState,
        setInitialState,
        handleFieldChange,
        setTempFormState,
        setFormState,
    };
};

export default useFormState;
