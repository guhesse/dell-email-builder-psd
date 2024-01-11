import React, { useState } from 'react';
import { Theme } from "@swc-react/theme";


export default function FundingSelector({ handleFundingSelect, onFundingCopyChange }) {
    const [selectedFunding, setSelectedFunding] = useState('no-vf');

    const handleFundingClick = (funding) => {
        setSelectedFunding(funding);
        handleFundingSelect(funding); // Executa a função passada pelo pai (handleHeaderSelect) com o header selecionado
    };

    const useFormState = (initialState) => {
        const [formState, setFormState] = useState(initialState);

        const handleInputChange = (key, value) => {
            setFormState({
                ...formState,
                [key]: value,
            });

            // Assuming onFundingCopyChange is a prop or a function you have access to
            onFundingCopyChange({ ...formState, [key]: value });
        };

        return [formState, handleInputChange];
    };

        const [
            {
                fundingCopyValue,
            },
            setFormValue,
        ] = useFormState({
            fundingCopyValue: "",
        });

        const [valid, setValid] = useState({});

        // Função para validar um campo específico
        const validateField = (value) => {
            return value !== "";
        };

        // Função para manipular a mudança no valor do campo
        const handleInputChange = (key) => (event) => {
            const value = event.target.value;
            setFormValue(key, value);
        };

        // Função para manipular o blur do campo e atualizar a validação
        const handleBlur = (key, value) => {
            const isValid = validateField(value);
            setValid((prevValid) => ({
                ...prevValid,
                [key]: isValid,
            }));
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
                        <sp-detail for="funding-copy-field">FUNDING COPY</sp-detail>
                        <sp-textfield
                            id="funding-copy-field"
                            placeholder="Insira o Funding Copy"
                            value={fundingCopyValue}
                            onInput={handleInputChange('fundingCopyValue')}
                            onBlur={() => handleBlur('fundingCopyValue', fundingCopyValue)}
                            valid={valid['fundingCopyValue']}
                        ></sp-textfield>
                    </div>
                )}

            </>
        );
    }