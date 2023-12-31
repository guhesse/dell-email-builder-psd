import React, { useState } from "react";

export default function colorSelector({ onAccentColorChange, onSecondaryColorChange, onTertiaryColorChange }) {
    const cores = {
        white: { r: 254, g: 254, b: 254 },
        quartz: { r: 238, g: 238, b: 238 },
        granite: { r: 200, g: 201, b: 199 },
        gray: { r: 128, g: 128, b: 128 },
        carbon: { r: 68, g: 68, b: 68 },
        black: { r: 0, g: 0, b: 0 },
        sky: { r: 128, g: 199, b: 251 },
        dellBlue: { r: 6, g: 114, b: 203 },
        royal: { r: 12, g: 50, b: 164 },
        glacier: { r: 229, g: 248, b: 255 },
        midnight: { r: 13, g: 33, b: 85 },
        teaGreen: { r: 228, g: 255, b: 214 },
        honeydew: { r: 191, g: 255, b: 183 },
        lime: { r: 159, g: 255, b: 153 },
        basil: { r: 55, g: 204, b: 92 },
        hunter: { r: 36, g: 117, b: 84 },
        deepGreen: { r: 36, g: 71, b: 57 },
        periwinkle: { r: 222, g: 221, b: 255 },
        lavender: { r: 190, g: 175, b: 255 },
        amethyst: { r: 142, g: 92, b: 239 },
        plum: { r: 97, g: 44, b: 176 },
        raisin: { r: 42, g: 20, b: 90 },
        sand: { r: 251, g: 238, b: 206 },
        apricot: { r: 244, g: 187, b: 94 },
        coral: { r: 225, g: 99, b: 63 },
        scarlet: { r: 179, g: 11, b: 55 },
        burgundy: { r: 105, g: 29, b: 63 }
    };

    const coresRGB = {
        white: "rgb(254, 254, 254)",
        quartz: "rgb(238, 238, 238)",
        granite: "rgb(200, 201, 199)",
        gray: "rgb(128, 128, 128)",
        carbon: "rgb(68, 68, 68)",
        black: "rgb(0, 0, 0)",
        sky: "rgb(128, 199, 251)",
        dellBlue: "rgb(6, 114, 203)",
        royal: "rgb(12, 50, 164)",
        glacier: "rgb(229, 248, 255)",
        midnight: "rgb(13, 33, 85)",
        teaGreen: "rgb(228, 255, 214)",
        honeydew: "rgb(191, 255, 183)",
        lime: "rgb(159, 255, 153)",
        basil: "rgb(55, 204, 92)",
        hunter: "rgb(36, 117, 84)",
        deepGreen: "rgb(36, 71, 57)",
        periwinkle: "rgb(222, 221, 255)",
        lavender: "rgb(190, 175, 255)",
        amethyst: "rgb(142, 92, 239)",
        plum: "rgb(97, 44, 176)",
        raisin: "rgb(42, 20, 90)",
        sand: "rgb(251, 238, 206)",
        apricot: "rgb(244, 187, 94)",
        coral: "rgb(225, 99, 63)",
        scarlet: "rgb(179, 11, 55)",
        burgundy: "rgb(105, 29, 63)",
    };

    const [accentSelectedColor, setAccentSelectedColor] = useState("deepGreen");

    const handleAccentColorClick = (color) => {
        setAccentSelectedColor(color);
        const selectedColorInfo = {
            colorName: color,
            rgbValues: cores[color],
        };
        if (onAccentColorChange) {
            onAccentColorChange(selectedColorInfo);
        }
    };

    const [secondarySelectedColor, setSecondarySelectedColor] = useState("lime");

    const handleSecondaryColorClick = (color) => {
        setSecondarySelectedColor(color);
        const selectedColorInfo = {
            colorName: color,
            rgbValues: cores[color],
        };
        if (onSecondaryColorChange) {
            onSecondaryColorChange(selectedColorInfo);
        }
    };

    const [tertiarySelectedColor, setTertiarySelectedColor] = useState("teaGreen");

    const handleTertiaryColorClick = (color) => {
        setTertiarySelectedColor(color);
        const selectedColorInfo = {
            colorName: color,
            rgbValues: cores[color],
        };
        if (onTertiaryColorChange) {
            onTertiaryColorChange(selectedColorInfo);
        }
    };

    return (
        <>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start" }} className="group"><sp-label>Colors</sp-label>
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-start", margin: "0.025em 0" }}>
                    <span style={{ backgroundColor: coresRGB[accentSelectedColor], width: "55px", height: "55px", borderRadius: "30px", border: "white 1px solid" }}></span>
                    <sp-field-group style={{ padding: "10" }}>
                        <sp-detail for="accent-color">ACCENT COLOR</sp-detail>
                        <sp-picker placeholder="Selecione o Accent Color" id="picker-m" size="m" label="Selection type">
                            <sp-menu>
                                {Object.keys(cores).map((cor) => (
                                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }} key={cor} onClick={() => handleAccentColorClick(cor)}>
                                        <sp-menu-item style={{ width: "100%", alignItems: "center" }}>
                                            <span style={{ backgroundColor: coresRGB[cor], width: "15px", height: "15px", borderRadius: "2px", border: "white 1px solid", padding: "0px 10px 0px 0px", }}></span>
                                            {cor.charAt(0).toUpperCase() + cor.slice(1)}
                                        </sp-menu-item>
                                    </div>
                                ))}
                            </sp-menu>
                        </sp-picker>
                    </sp-field-group>
                </div>
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-start", margin: "0.025em 0" }}>
                    <span style={{ backgroundColor: coresRGB[secondarySelectedColor], width: "55px", height: "55px", borderRadius: "30px", border: "white 1px solid" }}></span>
                    <sp-field-group style={{ padding: "10" }}>
                        <sp-detail for="secondary-color">SECONDARY COLOR</sp-detail>
                        <sp-picker placeholder="Selecione o Secondary Color" id="picker-m" size="m" label="Selection type">
                            <sp-menu>
                                {Object.keys(cores).map((cor) => (
                                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }} key={cor} onClick={() => handleSecondaryColorClick(cor)}>
                                        <sp-menu-item style={{ width: "100%", alignItems: "center" }}>
                                            <span style={{ backgroundColor: coresRGB[cor], width: "15px", height: "15px", borderRadius: "2px", border: "white 1px solid", padding: "0px 10px 0px 0px", }}></span>
                                            {cor.charAt(0).toUpperCase() + cor.slice(1)}
                                        </sp-menu-item>
                                    </div>
                                ))}
                            </sp-menu>
                        </sp-picker>
                    </sp-field-group>
                </div>
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-start", margin: "0.025em 0" }}>
                    <span style={{ backgroundColor: coresRGB[tertiarySelectedColor], width: "55px", height: "55px", borderRadius: "30px", border: "white 1px solid" }}></span>
                    <sp-field-group style={{ padding: "10" }}>
                        <sp-detail for="tertiary-color">TERTIARY COLOR</sp-detail>
                        <sp-picker placeholder="Selecione a Tertiary Color" id="picker-m" size="m" label="Selection type">
                            <sp-menu>
                                {Object.keys(cores).map((cor) => (
                                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }} key={cor} onClick={() => handleTertiaryColorClick(cor)}>
                                        <sp-menu-item style={{ width: "100%", alignItems: "center" }}>
                                            <span style={{ backgroundColor: coresRGB[cor], width: "15px", height: "15px", borderRadius: "2px", border: "white 1px solid", padding: "0px 10px 0px 0px", }}></span>
                                            {cor.charAt(0).toUpperCase() + cor.slice(1)}
                                        </sp-menu-item>
                                    </div>
                                ))}
                            </sp-menu>
                        </sp-picker>
                    </sp-field-group>
                </div>
            </div>
        </>
    );

}



