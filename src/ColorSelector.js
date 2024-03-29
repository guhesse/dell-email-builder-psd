import React, { useState, useEffect } from "react";
import useAppContext from "./hook/useAppContext.jsx";

export default function colorSelector() {

    const { accentColor, secondaryColor, tertiaryColor, handleAccentColorChange, handleSecondaryColorChange, handleTertiaryColorChange } = useAppContext();

    const cores = {
        white: { r: 254, g: 254, b: 254 },
        quartz: { r: 238, g: 238, b: 238 },
        granite: { r: 200, g: 201, b: 199 },
        gray: { r: 128, g: 128, b: 128 },
        steel: { r: 110, g: 110, b: 110 },
        carbon: { r: 68, g: 68, b: 68 },
        black: { r: 0, g: 0, b: 0 },
        glacier: { r: 229, g: 248, b: 255 },
        mist: { r: 203, g: 238, b: 255 },
        pool: { r: 159, g: 221, b: 255 },
        sky: { r: 128, g: 199, b: 251 },
        cornflower: { r: 88, g: 165, b: 230 },
        dellBlue: { r: 6, g: 114, b: 203 },
        coblat: { r: 29, g: 86, b: 192 },
        royal: { r: 12, g: 50, b: 164 },
        navy: { r: 0, g: 34, b: 127 },
        midnight: { r: 13, g: 33, b: 85 },
        teaGreen: { r: 228, g: 255, b: 214 },
        honeydew: { r: 191, g: 255, b: 183 },
        lime: { r: 159, g: 255, b: 153 },
        mint: { r: 123, g: 252, b: 118 },
        grass: { r: 78, g: 231, b: 96 },
        basil: { r: 55, g: 204, b: 92 },
        kelly: { r: 52, g: 158, b: 95 },
        hunter: { r: 36, g: 117, b: 84 },
        forest: { r: 27, g: 87, b: 68 },
        deepGreen: { r: 36, g: 71, b: 57 },
        periwinkle: { r: 222, g: 221, b: 255 },
        lilac: { r: 200, g: 192, b: 255 },
        lavender: { r: 190, g: 175, b: 255 },
        wisteria: { r: 170, g: 150, b: 250 },
        iris: { r: 159, g: 120, b: 252 },
        amethyst: { r: 142, g: 92, b: 239 },
        violet: { r: 116, g: 61, b: 212 },
        plum: { r: 97, g: 44, b: 176 },
        eggplant: { r: 80, g: 10, b: 150 },
        raisin: { r: 42, g: 20, b: 90 },
        sand: { r: 251, g: 238, b: 206 },
        marigold: { r: 249, g: 214, b: 116 },
        apricot: { r: 244, g: 187, b: 94 },
        orange: { r: 225, g: 127, b: 63 },
        coral: { r: 225, g: 99, b: 63 },
        cherry: { r: 210, g: 51, b: 61 },
        scarlet: { r: 179, g: 11, b: 55 },
        ruby: { r: 133, g: 19, b: 63 },
        burgundy: { r: 105, g: 29, b: 63 },
        wine: { r: 74, g: 25, b: 58 }
    };

    const coresRGB = {
        white: "rgb(254, 254, 254)",
        quartz: "rgb(238, 238, 238)",
        granite: "rgb(200, 201, 199)",
        gray: "rgb(128, 128, 128)",
        steel: "rgb(110, 110, 110)",
        carbon: "rgb(68, 68, 68)",
        black: "rgb(0, 0, 0)",
        glacier: "rgb(229, 248, 255)",
        mist: "rgb(203, 238, 255)",
        pool: "rgb(159, 221, 255)",
        sky: "rgb(128, 199, 251)",
        cornflower: "rgb(88, 165, 230)",
        dellBlue: "rgb(6, 114, 203)",
        coblat: "rgb(29, 86, 192)",
        royal: "rgb(12, 50, 164)",
        navy: "rgb(0, 34, 127)",
        midnight: "rgb(13, 33, 85)",
        teaGreen: "rgb(228, 255, 214)",
        honeydew: "rgb(191, 255, 183)",
        lime: "rgb(159, 255, 153)",
        mint: "rgb(123, 252, 118)",
        grass: "rgb(78, 231, 96)",
        basil: "rgb(55, 204, 92)",
        kelly: "rgb(52, 158, 95)",
        hunter: "rgb(36, 117, 84)",
        forest: "rgb(27, 87, 68)",
        deepGreen: "rgb(36, 71, 57)",
        periwinkle: "rgb(222, 221, 255)",
        lilac: "rgb(200, 192, 255)",
        lavender: "rgb(190, 175, 255)",
        wisteria: "rgb(170, 150, 250)",
        iris: "rgb(159, 120, 252)",
        amethyst: "rgb(142, 92, 239)",
        violet: "rgb(116, 61, 212)",
        plum: "rgb(97, 44, 176)",
        eggplant: "rgb(80, 10, 150)",
        raisin: "rgb(42, 20, 90)",
        sand: "rgb(251, 238, 206)",
        marigold: "rgb(249, 214, 116)",
        apricot: "rgb(244, 187, 94)",
        orange: "rgb(225, 127, 63)",
        coral: "rgb(225, 99, 63)",
        cherry: "rgb(210, 51, 61)",
        scarlet: "rgb(179, 11, 55)",
        ruby: "rgb(133, 19, 63)",
        burgundy: "rgb(105, 29, 63)",
        wine: "rgb(74, 25, 58)",
    };


    const coresHEX = {
        white: '#FEFEFE',
        quartz: '#EEEEEE',
        granite: '#C8C9C7',
        gray: '#808080',
        steel: '#6e6e6e',
        carbon: '#444444',
        black: '#000000',
        glacier: '#E5F8FF',
        mist: '#CBEEFF',
        pool: '#9FDDFF',
        sky: '#80C7FB',
        cornflower: '#58a5e6',
        dellBlue: '#0672CB',
        coblat: '#1d56c0',
        royal: '#0C32A4',
        navy: '#00227F',
        midnight: '#0D2155',
        teaGreen: '#E4FFD6',
        honeydew: '#BFFFb7',
        lime: '#9FFF99',
        mint: '#7BFC76',
        grass: '#4EE760',
        basil: '#37CC5C',
        kelly: '#349E5F',
        hunter: '#247554',
        forest: '#1B5744',
        deepGreen: '#244739',
        periwinkle: '#DEDDFF',
        lilac: '#C8C0FF',
        lavender: '#BEAFFf',
        wisteria: '#AA96FA',
        iris: '#9F78FC',
        amethyst: '#8E5CEF',
        violet: '#743DD4',
        plum: '#612CB0',
        eggplant: '#500A96',
        raisin: '#2A145A',
        sand: '#FBEECE',
        marigold: '#F9D674',
        apricot: '#F4BB5E',
        orange: '#E17F3F',
        coral: '#E1633F',
        cherry: '#D2333D',
        scarlet: '#B30B37',
        ruby: '#85133F',
        burgundy: '#691D3F',
        wine: '#4A193A',
    };

    const [accentSelectedColor, setAccentSelectedColor] = useState(accentColor);
    const [secondarySelectedColor, setSecondarySelectedColor] = useState(secondaryColor);
    const [tertiarySelectedColor, setTertiarySelectedColor] = useState(tertiaryColor);

    useEffect(() => {
        setAccentSelectedColor(accentColor);
    }, [accentColor]);

    useEffect(() => {
        setSecondarySelectedColor(secondaryColor);
    }, [secondaryColor]);

    useEffect(() => {
        setTertiarySelectedColor(tertiaryColor);
    }, [tertiaryColor]);


    const handleAccentColorClick = (cor) => {
        setAccentSelectedColor(cor);
        handleAccentColorChange(cor);
    };

    const handleSecondaryColorClick = (cor) => {
        setSecondarySelectedColor(cor);
        handleSecondaryColorChange(cor);
    };

    const handleTertiaryColorClick = (cor) => {
        setTertiarySelectedColor(cor);
        handleTertiaryColorChange(cor);
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
                                    <div
                                        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
                                        key={cor} 
                                        onClick={() => handleAccentColorClick(cor)}>
                                        <sp-menu-item
                                            selected={accentSelectedColor === cor}
                                            style={{ width: "100%", alignItems: "center", display: "flex", justifyContent: "space-between" }}>
                                            <div
                                                style={{ display: "flex", alignItems: "center" }}>
                                                <span
                                                    style={{ backgroundColor: coresRGB[cor], width: "15px", height: "15px", borderRadius: "2px", border: "white 1px solid", marginRight: "5px" }}></span>
                                                {cor.charAt(0).toUpperCase() + cor.slice(1) + ' '}
                                                <span
                                                    style={{ color: "gray", marginLeft: "10px" }}>{coresHEX[cor]}</span>
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
                                        <sp-menu-item selected={secondarySelectedColor === cor} style={{ width: "100%", alignItems: "center", display: "flex", justifyContent: "space-between" }}>
                                            <div style={{ display: "flex", alignItems: "center" }}>
                                                <span style={{ backgroundColor: coresRGB[cor], width: "15px", height: "15px", borderRadius: "2px", border: "white 1px solid", marginRight: "5px" }}></span>
                                                {cor.charAt(0).toUpperCase() + cor.slice(1) + ' '}
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
                                        <sp-menu-item selected={tertiarySelectedColor === cor} style={{ width: "100%", alignItems: "center", display: "flex", justifyContent: "space-between" }}>
                                            <div style={{ display: "flex", alignItems: "center" }}>
                                                <span style={{ backgroundColor: coresRGB[cor], width: "15px", height: "15px", borderRadius: "2px", border: "white 1px solid", marginRight: "5px" }}></span>
                                                {cor.charAt(0).toUpperCase() + cor.slice(1) + ' '}
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



