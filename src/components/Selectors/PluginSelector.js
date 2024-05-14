import React, { useState, useEffect } from "react";
import useAppContext from "../../hook/useAppContext.jsx";
import BaseIcon from "../Icons/BaseIcon.jsx";
import StatusIcon from "../Icons/StatusIcon.jsx";
import useStatusIcon from "../../functions/fieldStatusChecker.jsx";
import { useToggleState } from "../../hook/useToogle.jsx";
import GroupLabel from "../GroupLabel.jsx";
import useFormState from "../../hook/useFormState.jsx";

const pluginsArr = {
    'plugin': {
        name: 'Plugin',
        key: 'plugin',
        fieldsTitle: ['plugin copy'],
        fields: ['single']
    },
    'supercharger': {
        name: 'Supercharger',
        key: 'plugin',
        fieldsTitle: ['left copy', 'center copy', 'right copy'],
        fields: ['left', 'center', 'right']
    },
    '': {
        name: 'None',
        key: [],
        fieldsTitle: [],
        fields: []
    },
};

export default function PluginSelector() {

    const { selectedModules, setSelectedModules, copyValues, setCopyValues } = useAppContext();

    const { plugin } = selectedModules

    const pluginCopy = copyValues.plugin;

    const setPluginCopy = (values) => setCopyValues({ ...copyValues, [pluginsArr[plugin].key]: values });

    const { valid, handleFieldChange, handleBlur, tempFormState, resetFormState } = useFormState(setPluginCopy, pluginCopy, pluginsArr);

    const [isOptionsOpen, toggleOptions] = useToggleState(false);

    const { setStatusByField } = useStatusIcon();

    const [selected, setSelected] = useState({ plugin: false });

    const handleResetClick = () => {
        setSelectedPlugin(null);
        setPluginCopy(initialState);
        toggleOptions(false);
    };

    const handlePluginClick = (plugin) => {
        setSelectedModules(prevState => ({
            ...prevState,
            plugin: plugin
        }));
    };

    const statusType = setStatusByField({
        type: "filledOnObj",
        value: pluginCopy,
        obj: plugin,
        array: pluginsArr,
    });

    const handleInput = (field, value) => {
        handleFieldChange(field, value);
        setPluginCopy({ ...pluginCopy, [field]: value });
    };

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
                                {Object.entries(pluginsArr).map(([plugin, { name }], index) => (
                                    <sp-radio
                                        key={`${plugin}-${index}`}
                                        onClick={() => handlePluginClick(plugin)}
                                        selected={plugin === selectedModules.plugin ? selected.plugin : null}>
                                        {name}
                                    </sp-radio>
                                ))}
                            </sp-radio-group>
                        </>
                    ) : (
                        <GroupLabel onClick={toggleOptions} type="closed" name="Plugin" size="s" />
                    )}

                    {plugin && isOptionsOpen && (
                        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}>
                            {pluginsArr[plugin].fieldsTitle.map((field, i) => (
                                <div key={field} style={{ margin: "4px 0px" }}>
                                    <sp-detail for={`${field}-field`}>{field.toUpperCase()}</sp-detail>
                                    <sp-textfield
                                        id={`${field}-field`}
                                        placeholder={`Insira o ${field}`}
                                        value={tempFormState[pluginsArr[plugin].fields[i]]}
                                        onInput={(e) => handleInput(pluginsArr[plugin].fields[i], e.target.value)}
                                        onBlur={() => handleBlur(pluginsArr[plugin].fields[i])}
                                        valid={tempFormState[pluginsArr[plugin].fields[i]] !== "" ? valid[pluginsArr[plugin].fields[i]] : undefined}
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