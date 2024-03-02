import React, { useState, useEffect } from 'react';
import useAppContext from './hook/useAppContext.jsx';

export default function FundingSelector() {
    const { csvValues, setCsvValues, fundingCopyValue, setFundingCopyValue, selectedFunding, setSelectedFunding } = useAppContext();

    // Declare a função handleFundingClick fora do useEffect
    const handleFundingClick = (selectedFunding) => {
        setSelectedFunding(selectedFunding);
    };

    useEffect(() => {
        handleFundingClick(csvValues['Vendor Funding Name']);
    }, [csvValues['Vendor Funding Name']]);

    const [formState, setFormState] = useState({
        fundingCopyValue: csvValues['Funding/WEP Content'] || "",
    });

    const [tempFormState, setTempFormState] = useState({
        fundingCopyValue: "",
    });

    const [valid, setValid] = useState({
        fundingCopyValue: false,
    });

    useEffect(() => {

        // Limpe o estado temporário ao montar o componente
        setTempFormState({
            fundingCopyValue: fundingCopyValue || "",
        });

        // Limpe o estado ao montar o componente
        setFormState({
            fundingCopyValue: fundingCopyValue || "",
        });

    }, [selectedFunding]);

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
        setFundingCopyValue(tempFormState[key]);

        // Atualize o estado final com os valores do estado temporário
        setFormState({
            ...formState,
            [key]: tempFormState[key],
        });
    };

    const [isEditClicked, setIsEditClicked] = useState(false);

    const handleEditClick = () => {
        setIsEditClicked((prevIsEditClicked) => !prevIsEditClicked);
    };

    console.log("funding copy", fundingCopyValue)

    return (
        <>
            <div>
                <sp-detail for="funding-field">FUNDING</sp-detail>
                <sp-field-group style={{ width: "100vw", display: "flex", flexDirection: "row", gap: "5px" }}>
                    <sp-picker style={{ margin: "0 4px 0 0" }} id="picker-m" size="m" label="Selection type" placeholder="Selecione o funding">
                        <sp-menu>
                            <sp-menu-item selected={selectedFunding === "no-vf"} onClick={() => handleFundingClick("no-vf")}>No VF</sp-menu-item>
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
                    <div className="sp-tab-page" id="sp-spectrum-widgets-tab-page">
                        <sp-action-button label="Edit" onClick={handleEditClick}>
                            <div slot="icon" className="icon">
                                <svg id="spectrum-icon-18-Edit" viewBox="0 0 36 36">
                                    <path d="M33.567 8.2L27.8 2.432a1.215 1.215 0 0 0-.866-.353H26.9a1.371 1.371 0 0 0-.927.406L5.084 23.372a.99.99 0 0 0-.251.422L2.055 33.1c-.114.377.459.851.783.851a.251.251 0 0 0 .062-.007c.276-.063 7.866-2.344 9.311-2.778a.972.972 0 0 0 .414-.249l20.888-20.889a1.372 1.372 0 0 0 .4-.883 1.221 1.221 0 0 0-.346-.945zM11.4 29.316c-2.161.649-4.862 1.465-6.729 2.022l2.009-6.73z"></path>
                                </svg>
                            </div>
                        </sp-action-button>
                    </div>
                </sp-field-group>

            </div>


            {selectedFunding !== '' && (
                <>
                    {isEditClicked && (
                        <div>
                            <sp-detail for="funding-copy-field">FUNDING COPY</sp-detail>
                            <sp-textfield
                                id="funding-copy-field"
                                placeholder="Insira o Funding Copy"
                                value={tempFormState.fundingCopyValue}
                                onInput={(e) => handleInputChange('fundingCopyValue', e.target.value)}
                                onBlur={() => handleBlur('fundingCopyValue')}
                                valid={valid.fundingCopyValue}
                            ></sp-textfield>
                        </div>
                    )}
                </>
            )}


        </>
    );
}