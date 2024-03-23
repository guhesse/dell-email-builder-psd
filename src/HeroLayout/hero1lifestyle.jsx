import { batchPlay } from "../App.js";
import limitCharsPerLine from '../hook/charLimiter.jsx';
import { selectLayer, selectGroup, makeSmartObj, setFontStyle, getBounds, setOffset, setSolidFill, setOverlayColor } from "../hook/hooksJSON.jsx";
import { getBoundsAndPosition } from "../hook/getBoundsAndPosition.jsx";

export default async function Hero1Lifestyle(accentRed, accentGreen, accentBlue, secondaryRed, secondaryGreen, secondaryBlue, tertiaryRed, tertiaryGreen, tertiaryBlue, badgeValue, headlineValue, subHeadlineValue, heroCtaValue) {

    headlineValue = await limitCharsPerLine(
        headlineValue || '', 20, "capitalized"
    );

    subHeadlineValue = await limitCharsPerLine(
        subHeadlineValue || '', 55, "capitalized"
    );


    const setPatternColor = [
        setOverlayColor({
            Name: "Pattern",
            RedColor: secondaryRed,
            GreenColor: secondaryGreen,
            BlueColor: secondaryBlue,
        }),
    ]

    await batchPlay(setPatternColor, {});

    const changeHeroCopy = [
        setFontStyle({
            Name: "Badge",
            Value: badgeValue,
            FontName: "Roboto",
            FontWeight: "Bold",
            Size: 20,
            RedColor: secondaryRed,
            GreenColor: secondaryGreen,
            BlueColor: secondaryBlue,
            FontCaps: true,
        }),

        getBounds({
            Name: "Badge",
        }),

        setFontStyle({
            Name: "Headline",
            Value: headlineValue,
            FontName: "Roboto",
            FontWeight: "Light",
            Size: 50,
            RedColor: 255,
            GreenColor: 255,
            BlueColor: 255,
            FontCaps: false,
            AutoLeading: false,
            Leading: 50,
        }),

        setFontStyle({
            Name: "Subheadline",
            Value: subHeadlineValue,
            FontName: "Roboto",
            FontWeight: "Regular",
            Size: 20,
            RedColor: 255,
            GreenColor: 255,
            BlueColor: 255,
            FontCaps: false,
            AutoLeading: false,
            Leading: 25,
        }),

    ];

    const { position: newHeadlinePosition } = await getBoundsAndPosition(changeHeroCopy, "boundingBox", 1, "height", 35);

    const offsetHeadline = [
        selectLayer({
            Name: "Headline"
        }),
        setOffset({
            Name: "Headline",
            Vertical: newHeadlinePosition,
        }),
        getBounds({
            Name: "Headline"
        }),
    ];

    const { position: newSubheadlinePosition } = await getBoundsAndPosition(offsetHeadline, "boundingBox", 2, "height", 70);

    const offsetSubheadline = [
        selectLayer({
            Name: "Subheadline"
        }),
        setOffset({
            Name: "Subheadline",
            Vertical: newSubheadlinePosition,
        }),
        getBounds({
            Name: "Subheadline"
        }),
    ];

    const { position: baseCtaPosition } = await getBoundsAndPosition(offsetSubheadline, "boundingBox", 2, "height", 40);
    const newCtaPosition = baseCtaPosition + newSubheadlinePosition

    const changeCtaCopy = [
        setFontStyle({
            Name: "CTA Copy",
            Value: heroCtaValue,
            FontName: "Roboto",
            FontWeight: "Medium",
            Size: 18,
            RedColor: accentRed,
            GreenColor: accentGreen,
            BlueColor: accentBlue,
            FontCaps: false,
            AutoLeading: true,
        }),
        getBounds({
            Name: "CTA Copy"
        }),
    ]

    const { position: newCtaWidth } = await getBoundsAndPosition(changeCtaCopy, "boundingBox", 1, "width", 15);

    const changeCtaBorder = [
        setSolidFill({
            Name: "CTA Border",
            RedColor: tertiaryRed,
            GreenColor: tertiaryGreen,
            BlueColor: tertiaryBlue,
        }),
        selectLayer({
            Name: "CTA Border"
        }),
        {
            _obj: "transform", _target: [{ _ref: "path", _enum: "ordinal", _value: "targetEnum" }],
            freeTransformCenterState: { _enum: "quadCenterState", _value: "QCSAverage" },
            offset: {
                _obj: "offset", horizontal: { _unit: "pixelsUnit", _value: 0 },
                vertical: { _unit: "pixelsUnit", _value: 0 }
            },
            width: { _unit: "pixelsUnit", _value: newCtaWidth },
        },
        selectGroup({
            FirstName: "CTA",
            LastName: "CTA Border"
        }),
        makeSmartObj()
    ]

    await batchPlay(changeCtaBorder, {});

    const offsetCta = [
        selectLayer({
            Name: "CTA"
        }),
        setOffset({
            Name: "CTA",
            Vertical: newCtaPosition,
        }),
        getBounds({
            Name: "CTA",
            Property: "bounds"
        }),
    ];

    const { position: finalCropValue } = await getBoundsAndPosition(offsetCta, "bounds", 2, "bottom", 40);

    const finalCrop = [
        {
            _obj: "make", _target: [{ _ref: "contentLayer" }],
            using: {
                _obj: "contentLayer", type: {
                    _obj: "solidColorLayer",
                    color: { _obj: "RGBColor", red: accentRed, grain: accentGreen, blue: accentBlue }
                },
                shape: {
                    _obj: "rectangle", unitValueQuadVersion: 1,
                    top: { _unit: "pixelsUnit", _value: 0 },
                    left: { _unit: "pixelsUnit", _value: 0 },
                    bottom: { _unit: "pixelsUnit", _value: finalCropValue },
                    right: { _unit: "pixelsUnit", _value: 600 },
                    topRight: { _unit: "pixelsUnit", _value: 0 },
                    topLeft: { _unit: "pixelsUnit", _value: 0 },
                    bottomLeft: { _unit: "pixelsUnit", _value: 0 },
                    bottomRight: { _unit: "pixelsUnit", _value: 0 }
                },
            }, layerID: 9901, _options: { dialogOptions: "dontDisplay" }
        },

        {
            _obj: "select",
            _target: [{ _ref: "layer", _name: "Rectangle 1" }],
            makeVisible: false, layerID: [9891],
            _options: { dialogOptions: "dontDisplay" }
        },
        {
            _obj: "set",
            _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }],
            to: { _obj: "layer", name: "Background" },
            _options: { dialogOptions: "dontDisplay" }
        },

        {
            _obj: "move", _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }],
            to: { _ref: "layer", _index: 0 }, adjustment: false, version: 5, layerID: [9891], _options: { dialogOptions: "dontDisplay" }
        },

        { _obj: "select", _target: [{ _ref: "cropTool" }], _options: { dialogOptions: "dontDisplay" } },
        { _obj: "select", _target: [{ _ref: "moveTool" }], _options: { dialogOptions: "dontDisplay" } },

        {
            _obj: "crop", to: {
                _obj: "rectangle",
                top: { _unit: "pixelsUnit", _value: 0 },
                left: { _unit: "pixelsUnit", _value: 0 },
                bottom: { _unit: "pixelsUnit", _value: finalCropValue },
                right: { _unit: "pixelsUnit", _value: 600 }
            },
            angle: { _unit: "angleUnit", _value: 0 },
            delete: true,
            AutoFillMethod: 1,
            cropFillMode: { _enum: "cropFillMode", _value: "defaultFill" },
            cropAspectRatioModeKey: {
                _enum: "cropAspectRatioModeClass",
                _value: "pureAspectRatio"
            },
            constrainProportions: false,
            _options: { dialogOptions: "dontDisplay" }
        }
    ]

    await batchPlay(finalCrop, {});
}