import React, { useState } from "react";

export default function PluginSelector({ handlePluginSelect, onPluginCopyChange, onSuperChargerCopyChange }) {

    const [selectedPlugin, setSelectedPlugin] = useState(null);

    const handlePluginClick = (plugin) => {
        setSelectedPlugin(plugin); // Executa a função passada pelo pai
        handlePluginSelect(plugin);
    };

    const [pluginCopyValue, setPluginCopyValue] = useState("");
    const [leftCopyValue, setLeftCopyValue] = useState("");
    const [middleCopyValue, setMiddleCopyValue] = useState("");
    const [rightCopyValue, setRightCopyValue] = useState("");

    const handlePluginCopyChange = (event) => {
        setPluginCopyValue(event.target.value);
        onPluginCopyChange({
            pluginCopyValue
        });
    };

    const handleLeftCopyChange = (event) => {
        setLeftCopyValue(event.target.value);
        onSuperChargerCopyChange({
            leftCopyValue,
            middleCopyValue,
            rightCopyValue
        });
    };

    const handleMiddleCopyChange = (event) => {
        setMiddleCopyValue(event.target.value);
        onSuperChargerCopyChange({
            leftCopyValue,
            middleCopyValue,
            rightCopyValue
        });
    };

    const handleRightCopyChange = (event) => {
        setRightCopyValue(event.target.value);
        onSuperChargerCopyChange({
            leftCopyValue,
            middleCopyValue,
            rightCopyValue
        });
    };


    return (
        <div>

            <sp-radio-group label="Medium" name="example">
                <sp-radio onClick={() => handlePluginClick('plugin')}>Plugin</sp-radio>
                <sp-radio onClick={() => handlePluginClick('supercharger')}>Supercharger</sp-radio>
                <sp-radio onClick={() => handlePluginClick('null')}>Nenhum</sp-radio>
            </sp-radio-group>

            {selectedPlugin === 'plugin' && (
                <>
                    <sp-textfield
                        style={{ width: "90vw", paddingTop: "5px" }}
                        id="plugin-copy"
                        placeholder="Plugin Copy"
                        value={pluginCopyValue}
                        onInput={handlePluginCopyChange}
                    ></sp-textfield>
                </>
            )}

            {selectedPlugin === 'supercharger' && (
                <>
                    <sp-textfield
                        style={{ width: "90vw", paddingTop: "5px" }}
                        id="left-copy"
                        placeholder="Left Copy"
                        value={leftCopyValue}
                        onInput={handleLeftCopyChange}
                    ></sp-textfield>
                    <sp-textfield
                        style={{ width: "90vw", paddingTop: "5px" }}
                        id="center-copy"
                        placeholder="Middle Copy"
                        value={middleCopyValue}
                        onInput={handleMiddleCopyChange}
                    ></sp-textfield>
                    <sp-textfield
                        style={{ width: "90vw", paddingTop: "5px" }}
                        id="right-copy"
                        placeholder="Right Copy"
                        value={rightCopyValue}
                        onInput={handleRightCopyChange}
                    ></sp-textfield>
                </>
            )}
        </div>
    );
};

