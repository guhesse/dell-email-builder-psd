import React, { useState } from "react";
import useAppContext from "./hook/useAppContext.jsx";

export default function colorSelector() {

    const { accentColor, secondaryColor, tertiaryColor, handleAccentColorChange, handleSecondaryColorChange, handleTertiaryColorChange } = useAppContext();

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

    const coresHEX = {
        white: '#FEFEFE',
        quartz: '#EEEEEE',
        granite: '#C8C9C7',
        gray: '#808080',
        carbon: '#444444',
        black: '#000000',
        sky: '#80C7FB',
        dellBlue: '#0672CB',
        royal: '#0C32A4',
        glacier: '#E5F8FF',
        midnight: '#0D2155',
        teaGreen: '#E4FFD6',
        honeydew: '#BFFFb7',
        lime: '#9FFF99',
        basil: '#37CC5C',
        hunter: '#247554',
        deepGreen: '#244739',
        periwinkle: '#DEDDFF',
        lavender: '#BEAFFf',
        amethyst: '#8E5CEF',
        plum: '#612CB0',
        raisin: '#2A145A',
        sand: '#FBEECE',
        apricot: '#F4BB5E',
        coral: '#E1633F',
        scarlet: '#B30B37',
        burgundy: '#691D3F',
    };

    const [accentSelectedColor, setAccentSelectedColor] = useState(accentColor);
    const [secondarySelectedColor, setSecondarySelectedColor] = useState(secondaryColor);
    const [tertiarySelectedColor, setTertiarySelectedColor] = useState(tertiaryColor);

    const handleAccentColorClick = (color) => {
        setAccentSelectedColor(color);
        handleAccentColorChange(color);
    };

    const handleSecondaryColorClick = (color) => {
        setSecondarySelectedColor(color);
        handleSecondaryColorChange(color);
    };

    const handleTertiaryColorClick = (color) => {
        setTertiarySelectedColor(color);
        handleTertiaryColorChange(color);
    };


    return (
        <>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start" }} className="group"><sp-label>Colors</sp-label>
                <sp-overlay style={{ position: "absolute", top: "5%", right: "5%" }}>
                    <div className="sp-tab-page" slot="trigger" id="sp-spectrum-widgets-tab-page">
                        <sp-action-button quiet label="Edit">
                            <div slot="icon" className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 18 18" width="18">
                                    <rect id="Canvas" fill="#ff13dc" opacity="0" width="18" height="18" /><path className="fill" d="M10.075,6A1.075,1.075,0,1,1,9,4.925H9A1.075,1.075,0,0,1,10.075,6Zm.09173,6H10V8.2A.20005.20005,0,0,0,9.8,8H7.83324S7.25,8.01612,7.25,8.5c0,.48365.58325.5.58325.5H8v3H7.83325s-.58325.01612-.58325.5c0,.48365.58325.5.58325.5h2.3335s.58325-.01635.58325-.5C10.75,12.01612,10.16673,12,10.16673,12ZM9,.5A8.5,8.5,0,1,0,17.5,9,8.5,8.5,0,0,0,9,.5ZM9,15.6748A6.67481,6.67481,0,1,1,15.67484,9,6.67481,6.67481,0,0,1,9,15.6748Z" />
                                </svg>
                            </div>
                        </sp-action-button>
                    </div>
                    <sp-popover
                        offset="5"
                        placement="right"
                        alignment="center"
                        appearance="none"
                        slot="hover"
                        style={{ borderRadius: "5px" }}
                    >
                        <sp-body style={{ padding: "5px 8px", width: "150px", fontSize: "12px", margin: 0 }}>
                            <h4>Accent Color</h4>
                            <p style={{ fontSize: 11, lineHeight: 1, margin: 0, padding: 0 }}>
                                They are used in: <br />
                                <span style={{ fontStyle: "italic" }}> Background </span>
                            </p>
                            <h4 style={{ marginTop: 2 }}>Secondary Color</h4>
                            <p style={{ fontSize: 11, lineHeight: 1, margin: 0, padding: 0 }}>
                                They are used in: <br />
                                <span style={{ fontStyle: "italic" }}>  Skinny Banner, Badge, Plugin, Product Pattern</span>
                            </p>
                            <h4 style={{ marginTop: 2 }}>Tertiary Color</h4>
                            <p style={{ fontSize: 11, lineHeight: 1, margin: 0, padding: 0 }}>
                                They are used in: <br />
                                <span style={{ fontStyle: "italic" }}> Hero CTA </span>
                            </p>
                        </sp-body>
                    </sp-popover>
                </sp-overlay>
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-start", margin: "0.025em 0" }}>
                    <span style={{ backgroundColor: coresRGB[accentSelectedColor], width: "55px", height: "55px", borderRadius: "30px", border: "white 1px solid" }}></span>
                    <sp-field-group style={{ padding: "10" }}>
                        <sp-detail for="accent-color">ACCENT COLOR</sp-detail>
                        <sp-picker placeholder="Select accent color" id="picker-m" size="m" label="Selection type">
                            <sp-menu>
                                {Object.keys(cores).map((cor) => (
                                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }} key={cor} onClick={() => handleAccentColorClick(cor)}>
                                        <sp-menu-item style={{ width: "100%", alignItems: "center", display: "flex", justifyContent: "space-between" }}>
                                            <div style={{ display: "flex", alignItems: "center" }}>
                                                <span style={{ backgroundColor: coresRGB[cor], width: "15px", height: "15px", borderRadius: "2px", border: "white 1px solid", marginRight: "5px" }}></span>
                                                {cor.charAt(0).toUpperCase() + cor.slice(1)}
                                                <span style={{ color: "gray", marginLeft: "10px" }}>{coresHEX[cor]}</span>
                                            </div>
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
                        <sp-picker placeholder="Select secondary color" id="picker-m" size="m" label="Selection type">
                            <sp-menu>
                                {Object.keys(cores).map((cor) => (
                                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }} key={cor} onClick={() => handleSecondaryColorClick(cor)}>
                                        <sp-menu-item style={{ width: "100%", alignItems: "center", display: "flex", justifyContent: "space-between" }}>
                                            <div style={{ display: "flex", alignItems: "center" }}>
                                                <span style={{ backgroundColor: coresRGB[cor], width: "15px", height: "15px", borderRadius: "2px", border: "white 1px solid", marginRight: "5px" }}></span>
                                                {cor.charAt(0).toUpperCase() + cor.slice(1)}
                                                <span style={{ color: "gray", marginLeft: "10px" }}>{coresHEX[cor]}</span>
                                            </div>
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
                        <sp-picker placeholder="Select tertiary color" id="picker-m" size="m" label="Selection type">
                            <sp-menu>
                                {Object.keys(cores).map((cor) => (
                                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }} key={cor} onClick={() => handleTertiaryColorClick(cor)}>
                                        <sp-menu-item style={{ width: "100%", alignItems: "center", display: "flex", justifyContent: "space-between" }}>
                                            <div style={{ display: "flex", alignItems: "center" }}>
                                                <span style={{ backgroundColor: coresRGB[cor], width: "15px", height: "15px", borderRadius: "2px", border: "white 1px solid", marginRight: "5px" }}></span>
                                                {cor.charAt(0).toUpperCase() + cor.slice(1)}
                                                <span style={{ color: "gray", marginLeft: "10px" }}>{coresHEX[cor]}</span>
                                            </div>
                                        </sp-menu-item>
                                    </div>
                                ))}
                            </sp-menu>
                        </sp-picker>
                    </sp-field-group>
                </div>
            </div >
        </>
    );

}



