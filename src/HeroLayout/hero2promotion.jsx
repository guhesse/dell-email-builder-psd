import { batchPlay } from "../App.js";
import limitCharsPerLine from '../hook/charLimiter.jsx';

export default async function Hero2Promotion(accentRed, accentGreen, accentBlue, badgeValue, headlineValue, OTValue, subHeadlineValue, inlinePromoValue, productNameValue, priceValue, specsValue, heroCtaValue) {

    function formatHeadlineCopy(text) {
        return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    }

    // Certifique-se de ter acesso a headlineValue e subHeadlineValue
    const formattedHeadlineValue = limitCharsPerLine(
        headlineValue ? formatHeadlineCopy(headlineValue) : '',
        20
    );
    const formattedSubHeadlineValue = limitCharsPerLine(subHeadlineValue || '', 55);

    const batchChangeColor = [
        { _obj: "select", _target: [{ _ref: "layer", _name: "Badge" }], makeVisible: false, layerID: [2125], _options: { dialogOptions: "dontDisplay" }, },
        { _obj: "set", _target: [{ _ref: "property", _property: "textStyle" }, { _ref: "textLayer", _enum: "ordinal", _value: "targetEnum" },], to: { _obj: "textStyle", color: { _obj: "RGBColor", red: accentRed, grain: accentGreen, blue: accentBlue }, }, _options: { dialogOptions: "dontDisplay" }, },
    ];

    await batchPlay(batchChangeColor, {});

    const ChangeHeroCopy = [
        { _obj: "select", _target: [{ _ref: "layer", _name: "Badge" }], makeVisible: false, layerID: [2125], _options: { dialogOptions: "dontDisplay" } },
        { _obj: "set", _target: [{ _ref: "textLayer", _enum: "ordinal", _value: "targetEnum" }], to: { _obj: "textLayer", textKey: badgeValue, } },
        { _obj: "get", _target: [{ _property: "boundingBox" }, { _ref: "layer", _name: "Badge" },], },
        { _obj: "select", _target: [{ _ref: "layer", _name: "Headline" }], makeVisible: false, layerID: [2125], _options: { dialogOptions: "dontDisplay" } },
        { _obj: "set", _target: [{ _ref: "textLayer", _enum: "ordinal", _value: "targetEnum" }], to: { _obj: "textLayer", textKey: formattedHeadlineValue, } },
        { _obj: "select", _target: [{ _ref: "layer", _name: "Subheadline" }], makeVisible: false, layerID: [2125], _options: { dialogOptions: "dontDisplay" } },
        { _obj: "set", _target: [{ _ref: "textLayer", _enum: "ordinal", _value: "targetEnum" }], to: { _obj: "textLayer", textKey: formattedSubHeadlineValue, } },
    ];

    const resultBoundingBoxBadge = await batchPlay(ChangeHeroCopy, {});
    const boundingBoxBadge = resultBoundingBoxBadge[2].boundingBox;
    const headlinePadding = 30;
    const newHeadlinePosition = boundingBoxBadge.height._value + headlinePadding;

    const offsetHeadline = [
        { _obj: "select", _target: [{ _ref: "layer", _name: "Headline" }], makeVisible: false, layerID: [2125], _options: { dialogOptions: "dontDisplay" } },
        { _obj: "move", _target: [{ _ref: "layer", _name: "Headline", }], makeVisible: false, layerID: [2125], to: { _obj: "offset", horizontal: { _unit: "pixelsUnit", _value: 0, }, vertical: { _unit: "pixelsUnit", _value: newHeadlinePosition, } }, _options: { dialogOptions: "dontDisplay" }, },
        { _obj: "get", _target: [{ _property: "boundingBox" }, { _ref: "layer", _name: "Headline" },], },
    ];

    const resultHeadlineBoundingBox = await batchPlay(offsetHeadline, {});
    const boundingBoxHeadline = resultHeadlineBoundingBox[2].boundingBox;
    const subheadlinePadding = headlinePadding + 30;
    const newSubheadlinePosition = boundingBoxBadge.height._value + boundingBoxHeadline.height._value + subheadlinePadding;


    const offsetSubheadline = [
        { _obj: "select", _target: [{ _ref: "layer", _name: "Subheadline" }], makeVisible: false, layerID: [2125], _options: { dialogOptions: "dontDisplay" } },
        { _obj: "move", _target: [{ _ref: "layer", _name: "Subheadline", }], makeVisible: false, layerID: [2125], to: { _obj: "offset", horizontal: { _unit: "pixelsUnit", _value: 0, }, vertical: { _unit: "pixelsUnit", _value: newSubheadlinePosition, } }, _options: { dialogOptions: "dontDisplay" }, },
        { _obj: "get", _target: [{ _property: "boundingBox" }, { _ref: "layer", _name: "Subheadline" },], },
    ];

    const resultSubheadlineBoundingBox = await batchPlay(offsetSubheadline, {});
    const boundingBoxSubheadline = resultSubheadlineBoundingBox[2].boundingBox;
    const productPadding = subheadlinePadding + 40;
    const newProductPosition = boundingBoxBadge.height._value + boundingBoxHeadline.height._value + boundingBoxSubheadline.height._value + productPadding;

    var specsCopy = ""

    if (priceValue === "XXX") {
        var specsCopy = inlinePromoValue + "\r" + productNameValue + "\r" + "R$" + priceValue + "xx" + "\r" + specsValue;
    } else {
        var specsCopy = inlinePromoValue + "\r" + productNameValue + "\r" + "R$" + priceValue + "00" + "\r" + specsValue;
    }


    const specsCopyChange = [
        { _obj: "select", _target: [{ _ref: "layer", _name: "Specs" }], makeVisible: false, layerID: [9906], _options: { dialogOptions: "dontDisplay" } },

        {
            _obj: "set", _target: [{ _ref: "textLayer", _enum: "ordinal", _value: "targetEnum" }], to: {
                _obj: "textLayer", textKey: specsCopy, textStyleRange: [

                    { _obj: "textStyleRange", from: 0, to: inlinePromoValue.length + 1, textStyle: { _obj: "textStyle", fontPostScriptName: "Arial-BoldMT", fontName: "Arial", fontStyleName: "Bold", size: { _unit: "pointsUnit", _value: 14 }, tracking: 30, fontCaps: { _enum: "fontCaps", _value: "allCaps" }, color: { _obj: "RGBColor", red: 68, green: 68, blue: 68 } } },

                    { _obj: "textStyleRange", from: inlinePromoValue.length + 1, to: inlinePromoValue.length + productNameValue.length + 2, textStyle: { _obj: "textStyle", fontPostScriptName: "Arial-BoldMT", fontName: "Arial", fontStyleName: "Bold", size: { _unit: "pointsUnit", _value: 16 }, tracking: 30, baselineShift: { _unit: "pointsUnit", _value: -3.3285999298095703 }, impliedBaselineShift: { _unit: "pointsUnit", _value: -4.000004329476243 }, color: { _obj: "RGBColor", red: 68, green: 68, blue: 68 } } },

                    { _obj: "textStyleRange", from: inlinePromoValue.length + productNameValue.length + 2, to: inlinePromoValue.length + productNameValue.length + 4, textStyle: { _obj: "textStyle", fontPostScriptName: "Arial-BoldMT", fontName: "Arial", fontStyleName: "Bold", baseline: { _enum: "baseline", _value: "superScript" }, baselineShift: { _unit: "pointsUnit", _value: 2.4964499473571777 }, impliedBaselineShift: { _unit: "pointsUnit", _value: 3.0000032471071827 }, size: { _unit: "pointsUnit", _value: 25 }, color: { _obj: "RGBColor", red: 68, green: 68, blue: 68 } } },

                    { _obj: "textStyleRange", from: inlinePromoValue.length + productNameValue.length + 4, to: inlinePromoValue.length + productNameValue.length + 4 + priceValue.length, textStyle: { _obj: "textStyle", fontPostScriptName: "Arial-BoldMT", fontName: "Arial", fontStyleName: "Bold", size: { _unit: "pointsUnit", _value: 25 }, baselineShift: { _unit: "pointsUnit", _value: 2.4964499473571777 }, impliedBaselineShift: { _unit: "pointsUnit", _value: 3.0000032471071827 }, color: { _obj: "RGBColor", red: 68, green: 68, blue: 68 } } },

                    { _obj: "textStyleRange", from: inlinePromoValue.length + productNameValue.length + 4 + priceValue.length, to: inlinePromoValue.length + productNameValue.length + 4 + priceValue.length + 2, textStyle: { _obj: "textStyle", fontPostScriptName: "Arial-BoldMT", fontName: "Arial", fontStyleName: "Bold", baseline: { _enum: "baseline", _value: "superScript" }, baselineShift: { _unit: "pointsUnit", _value: 2.4964499473571777 }, impliedBaselineShift: { _unit: "pointsUnit", _value: 3.0000032471071827 }, size: { _unit: "pointsUnit", _value: 25 }, color: { _obj: "RGBColor", red: 68, green: 68, blue: 68 } } },

                    { _obj: "textStyleRange", from: inlinePromoValue.length + productNameValue.length + 4 + priceValue.length + 3, to: inlinePromoValue.length + productNameValue.length + 4 + priceValue.length + 3 + specsValue.length, textStyle: { _obj: "textStyle", fontPostScriptName: "ArialMT", fontName: "Arial", fontStyleName: "Regular", size: { _unit: "pointsUnit", _value: 11 }, leading: { _unit: "pointsUnit", _value: 10.817939758300781 }, impliedLeading: { _unit: "pointsUnit", _value: 13.000002037400721 }, tracking: 30, baselineShift: { _unit: "pointsUnit", _value: -4.992889881134033 }, impliedBaselineShift: { _unit: "pointsUnit", _value: -5.9999944608172955 }, color: { _obj: "RGBColor", red: 68, green: 68, blue: 68 } } },
                ]
            },

            _isCommand: true
        },
    ];


    await batchPlay(specsCopyChange, {});

    const offsetProduct = [
        { _obj: "select", _target: [{ _ref: "layer", _name: "Product" }], makeVisible: false, layerID: [9790], _options: { dialogOptions: "dontDisplay" } },
        { _obj: "select", _target: [{ _ref: "layer", _name: "Specs" }], selectionModifier: { _enum: "selectionModifierType", _value: "addToSelectionContinuous" }, makeVisible: false, layerID: [9780, 9781, 9782, 9783, 9784, 9787, 9788, 9789, 9785, 9790], _options: { dialogOptions: "dontDisplay" } },
        { _obj: "newPlacedLayer", _options: { dialogOptions: "dontDisplay" } },
        { _obj: "select", _target: [{ _ref: "layer", _name: "Product" }], makeVisible: false, layerID: [9834], _options: { dialogOptions: "dontDisplay" } },
        { _obj: "move", _target: [{ _ref: "layer", _name: "Product", }], makeVisible: false, layerID: [9834], to: { _obj: "offset", horizontal: { _unit: "pixelsUnit", _value: 0, }, vertical: { _unit: "pixelsUnit", _value: newProductPosition, } }, _options: { dialogOptions: "dontDisplay" }, },
        { _obj: "get", _target: [{ _property: "bounds" }, { _ref: "layer", _name: "Product" },], },
    ];

    const resultProductBoundingBox = await batchPlay(offsetProduct, {});
    const boundingBoxProduct = resultProductBoundingBox[5].bounds;

    const changeCtaCopy = [
        { _obj: "select", _target: [{ _ref: "layer", _name: "CTA Copy" }], makeVisible: false, layerID: [9628], _options: { dialogOptions: "dontDisplay" } },
        {
            _obj: "set", _target: [{ _ref: "textLayer", _enum: "ordinal", _value: "targetEnum" }],
            to: {
                _obj: "textLayer", textKey: heroCtaValue, textStyleRange: [

                    {
                        _obj: "textStyleRange", from: 0, to: Number.MAX_SAFE_INTEGER,
                        textStyle: {
                            _obj: "textStyle",
                            fontPostScriptName: "Roboto-Medium",
                            fontName: "Roboto",
                            fontStyleName: "Medium",
                            size: { _unit: "pointsUnit", _value: 18 },
                            color: { _obj: "RGBColor", red: 68, green: 68, blue: 68 },
                            tracking: 0,
                            autoLeading: true,
                        }
                    }]
            }, _isCommand: true
        },
        { _obj: "get", _target: [{ _property: "boundingBox" }, { _ref: "layer", _name: "CTA Copy" },], },
    ]

    const resultCtaCopyBoundingBox = await batchPlay(changeCtaCopy, {});
    const boundingBoxCtaCopy = resultCtaCopyBoundingBox[2].boundingBox;
    const newBorderCta = boundingBoxCtaCopy.width._value;

    const resizeCtaBorder = [
        { _obj: "select", _target: [{ _ref: "layer", _name: "CTA Border" }], makeVisible: false, layerID: [9923], _options: { dialogOptions: "dontDisplay" } },

        { _obj: "transform", _target: [{ _ref: "path", _enum: "ordinal", _value: "targetEnum" }], freeTransformCenterState: { _enum: "quadCenterState", _value: "QCSAverage" }, offset: { _obj: "offset", horizontal: { _unit: "pixelsUnit", _value: 0 }, vertical: { _unit: "pixelsUnit", _value: 0 } }, width: { _unit: "pixelsUnit", _value: newBorderCta }, },

        { _obj: "select", _target: [{ _ref: "layer", _name: "CTA" }], makeVisible: false, layerID: [9630], _options: { dialogOptions: "dontDisplay" } },

        { _obj: "select", _target: [{ _ref: "layer", _name: "CTA Border" }], selectionModifier: { _enum: "selectionModifierType", _value: "addToSelectionContinuous" }, makeVisible: false, layerID: [9923, 9628, 9630], _options: { dialogOptions: "dontDisplay" } },

        { _obj: "newPlacedLayer", _options: { dialogOptions: "dontDisplay" } },
    ]
    await batchPlay(resizeCtaBorder, {});


    const ctaPadding = productPadding + 30;
    const newCtaPosition = boundingBoxBadge.height._value + boundingBoxHeadline.height._value + boundingBoxSubheadline.height._value + boundingBoxProduct.height._value + ctaPadding;

    const offsetCta = [
        { _obj: "select", _target: [{ _ref: "layer", _name: "CTA" }], makeVisible: false, layerID: [9845], _options: { dialogOptions: "dontDisplay" } },
        { _obj: "move", _target: [{ _ref: "layer", _name: "CTA", }], makeVisible: false, layerID: [9845], to: { _obj: "offset", horizontal: { _unit: "pixelsUnit", _value: 0, }, vertical: { _unit: "pixelsUnit", _value: newCtaPosition, } }, _options: { dialogOptions: "dontDisplay" }, },
        { _obj: "get", _target: [{ _property: "bounds" }, { _ref: "layer", _name: "CTA" },], },
    ];

    const resultCtaBoundingBox = await batchPlay(offsetCta, {});
    const boundingBoxCta = resultCtaBoundingBox[2].bounds;
    const finalCropValue = boundingBoxCta.bottom._value + 30;

    const finalCrop = [
        { _obj: "make", _target: [{ _ref: "contentLayer" }], using: { _obj: "contentLayer", type: { _obj: "solidColorLayer", color: { _obj: "RGBColor", red: 255, grain: 255, blue: 255 } }, shape: { _obj: "rectangle", unitValueQuadVersion: 1, top: { _unit: "pixelsUnit", _value: 0 }, left: { _unit: "pixelsUnit", _value: 0 }, bottom: { _unit: "pixelsUnit", _value: finalCropValue }, right: { _unit: "pixelsUnit", _value: 600 }, topRight: { _unit: "pixelsUnit", _value: 0 }, topLeft: { _unit: "pixelsUnit", _value: 0 }, bottomLeft: { _unit: "pixelsUnit", _value: 0 }, bottomRight: { _unit: "pixelsUnit", _value: 0 } }, }, layerID: 9901, _options: { dialogOptions: "dontDisplay" } },
        { _obj: "select", _target: [{ _ref: "layer", _name: "Rectangle 1" }], makeVisible: false, layerID: [9891], _options: { dialogOptions: "dontDisplay" } },
        { _obj: "set", _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }], to: { _obj: "layer", name: "Background" }, _options: { dialogOptions: "dontDisplay" } },
        { _obj: "move", _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }], to: { _ref: "layer", _index: 0 }, adjustment: false, version: 5, layerID: [9891], _options: { dialogOptions: "dontDisplay" } }, { _obj: "select", _target: [{ _ref: "cropTool" }], _options: { dialogOptions: "dontDisplay" } },
        { _obj: "select", _target: [{ _ref: "moveTool" }], _options: { dialogOptions: "dontDisplay" } },
        { _obj: "crop", to: { _obj: "rectangle", top: { _unit: "pixelsUnit", _value: 0 }, left: { _unit: "pixelsUnit", _value: 0 }, bottom: { _unit: "pixelsUnit", _value: finalCropValue }, right: { _unit: "pixelsUnit", _value: 600 } }, angle: { _unit: "angleUnit", _value: 0 }, delete: true, AutoFillMethod: 1, cropFillMode: { _enum: "cropFillMode", _value: "defaultFill" }, cropAspectRatioModeKey: { _enum: "cropAspectRatioModeClass", _value: "pureAspectRatio" }, constrainProportions: false, _options: { dialogOptions: "dontDisplay" } }
    ]

    await batchPlay(finalCrop, {});

};

