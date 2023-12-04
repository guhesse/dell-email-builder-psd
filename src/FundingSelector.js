import React, { useState } from 'react';
import { Theme } from "@swc-react/theme";


export default function FundingSelector({ handleFundingSelect, onFundingCopyChange }) {
    const [selectedFunding, setSelectedFunding] = useState('no-vf');

    const handleFundingClick = (funding) => {
        setSelectedFunding(funding);
        handleFundingSelect(funding); // Executa a função passada pelo pai (handleHeaderSelect) com o header selecionado
    };

    const [fundingCopyValue, setFundingCopyValue] = useState(""); // State to store SL value

    const handleFundingCopyChange = (event) => {
        const value = event.target.value;
        setFundingCopyValue(value);
        onFundingCopyChange({
            fundingCopyValue: value
        });
    };


    return (
        <>
            <div>
                <sp-detail for="funding-field">FUNDING</sp-detail>
                <sp-picker id="picker-m" size="m" label="Selection type" placeholder="Selecione o funding">
                    <sp-menu>
                        <sp-menu-item onClick={() => handleFundingClick('no-vf')}>No VF</sp-menu-item>
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


            {selectedFunding !== 'no-vf' && (

                <div>
                    <sp-detail for="funding-copy-field">Funding Copy</sp-detail>
                    <sp-textfield
                        id="funding-copy-field"
                        placeholder="Insira o Funding Copy"
                        value={fundingCopyValue}
                        onInput={handleFundingCopyChange}
                    ></sp-textfield>
                </div>

            )}

        </>
    );
}