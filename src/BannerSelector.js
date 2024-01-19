import React, { useState, useEffect } from 'react';
import useAppContext from './hook/useAppContext.jsx';

export default function BannerSelector() {

    const { csvValues, setCsvValues, selectedBanner, setSelectedBanner, bannerCopyValues, setBannerCopyValues } = useAppContext();

    const {
        bannerHeadlineValue,
        bannerCopyValue,
        bannerCtaValue
    } = bannerCopyValues || {};


    const handleBannerClick = (selectedBanner) => {
        setSelectedBanner(selectedBanner);;
    };

    const [formState, setFormState] = useState({
        bannerHeadlineValue: csvValues['Badge Text'] || "",
        bannerCopyValue: csvValues['Headline Text'] || "",
        bannerCtaValue: csvValues['SHL'] || "",
    });

    const [tempFormState, setTempFormState] = useState({
        bannerHeadlineValue: "",
        bannerCopyValue: "",
        bannerCtaValue: "",
    });

    const [valid, setValid] = useState({
        bannerHeadlineValue: false,
        bannerCopyValue: false,
        bannerCtaValue: false,
    });

    useEffect(() => {

        // Limpe o estado temporário ao montar o componente
        setTempFormState({
            bannerHeadlineValue: bannerHeadlineValue || "",
            bannerCopyValue: bannerCopyValue || "",
            bannerCtaValue: bannerCtaValue || "",
        });

        // Limpe o estado ao montar o componente
        setFormState({
            bannerHeadlineValue: bannerHeadlineValue || "",
            bannerCopyValue: bannerCopyValue || "",
            bannerCtaValue: bannerCtaValue || "",
        });

    }, [selectedBanner]);

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
        setBannerCopyValues((prevBannerCopyValues) => ({
            ...prevBannerCopyValues,
            [key]: tempFormState[key],
        }));

        // Atualize o estado final com os valores do estado temporário
        setFormState({
            ...formState,
            [key]: tempFormState[key],
        });
    };

    // const [isEditClicked, setIsEditClicked] = useState(false);

    // const handleEditClick = () => {
    //     setIsEditClicked((prevIsEditClicked) => !prevIsEditClicked);
    // };



    return (
        <>
            <div style={{ display: "flex", flexWrap: "wrap", flexDirection: "column", alignItems: "flex-start" }} className="group">
                <sp-label>Banner</sp-label>
                <sp-field-group style={{ display: "flex", flexDirection: "column", margin: "0 4px" }}>
                    <sp-picker style={{ margin: "0 4px" }} placeholder="Lado da imagem do Banner" id="picker-m" size="m" label="Selection type">
                        <sp-menu>
                            <sp-menu-item onClick={() => handleBannerClick("")}>None</sp-menu-item>
                            <sp-menu-item onClick={() => handleBannerClick('left')}>Left</sp-menu-item>
                            <sp-menu-item onClick={() => handleBannerClick('right')}>Right</sp-menu-item>
                        </sp-menu>
                    </sp-picker>
                </sp-field-group>

                {selectedBanner !== null && (


                    <>
                        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start" }}>
                            <div style={{ display: "flex", flexDirection: "column", margin: "0 4px" }}>
                                <sp-detail>HEADLINE</sp-detail>
                                <sp-textarea
                                    id="banner-hl-field"
                                    placeholder="Insira o Banner Headline"
                                    value={tempFormState.bannerHeadlineValue}
                                    onInput={(e) => handleInputChange('bannerHeadlineValue', e.target.value)}
                                    onBlur={() => handleBlur('bannerHeadlineValue')}
                                    valid={valid.bannerHeadlineValue}
                                    multiline>
                                </sp-textarea>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", margin: "0 4px" }}>
                                <sp-detail>COPY</sp-detail>
                                <sp-textarea
                                    id="banner-copy-field"
                                    placeholder="Insira o Banner Copy"
                                    value={tempFormState.bannerCopyValue}
                                    onInput={(e) => handleInputChange('bannerCopyValue', e.target.value)}
                                    onBlur={() => handleBlur('bannerCopyValue')}
                                    valid={valid.bannerCopyValue}
                                    multiline>
                                </sp-textarea>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", margin: "0 4px" }}>
                                <sp-detail>CTA</sp-detail>
                                <sp-textarea
                                    id="banner-cta-field"
                                    placeholder="Insira o CTA"
                                    value={tempFormState.bannerCtaValue}
                                    onInput={(e) => handleInputChange('bannerCtaValue', e.target.value)}
                                    onBlur={() => handleBlur('bannerCtaValue')}
                                    valid={valid.bannerCtaValue}
                                    multiline>
                                </sp-textarea>
                            </div>
                        </div>
                    </>
                )}
            </div >
        </>
    );
}
