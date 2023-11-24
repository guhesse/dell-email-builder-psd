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
            <sp-field-label for="fpo-value-field">Banner:</sp-field-label>
            <sp-field-group style={{ width: "100vw", display: "flex", flexDirection: "row", gap: "5px" }}>
                <sp-picker placeholder="Lado da imagem do Banner" style={{ width: "45vw", padding: "0" }} id="picker-m" size="m" label="Selection type">
                    <sp-menu>
                        <sp-menu-item onClick={() => handleBannerPositionClick(null)}>None</sp-menu-item>
                        <sp-menu-item onClick={() => handleBannerPositionClick('left')}>Left</sp-menu-item>
                        <sp-menu-item onClick={() => handleBannerPositionClick('right')}>Right</sp-menu-item>
                    </sp-menu>
                </sp-picker>
            </sp-field-group>

            {selectedBannerPosition !== null && (
                <>
                    <div>
                        <sp-field-label for="banner-headline-field">Banner Headline:</sp-field-label>
                        <sp-textfield
                            style={{ width: "90vw" }}
                            id="banner-hl-field"
                            placeholder="Insira o Banner Headline"
                            value={bannerHeadlineValue}
                            onInput={handleBannerHeadlineChange}
                        ></sp-textfield>
                    </div>
                    <div>
                        <sp-field-label for="banner-copy-field">Banner Copy:</sp-field-label>
                        <sp-textfield
                            style={{ width: "90vw" }}
                            id="banner-copy-field"
                            placeholder="Insira o Banner Copy"
                            value={bannerCopyValue}
                            onInput={handleBannerCopyChange}
                        ></sp-textfield>
                    </div>
                    <div>
                        <sp-field-label for="banner-copy-field">CTA:</sp-field-label>
                        <sp-textfield
                            style={{ width: "90vw" }}
                            id="banner-cta-field"
                            placeholder="Insira o CTA"
                            value={bannerCtaValue}
                            onInput={handleBannerCtaChange}
                        ></sp-textfield>
                    </div>
                </>
            )}
        </>
    );
}
