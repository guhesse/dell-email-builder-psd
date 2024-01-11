import React, { useState } from "react";

export default function PluginSelector({ handlePluginSelect, onPluginCopyChange }) {

    const [selectedPlugin, setSelectedPlugin] = useState('null');

    const handlePluginClick = (plugin) => {
        setSelectedPlugin(plugin); // Executa a função passada pelo pai
        handlePluginSelect(plugin);
    };

    const useFormState = (initialState) => {
        const [formState, setFormState] = useState(initialState);

        const handleInputChange = (key, value) => {
            setFormState({
                ...formState,
                [key]: value,
            });

            onPluginCopyChange({ ...formState, [key]: value });
        };

        return [formState, handleInputChange];
    };

    const [
        {
            pluginCopyValue,
            leftCopyValue,
            middleCopyValue,
            rightCopyValue,
        },
        setFormValue,
    ] = useFormState({
        pluginCopyValue: "",
        leftCopyValue: "",
        middleCopyValue: "",
        rightCopyValue: "",
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
        <>
            <div>
                <div className="group"><sp-label>Plugin & Supercharger</sp-label>

                    <sp-radio-group style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start" }} label="Medium" name="example">
                        <sp-radio onClick={() => handlePluginClick('plugin')}>Plugin</sp-radio>
                        <sp-radio onClick={() => handlePluginClick('supercharger')}>Supercharger</sp-radio>
                        <sp-radio checked={true} onClick={() => handlePluginClick('null')}>Nenhum</sp-radio>
                    </sp-radio-group>

                    {selectedPlugin === 'plugin' && (
                        <>
                            <sp-textfield
                                style={{ paddingTop: "5px" }}
                                id="plugin-copy"
                                placeholder="Plugin Copy"
                                value={pluginCopyValue}
                                onInput={handleInputChange('pluginCopyValue')}
                                onBlur={() => handleBlur('pluginCopyValue')}
                                valid={valid['pluginCopyValue']}
                            ></sp-textfield>
                        </>
                    )}

                    {selectedPlugin === 'supercharger' && (
                        <>
                            <sp-textfield
                                style={{ paddingTop: "5px" }}
                                id="left-copy"
                                placeholder="Left Copy"
                                value={leftCopyValue}
                                onInput={handleInputChange('leftCopyValue')}
                                onBlur={() => handleBlur('leftCopyValue')}
                                valid={valid['leftCopyValue']}
                            ></sp-textfield>
                            <sp-textfield
                                style={{ paddingTop: "5px" }}
                                id="center-copy"
                                placeholder="Middle Copy"
                                value={middleCopyValue}
                                onInput={handleInputChange('middleCopyValue')}
                                onBlur={() => handleBlur('middleCopyValue')}
                                valid={valid['middleCopyValue']}
                            ></sp-textfield>
                            <sp-textfield
                                style={{ paddingTop: "5px" }}
                                id="right-copy"
                                placeholder="Right Copy"
                                value={rightCopyValue}
                                onInput={handleInputChange('rightCopyValue')}
                                onBlur={() => handleBlur('rightCopyValue')}
                                valid={valid['rightCopyValue']}
                            ></sp-textfield>
                        </>
                    )}

                </div>
            </div>
        </>
    );
};

