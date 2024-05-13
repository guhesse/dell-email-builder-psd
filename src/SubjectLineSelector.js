import React, { useState, useEffect } from "react";
import useAppContext from "./hook/useAppContext.jsx";
import useFormState from "./hook/useFormState.jsx";
import StatusIcon from "./components/Icons/StatusIcon.jsx";
import BaseIcon from "./components/Icons/BaseIcon.jsx";
import GroupLabel from "./components/GroupLabel.jsx";
import useStatusIcon from "./functions/fieldStatusChecker.jsx";
import { useToggleState } from "./hook/useToogle.jsx";

const slArr = {
    fieldsTitle: ['subject line', 'super subject line'],
    key: "subject",
    fields: ['sl', 'ssl']
};

export default function SubjectLineSelector() {
    const { copyValues, setCopyValues } = useAppContext();

    const subjectCopy = copyValues[slArr.key];
    const setSubjectCopy = (values) => setCopyValues({ ...copyValues, [slArr.key]: values });

    const { valid, handleFieldChange, handleBlur, initialState, setInitialState, tempFormState, setTempFormState, resetFormState } = useFormState(setSubjectCopy, subjectCopy, slArr);

    const { setStatusByField } = useStatusIcon();
    const [isOptionsOpen, toggleOptions] = useToggleState(false);

    const handleResetClick = () => {
        setSubjectCopy({ sl: "", ssl: "" });
        resetFormState();
        toggleOptions(true);
    };

    const handleInput = (field, value) => {
        handleFieldChange(field, value);
        setSubjectCopy({ ...subjectCopy, [field]: value });
    };

    const statusType = setStatusByField({
        type: "filledOnArr",
        array: slArr,
        value: subjectCopy
    });


    return (
        <div className="group">
            <sp-icons>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <StatusIcon type={statusType} size="s" />
                    <BaseIcon onClick={handleResetClick} size="s" type="bin" />
                </div>
            </sp-icons>
            {isOptionsOpen ? (
                <>
                    <GroupLabel onClick={toggleOptions} type="open" size="s" name="SL & SSL" />
                    {slArr.fieldsTitle.map((field, i) => (
                        <div key={field} style={{ margin: "4px 5px" }}>
                            <sp-detail for={`${field}-field`}>{field.toUpperCase()}</sp-detail>
                            <sp-textfield
                                id={`${field}-field`}
                                placeholder={`Insira o ${field}`}
                                value={tempFormState[slArr.fields[i]]}
                                onInput={(e) => handleInput(slArr.fields[i], e.target.value)}
                                onBlur={() => handleBlur(slArr.fields[i], tempFormState[slArr.fields[i]])}
                                valid={tempFormState[slArr.fields[i]] !== "" ? valid[slArr.fields[i]] : undefined}
                            ></sp-textfield>
                        </div>
                    ))}
                </>
            ) : (
                <GroupLabel onClick={toggleOptions} type="closed" name="SL & SSL" size="s" />
            )}
        </div>
    );
}
