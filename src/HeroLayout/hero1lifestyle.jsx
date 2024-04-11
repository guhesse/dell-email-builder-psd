import { batchPlay } from "../App.js";
import limitCharsPerLine from '../hook/charLimiter.jsx';
import { selectLayer, selectGroup, makeSmartObj, setFontStyle, getBounds, setOffset, setSolidFill, setOverlayColor, setCTABorder, makeSolid, setFinalCrop } from "../hook/hooksJSON.jsx";
import { getBoundsAndPosition } from "../hook/getBoundsAndPosition.jsx";

export default async function Hero1Lifestyle(accentRed, accentGreen, accentBlue, secondaryRed, secondaryGreen, secondaryBlue, tertiaryRed, tertiaryGreen, tertiaryBlue, badgeValue, headlineValue, subHeadlineValue, heroCtaValue) {

    headlineValue = await limitCharsPerLine(
        headlineValue || "", 20, "capitalized"
    );

    subHeadlineValue = await limitCharsPerLine(
        subHeadlineValue || "", 55, "capitalized"
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
            Name: "Hero CTA Copy",
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
            Name: "Hero CTA Copy"
        }),
    ]

    const { position: newCtaWidth } = await getBoundsAndPosition(changeCtaCopy, "boundingBox", 1, "width", 15);

    const changeCtaBorder = [
        setSolidFill({
            Name: "Hero CTA Border",
            RedColor: tertiaryRed,
            GreenColor: tertiaryGreen,
            BlueColor: tertiaryBlue,
        }),
        selectLayer({
            Name: "Hero CTA Border"
        }),
        setCTABorder({
            Width: newCtaWidth
        }),
        selectGroup({
            FirstName: "Hero CTA",
            LastName: "Hero CTA Border"
        }),
        makeSmartObj()
    ]

    await batchPlay(changeCtaBorder, {});

    const offsetCta = [
        selectLayer({
            Name: "Hero CTA"
        }),
        setOffset({
            Name: "Hero CTA",
            Vertical: newCtaPosition,
        }),
        getBounds({
            Name: "Hero CTA",
            Property: "bounds"
        }),
    ];

    const { position: finalCropValue } = await getBoundsAndPosition(offsetCta, "bounds", 2, "bottom", 40);

    const makeBackground = makeSolid({
        Name: "Hero Background",
        RedColor: accentRed,
        GreenColor: accentGreen,
        BlueColor: accentBlue,
        Bottom: finalCropValue,
        Right: 600,
    })
    await batchPlay(makeBackground, {})

    const finalCrop = setFinalCrop({
        Bottom: finalCropValue,
    })
    await batchPlay(finalCrop, {});
}