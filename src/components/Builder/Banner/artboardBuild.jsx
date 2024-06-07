import React from "react";
import { core, app, batchPlay, storage } from '../../../App.js';
import useBannerContext from '../../../hook/useBannerContext.jsx';
import useAppContext from "../../../hook/useAppContext.jsx";
import { alignGroupX, alignGroupY, alignGroupYTop, getBounds, selectLayer, setOffset, alignGroupTopLeftCorner, setName } from '../../../hook/hooksJSON.jsx'
import { getBoundsAndPosition, getBoundsAndPositionNoProperty } from "../../../hook/getBoundsAndPosition.jsx";
import { calculateBadgeFontSize, calculateHeadlineFontSize } from "../../../hook/CalculateFontSizes/FontSizes.js";
import limitCharsPerLine from "../../../hook/charLimiter.jsx";


export async function artboardBuild(buildInfo) {

    const { artboards, colors } = buildInfo;

    var accentColor = colors["accentColor"]
    var secondaryColor = colors["secondaryColor"]
    var tertiaryColor = colors["tertiaryColor"]


    let currentX = [0, 0, 0, 0, 0, 0, 0]; // Adicionado para manter o controle do X atual para cada linha
    let currentY = [0, 0, 0, 0, 0, 0, 0]; // Adicionado para manter o controle do Y atual para cada linha
    let maxHeight = [0, 0, 0, 0, 0, 0, 0]; // Adicionado para manter o controle da altura máxima para cada linha

    for (const artboard in artboards) {
        const width = artboards[artboard].width;
        const height = artboards[artboard].height;
        const ratio = artboards[artboard].ratio;
        const artboardName = `${width}x${height}`;

        // const headlineCopy = limitCharsPerLine(
        //     "Descontos em tecnologia de ponta", 20, "capitalized"
        // );

        let headlineCopy;
        let badgeCopy;

        switch (true) {
            case (ratio < 0.5):
                headlineCopy = limitCharsPerLine(
                    "Descontos em tecnologia de ponta", 9, "capitalized"
                )
                badgeCopy = limitCharsPerLine(
                    "Ofertas do consumidor", 15, "upper"
                )
                break;
            case (ratio >= 1 && ratio < 1.5):
                headlineCopy = limitCharsPerLine(
                    "Descontos em tecnologia de ponta", 12, "capitalized"
                )
                badgeCopy = limitCharsPerLine(
                    "Ofertas do consumidor", 20, "upper"
                )
                break;
            default:
                headlineCopy = limitCharsPerLine(
                    "Descontos em tecnologia de ponta", 20, "capitalized"
                )
                badgeCopy = limitCharsPerLine(
                    "Ofertas do consumidor", 25, "upper"
                )
                break;
        }


        const headlineSize = calculateHeadlineFontSize(width, height, ratio);

        const badgeSize = headlineSize * 0.45;

        // Determina a linha com base na proporção
        let row;
        switch (true) {
            case (ratio < 0.5):
                row = 5;
                break;
            case (ratio < 1):
                row = 5;
                break;
            case (ratio < 1.5):
                row = 4;
                break;
            case (ratio < 2):
                row = 3;
                break;
            case (ratio < 3):
                row = 2;
                break;
            case (ratio < 4):
                row = 1;
                break;
            default:
                row = 0;
                break;
        }

        // Atualiza a posição Y para a soma das alturas máximas e paddings de todas as linhas anteriores
        if (row > 0) {
            currentY[row] = maxHeight.slice(0, row).reduce((a, b) => a + b, 0) + (row * 40);
        }

        try {
            const targetFunction = async () => {
                try {
                    // Cria as artboards
                    const createArtboards = [
                        {
                            _obj: "make",
                            _target: [
                                {
                                    _ref: "artboardSection"
                                }
                            ],
                            layerSectionStart: 1,
                            layerSectionEnd: 2,
                            name: "",
                            artboardRect: {
                                _obj: "classFloatRect",
                                top: currentY[row], // Atualizado para usar o Y atual da linha
                                left: currentX[row], // Atualizado para usar o X atual da linha
                                bottom: currentY[row] + height,
                                right: currentX[row] + width
                            },
                            _options: {
                                dialogOptions: "dontDisplay"
                            }
                        },
                        {
                            _obj: "editArtboardEvent",
                            _target: [
                                {
                                    _ref: "layer",
                                    _enum: "ordinal",
                                    _value: "targetEnum"
                                }
                            ],
                            artboard: {
                                _obj: "artboard",
                                color: {
                                    _obj: "RGBColor",
                                    red: accentColor.r,
                                    grain: accentColor.g,
                                    blue: accentColor.b
                                },
                                artboardBackgroundType: 4
                            },
                            changeBackground: 1,
                            _options: {
                                dialogOptions: "dontDisplay"
                            }
                        },
                        setName({
                            Name: artboardName
                        })
                    ];

                    await batchPlay(createArtboards, {});

                    const makeBorder = [
                        selectLayer({
                            Name: artboardName
                        }),
                        {
                            _obj: "make",
                            _target: [
                                {
                                    _ref: "contentLayer"
                                }
                            ],
                            name: "",
                            using: {
                                _obj: "contentLayer",
                                type: {
                                    _obj: "solidColorLayer",
                                    color: {
                                        _obj: "RGBColor",
                                        red: 72,
                                        grain: 72,
                                        blue: 72
                                    }
                                },
                                shape: {
                                    _obj: "rectangle",
                                    unitValueQuadVersion: 1,
                                    top: {
                                        _unit: "pixelsUnit",
                                        _value: currentY[row], // Subtrai a posição Y da artboard
                                    },
                                    left: {
                                        _unit: "pixelsUnit",
                                        _value: currentX[row] // Subtrai a posição X da artboard
                                    },
                                    bottom: {
                                        _unit: "pixelsUnit",
                                        _value: currentY[row] + height // Subtrai a posição Y da artboard
                                    },
                                    right: {
                                        _unit: "pixelsUnit",
                                        _value: currentX[row] + width // Subtrai a posição X da artboard
                                    },
                                    topRight: {
                                        _unit: "pixelsUnit",
                                        _value: 0
                                    },
                                    topLeft: {
                                        _unit: "pixelsUnit",
                                        _value: 0
                                    },
                                    bottomLeft: {
                                        _unit: "pixelsUnit",
                                        _value: 0
                                    },
                                    bottomRight: {
                                        _unit: "pixelsUnit",
                                        _value: 0
                                    }
                                },
                                strokeStyle: {
                                    _obj: "strokeStyle",
                                    strokeStyleVersion: 2,
                                    strokeEnabled: true,
                                    fillEnabled: false,
                                    strokeStyleLineWidth: {
                                        _unit: "pixelsUnit",
                                        _value: 1
                                    },
                                    strokeStyleLineDashOffset: {
                                        _unit: "pointsUnit",
                                        _value: 0
                                    },
                                    strokeStyleMiterLimit: 100,
                                    strokeStyleLineCapType: {
                                        _enum: "strokeStyleLineCapType",
                                        _value: "strokeStyleButtCap"
                                    },
                                    strokeStyleLineJoinType: {
                                        _enum: "strokeStyleLineJoinType",
                                        _value: "strokeStyleMiterJoin"
                                    },
                                    strokeStyleLineAlignment: {
                                        _enum: "strokeStyleLineAlignment",
                                        _value: "strokeStyleAlignInside"
                                    },
                                    strokeStyleScaleLock: false,
                                    strokeStyleStrokeAdjust: false,
                                    strokeStyleLineDashSet: [],
                                    strokeStyleBlendMode: {
                                        _enum: "blendMode",
                                        _value: "normal"
                                    },
                                    strokeStyleOpacity: {
                                        _unit: "percentUnit",
                                        _value: 100
                                    },
                                    strokeStyleContent: {
                                        _obj: "solidColorLayer",
                                        color: {
                                            _obj: "RGBColor",
                                            red: 72,
                                            grain: 72,
                                            blue: 72
                                        }
                                    },
                                    strokeStyleResolution: 72
                                }
                            },
                        },
                        setName({
                            Name: "Border",
                        })
                    ];

                    await batchPlay(makeBorder, {});

                    const makeBadge = [
                        {
                            _obj: "make",
                            _target: [
                                {
                                    _ref: "textLayer"
                                }
                            ],
                            using: {
                                _obj: "textLayer",
                                textKey: badgeCopy,
                                bounds: {
                                    _obj: "bounds",
                                    left: {
                                        _unit: "pointsUnit",
                                        _value: 0,
                                    },
                                    top: {
                                        _unit: "pointsUnit",
                                        _value: 0,
                                    },
                                    right: {
                                        _unit: "pointsUnit",
                                        _value: 0
                                    },
                                    bottom: {
                                        _unit: "pointsUnit",
                                        _value: 0,
                                    }
                                },
                                boundingBox: {
                                    _obj: "boundingBox",
                                    left: {
                                        _unit: "pointsUnit",
                                        _value: 0,
                                    },
                                    top: {
                                        _unit: "pointsUnit",
                                        _value: 0,
                                    },
                                    right: {
                                        _unit: "pointsUnit",
                                        _value: 0
                                    },
                                    bottom: {
                                        _unit: "pointsUnit",
                                        _value: 0,
                                    }
                                },
                                textStyleRange: [
                                    {
                                        _obj: "textStyleRange",
                                        from: 0,
                                        to: Number.MAX_SAFE_INTEGER,
                                        textStyle: {
                                            _obj: "textStyle",
                                            fontPostScriptName: "Roboto-Bold",
                                            fontName: "Roboto",
                                            fontStyleName: "Bold",
                                            size: {
                                                _unit: "pointsUnit",
                                                _value: badgeSize
                                            },
                                            impliedFontSize: {
                                                _unit: "pointsUnit",
                                                _value: badgeSize
                                            },
                                            autoLeading: false,
                                            leading: badgeSize,
                                            tracking: 0,
                                            fontCaps: {
                                                _enum: "fontCaps",
                                                _value: "allCaps"
                                            },
                                            color: {
                                                _obj: "RGBColor",
                                                red: tertiaryColor.r,
                                                grain: tertiaryColor.g,
                                                blue: tertiaryColor.b
                                            },
                                        }
                                    }
                                ],
                            },
                        },
                        setName({
                            Name: "Badge",
                        }),
                        getBounds({})
                    ];

                    const { height: badgeHeight, width: badgeWidth, bottom: badgeBottom } = await getBoundsAndPositionNoProperty(makeBadge, "boundingBox", 2);

                    const initBadgePos = [
                        {
                            _obj: "move", _target: [{
                                _ref: "layer",
                                _enum: "ordinal",
                                _value: "targetEnum"
                            }],
                            to: {
                                _obj: "offset",
                                horizontal: { _unit: "pixelsUnit", _value: currentX[row] },
                                vertical: { _unit: "pixelsUnit", _value: currentY[row] + badgeHeight }
                            },
                            _options: { dialogOptions: "dontDisplay" }
                        },
                    ]
                    await batchPlay(initBadgePos, {});

                    const resetBadgePos = alignGroupTopLeftCorner()
                    await batchPlay(resetBadgePos, {});

                    const makeHeadline = [
                        {
                            _obj: "make",
                            _target: [
                                {
                                    _ref: "textLayer"
                                }
                            ],
                            using: {
                                _obj: "textLayer",
                                textKey: headlineCopy,
                                bounds: {
                                    _obj: "bounds",
                                    left: {
                                        _unit: "pointsUnit",
                                        _value: 0,
                                    },
                                    top: {
                                        _unit: "pointsUnit",
                                        _value: 0,
                                    },
                                    right: {
                                        _unit: "pointsUnit",
                                        _value: 0
                                    },
                                    bottom: {
                                        _unit: "pointsUnit",
                                        _value: 0,
                                    }
                                },
                                boundingBox: {
                                    _obj: "boundingBox",
                                    left: {
                                        _unit: "pointsUnit",
                                        _value: 0,
                                    },
                                    top: {
                                        _unit: "pointsUnit",
                                        _value: 0,
                                    },
                                    right: {
                                        _unit: "pointsUnit",
                                        _value: 0
                                    },
                                    bottom: {
                                        _unit: "pointsUnit",
                                        _value: 0,
                                    }
                                },
                                textStyleRange: [
                                    {
                                        _obj: "textStyleRange",
                                        from: 0,
                                        to: Number.MAX_SAFE_INTEGER,
                                        textStyle: {
                                            _obj: "textStyle",
                                            fontPostScriptName: "Roboto-Bold",
                                            fontName: "Roboto",
                                            fontStyleName: "Light",
                                            size: {
                                                _unit: "pointsUnit",
                                                _value: headlineSize
                                            },
                                            impliedFontSize: {
                                                _unit: "pointsUnit",
                                                _value: headlineSize
                                            },
                                            autoLeading: false,
                                            leading: headlineSize,
                                            tracking: 0,
                                            fontCaps: {
                                                _enum: "fontCaps",
                                                _value: "normal"
                                            },
                                            color: {
                                                _obj: "RGBColor",
                                                red: tertiaryColor.r,
                                                grain: tertiaryColor.g,
                                                blue: tertiaryColor.b
                                            },
                                        }
                                    }
                                ],
                            },
                        },
                        setName({
                            Name: "Headline"
                        }),
                        getBounds({}),
                    ];

                    const { height: headlineHeight, width: headlineWidth } = await getBoundsAndPositionNoProperty(makeHeadline, "boundingBox", 2);

                    const initHeadlinePos = [
                        setOffset({
                            Horizontal: currentX[row],
                            Vertical: currentY[row] + badgeHeight
                        })
                    ]

                    await batchPlay(initHeadlinePos, {});

                    const resetHeadlinePos = alignGroupTopLeftCorner()
                    await batchPlay(resetHeadlinePos, {});


                    let headlinePadding;

                    if (ratio < 0.5) {
                        headlinePadding = badgeHeight * 1.75
                    } else {
                        headlinePadding = badgeHeight * 2.5
                    }


                    const moveHeadline = [
                        setOffset({
                            Vertical: headlinePadding,
                        })
                    ]

                    await batchPlay(moveHeadline, {});

                    currentX[row] += width + 40; // Atualiza o X atual após a criação da artboard

                    console.log('%cArtboards criadas com sucesso!', 'color: #00EAADFF;');
                } catch (error) {
                    console.error('Erro ao criar as artboards:', error);
                }
            };

            const options = {
                commandName: 'Criar Artboards',
                interactive: false,
            };

            await core.executeAsModal(targetFunction, options);
        } catch (error) {
            console.error('Erro ao criar as artboards:', error);
        }

        // Atualiza a altura máxima da linha atual se a altura da artboard for maior
        if (height > maxHeight[row]) {
            maxHeight[row] = height;
        }


        // Se o X atual exceder um limite (por exemplo, a largura da tela), mova para a próxima linha
        if (currentX[row] > 100000) { // 1920 pode ser substituído pela largura da tela
            currentX[row] = 0;
            currentY[row] += maxHeight[row] + 40; // Atualiza o Y atual para a próxima linha
        }
    }

};