import { useState } from "react";

const useFormState = (initialState) => {
    const [formState, setFormState] = useState(initialState);
    const [tempFormState, setTempFormState] = useState(initialState);
    const [valid, setValid] = useState({});


    const handleFieldChange = (key, value) => {
        setTempFormState((prevTempFormState) => ({
            ...prevTempFormState,
            [key]: value,
        }));

        setValid((prevValid) => ({
            ...prevValid,
            [key]: value !== "",
        }));
    };

    const handleBlur = (key) => {
        setFormState((prevFormState) => ({
            ...prevFormState,
            [key]: tempFormState[key],
        }));
    };

    return {
        formState,
        tempFormState,
        valid,
        handleFieldChange,
        handleBlur,
        setTempFormState,
        setFormState,
    };
};

export default useFormState


