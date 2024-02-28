import React, { useState, useEffect } from "react";
import useAppContext from "./hook/useAppContext.jsx";

export default function PluginSelector() {

    const { csvValues, setCsvValues, selectedPlugin, setSelectedPlugin, pluginCopyValues, setPluginCopyValues } = useAppContext();

    const {
        pluginCopyValue,
        leftPluginCopyValue,
        centerPluginCopyValue,
        rightPluginCopyValue,
    } = pluginCopyValues || {};

    const handlePluginClick = (selectedPlugin) => {
        setSelectedPlugin(selectedPlugin);
    };

    const [formState, setFormState] = useState({
        pluginCopyValue: csvValues['Plugin1 Text'] || "",
        leftPluginCopyValue: "",
        centerPluginCopyValue: "",
        rightPluginCopyValue: "",
    });

    const [tempFormState, setTempFormState] = useState({
        pluginCopyValue: "",
        leftPluginCopyValue: "",
        centerPluginCopyValue: "",
        rightPluginCopyValue: "",
    });

    const [valid, setValid] = useState({
        pluginCopyValue: false,
        leftPluginCopyValue: false,
        centerPluginCopyValue: false,
        rightPluginCopyValue: false,
    });

    useEffect(() => {

        // Limpe o estado temporário ao montar o componente
        setTempFormState({
            pluginCopyValue: pluginCopyValue || "",
            leftPluginCopyValue: leftPluginCopyValue || "",
            centerPluginCopyValue: centerPluginCopyValue || "",
            rightPluginCopyValue: rightPluginCopyValue || "",
        });

        // Limpe o estado ao montar o componente
        setFormState({
            pluginCopyValue: pluginCopyValue || "",
            leftPluginCopyValue: leftPluginCopyValue || "",
            centerPluginCopyValue: centerPluginCopyValue || "",
            rightPluginCopyValue: rightPluginCopyValue || "",
        });

    }, [selectedPlugin]);

    const handleInputChange = (key, value) => {
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
        // Atualize o CsvContext com os valores editados
        setCsvValues({
            ...csvValues,
            [key]: tempFormState[key],
        });

        // Atualize diretamente os valores no contexto
        setPluginCopyValues((prevPluginCopyValues) => ({
            ...prevPluginCopyValues,
            [key]: tempFormState[key],
        }));

        // Atualize o estado final com os valores do estado temporário
        setFormState({
            ...formState,
            [key]: tempFormState[key],
        });
    };


    return (
        <>
            <div>
                <div className="group"><sp-label>Plugin & Supercharger</sp-label>

                    <sp-radio-group style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start" }} label="Medium" name="example">
                        <sp-radio selected={selectedPlugin === "plugin"} onClick={() => handlePluginClick('plugin')}>Plugin</sp-radio>
                        <sp-radio selected={selectedPlugin === "supercharger"} onClick={() => handlePluginClick('supercharger')}>Supercharger</sp-radio>
                        <sp-radio selected={selectedPlugin === ""} onClick={() => handlePluginClick(null)}>Nenhum</sp-radio>
                    </sp-radio-group>

                    {selectedPlugin === 'plugin' && (
                        <>
                            <sp-textfield
                                style={{ paddingTop: "5px" }}
                                id="plugin-copy"
                                placeholder="Plugin Copy"
                                value={tempFormState.pluginCopyValue}
                                onInput={(e) => handleInputChange('pluginCopyValue', e.target.value)}
                                onBlur={() => handleBlur('pluginCopyValue')}
                                valid={valid.pluginCopyValue}
                            ></sp-textfield>
                        </>
                    )}

                    {selectedPlugin === 'supercharger' && (
                        <>
                            <sp-textfield
                                style={{ paddingTop: "5px" }}
                                id="left-copy"
                                placeholder="Left Copy"
                                value={tempFormState.leftPluginCopyValue}
                                onInput={(e) => handleInputChange('leftPluginCopyValue', e.target.value)}
                                onBlur={() => handleBlur('leftPluginCopyValue')}
                                valid={valid.leftPluginCopyValue}
                            ></sp-textfield>
                            <sp-textfield
                                style={{ paddingTop: "5px" }}
                                id="center-copy"
                                placeholder="Middle Copy"
                                value={tempFormState.centerPluginCopyValue}
                                onInput={(e) => handleInputChange('centerPluginCopyValue', e.target.value)}
                                onBlur={() => handleBlur('centerPluginCopyValue')}
                                valid={valid.centerPluginCopyValue}
                            ></sp-textfield>
                            <sp-textfield
                                style={{ paddingTop: "5px" }}
                                id="right-copy"
                                placeholder="Right Copy"
                                value={tempFormState.rightPluginCopyValue}
                                onInput={(e) => handleInputChange('rightPluginCopyValue', e.target.value)}
                                onBlur={() => handleBlur('rightPluginCopyValue')}
                                valid={valid.rightPluginCopyValue}
                            ></sp-textfield>
                        </>
                    )}

                </div>
            </div>
        </>
    );
};

