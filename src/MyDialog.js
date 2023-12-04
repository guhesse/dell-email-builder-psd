import React, { useState } from 'react';


export default function MyDialog() {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');

    const handleHeaderClick = () => {
        setIsDialogOpen(!isDialogOpen);
    };

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
        setIsDialogOpen(false);
        // Execute ações relacionadas à seleção da opção, se necessário
    };

    return (
        <div>
            <header>
                <h1>Seu Cabeçalho</h1>
                <sp-button onClick={handleHeaderClick}>Abrir Diálogo</sp-button>
            </header>

            <sp-overlay>
                <sp-dialog size="large" open={isDialogOpen}>
                    <sp-picker slot="header" id="picker-m" size="m" label="Selection type" placeholder="Selecione o header">
                        <sp-menu>
                            <sp-menu-item onClick={() => handleOptionSelect('csb')}>CSB & SB</sp-menu-item>
                            <sp-menu-item onClick={() => handleOptionSelect('outlet')}>CSB Outlet</sp-menu-item>
                            <sp-menu-divider></sp-menu-divider>
                            <sp-menu-item onClick={() => handleOptionSelect('sb-rd')}>SB RD</sp-menu-item>
                            <sp-menu-item onClick={() => handleOptionSelect('sb-gdo')}>SB GDO</sp-menu-item>
                            <sp-menu-divider></sp-menu-divider>
                            <sp-menu-item onClick={() => handleOptionSelect('alienware')}>Alienware</sp-menu-item>
                        </sp-menu>
                    </sp-picker>
                    <sp-button slot="confirm" variant="primary" onClick={() => setIsDialogOpen(false)}>Fechar</sp-button>
                </sp-dialog>
            </sp-overlay>

            <div>
                <p>Opção selecionada: {selectedOption}</p>
            </div>
        </div>
    );
}

// Events recognized as notifiers are not re-playable in most of the cases. There is high chance that generated code won't work.

const { executeAsModal } = require("photoshop").core;
const { batchPlay } = require("photoshop").action;

