import React, { useState } from 'react';

export default function BannerSelector({ handleBannerPositionSelected, onBannerHeadlineChange, onBannerCopyChange, onBannerCtaChange }) {

    const [selectedBannerPosition, setSelectedBannerPosition] = useState(null);

    const handleBannerPositionClick = (value) => {
        setSelectedBannerPosition(value);
        handleBannerPositionSelected(value);
    };

    const [bannerHeadlineValue, setBannerHeadlineValue] = useState(""); // State to store SL value

    const handleBannerHeadlineChange = (event) => {
        const value = event.target.value;
        setBannerHeadlineValue(value);
        onBannerHeadlineChange({
            bannerHeadlineValue: value
        });
    };

    const [bannerCopyValue, setBannerCopyValue] = useState(""); // State to store SL value

    const handleBannerCopyChange = (event) => {
        const value = event.target.value;
        setBannerCopyValue(value);
        onBannerCopyChange({
            bannerCopyValue: value
        });
    };

    const [bannerCtaValue, setBannerCtaValue] = useState("");

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
                            id="funding-copy-field"
                            placeholder="Insira o Banner Headline"
                            value={bannerHeadlineValue}
                            onInput={handleBannerHeadlineChange}
                        ></sp-textfield>
                    </div>
                    <div>
                        <sp-field-label for="banner-copy-field">Banner Copy:</sp-field-label>
                        <sp-textfield
                            style={{ width: "90vw" }}
                            id="funding-copy-field"
                            placeholder="Insira o Banner Copy"
                            value={bannerCopyValue}
                            onInput={handleBannerCopyChange}
                        ></sp-textfield>
                    </div>
                    <div>
                        <sp-field-label for="banner-copy-field">CTA:</sp-field-label>
                        <sp-textfield
                            style={{ width: "90vw" }}
                            id="funding-copy-field"
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
