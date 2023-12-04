import React, { useState } from 'react';

export default function BannerSelector({ handleBannerPositionSelected, onBannerHeadlineChange, onBannerCopyChange, onBannerCtaChange }) {

    const [selectedBannerPosition, setSelectedBannerPosition] = useState(null);

    const handleBannerPositionClick = (banner) => {
        setSelectedBannerPosition(banner);
        handleBannerPositionSelected(banner);
    };

    const [bannerHeadlineValue, setBannerHeadlineValue] = useState(""); // Estado que armazena o Valor do Headline do Banner
    const [bannerCopyValue, setBannerCopyValue] = useState(""); // Estado que armazena o Valor do Copy do Banner
    const [bannerCtaValue, setBannerCtaValue] = useState(""); // Estado que armazena o Valor do CTA do Banner

    const handleBannerHeadlineChange = (event) => {
        const value = event.target.value;
        setBannerHeadlineValue(value);
        onBannerHeadlineChange({
            bannerHeadlineValue: value
        });
    };

    const handleBannerCopyChange = (event) => {
        const value = event.target.value;
        setBannerCopyValue(value);
        onBannerCopyChange({
            bannerCopyValue: value
        });
    };

    const handleBannerCtaChange = (event) => {
        const value = event.target.value;
        setBannerCtaValue(value);
        onBannerCtaChange({
            bannerCtaValue: value
        });
    };

    return (
        <>
            <div style={{ display: "flex", flexWrap: "wrap", flexDirection:"column", alignItems: "flex-start" }} className="group">
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
                                    onInput={handleBannerHeadlineChange}
                                    {...(bannerHeadlineValue !== "" && { valid: true })} multiline></sp-textarea>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", margin: "0 4px" }}>
                                <sp-detail>COPY</sp-detail>
                                <sp-textarea
                                    id="banner-copy-field"
                                    placeholder="Insira o Banner Copy"
                                    value={bannerCopyValue}
                                    onInput={handleBannerCopyChange}
                                    {...(bannerCopyValue !== "" && { valid: true })} multiline></sp-textarea>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", margin: "0 4px" }}>
                                <sp-detail>CTA</sp-detail>
                                <sp-textarea
                                    id="banner-cta-field"
                                    placeholder="Insira o CTA"
                                    value={bannerCtaValue}
                                    onInput={handleBannerCtaChange}
                                    {...(bannerCtaValue !== "" && { valid: true })} multiline></sp-textarea>
                            </div>
                        </div>
                    </>
                )}
            </div >
        </>
    );
}
