import { useState } from 'react';

const useFormState = (initialFields) => {
    const [fields, setFields] = useState(initialFields);
    const [valid, setValid] = useState({});
    

    const handleFieldChange = (key, value) => {
        setFields(prevFields => ({
            ...prevFields,
            [key]: value,
        }));

        setValid(prevValid => ({
            ...prevValid,
            [key]: value !== "",
        }));
    };
    

    return { fields, valid, handleFieldChange };
};

export default useHandleField;
