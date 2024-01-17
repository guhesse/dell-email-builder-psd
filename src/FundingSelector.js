import React, { useState, useEffect } from 'react';
import useAppContext from './hook/useAppContext.jsx';

export default function FundingSelector() {
    const { csvValues, setCsvValues, setFundingCopyValue, selectedFunding, setSelectedFunding } = useAppContext();

    // Declare a função handleFundingClick fora do useEffect
    const handleFundingClick = (funding) => {
        setSelectedFunding(funding);
    };

    useEffect(() => {
        handleFundingClick(csvValues['Vendor Funding Name']);
    }, [csvValues['Vendor Funding Name']]);


    const [formState, setFormState] = useState({
        fundingCopyValue: csvValues['Funding/WEP Content'] || "",
    });

    useEffect(() => {
        setFormState({
            fundingCopyValue: csvValues['Funding/WEP Content'] || "",
        });
    }, [csvValues['Funding/WEP Content']]);

    const handleInputChange = (key, value) => {
        setFormState((prevFormState) => ({
            ...prevFormState,
            [key]: value,
        }));
    };

    const handleBlur = (key) => {
        setCsvValues({
            ...csvValues,
            [key]: formState[key],
        });

        if (key === "fundingCopyValue") {
            setFundingCopyValue(formState.fundingCopyValue);
        }

        props.onSubjectLineChange({
            fundingCopyValue: key === "fundingCopyValue" ? formState.fundingCopyValue : csvValues['Funding/WEP Content'],
        });
    };

    return (
        <>
            <div>
                <sp-detail for="funding-field">FUNDING</sp-detail>
                <sp-picker id="picker-m" size="m" label="Selection type" placeholder="Selecione o funding">
                    <sp-menu>
                        <sp-menu-item selected={selectedFunding === 'no-vf'} onClick={() => handleFundingClick('no-vf')}>No VF</sp-menu-item>
                        <sp-menu-divider></sp-menu-divider>
                        <sp-menu-group>
                            <sp-menu-item selected={selectedFunding === 'win11'} onClick={() => handleFundingClick('win11')}>Windows 11</sp-menu-item>
                            <sp-menu-item disabled selected={selectedFunding === 'ms365'} onClick={() => handleFundingClick('ms365')}>Microsoft 365</sp-menu-item>
                            <sp-menu-item disabled selected={selectedFunding === 'msserver'} onClick={() => handleFundingClick('msserver')}>Microsoft Server</sp-menu-item>
                        </sp-menu-group>
                        <sp-menu-divider></sp-menu-divider>
                        <sp-menu-group>
                            <sp-menu-item disabled selected={selectedFunding === 'intelcorp'} onClick={() => handleFundingClick('intelcorp')}>Intel Corporate</sp-menu-item>
                            <sp-menu-item disabled selected={selectedFunding === 'xeon'} onClick={() => handleFundingClick('xeon')}>Xeon</sp-menu-item>
                            <sp-menu-item disabled selected={selectedFunding === 'i5'} onClick={() => handleFundingClick('i5')}>i5</sp-menu-item>
                            <sp-menu-item disabled selected={selectedFunding === 'i7'} onClick={() => handleFundingClick('i7')}>i7</sp-menu-item>
                            <sp-menu-item disabled selected={selectedFunding === 'i9'} onClick={() => handleFundingClick('i9')}>i9</sp-menu-item>
                            <sp-menu-item disabled selected={selectedFunding === 'evo'} onClick={() => handleFundingClick('evo')}>Evo</sp-menu-item>
                            <sp-menu-item disabled selected={selectedFunding === 'vpro'} onClick={() => handleFundingClick('vpro')}>V Pro</sp-menu-item>
                        </sp-menu-group>
                        <sp-menu-divider></sp-menu-divider>
                        <sp-menu-group>
                            <sp-menu-item disabled selected={selectedFunding === 'mcaffee'} onClick={() => handleFundingClick('mcaffee')}>McAffee</sp-menu-item>
                        </sp-menu-group>
                    </sp-menu>

                </sp-picker>
            </div>


            {selectedFunding !== 'no-vf' && (
                <div>
                    <sp-detail for="funding-copy-field">FUNDING COPY</sp-detail>
                    <sp-textfield
                        id="funding-copy-field"
                        placeholder="Insira o Funding Copy"
                        value={formState.fundingCopyValue}
                        onInput={(event) => handleInputChange("fundingCopyValue", event.target.value)}
                        onBlur={() => handleBlur("fundingCopyValue")}
                        valid={formState.fundingCopyValue !== "" ? true : undefined} // Ajuste para sempre ser válido enquanto você não implementa a validação específica
                    ></sp-textfield>
                </div>
            )}
        </>
    );
}