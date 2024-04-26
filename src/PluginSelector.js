import React, { useState, useEffect } from "react";
import useAppContext from "./hook/useAppContext.jsx";
import BaseIcon from "./components/Icons/BaseIcon.jsx";
import StatusIcon from "./components/Icons/StatusIcon.jsx";
import useStatusIcon from "./functions/fieldStatusChecker.jsx";
import { useToggleState } from "./hook/useToogle.jsx";
import GroupLabel from "./components/GroupLabel.jsx";
import useFormState from "./hook/useFormState.jsx";

const pluginArr = {
    'plugin': {
        name: 'Plugin',
        fieldsTitle: ['plugin copy'],
        fields: ['pluginCopyValue']
    },
    'supercharger': {
        name: 'Supercharger',
        fieldsTitle: ['left copy', 'center copy', 'right copy'],
        fields: ['leftPluginCopyValue', 'centerPluginCopyValue', 'rightPluginCopyValue']
    },
    '': {
        name: 'None',
        fieldsTitle: [],
        fields: []
    },
};

export default function PluginSelector() {

    const { selectedPlugin, setSelectedPlugin, pluginCopyValues, setPluginCopyValues } = useAppContext();

    const { valid, handleFieldChange, handleBlur, initialState, setInitialState, tempFormState, setTempFormState } = useFormState(setPluginCopyValues, pluginCopyValues);

    const [isOptionsOpen, toggleOptions] = useToggleState(false);

    const { setStatusByField } = useStatusIcon();

    var plugin = selectedPlugin

    const [selected, setSelected] = useState({ plugin: false });

    const handleResetClick = () => {
        setSelectedPlugin(null);
        setPluginCopyValues(initialState);
        toggleOptions(false);
    };

    const handlePluginClick = (selectedPlugin) => {
        setSelectedPlugin(selectedPlugin);
    };

    const statusType = setStatusByField({
        type: "filledOnObj",
        value: pluginCopyValues,
        obj: plugin,
        array: pluginArr,
    });

    const fieldKeys = Object.keys(pluginCopyValues || {});

    useEffect(() => {
        const newInitialState = {}
        const newTempFormState = {};

        fieldKeys.forEach(field => {
            newInitialState[field] = "";
            newTempFormState[field] = pluginCopyValues[field] || "";
        });

        setInitialState(newInitialState);
        setTempFormState(newTempFormState);
    }, [plugin]);

    return (
        <>
            <div>
                <div className="group">
                    <sp-icons>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <StatusIcon type={statusType} size="s" />
                            <BaseIcon onClick={handleResetClick} size="s" type="bin" />
                        </div>
                    </sp-icons>

                    {isOptionsOpen ? (
                        <>
                            <GroupLabel onClick={toggleOptions} type="open" size="s" name="Plugin" />
                            <sp-radio-group style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start" }} className="flexCenter">
                                {Object.entries(pluginArr).map(([plugin, { name }], index) => (
                                    <sp-radio
                                        key={`${plugin}-${index}`}
                                        onClick={() => handlePluginClick(plugin)}
                                        selected={plugin === selectedPlugin ? selected.plugin : null}>
                                        {name}
                                    </sp-radio>
                                ))}
                            </sp-radio-group>
                        </>
                    ) : (
                        <GroupLabel onClick={toggleOptions} type="closed" name="Plugin" size="s" />
                    )}

                    {selectedPlugin && isOptionsOpen && (
                        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}>
                            {pluginArr[plugin].fieldsTitle.map((field, i) => (
                                <div key={field} style={{ margin: "4px 0px" }}>
                                    <sp-detail for={`${field}-field`}>{field.toUpperCase()}</sp-detail>
                                    <sp-textfield
                                        id={`${field}-field`}
                                        placeholder={`Insira o ${field}`}
                                        value={tempFormState[pluginArr[plugin].fields[i]]}
                                        onInput={(e) => handleFieldChange(pluginArr[plugin].fields[i], e.target.value)}
                                        onBlur={() => handleBlur(pluginArr[plugin].fields[i])}
                                        valid={tempFormState[pluginArr[plugin].fields[i]] !== "" ? valid[pluginArr[plugin].fields[i]] : undefined}
                                    ></sp-textfield>
                                </div>
                            ))}
                        </div>
                    )}

                </div>
            </div>
        </>
    );
};