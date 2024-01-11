import React, { useState } from 'react';

export default function BannerSelector({ handleBannerPositionSelected, onBannerCopyChange }) {

    const [selectedBannerPosition, setSelectedBannerPosition] = useState(null);

    const handleBannerPositionClick = (banner) => {
        setSelectedBannerPosition(banner);
        handleBannerPositionSelected(banner);
    };

    const useFormState = (initialState) => {
        const [formState, setFormState] = useState(initialState);

        const handleInputChange = (key, value) => {
            setFormState({
                ...formState,
                [key]: value,
            });

            onBannerCopyChange({ ...formState, [key]: value });
        };

        return [formState, handleInputChange];
    };

    const [
        {
            bannerHeadlineValue,
            bannerCopyValue,
            bannerCtaValue
        },
        setFormValue,
    ] = useFormState({
        bannerHeadlineValue: "",
        bannerCopyValue: "",
        bannerCtaValue: ""
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
            <div style={{ display: "flex", flexWrap: "wrap", flexDirection: "column", alignItems: "flex-start" }} className="group">
                <sp-label>Banner</sp-label>
                <sp-field-group style={{ display: "flex", flexDirection: "column", margin: "0 4px" }}>
                    <sp-picker style={{ margin: "0 4px" }} placeholder="Lado da imagem do Banner" id="picker-m" size="m" label="Selection type">
                        <sp-menu>
                            <sp-menu-item onClick={() => handleBannerPositionClick(null)}>None</sp-menu-item>
                            <sp-menu-item onClick={() => handleBannerPositionClick('left')}>Left</sp-menu-item>
                            <sp-menu-item onClick={() => handleBannerPositionClick('right')}>Right</sp-menu-item>
                        </sp-menu>
                    </sp-picker>
                </sp-field-group>

                {selectedBannerPosition !== null && (


                    <>
                        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start" }}>
                            <div style={{ display: "flex", flexDirection: "column", margin: "0 4px" }}>
                                <sp-detail>HEADLINE</sp-detail>
                                <sp-textarea
                                    id="banner-hl-field"
                                    placeholder="Insira o Banner Headline"
                                    value={bannerHeadlineValue}
                                    onInput={handleInputChange('bannerHeadlineValue')}
                                    onBlur={() => handleBlur('bannerHeadlineValue')}
                                    valid={valid['bannerHeadlineValue']} multiline></sp-textarea>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", margin: "0 4px" }}>
                                <sp-detail>COPY</sp-detail>
                                <sp-textarea
                                    id="banner-copy-field"
                                    placeholder="Insira o Banner Copy"
                                    value={bannerCopyValue}
                                    onInput={handleInputChange('bannerCopyValue')}
                                    onBlur={() => handleBlur('bannerCopyValue')}
                                    valid={valid['bannerCopyValue']} multiline></sp-textarea>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", margin: "0 4px" }}>
                                <sp-detail>CTA</sp-detail>
                                <sp-textarea
                                    id="banner-cta-field"
                                    placeholder="Insira o CTA"
                                    value={bannerCtaValue}
                                    onInput={handleInputChange('bannerCtaValue')}
                                    onBlur={() => handleBlur('bannerCtaValue')}
                                    valid={valid['bannerCtaValue']} multiline></sp-textarea>
                            </div>
                        </div>
                    </>
                )}
            </div >
        </>
    );
}
