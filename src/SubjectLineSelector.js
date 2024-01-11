import React, { useState } from "react";

export default function SubjectLineSelector(props) {

    const useFormState = (initialState) => {
        const [formState, setFormState] = useState(initialState);

        const handleInputChange = (key, value) => {
            setFormState({
                ...formState,
                [key]: value,
            });

            props.onSubjectLineChange({ ...formState, [key]: value });
        };

        return [formState, handleInputChange];
    };

    const [
        {
            slValue,
            sslValue,
        },
        setFormValue,
    ] = useFormState({
        slValue: "",
        sslValue: "",
    });

    const [valid, setValid] = useState({});

    // Função para validar um campo específico
    const validateField = (value) => {
        return value !== "";
    };

    // Função para manipular a mudança no valor do campo
    const handleInputChange = (key) => (event) => {
        const value = event.target.value;
        setFormValue(key, value);
    };

    // Função para manipular o blur do campo e atualizar a validação
    const handleBlur = (key, value) => {
        const isValid = validateField(value);
        setValid((prevValid) => ({
            ...prevValid,
            [key]: isValid,
        }));
    };

    return (
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start" }} className="group">
            <sp-label>SL & SSL</sp-label>
            <div style={{ margin: "0 4px" }}>
                <sp-detail for="sl-field">SL</sp-detail>
                <sp-textfield
                    id="sl-field"
                    placeholder="Insira o SL"
                    value={slValue}
                    onInput={handleInputChange('slValue')}
                    onBlur={() => handleBlur('slValue')}
                    valid={valid['slValue']}
                ></sp-textfield>
            </div>
            <div style={{ margin: "0 4px" }}>
                <sp-detail for="ssl-field">SSL</sp-detail>
                <sp-textfield
                    id="ssl-field"
                    placeholder="Insira o SSL"
                    value={sslValue}
                    onInput={handleInputChange('sslValue')}
                    onBlur={() => handleBlur('sslValue')}
                    valid={valid['sslValue']}
                ></sp-textfield>
            </div>
        </div>
    );
}
