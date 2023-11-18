import React, { useState } from 'react';
import { Theme } from "@swc-react/theme";


export default function FundingSelector({ handleFundingSelect }) {
    const [selectedFunding, setSelectedFunding] = useState(null);

    const handleFundingClick = (funding) => {
        setSelectedFunding(funding);
        handleFundingSelect(funding); // Executa a função passada pelo pai (handleHeaderSelect) com o header selecionado
    };


    return (
        <>
            <sp-field-group width={{ base: 'size-3000', L: "single-line-width" }}>
                <div>
                    <sp-field-label for="picker-m" size="m">Funding:</sp-field-label>
                    <sp-picker id="picker-m" size="m" label="Selection type" placeholder="Selecione o funding">
                        <sp-menu>
                            <sp-menu-item onClick={() => handleFundingClick(null)}>No VF</sp-menu-item>
                            <sp-menu-divider></sp-menu-divider>
                            <sp-menu-group>

                                <sp-menu-item onClick={() => handleFundingClick('win11')}>Windows 11</sp-menu-item>
                                <sp-menu-item disabled onClick={() => handleFundingClick('ms365')}>Microsoft 365</sp-menu-item>
                                <sp-menu-item disabled onClick={() => handleFundingClick('msserver')}>Microsoft Server</sp-menu-item>
                            </sp-menu-group>
                            <sp-menu-divider></sp-menu-divider>
                            <sp-menu-group>
                                <sp-menu-item disabled onClick={() => handleFundingClick('intelcorp')}>Intel Corporate</sp-menu-item>
                                <sp-menu-item disabled onClick={() => handleFundingClick('xeon')}>Xeon</sp-menu-item>
                                <sp-menu-item disabled onClick={() => handleFundingClick('i5')}>i5</sp-menu-item>
                                <sp-menu-item disabled onClick={() => handleFundingClick('i7')}>i7</sp-menu-item>
                                <sp-menu-item disabled onClick={() => handleFundingClick('i9')}>i9</sp-menu-item>
                                <sp-menu-item disabled onClick={() => handleFundingClick('evo')}>Evo</sp-menu-item>
                                <sp-menu-item disabled onClick={() => handleFundingClick('vpro')}>V Pro</sp-menu-item>
                            </sp-menu-group>
                            <sp-menu-divider></sp-menu-divider>
                            <sp-menu-group>
                                <sp-menu-item disabled onClick={() => handleFundingClick('mcaffee')}>McAffee</sp-menu-item>
                            </sp-menu-group>
                        </sp-menu>
                    </sp-picker>
                </div>
            </sp-field-group>

            {selectedFunding !== null && (
                <>
                    <div>
                        <sp-field-label for="badge-field">Funding Copy</sp-field-label>
                        <sp-textfield
                            style={{ width: "90vw" }}
                            id="badge-field"
                            placeholder="Insira o Funding Copy"
                        ></sp-textfield>
                    </div>
                </>
            )}

        </>
    );
}