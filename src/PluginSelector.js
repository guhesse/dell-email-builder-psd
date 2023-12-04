import React, { useState } from "react";

export default function PluginSelector({ handlePluginSelect, onPluginCopyChange, onSuperChargerCopyChange }) {

    const [selectedPlugin, setSelectedPlugin] = useState('null');

    const handlePluginClick = (plugin) => {
        setSelectedPlugin(plugin); // Executa a função passada pelo pai
        handlePluginSelect(plugin);
    };

    const [pluginCopyValue, setPluginCopyValue] = useState("");
    const [leftCopyValue, setLeftCopyValue] = useState("");
    const [middleCopyValue, setMiddleCopyValue] = useState("");
    const [rightCopyValue, setRightCopyValue] = useState("");

    const handlePluginCopyChange = (event) => {
        const value = event.target.value;
        setPluginCopyValue(value);
        onPluginCopyChange({
            pluginCopyValue: value
        });
    };

    const handleLeftCopyChange = (event) => {
        const value = event.target.value;
        setLeftCopyValue(value);
        onSuperChargerCopyChange({
            leftCopyValue: value,
            middleCopyValue,
            rightCopyValue
        });
    };

    const handleMiddleCopyChange = (event) => {
        const value = event.target.value;
        setMiddleCopyValue(value);
        onSuperChargerCopyChange({
            leftCopyValue,
            middleCopyValue: value,
            rightCopyValue
        });
    };

    const handleRightCopyChange = (event) => {
        const value = event.target.value;
        setRightCopyValue(value);
        onSuperChargerCopyChange({
            leftCopyValue,
            middleCopyValue,
            rightCopyValue: value
        });
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
                                onInput={handlePluginCopyChange}
                                {...(pluginCopyValue !== "" && { valid: true })}
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
                                onInput={handleLeftCopyChange}
                                {...(leftCopyValue !== "" && { valid: true })}
                            ></sp-textfield>
                            <sp-textfield
                                style={{ paddingTop: "5px" }}
                                id="center-copy"
                                placeholder="Middle Copy"
                                value={middleCopyValue}
                                onInput={handleMiddleCopyChange}
                                {...(middleCopyValue !== "" && { valid: true })}
                            ></sp-textfield>
                            <sp-textfield
                                style={{ paddingTop: "5px" }}
                                id="right-copy"
                                placeholder="Right Copy"
                                value={rightCopyValue}
                                onInput={handleRightCopyChange}
                                {...(rightCopyValue !== "" && { valid: true })}
                            ></sp-textfield>
                        </>
                    )}

                </div>
            </div>
        </>
    );
};

