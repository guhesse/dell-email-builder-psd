import { batchPlay } from "../App.js";
import limitCharsPerLine from '../hook/charLimiter.jsx';

export default async function Hero1Lifestyle(accentRed, accentGreen, accentBlue, secondaryRed, secondaryGreen, secondaryBlue, tertiaryRed, tertiaryGreen, tertiaryBlue, badgeValue, headlineValue, subHeadlineValue, heroCtaValue) {

    function formatHeadlineCopy(text) {
        return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    }

    // Certifique-se de ter acesso a headlineValue e subHeadlineValue
    const formattedHeadlineValue = await limitCharsPerLine(
        headlineValue ? formatHeadlineCopy(headlineValue) : '',
        20
    );
    const formattedSubHeadlineValue = await limitCharsPerLine(subHeadlineValue || '', 55);

    const batchChangeColor = [

        { _obj: "select", _target: [{ _ref: "layer", _name: "CTA Border" }], makeVisible: false, layerID: [9616], _options: { dialogOptions: "dontDisplay" }, },
        { _obj: "set", _target: [{ _ref: "contentLayer", _enum: "ordinal", _value: "targetEnum" },], to: { _obj: "solidColorLayer", color: { _obj: "RGBColor", red: tertiaryRed, grain: tertiaryGreen, blue: tertiaryBlue }, }, _options: { dialogOptions: "dontDisplay" }, },

        { _obj: "select", _target: [{ _ref: "layer", _name: "CTA Copy" }], makeVisible: false, layerID: [9617], _options: { dialogOptions: "dontDisplay" }, },
        { _obj: "set", _target: [{ _ref: "property", _property: "textStyle" }, { _ref: "textLayer", _enum: "ordinal", _value: "targetEnum" },], to: { _obj: "textStyle", color: { _obj: "RGBColor", red: accentRed, grain: accentGreen, blue: accentBlue }, }, _options: { dialogOptions: "dontDisplay" }, },

        { _obj: "select", _target: [{ _ref: "layer", _name: "Pattern" }], makeVisible: false, layerID: [9653], _isCommand: false, _options: { dialogOptions: "dontDisplay" } },
        { _obj: "set", _target: [{ _ref: "property", _property: "layerEffects" }, { _ref: "layer", _enum: "ordinal", _value: "targetEnum" }], to: { _obj: "layerEffects", scale: { _unit: "percentUnit", _value: 100 }, solidFill: { _obj: "solidFill", enabled: true, present: true, showInDialog: true, mode: { _enum: "blendMode", _value: "normal" }, color: { _obj: "RGBColor", red: secondaryRed, grain: secondaryGreen, blue: secondaryBlue }, opacity: { _unit: "percentUnit", _value: 100 } } }, _isCommand: false, _options: { dialogOptions: "dontDisplay" } },

    ];

    await batchPlay(batchChangeColor, {});

    const changeHeroCopy = [

        { _obj: "select", _target: [{ _ref: "layer", _name: "Badge" }], makeVisible: false, layerID: [9102], _options: { dialogOptions: "dontDisplay" } },

        {
            _obj: "set", _target: [{ _ref: "textLayer", _enum: "ordinal", _value: "targetEnum" }],
            to: {
                _obj: "textLayer", textKey: badgeValue, textStyleRange: [{
                    _obj: "textStyleRange", from: 0, to: Number.MAX_SAFE_INTEGER, textStyle: {
                        _obj: "textStyle",
                        fontPostScriptName: "Roboto-Bold",
                        fontName: "Roboto",
                        fontStyleName: "Bold",
                        size: { _unit: "pointsUnit", _value: 20 },
                        color: { _obj: "RGBColor", red: secondaryRed, green: secondaryGreen, blue: secondaryBlue },
                        tracking: 40,
                        fontCaps: { _enum: "fontCaps", _value: "allCaps" },
                    }
                }]
            }, _isCommand: true
        },
        { _obj: "get", _target: [{ _property: "boundingBox" }, { _ref: "layer", _name: "Badge" },], },


        { _obj: "select", _target: [{ _ref: "layer", _name: "Headline" }], makeVisible: false, layerID: [9101], _options: { dialogOptions: "dontDisplay" } },
        {
            _obj: "set", _target: [{ _ref: "textLayer", _enum: "ordinal", _value: "targetEnum" }],
            to: {
                _obj: "textLayer", textKey: formattedHeadlineValue, textStyleRange: [{
                    _obj: "textStyleRange", from: 0, to: Number.MAX_SAFE_INTEGER,
                    textStyle: {
                        _obj: "textStyle",
                        fontPostScriptName: "Roboto-Light",
                        fontName: "Roboto",
                        fontStyleName: "Light",
                        size: { _unit: "pointsUnit", _value: 50 },
                        color: { _obj: "RGBColor", red: 255, green: 255, blue: 255 },
                        tracking: 0,
                        autoLeading: false,
                        leading: { _unit: "pointsUnit", _value: 50 },
                        impliedLeading: { _unit: "pointsUnit", _value: 50 }
                    }
                }]
            }, _isCommand: true
        },


        { _obj: "select", _target: [{ _ref: "layer", _name: "Subheadline" }], makeVisible: false, layerID: [9100], _options: { dialogOptions: "dontDisplay" } },
        {
            _obj: "set", _target: [{ _ref: "textLayer", _enum: "ordinal", _value: "targetEnum" }],
            to: {
                _obj: "textLayer", textKey: formattedSubHeadlineValue, textStyleRange: [

                    {
                        _obj: "textStyleRange", from: 0, to: Number.MAX_SAFE_INTEGER,
                        textStyle: {
                            _obj: "textStyle",
                            fontPostScriptName: "Roboto-Regular",
                            fontName: "Roboto",
                            fontStyleName: "Regular",
                            size: { _unit: "pointsUnit", _value: 20 },
                            color: { _obj: "RGBColor", red: 255, green: 255, blue: 255 },
                            tracking: 0,
                            autoLeading: false,
                            leading: { _unit: "pointsUnit", _value: 25 },
                            impliedLeading: { _unit: "pointsUnit", _value: 25 }
                        }
                    }]
            }, _isCommand: true
        },
    ];

    const resultBoundingBoxBadge = await batchPlay(changeHeroCopy, {});
    const boundingBoxBadge = resultBoundingBoxBadge[2].boundingBox;
    const headlinePadding = 30;
    const newHeadlinePosition = boundingBoxBadge.height._value + headlinePadding;

    const offsetHeadline = [
        { _obj: "select", _target: [{ _ref: "layer", _name: "Headline" }], makeVisible: false, layerID: [9101], _options: { dialogOptions: "dontDisplay" } },
        { _obj: "move", _target: [{ _ref: "layer", _name: "Headline", }], makeVisible: false, layerID: [9101], to: { _obj: "offset", horizontal: { _unit: "pixelsUnit", _value: 0, }, vertical: { _unit: "pixelsUnit", _value: newHeadlinePosition, } }, _options: { dialogOptions: "dontDisplay" }, },
        { _obj: "get", _target: [{ _property: "boundingBox" }, { _ref: "layer", _name: "Headline" },], },
    ];

    const resultHeadlineBoundingBox = await batchPlay(offsetHeadline, {});
    const boundingBoxHeadline = resultHeadlineBoundingBox[2].boundingBox;
    const subheadlinePadding = headlinePadding + 25;
    const newSubheadlinePosition = boundingBoxBadge.height._value + boundingBoxHeadline.height._value + subheadlinePadding;

    const offsetSubheadline = [
        { _obj: "select", _target: [{ _ref: "layer", _name: "Subheadline" }], makeVisible: false, layerID: [2125], _options: { dialogOptions: "dontDisplay" } },
        { _obj: "move", _target: [{ _ref: "layer", _name: "Subheadline", }], makeVisible: false, layerID: [2125], to: { _obj: "offset", horizontal: { _unit: "pixelsUnit", _value: 0, }, vertical: { _unit: "pixelsUnit", _value: newSubheadlinePosition, } }, _options: { dialogOptions: "dontDisplay" }, },
        { _obj: "get", _target: [{ _property: "boundingBox" }, { _ref: "layer", _name: "Subheadline" },], },
    ];

    const resultSubheadlineBoundingBox = await batchPlay(offsetSubheadline, {});
    const boundingBoxSubheadline = resultSubheadlineBoundingBox[2].boundingBox;

    const changeCtaCopy = [
        { _obj: "select", _target: [{ _ref: "layer", _name: "CTA Copy" }], makeVisible: false, layerID: [11492], _options: { dialogOptions: "dontDisplay" } },
        { _obj: "set", _target: [{ _ref: "textLayer", _enum: "ordinal", _value: "targetEnum" }], to: { _obj: "textLayer", textKey: heroCtaValue } },
        { _obj: "get", _target: [{ _property: "boundingBox" }, { _ref: "layer", _name: "CTA Copy" },], },
    ]

    const resultCtaCopyBoundingBox = await batchPlay(changeCtaCopy, {});
    const boundingBoxCtaCopy = resultCtaCopyBoundingBox[2].boundingBox;
    const newBorderCta = boundingBoxCtaCopy.width._value + 20;

    const resizeCtaBorder = [
        { _obj: "select", _target: [{ _ref: "layer", _name: "CTA Border" }], makeVisible: false, layerID: [9616], _options: { dialogOptions: "dontDisplay" } },

        { _obj: "transform", _target: [{ _ref: "path", _enum: "ordinal", _value: "targetEnum" }], freeTransformCenterState: { _enum: "quadCenterState", _value: "QCSAverage" }, offset: { _obj: "offset", horizontal: { _unit: "pixelsUnit", _value: 0 }, vertical: { _unit: "pixelsUnit", _value: 0 } }, width: { _unit: "pixelsUnit", _value: newBorderCta }, },

        { _obj: "select", _target: [{ _ref: "layer", _name: "CTA" }], makeVisible: false, layerID: [9618], _options: { dialogOptions: "dontDisplay" } },

        { _obj: "select", _target: [{ _ref: "layer", _name: "CTA Border" }], selectionModifier: { _enum: "selectionModifierType", _value: "addToSelectionContinuous" }, makeVisible: false, layerID: [9616, 9617, 9618], _options: { dialogOptions: "dontDisplay" } },

        { _obj: "newPlacedLayer", _options: { dialogOptions: "dontDisplay" } },
    ]
    await batchPlay(resizeCtaBorder, {});

    const ctaPadding = subheadlinePadding + 40;
    const newCtaPosition = boundingBoxBadge.height._value + boundingBoxHeadline.height._value + boundingBoxSubheadline.height._value + ctaPadding;

    const offsetCta = [
        { _obj: "select", _target: [{ _ref: "layer", _name: "CTA" }], makeVisible: false, layerID: [9845], _options: { dialogOptions: "dontDisplay" } },
        { _obj: "move", _target: [{ _ref: "layer", _name: "CTA", }], makeVisible: false, layerID: [9845], to: { _obj: "offset", horizontal: { _unit: "pixelsUnit", _value: 0, }, vertical: { _unit: "pixelsUnit", _value: newCtaPosition, } }, _options: { dialogOptions: "dontDisplay" }, },
        { _obj: "get", _target: [{ _property: "bounds" }, { _ref: "layer", _name: "CTA" },], },
    ];

    const resultCtaBoundingBox = await batchPlay(offsetCta, {});
    const boundingBoxCta = resultCtaBoundingBox[2].bounds;
    const finalCropValue = boundingBoxCta.bottom._value + 40;

    const finalCrop = [
        { _obj: "make", _target: [{ _ref: "contentLayer" }], using: { _obj: "contentLayer", type: { _obj: "solidColorLayer", color: { _obj: "RGBColor", red: accentRed, grain: accentGreen, blue: accentBlue } }, shape: { _obj: "rectangle", unitValueQuadVersion: 1, top: { _unit: "pixelsUnit", _value: 0 }, left: { _unit: "pixelsUnit", _value: 0 }, bottom: { _unit: "pixelsUnit", _value: finalCropValue }, right: { _unit: "pixelsUnit", _value: 600 }, topRight: { _unit: "pixelsUnit", _value: 0 }, topLeft: { _unit: "pixelsUnit", _value: 0 }, bottomLeft: { _unit: "pixelsUnit", _value: 0 }, bottomRight: { _unit: "pixelsUnit", _value: 0 } }, }, layerID: 9901, _options: { dialogOptions: "dontDisplay" } },

        { _obj: "select", _target: [{ _ref: "layer", _name: "Rectangle 1" }], makeVisible: false, layerID: [9891], _options: { dialogOptions: "dontDisplay" } },
        { _obj: "set", _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }], to: { _obj: "layer", name: "Background" }, _options: { dialogOptions: "dontDisplay" } },
        { _obj: "move", _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }], to: { _ref: "layer", _index: 0 }, adjustment: false, version: 5, layerID: [9891], _options: { dialogOptions: "dontDisplay" } },

        { _obj: "select", _target: [{ _ref: "cropTool" }], _options: { dialogOptions: "dontDisplay" } },
        { _obj: "select", _target: [{ _ref: "moveTool" }], _options: { dialogOptions: "dontDisplay" } },
        { _obj: "crop", to: { _obj: "rectangle", top: { _unit: "pixelsUnit", _value: 0 }, left: { _unit: "pixelsUnit", _value: 0 }, bottom: { _unit: "pixelsUnit", _value: finalCropValue }, right: { _unit: "pixelsUnit", _value: 600 } }, angle: { _unit: "angleUnit", _value: 0 }, delete: true, AutoFillMethod: 1, cropFillMode: { _enum: "cropFillMode", _value: "defaultFill" }, cropAspectRatioModeKey: { _enum: "cropAspectRatioModeClass", _value: "pureAspectRatio" }, constrainProportions: false, _options: { dialogOptions: "dontDisplay" } }
    ]

    await batchPlay(finalCrop, {});
}



