import React, { useState, useEffect } from "react";
import useAppContext from "./hook/useAppContext.jsx";

export default function SubjectLineSelector(props) {
    const { csvValues, setCsvValues, setSlValue, setSslValue } = useAppContext();

    const [formState, setFormState] = useState({
        slValue: csvValues.SL || "",
        sslValue: csvValues.SSL || "",
    });

    const [tempFormState, setTempFormState] = useState({
        slValue: csvValues.SL || "",
        sslValue: csvValues.SSL || "",
    });

    const [valid, setValid] = useState({
        slValue: false,
        sslValue: false,
    });

    useEffect(() => {
        // Limpe o estado temporário ao montar o componente
        setTempFormState({
            slValue: "",
            sslValue: "",
        });

        // Atualize o estado final com os valores do contexto
        setFormState({
            slValue: csvValues.SL || "",
            sslValue: csvValues.SSL || "",
        });
    }, [csvValues.SL, csvValues.SSL]);

    const handleInputChange = (key, value) => {
        // Atualize o estado temporário imediatamente
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
        if (key === "slValue") {
            setSlValue(tempFormState.slValue);
        } else if (key === "sslValue") {
            setSslValue(tempFormState.sslValue);
        }

        // Atualize o estado final com os valores do estado temporário
        setFormState({
            ...formState,
            [key]: tempFormState[key],
        });

        props.onSubjectLineChange({
            slValue: key === "slValue" ? tempFormState.slValue : csvValues.SL,
            sslValue: key === "sslValue" ? tempFormState.sslValue : csvValues.SSL,
        });
    };

    return (
        <div
            style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "flex-start",
            }}
            className="group"
        >
            <sp-label>SL & SSL</sp-label>
            <div style={{ margin: "0 4px" }}>
                <sp-detail for="sl-field">SL</sp-detail>
                <sp-textfield
                    id="sl-field"
                    placeholder="Insira o SL"
                    value={formState.slValue}
                    onInput={(event) => handleInputChange("slValue", event.target.value)}
                    onBlur={() => handleBlur("slValue")}
                    valid={formState.slValue !== "" ? valid.slValue : undefined}
                ></sp-textfield>
            </div>
            <div style={{ margin: "0 4px" }}>
                <sp-detail for="ssl-field">SSL</sp-detail>
                <sp-textfield
                    id="ssl-field"
                    placeholder="Insira o SSL"
                    value={formState.sslValue}
                    onInput={(event) => handleInputChange("sslValue", event.target.value)}
                    onBlur={() => handleBlur("sslValue")}
                    valid={formState.sslValue !== "" ? valid.sslValue : undefined}
                ></sp-textfield>
            </div>
        </div>
    );
}