async function actionCommands() {
    const result = await batchPlay(
        [
            {
                _obj: "set",
                _target: [
                    {
                        _ref: "textLayer",
                        _enum: "ordinal",
                        _value: "targetEnum"
                    }
                ],
                to: {
                    _obj: "textLayer",
                    textKey: "IN-LINE PROMO\rProduct name\r$XXXXX\rLorem ipsum dolor sit amet consect etur adipiscing elit. Idem iste inquam de volup tate quid sentit.",
                    warp: {
                        _obj: "warp",
                        warpStyle: {
                            _enum: "warpStyle",
                            _value: "warpNone"
                        },
                        warpValue: 0,
                        warpPerspective: 0,
                        warpPerspectiveOther: 0,
                        warpRotate: {
                            _enum: "orientation",
                            _value: "horizontal"
                        }
                    },
                    textGridding: {
                        _enum: "textGridding",
                        _value: "none"
                    },
                    orientation: {
                        _enum: "orientation",
                        _value: "horizontal"
                    },
                    antiAlias: {
                        _enum: "antiAliasType",
                        _value: "antiAliasSharp"
                    },
                    bounds: {
                        _obj: "bounds",
                        left: {
                            _unit: "pointsUnit",
                            _value: 0
                        },
                        top: {
                            _unit: "pointsUnit",
                            _value: -1.6537532806396484
                        },
                        right: {
                            _unit: "pointsUnit",
                            _value: 162.367919921875
                        },
                        bottom: {
                            _unit: "pointsUnit",
                            _value: 109.38382720947266
                        }
                    },
                    boundingBox: {
                        _obj: "boundingBox",
                        left: {
                            _unit: "pointsUnit",
                            _value: 0
                        },
                        top: {
                            _unit: "pointsUnit",
                            _value: -0.6569061279296875
                        },
                        right: {
                            _unit: "pointsUnit",
                            _value: 157.59352111816406
                        },
                        bottom: {
                            _unit: "pointsUnit",
                            _value: 88.73492431640625
                        }
                    },
                    textShape: [
                        {
                            _obj: "textShape",
                            char: {
                                _enum: "char",
                                _value: "box"
                            },
                            orientation: {
                                _enum: "orientation",
                                _value: "horizontal"
                            },
                            transform: {
                                _obj: "transform",
                                xx: 1,
                                xy: 0,
                                yx: 0,
                                yy: 1,
                                tx: 0,
                                ty: 0
                            },
                            rowCount: 1,
                            columnCount: 1,
                            rowMajorOrder: true,
                            rowGutter: {
                                _unit: "pointsUnit",
                                _value: 0
                            },
                            columnGutter: {
                                _unit: "pointsUnit",
                                _value: 0
                            },
                            spacing: {
                                _unit: "pointsUnit",
                                _value: 0
                            },
                            frameBaselineAlignment: {
                                _enum: "frameBaselineAlignment",
                                _value: "alignByAscent"
                            },
                            firstBaselineMinimum: {
                                _unit: "pointsUnit",
                                _value: 0
                            },
                            bounds: {
                                _obj: "rectangle",
                                top: 0,
                                left: 0,
                                bottom: 109.38382720947266,
                                right: 162.367919921875
                            }
                        }
                    ],
                    textStyleRange: [
                        {
                            _obj: "textStyleRange",
                            from: 0,
                            to: 14,
                            textStyle: {
                                _obj: "textStyle",
                                styleSheetHasParent: true,
                                fontPostScriptName: "Arial-BoldMT",
                                fontName: "Arial",
                                fontStyleName: "Bold",
                                fontScript: 0,
                                fontTechnology: 1,
                                fontAvailable: true,
                                size: {
                                    _unit: "pointsUnit",
                                    _value: 11.652549743652344
                                },
                                impliedFontSize: {
                                    _unit: "pointsUnit",
                                    _value: 14.002959324316649
                                },
                                horizontalScale: 100,
                                verticalScale: 100,
                                syntheticBold: false,
                                syntheticItalic: false,
                                autoLeading: true,
                                tracking: 30,
                                baselineShift: {
                                    _unit: "pointsUnit",
                                    _value: 0
                                },
                                impliedBaselineShift: {
                                    _unit: "pointsUnit",
                                    _value: 0
                                },
                                characterRotation: 0,
                                autoKern: {
                                    _enum: "autoKern",
                                    _value: "manual"
                                },
                                fontCaps: {
                                    _enum: "fontCaps",
                                    _value: "allCaps"
                                },
                                digitSet: {
                                    _enum: "digitSet",
                                    _value: "defaultDigits"
                                },
                                kashidas: {
                                    _enum: "kashidas",
                                    _value: "kashidaDefault"
                                },
                                diacVPos: {
                                    _enum: "diacVPos",
                                    _value: "diacVPosOpenType"
                                },
                                diacXOffset: {
                                    _unit: "pointsUnit",
                                    _value: 0
                                },
                                diacYOffset: {
                                    _unit: "pointsUnit",
                                    _value: 0
                                },
                                markYDistFromBaseline: {
                                    _unit: "pointsUnit",
                                    _value: 100
                                },
                                baseline: {
                                    _enum: "baseline",
                                    _value: "normal"
                                },
                                strikethrough: {
                                    _enum: "strikethrough",
                                    _value: "strikethroughOff"
                                },
                                underline: {
                                    _enum: "underline",
                                    _value: "underlineOff"
                                },
                                ligature: true,
                                altligature: false,
                                contextualLigatures: true,
                                alternateLigatures: false,
                                oldStyle: false,
                                fractions: false,
                                ordinals: false,
                                swash: false,
                                titling: false,
                                connectionForms: false,
                                stylisticAlternates: false,
                                ornaments: false,
                                figureStyle: {
                                    _enum: "figureStyle",
                                    _value: "normal"
                                },
                                baselineDirection: {
                                    _enum: "baselineDirection",
                                    _value: "withStream"
                                },
                                textLanguage: {
                                    _enum: "textLanguage",
                                    _value: "ukenglishLanguage"
                                },
                                color: {
                                    _obj: "RGBColor",
                                    red: 68.00085470080376,
                                    grain: 68.00085470080376,
                                    blue: 68.00085470080376
                                },
                                strokeColor: {
                                    _obj: "RGBColor",
                                    red: 68.89845013618469,
                                    grain: 68.98769974708557,
                                    blue: 69.34469819068909
                                },
                                baseParentStyle: {
                                    _obj: "textStyle",
                                    fontPostScriptName: "MyriadPro-Regular",
                                    fontName: "Myriad Pro",
                                    fontStyleName: "Regular",
                                    fontScript: 0,
                                    fontTechnology: 0,
                                    fontAvailable: true,
                                    size: {
                                        _unit: "pointsUnit",
                                        _value: 12
                                    },
                                    impliedFontSize: {
                                        _unit: "pointsUnit",
                                        _value: 14.420492989814193
                                    },
                                    horizontalScale: 100,
                                    verticalScale: 100,
                                    syntheticBold: false,
                                    syntheticItalic: false,
                                    autoLeading: true,
                                    tracking: 0,
                                    baselineShift: {
                                        _unit: "pointsUnit",
                                        _value: 0
                                    },
                                    impliedBaselineShift: {
                                        _unit: "pointsUnit",
                                        _value: 0
                                    },
                                    characterRotation: 0,
                                    autoKern: {
                                        _enum: "autoKern",
                                        _value: "metricsKern"
                                    },
                                    fontCaps: {
                                        _enum: "fontCaps",
                                        _value: "normal"
                                    },
                                    digitSet: {
                                        _enum: "digitSet",
                                        _value: "defaultDigits"
                                    },
                                    dirOverride: {
                                        _enum: "dirOverride",
                                        _value: "dirOverrideDefault"
                                    },
                                    kashidas: {
                                        _enum: "kashidas",
                                        _value: "kashidaDefault"
                                    },
                                    diacVPos: {
                                        _enum: "diacVPos",
                                        _value: "diacVPosOpenType"
                                    },
                                    diacXOffset: {
                                        _unit: "pointsUnit",
                                        _value: 0
                                    },
                                    diacYOffset: {
                                        _unit: "pointsUnit",
                                        _value: 0
                                    },
                                    markYDistFromBaseline: {
                                        _unit: "pointsUnit",
                                        _value: 100
                                    },
                                    baseline: {
                                        _enum: "baseline",
                                        _value: "normal"
                                    },
                                    otbaseline: {
                                        _enum: "otbaseline",
                                        _value: "normal"
                                    },
                                    strikethrough: {
                                        _enum: "strikethrough",
                                        _value: "strikethroughOff"
                                    },
                                    underline: {
                                        _enum: "underline",
                                        _value: "underlineOff"
                                    },
                                    underlineOffset: {
                                        _unit: "pointsUnit",
                                        _value: 0
                                    },
                                    ligature: true,
                                    altligature: false,
                                    contextualLigatures: false,
                                    alternateLigatures: false,
                                    oldStyle: false,
                                    fractions: false,
                                    ordinals: false,
                                    swash: false,
                                    titling: false,
                                    connectionForms: false,
                                    stylisticAlternates: false,
                                    stylisticSets: 0,
                                    ornaments: false,
                                    justificationAlternates: false,
                                    figureStyle: {
                                        _enum: "figureStyle",
                                        _value: "normal"
                                    },
                                    proportionalMetrics: false,
                                    kana: false,
                                    italics: false,
                                    ruby: false,
                                    baselineDirection: {
                                        _enum: "baselineDirection",
                                        _value: "rotated"
                                    },
                                    textLanguage: {
                                        _enum: "textLanguage",
                                        _value: "englishLanguage"
                                    },
                                    japaneseAlternate: {
                                        _enum: "japaneseAlternate",
                                        _value: "defaultForm"
                                    },
                                    mojiZume: 0,
                                    gridAlignment: {
                                        _enum: "gridAlignment",
                                        _value: "roman"
                                    },
                                    enableWariChu: false,
                                    wariChuCount: 2,
                                    wariChuLineGap: 0,
                                    wariChuScale: 0.5,
                                    wariChuWidow: 2,
                                    wariChuOrphan: 2,
                                    wariChuJustification: {
                                        _enum: "wariChuJustification",
                                        _value: "wariChuAutoJustify"
                                    },
                                    tcyUpDown: 0,
                                    tcyLeftRight: 0,
                                    leftAki: -1,
                                    rightAki: -1,
                                    jiDori: 0,
                                    noBreak: false,
                                    color: {
                                        _obj: "RGBColor",
                                        red: 0,
                                        grain: 0,
                                        blue: 0
                                    },
                                    strokeColor: {
                                        _obj: "RGBColor",
                                        red: 0,
                                        grain: 0,
                                        blue: 0
                                    },
                                    fill: true,
                                    stroke: false,
                                    fillFirst: true,
                                    fillOverPrint: false,
                                    strokeOverPrint: false,
                                    lineCap: {
                                        _enum: "lineCap",
                                        _value: "buttCap"
                                    },
                                    lineJoin: {
                                        _enum: "lineJoin",
                                        _value: "miterJoin"
                                    },
                                    lineWidth: {
                                        _unit: "pointsUnit",
                                        _value: 1
                                    },
                                    miterLimit: {
                                        _unit: "pointsUnit",
                                        _value: 4
                                    },
                                    lineDashoffset: 0
                                }
                            }
                        },
                        {
                            _obj: "textStyleRange",
                            from: 14,
                            to: 27,
                            textStyle: {
                                _obj: "textStyle",
                                styleSheetHasParent: true,
                                fontPostScriptName: "Arial-BoldMT",
                                fontName: "Arial",
                                fontStyleName: "Bold",
                                fontScript: 0,
                                fontTechnology: 1,
                                fontAvailable: true,
                                size: {
                                    _unit: "pointsUnit",
                                    _value: 13.31719970703125
                                },
                                impliedFontSize: {
                                    _unit: "pointsUnit",
                                    _value: 16.003382084933314
                                },
                                horizontalScale: 100,
                                verticalScale: 100,
                                syntheticBold: false,
                                syntheticItalic: false,
                                autoLeading: true,
                                tracking: 30,
                                baselineShift: {
                                    _unit: "pointsUnit",
                                    _value: -3.3285999298095703
                                },
                                impliedBaselineShift: {
                                    _unit: "pointsUnit",
                                    _value: -4.000004329476243
                                },
                                characterRotation: 0,
                                autoKern: {
                                    _enum: "autoKern",
                                    _value: "manual"
                                },
                                fontCaps: {
                                    _enum: "fontCaps",
                                    _value: "normal"
                                },
                                digitSet: {
                                    _enum: "digitSet",
                                    _value: "defaultDigits"
                                },
                                kashidas: {
                                    _enum: "kashidas",
                                    _value: "kashidaDefault"
                                },
                                diacVPos: {
                                    _enum: "diacVPos",
                                    _value: "diacVPosOpenType"
                                },
                                diacXOffset: {
                                    _unit: "pointsUnit",
                                    _value: 0
                                },
                                diacYOffset: {
                                    _unit: "pointsUnit",
                                    _value: 0
                                },
                                markYDistFromBaseline: {
                                    _unit: "pointsUnit",
                                    _value: 100
                                },
                                baseline: {
                                    _enum: "baseline",
                                    _value: "normal"
                                },
                                strikethrough: {
                                    _enum: "strikethrough",
                                    _value: "strikethroughOff"
                                },
                                underline: {
                                    _enum: "underline",
                                    _value: "underlineOff"
                                },
                                ligature: true,
                                altligature: false,
                                contextualLigatures: true,
                                alternateLigatures: false,
                                oldStyle: false,
                                fractions: false,
                                ordinals: false,
                                swash: false,
                                titling: false,
                                connectionForms: false,
                                stylisticAlternates: false,
                                ornaments: false,
                                figureStyle: {
                                    _enum: "figureStyle",
                                    _value: "normal"
                                },
                                baselineDirection: {
                                    _enum: "baselineDirection",
                                    _value: "withStream"
                                },
                                textLanguage: {
                                    _enum: "textLanguage",
                                    _value: "ukenglishLanguage"
                                },
                                color: {
                                    _obj: "RGBColor",
                                    red: 68.00085470080376,
                                    grain: 68.00085470080376,
                                    blue: 68.00085470080376
                                },
                                strokeColor: {
                                    _obj: "RGBColor",
                                    red: 68.89845013618469,
                                    grain: 68.98769974708557,
                                    blue: 69.34469819068909
                                }
                            }
                        },
                        {
                            _obj: "textStyleRange",
                            from: 27,
                            to: 28,
                            textStyle: {
                                _obj: "textStyle",
                                styleSheetHasParent: true,
                                fontPostScriptName: "Arial-BoldMT",
                                fontName: "Arial",
                                fontStyleName: "Bold",
                                fontScript: 0,
                                fontTechnology: 1,
                                fontAvailable: true,
                                size: {
                                    _unit: "pointsUnit",
                                    _value: 20.803730010986328
                                },
                                impliedFontSize: {
                                    _unit: "pointsUnit",
                                    _value: 25.00000356545129
                                },
                                horizontalScale: 100,
                                verticalScale: 100,
                                syntheticBold: false,
                                syntheticItalic: false,
                                autoLeading: true,
                                tracking: 0,
                                baselineShift: {
                                    _unit: "pointsUnit",
                                    _value: 2.4964499473571777
                                },
                                impliedBaselineShift: {
                                    _unit: "pointsUnit",
                                    _value: 3.0000032471071827
                                },
                                characterRotation: 0,
                                autoKern: {
                                    _enum: "autoKern",
                                    _value: "manual"
                                },
                                fontCaps: {
                                    _enum: "fontCaps",
                                    _value: "normal"
                                },
                                baseline: {
                                    _enum: "baseline",
                                    _value: "superScript"
                                },
                                otbaseline: {
                                    _enum: "otbaseline",
                                    _value: "normal"
                                },
                                strikethrough: {
                                    _enum: "strikethrough",
                                    _value: "strikethroughOff"
                                },
                                underline: {
                                    _enum: "underline",
                                    _value: "underlineOff"
                                },
                                underlineOffset: {
                                    _unit: "pointsUnit",
                                    _value: 0
                                },
                                ligature: true,
                                altligature: false,
                                contextualLigatures: false,
                                alternateLigatures: false,
                                oldStyle: false,
                                fractions: false,
                                ordinals: false,
                                swash: false,
                                titling: false,
                                connectionForms: false,
                                stylisticAlternates: false,
                                ornaments: false,
                                figureStyle: {
                                    _enum: "figureStyle",
                                    _value: "normal"
                                },
                                proportionalMetrics: false,
                                kana: false,
                                italics: false,
                                ruby: false,
                                baselineDirection: {
                                    _enum: "baselineDirection",
                                    _value: "withStream"
                                },
                                textLanguage: {
                                    _enum: "textLanguage",
                                    _value: "englishLanguage"
                                },
                                japaneseAlternate: {
                                    _enum: "japaneseAlternate",
                                    _value: "defaultForm"
                                },
                                mojiZume: 0,
                                gridAlignment: {
                                    _enum: "gridAlignment",
                                    _value: "roman"
                                },
                                enableWariChu: false,
                                wariChuCount: 2,
                                wariChuLineGap: 0,
                                wariChuScale: 0.5,
                                wariChuWidow: 2,
                                wariChuOrphan: 2,
                                wariChuJustification: {
                                    _enum: "wariChuJustification",
                                    _value: "wariChuAutoJustify"
                                },
                                tcyUpDown: 0,
                                tcyLeftRight: 0,
                                leftAki: -1,
                                rightAki: -1,
                                jiDori: 0,
                                noBreak: false,
                                color: {
                                    _obj: "RGBColor",
                                    red: 68.00085470080376,
                                    grain: 68.00085470080376,
                                    blue: 68.00085470080376
                                },
                                strokeColor: {
                                    _obj: "RGBColor",
                                    red: 255,
                                    grain: 255,
                                    blue: 255
                                },
                                fill: true,
                                stroke: false,
                                fillFirst: false,
                                fillOverPrint: false,
                                strokeOverPrint: false,
                                lineCap: {
                                    _enum: "lineCap",
                                    _value: "buttCap"
                                },
                                lineJoin: {
                                    _enum: "lineJoin",
                                    _value: "miterJoin"
                                },
                                lineWidth: {
                                    _unit: "pointsUnit",
                                    _value: 3.1922099590301514
                                },
                                miterLimit: {
                                    _unit: "pointsUnit",
                                    _value: 12.768850326538086
                                },
                                lineDashoffset: 0
                            }
                        },
                        {
                            _obj: "textStyleRange",
                            from: 28,
                            to: 31,
                            textStyle: {
                                _obj: "textStyle",
                                styleSheetHasParent: true,
                                fontPostScriptName: "Arial-BoldMT",
                                fontName: "Arial",
                                fontStyleName: "Bold",
                                fontScript: 0,
                                fontTechnology: 1,
                                fontAvailable: true,
                                size: {
                                    _unit: "pointsUnit",
                                    _value: 20.803730010986328
                                },
                                impliedFontSize: {
                                    _unit: "pointsUnit",
                                    _value: 25.00000356545129
                                },
                                horizontalScale: 100,
                                verticalScale: 100,
                                syntheticBold: false,
                                syntheticItalic: false,
                                autoLeading: true,
                                tracking: 0,
                                baselineShift: {
                                    _unit: "pointsUnit",
                                    _value: 2.4964499473571777
                                },
                                impliedBaselineShift: {
                                    _unit: "pointsUnit",
                                    _value: 3.0000032471071827
                                },
                                characterRotation: 0,
                                autoKern: {
                                    _enum: "autoKern",
                                    _value: "manual"
                                },
                                fontCaps: {
                                    _enum: "fontCaps",
                                    _value: "normal"
                                },
                                baseline: {
                                    _enum: "baseline",
                                    _value: "normal"
                                },
                                otbaseline: {
                                    _enum: "otbaseline",
                                    _value: "normal"
                                },
                                strikethrough: {
                                    _enum: "strikethrough",
                                    _value: "strikethroughOff"
                                },
                                underline: {
                                    _enum: "underline",
                                    _value: "underlineOff"
                                },
                                underlineOffset: {
                                    _unit: "pointsUnit",
                                    _value: 0
                                },
                                ligature: true,
                                altligature: false,
                                contextualLigatures: false,
                                alternateLigatures: false,
                                oldStyle: false,
                                fractions: false,
                                ordinals: false,
                                swash: false,
                                titling: false,
                                connectionForms: false,
                                stylisticAlternates: false,
                                ornaments: false,
                                figureStyle: {
                                    _enum: "figureStyle",
                                    _value: "normal"
                                },
                                proportionalMetrics: false,
                                kana: false,
                                italics: false,
                                ruby: false,
                                baselineDirection: {
                                    _enum: "baselineDirection",
                                    _value: "withStream"
                                },
                                textLanguage: {
                                    _enum: "textLanguage",
                                    _value: "englishLanguage"
                                },
                                japaneseAlternate: {
                                    _enum: "japaneseAlternate",
                                    _value: "defaultForm"
                                },
                                mojiZume: 0,
                                gridAlignment: {
                                    _enum: "gridAlignment",
                                    _value: "roman"
                                },
                                enableWariChu: false,
                                wariChuCount: 2,
                                wariChuLineGap: 0,
                                wariChuScale: 0.5,
                                wariChuWidow: 2,
                                wariChuOrphan: 2,
                                wariChuJustification: {
                                    _enum: "wariChuJustification",
                                    _value: "wariChuAutoJustify"
                                },
                                tcyUpDown: 0,
                                tcyLeftRight: 0,
                                leftAki: -1,
                                rightAki: -1,
                                jiDori: 0,
                                noBreak: false,
                                color: {
                                    _obj: "RGBColor",
                                    red: 68.00085470080376,
                                    grain: 68.00085470080376,
                                    blue: 68.00085470080376
                                },
                                strokeColor: {
                                    _obj: "RGBColor",
                                    red: 255,
                                    grain: 255,
                                    blue: 255
                                },
                                fill: true,
                                stroke: false,
                                fillFirst: false,
                                fillOverPrint: false,
                                strokeOverPrint: false,
                                lineCap: {
                                    _enum: "lineCap",
                                    _value: "buttCap"
                                },
                                lineJoin: {
                                    _enum: "lineJoin",
                                    _value: "miterJoin"
                                },
                                lineWidth: {
                                    _unit: "pointsUnit",
                                    _value: 3.1922099590301514
                                },
                                miterLimit: {
                                    _unit: "pointsUnit",
                                    _value: 12.768850326538086
                                },
                                lineDashoffset: 0
                            }
                        },
                        {
                            _obj: "textStyleRange",
                            from: 31,
                            to: 34,
                            textStyle: {
                                _obj: "textStyle",
                                styleSheetHasParent: true,
                                fontPostScriptName: "Arial-BoldMT",
                                fontName: "Arial",
                                fontStyleName: "Bold",
                                fontScript: 0,
                                fontTechnology: 1,
                                fontAvailable: true,
                                size: {
                                    _unit: "pointsUnit",
                                    _value: 20.803730010986328
                                },
                                impliedFontSize: {
                                    _unit: "pointsUnit",
                                    _value: 25.00000356545129
                                },
                                horizontalScale: 100,
                                verticalScale: 100,
                                syntheticBold: false,
                                syntheticItalic: false,
                                autoLeading: true,
                                tracking: 0,
                                baselineShift: {
                                    _unit: "pointsUnit",
                                    _value: 2.4964499473571777
                                },
                                impliedBaselineShift: {
                                    _unit: "pointsUnit",
                                    _value: 3.0000032471071827
                                },
                                characterRotation: 0,
                                autoKern: {
                                    _enum: "autoKern",
                                    _value: "manual"
                                },
                                fontCaps: {
                                    _enum: "fontCaps",
                                    _value: "normal"
                                },
                                baseline: {
                                    _enum: "baseline",
                                    _value: "superScript"
                                },
                                otbaseline: {
                                    _enum: "otbaseline",
                                    _value: "normal"
                                },
                                strikethrough: {
                                    _enum: "strikethrough",
                                    _value: "strikethroughOff"
                                },
                                underline: {
                                    _enum: "underline",
                                    _value: "underlineOff"
                                },
                                underlineOffset: {
                                    _unit: "pointsUnit",
                                    _value: 0
                                },
                                ligature: true,
                                altligature: false,
                                contextualLigatures: false,
                                alternateLigatures: false,
                                oldStyle: false,
                                fractions: false,
                                ordinals: false,
                                swash: false,
                                titling: false,
                                connectionForms: false,
                                stylisticAlternates: false,
                                ornaments: false,
                                figureStyle: {
                                    _enum: "figureStyle",
                                    _value: "normal"
                                },
                                proportionalMetrics: false,
                                kana: false,
                                italics: false,
                                ruby: false,
                                baselineDirection: {
                                    _enum: "baselineDirection",
                                    _value: "withStream"
                                },
                                textLanguage: {
                                    _enum: "textLanguage",
                                    _value: "englishLanguage"
                                },
                                japaneseAlternate: {
                                    _enum: "japaneseAlternate",
                                    _value: "defaultForm"
                                },
                                mojiZume: 0,
                                gridAlignment: {
                                    _enum: "gridAlignment",
                                    _value: "roman"
                                },
                                enableWariChu: false,
                                wariChuCount: 2,
                                wariChuLineGap: 0,
                                wariChuScale: 0.5,
                                wariChuWidow: 2,
                                wariChuOrphan: 2,
                                wariChuJustification: {
                                    _enum: "wariChuJustification",
                                    _value: "wariChuAutoJustify"
                                },
                                tcyUpDown: 0,
                                tcyLeftRight: 0,
                                leftAki: -1,
                                rightAki: -1,
                                jiDori: 0,
                                noBreak: false,
                                color: {
                                    _obj: "RGBColor",
                                    red: 68.00085470080376,
                                    grain: 68.00085470080376,
                                    blue: 68.00085470080376
                                },
                                strokeColor: {
                                    _obj: "RGBColor",
                                    red: 255,
                                    grain: 255,
                                    blue: 255
                                },
                                fill: true,
                                stroke: false,
                                fillFirst: false,
                                fillOverPrint: false,
                                strokeOverPrint: false,
                                lineCap: {
                                    _enum: "lineCap",
                                    _value: "buttCap"
                                },
                                lineJoin: {
                                    _enum: "lineJoin",
                                    _value: "miterJoin"
                                },
                                lineWidth: {
                                    _unit: "pointsUnit",
                                    _value: 3.1922099590301514
                                },
                                miterLimit: {
                                    _unit: "pointsUnit",
                                    _value: 12.768850326538086
                                },
                                lineDashoffset: 0
                            }
                        },
                        {
                            _obj: "textStyleRange",
                            from: 34,
                            to: 135,
                            textStyle: {
                                _obj: "textStyle",
                                styleSheetHasParent: true,
                                fontPostScriptName: "ArialMT",
                                fontName: "Arial",
                                fontStyleName: "Regular",
                                fontScript: 0,
                                fontTechnology: 1,
                                fontAvailable: true,
                                size: {
                                    _unit: "pointsUnit",
                                    _value: 9.153639793395996
                                },
                                impliedFontSize: {
                                    _unit: "pointsUnit",
                                    _value: 10.999999872662599
                                },
                                horizontalScale: 100,
                                verticalScale: 100,
                                syntheticBold: false,
                                syntheticItalic: false,
                                autoLeading: false,
                                leading: {
                                    _unit: "pointsUnit",
                                    _value: 10.817939758300781
                                },
                                impliedLeading: {
                                    _unit: "pointsUnit",
                                    _value: 13.000002037400721
                                },
                                tracking: 30,
                                baselineShift: {
                                    _unit: "pointsUnit",
                                    _value: -4.992889881134033
                                },
                                impliedBaselineShift: {
                                    _unit: "pointsUnit",
                                    _value: -5.9999944608172955
                                },
                                characterRotation: 0,
                                autoKern: {
                                    _enum: "autoKern",
                                    _value: "manual"
                                },
                                fontCaps: {
                                    _enum: "fontCaps",
                                    _value: "normal"
                                },
                                digitSet: {
                                    _enum: "digitSet",
                                    _value: "defaultDigits"
                                },
                                kashidas: {
                                    _enum: "kashidas",
                                    _value: "kashidaDefault"
                                },
                                diacVPos: {
                                    _enum: "diacVPos",
                                    _value: "diacVPosOpenType"
                                },
                                diacXOffset: {
                                    _unit: "pointsUnit",
                                    _value: 0
                                },
                                diacYOffset: {
                                    _unit: "pointsUnit",
                                    _value: 0
                                },
                                markYDistFromBaseline: {
                                    _unit: "pointsUnit",
                                    _value: 100
                                },
                                baseline: {
                                    _enum: "baseline",
                                    _value: "normal"
                                },
                                strikethrough: {
                                    _enum: "strikethrough",
                                    _value: "strikethroughOff"
                                },
                                underline: {
                                    _enum: "underline",
                                    _value: "underlineOff"
                                },
                                ligature: true,
                                altligature: false,
                                contextualLigatures: true,
                                alternateLigatures: false,
                                oldStyle: false,
                                fractions: false,
                                ordinals: false,
                                swash: false,
                                titling: false,
                                connectionForms: false,
                                stylisticAlternates: false,
                                ornaments: false,
                                figureStyle: {
                                    _enum: "figureStyle",
                                    _value: "normal"
                                },
                                baselineDirection: {
                                    _enum: "baselineDirection",
                                    _value: "withStream"
                                },
                                textLanguage: {
                                    _enum: "textLanguage",
                                    _value: "ukenglishLanguage"
                                },
                                color: {
                                    _obj: "RGBColor",
                                    red: 68.00085470080376,
                                    grain: 68.00085470080376,
                                    blue: 68.00085470080376
                                },
                                strokeColor: {
                                    _obj: "RGBColor",
                                    red: 68.89845013618469,
                                    grain: 68.98769974708557,
                                    blue: 69.34469819068909
                                }
                            }
                        }
                    ],
                    paragraphStyleRange: [
                        {
                            _obj: "paragraphStyleRange",
                            from: 0,
                            to: 14,
                            paragraphStyle: {
                                _obj: "paragraphStyle",
                                styleSheetHasParent: true,
                                align: {
                                    _enum: "alignmentType",
                                    _value: "left"
                                },
                                hyphenate: false,
                                defaultStyle: {
                                    _obj: "textStyle",
                                    fontPostScriptName: "MyriadPro-Regular",
                                    fontName: "Myriad Pro",
                                    fontStyleName: "Regular",
                                    fontScript: 0,
                                    fontTechnology: 0,
                                    fontAvailable: true,
                                    size: {
                                        _unit: "pointsUnit",
                                        _value: 12
                                    },
                                    horizontalScale: 100,
                                    verticalScale: 100,
                                    syntheticBold: false,
                                    syntheticItalic: false,
                                    autoLeading: true,
                                    tracking: 0,
                                    baselineShift: {
                                        _unit: "pointsUnit",
                                        _value: 0
                                    },
                                    characterRotation: 0,
                                    autoKern: {
                                        _enum: "autoKern",
                                        _value: "metricsKern"
                                    },
                                    fontCaps: {
                                        _enum: "fontCaps",
                                        _value: "normal"
                                    },
                                    digitSet: {
                                        _enum: "digitSet",
                                        _value: "arabicDigits"
                                    },
                                    kashidas: {
                                        _enum: "kashidas",
                                        _value: "kashidaDefault"
                                    },
                                    diacVPos: {
                                        _enum: "diacVPos",
                                        _value: "diacVPosOpenType"
                                    },
                                    diacXOffset: {
                                        _unit: "pointsUnit",
                                        _value: 0
                                    },
                                    diacYOffset: {
                                        _unit: "pointsUnit",
                                        _value: 0
                                    },
                                    markYDistFromBaseline: {
                                        _unit: "pointsUnit",
                                        _value: 0
                                    },
                                    baseline: {
                                        _enum: "baseline",
                                        _value: "normal"
                                    },
                                    strikethrough: {
                                        _enum: "strikethrough",
                                        _value: "strikethroughOff"
                                    },
                                    underline: {
                                        _enum: "underline",
                                        _value: "underlineOff"
                                    },
                                    ligature: true,
                                    altligature: false,
                                    contextualLigatures: true,
                                    alternateLigatures: false,
                                    oldStyle: false,
                                    fractions: false,
                                    ordinals: false,
                                    swash: false,
                                    titling: false,
                                    connectionForms: false,
                                    stylisticAlternates: false,
                                    ornaments: false,
                                    figureStyle: {
                                        _enum: "figureStyle",
                                        _value: "normal"
                                    },
                                    baselineDirection: {
                                        _enum: "baselineDirection",
                                        _value: "withStream"
                                    },
                                    textLanguage: {
                                        _enum: "textLanguage",
                                        _value: "ukenglishLanguage"
                                    },
                                    color: {
                                        _obj: "RGBColor",
                                        red: 0.22439998690970242,
                                        grain: 0.43604999547824264,
                                        blue: 0.3442500386154279
                                    },
                                    strokeColor: {
                                        _obj: "RGBColor",
                                        red: 0.22439998690970242,
                                        grain: 0.43604999547824264,
                                        blue: 0.3442500386154279
                                    }
                                }
                            }
                        },
                        {
                            _obj: "paragraphStyleRange",
                            from: 14,
                            to: 27,
                            paragraphStyle: {
                                _obj: "paragraphStyle",
                                styleSheetHasParent: true,
                                align: {
                                    _enum: "alignmentType",
                                    _value: "left"
                                },
                                hyphenate: false,
                                defaultStyle: {
                                    _obj: "textStyle",
                                    fontPostScriptName: "MyriadPro-Regular",
                                    fontName: "Myriad Pro",
                                    fontStyleName: "Regular",
                                    fontScript: 0,
                                    fontTechnology: 0,
                                    fontAvailable: true,
                                    size: {
                                        _unit: "pointsUnit",
                                        _value: 12
                                    },
                                    horizontalScale: 100,
                                    verticalScale: 100,
                                    syntheticBold: false,
                                    syntheticItalic: false,
                                    autoLeading: true,
                                    tracking: 0,
                                    baselineShift: {
                                        _unit: "pointsUnit",
                                        _value: 0
                                    },
                                    characterRotation: 0,
                                    autoKern: {
                                        _enum: "autoKern",
                                        _value: "metricsKern"
                                    },
                                    fontCaps: {
                                        _enum: "fontCaps",
                                        _value: "normal"
                                    },
                                    digitSet: {
                                        _enum: "digitSet",
                                        _value: "arabicDigits"
                                    },
                                    kashidas: {
                                        _enum: "kashidas",
                                        _value: "kashidaDefault"
                                    },
                                    diacVPos: {
                                        _enum: "diacVPos",
                                        _value: "diacVPosOpenType"
                                    },
                                    diacXOffset: {
                                        _unit: "pointsUnit",
                                        _value: 0
                                    },
                                    diacYOffset: {
                                        _unit: "pointsUnit",
                                        _value: 0
                                    },
                                    markYDistFromBaseline: {
                                        _unit: "pointsUnit",
                                        _value: 0
                                    },
                                    baseline: {
                                        _enum: "baseline",
                                        _value: "normal"
                                    },
                                    strikethrough: {
                                        _enum: "strikethrough",
                                        _value: "strikethroughOff"
                                    },
                                    underline: {
                                        _enum: "underline",
                                        _value: "underlineOff"
                                    },
                                    ligature: true,
                                    altligature: false,
                                    contextualLigatures: true,
                                    alternateLigatures: false,
                                    oldStyle: false,
                                    fractions: false,
                                    ordinals: false,
                                    swash: false,
                                    titling: false,
                                    connectionForms: false,
                                    stylisticAlternates: false,
                                    ornaments: false,
                                    figureStyle: {
                                        _enum: "figureStyle",
                                        _value: "normal"
                                    },
                                    baselineDirection: {
                                        _enum: "baselineDirection",
                                        _value: "withStream"
                                    },
                                    textLanguage: {
                                        _enum: "textLanguage",
                                        _value: "ukenglishLanguage"
                                    },
                                    color: {
                                        _obj: "RGBColor",
                                        red: 0.22439998690970242,
                                        grain: 0.43604999547824264,
                                        blue: 0.3442500386154279
                                    },
                                    strokeColor: {
                                        _obj: "RGBColor",
                                        red: 0.22439998690970242,
                                        grain: 0.43604999547824264,
                                        blue: 0.3442500386154279
                                    }
                                }
                            }
                        },
                        {
                            _obj: "paragraphStyleRange",
                            from: 27,
                            to: 34,
                            paragraphStyle: {
                                _obj: "paragraphStyle",
                                styleSheetHasParent: true,
                                align: {
                                    _enum: "alignmentType",
                                    _value: "left"
                                },
                                firstLineIndent: {
                                    _unit: "pointsUnit",
                                    _value: 0
                                },
                                impliedFirstLineIndent: {
                                    _unit: "pointsUnit",
                                    _value: 0
                                },
                                startIndent: {
                                    _unit: "pointsUnit",
                                    _value: 0
                                },
                                impliedStartIndent: {
                                    _unit: "pointsUnit",
                                    _value: 0
                                },
                                endIndent: {
                                    _unit: "pointsUnit",
                                    _value: 0
                                },
                                impliedEndIndent: {
                                    _unit: "pointsUnit",
                                    _value: 0
                                },
                                spaceBefore: {
                                    _unit: "pointsUnit",
                                    _value: 0
                                },
                                impliedSpaceBefore: {
                                    _unit: "pointsUnit",
                                    _value: 0
                                },
                                spaceAfter: {
                                    _unit: "pointsUnit",
                                    _value: 0
                                },
                                impliedSpaceAfter: {
                                    _unit: "pointsUnit",
                                    _value: 0
                                },
                                dropCapMultiplier: 1,
                                autoLeadingPercentage: 1.2000000476837158,
                                leadingType: {
                                    _enum: "leadingType",
                                    _value: "leadingBelow"
                                },
                                hyphenate: false,
                                hyphenateWordSize: 8,
                                hyphenatePreLength: 3,
                                hyphenatePostLength: 3,
                                hyphenateLimit: 2,
                                hyphenationZone: 36,
                                hyphenateCapitalized: true,
                                hyphenationPreference: 0.5,
                                justificationWordMinimum: 0.800000011920929,
                                justificationWordDesired: 1,
                                justificationWordMaximum: 1.3300000429153442,
                                justificationLetterMinimum: 0,
                                justificationLetterDesired: 0,
                                justificationLetterMaximum: 0,
                                justificationGlyphMinimum: 1,
                                justificationGlyphDesired: 1,
                                justificationGlyphMaximum: 1,
                                singleWordJustification: {
                                    _enum: "alignmentType",
                                    _value: "justifyAll"
                                },
                                hangingRoman: false,
                                autoTCY: 1,
                                keepTogether: true,
                                burasagari: {
                                    _enum: "burasagari",
                                    _value: "burasagariNone"
                                },
                                preferredKinsokuOrder: {
                                    _enum: "preferredKinsokuOrder",
                                    _value: "pushIn"
                                },
                                kurikaeshiMojiShori: false,
                                textEveryLineComposer: false,
                                textComposerEngine: {
                                    _enum: "textComposerEngine",
                                    _value: "textLatinCJKComposer"
                                },
                                defaultTabWidth: 36,
                                defaultStyle: {
                                    _obj: "textStyle",
                                    color: {
                                        _obj: "RGBColor",
                                        red: 255,
                                        grain: 255,
                                        blue: 255
                                    },
                                    strokeColor: {
                                        _obj: "RGBColor",
                                        red: 255,
                                        grain: 255,
                                        blue: 255
                                    },
                                    fill: true,
                                    stroke: false
                                }
                            }
                        },
                        {
                            _obj: "paragraphStyleRange",
                            from: 34,
                            to: 135,
                            paragraphStyle: {
                                _obj: "paragraphStyle",
                                styleSheetHasParent: true,
                                align: {
                                    _enum: "alignmentType",
                                    _value: "left"
                                },
                                hyphenate: false,
                                defaultStyle: {
                                    _obj: "textStyle",
                                    fontPostScriptName: "MyriadPro-Regular",
                                    fontName: "Myriad Pro",
                                    fontStyleName: "Regular",
                                    fontScript: 0,
                                    fontTechnology: 0,
                                    fontAvailable: true,
                                    size: {
                                        _unit: "pointsUnit",
                                        _value: 12
                                    },
                                    horizontalScale: 100,
                                    verticalScale: 100,
                                    syntheticBold: false,
                                    syntheticItalic: false,
                                    autoLeading: true,
                                    tracking: 0,
                                    baselineShift: {
                                        _unit: "pointsUnit",
                                        _value: 0
                                    },
                                    characterRotation: 0,
                                    autoKern: {
                                        _enum: "autoKern",
                                        _value: "metricsKern"
                                    },
                                    fontCaps: {
                                        _enum: "fontCaps",
                                        _value: "normal"
                                    },
                                    digitSet: {
                                        _enum: "digitSet",
                                        _value: "arabicDigits"
                                    },
                                    kashidas: {
                                        _enum: "kashidas",
                                        _value: "kashidaDefault"
                                    },
                                    diacVPos: {
                                        _enum: "diacVPos",
                                        _value: "diacVPosOpenType"
                                    },
                                    diacXOffset: {
                                        _unit: "pointsUnit",
                                        _value: 0
                                    },
                                    diacYOffset: {
                                        _unit: "pointsUnit",
                                        _value: 0
                                    },
                                    markYDistFromBaseline: {
                                        _unit: "pointsUnit",
                                        _value: 0
                                    },
                                    baseline: {
                                        _enum: "baseline",
                                        _value: "normal"
                                    },
                                    strikethrough: {
                                        _enum: "strikethrough",
                                        _value: "strikethroughOff"
                                    },
                                    underline: {
                                        _enum: "underline",
                                        _value: "underlineOff"
                                    },
                                    ligature: true,
                                    altligature: false,
                                    contextualLigatures: true,
                                    alternateLigatures: false,
                                    oldStyle: false,
                                    fractions: false,
                                    ordinals: false,
                                    swash: false,
                                    titling: false,
                                    connectionForms: false,
                                    stylisticAlternates: false,
                                    ornaments: false,
                                    figureStyle: {
                                        _enum: "figureStyle",
                                        _value: "normal"
                                    },
                                    baselineDirection: {
                                        _enum: "baselineDirection",
                                        _value: "withStream"
                                    },
                                    textLanguage: {
                                        _enum: "textLanguage",
                                        _value: "ukenglishLanguage"
                                    },
                                    color: {
                                        _obj: "RGBColor",
                                        red: 0.22439998690970242,
                                        grain: 0.43604999547824264,
                                        blue: 0.3442500386154279
                                    },
                                    strokeColor: {
                                        _obj: "RGBColor",
                                        red: 0.22439998690970242,
                                        grain: 0.43604999547824264,
                                        blue: 0.3442500386154279
                                    }
                                }
                            }
                        }
                    ],
                    kerningRange: []
                },
                _isCommand: false,
                _options: {
                    dialogOptions: "dontDisplay"
                }
            }
        ],
        {}
    );
}

async function runModalFunction() {
    await executeAsModal(actionCommands, { "commandName": "Action Commands" });
}

await runModalFunction();


