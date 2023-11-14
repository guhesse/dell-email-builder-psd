import React, { useState } from "react";

const PluginSelector = () => {
    const [selectedPlugin, setSelectedPlugin] = useState(null);

    const handlePluginClick = (plugin) => {
        setSelectedPlugin(plugin); // Executa a função passada pelo pai (handleHeaderSelect) com o header selecionado
    };


    return (
        <div>
            <sp-radio-group label="Medium" name="example">
                <sp-radio onClick={() => handlePluginClick('plugin')}>Plugin</sp-radio>
                <sp-radio onClick={() => handlePluginClick('supercharger')}>Supercharger</sp-radio>
            </sp-radio-group>

            {selectedPlugin === 'plugin' && (
                <>
                    <sp-textfield
                        style={{ width: "90vw", paddingTop:"5px" }}
                        id="plugin-copy"
                        placeholder="Plugin Copy"
                    ></sp-textfield>
                </>
            )}

            {selectedPlugin === 'supercharger' && (
                <>
                    <sp-textfield
                        style={{ width: "90vw", paddingTop:"5px" }}
                        id="left-copy"
                        placeholder="Left Copy"
                    ></sp-textfield>
                    <sp-textfield
                        style={{ width: "90vw", paddingTop:"5px" }}
                        id="center-copy"
                        placeholder="Middle Copy"
                    ></sp-textfield>
                    <sp-textfield
                        style={{ width: "90vw", paddingTop:"5px" }}
                        id="right-copy"
                        placeholder="Right Copy"
                    ></sp-textfield>
                </>
            )}
        </div>
    );
};

export default PluginSelector;
