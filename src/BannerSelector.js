import React, { useState, useEffect } from 'react';
import useAppContext from './hook/useAppContext.jsx';

export default function BannerSelector() {

    const { csvValues,
        setCsvValues,
        selectedBanner,
        setSelectedBanner,
        bannerCopyValues,
        setBannerCopyValues } = useAppContext();

    const {
        bannerHeadlineValue,
        bannerCopyValue,
        bannerCtaValue
    } = bannerCopyValues || {};

    const handleBannerClick = (selectedBanner) => {
        setSelectedBanner(selectedBanner);
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

    const [isEditClicked, setIsEditClicked] = useState(false);

    const handleEditClick = () => {
        setIsEditClicked((prevIsEditClicked) => !prevIsEditClicked);
    };


    return (
        <>
            <div style={{ display: "flex", flexWrap: "wrap", flexDirection: "column", alignItems: "flex-start" }} className="group">
                <sp-label>Banner</sp-label>
                <sp-field-group style={{ width: "100vw", display: "flex", flexDirection: "row", gap: "5px" }}>
                    <sp-picker value={selectedBanner} style={{ margin: "0 4px 0 0" }} placeholder="Lado da imagem do Banner" id="picker-m" size="m" label="Selection type">
                        <sp-menu>
                            <sp-menu-item selected={selectedBanner === ""} onClick={() => handleBannerClick("")}>None</sp-menu-item>
                            <sp-menu-item selected={selectedBanner === 'left'} onClick={() => handleBannerClick('left')}>Left</sp-menu-item>
                            <sp-menu-item selected={selectedBanner === 'right'} onClick={() => handleBannerClick('right')}>Right</sp-menu-item>
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

                {selectedBanner !== '' && (
                    <>
                        {isEditClicked && (
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
                                            valid={bannerHeadlineValue !== "" ? valid.bannerHeadlineValue : undefined}
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
                                            valid={bannerCopyValue !== "" ? valid.bannerCopyValue : undefined}
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
                                            valid={bannerCopyValue !== "" ? valid.bannerCopyValue : undefined}
                                            multiline>
                                        </sp-textarea>
                                    </div>
                                </div>
                            </>
                        )}
                    </>
                )}
            </div >
        </>
    );
}
