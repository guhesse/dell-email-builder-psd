import { batchPlay } from "../App.js";
import limitCharsPerLine from '../hook/charLimiter.jsx';
import { selectLayer, setFontStyle, setSolidFill, setOverlayColor, getBounds, makeSolid, setFinalCrop, setOffset, makeSmartObj, selectGroup, setCTABorder } from "../hook/hooksJSON.jsx";
import { getBoundsAndPosition } from "../hook/getBoundsAndPosition.jsx";

export default async function Hero1Product(accentRed, accentGreen, accentBlue, secondaryRed, secondaryGreen, secondaryBlue, tertiaryRed, tertiaryGreen, tertiaryBlue, badgeValue, headlineValue, OTValue, subHeadlineValue, productNameValue, heroCtaValue) {

    headlineValue = await limitCharsPerLine(
        headlineValue || "", 20, "capitalized"
    );

    subHeadlineValue = await limitCharsPerLine(
        subHeadlineValue || "", 55, "capitalized"
    );

    productNameValue = await limitCharsPerLine(
        productNameValue || "", 13, "capitalized"
    );

    OTValue = await limitCharsPerLine(
        OTValue || "", 55, "capitalized"
    );

    const changeColors = [

        selectLayer({
            Name: "Pattern"
        }),

        setOverlayColor({
            Name: "Pattern",
            RedColor: tertiaryRed,
            GreenColor: tertiaryGreen,
            BlueColor: tertiaryBlue
        }),

    ];

    await batchPlay(changeColors, {});

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
            Name: "OT",
            Value: OTValue,
            FontName: "Roboto",
            FontWeight: "Light",
            Size: 27,
            RedColor: 255,
            GreenColor: 255,
            BlueColor: 255,
            FontCaps: false,
            AutoLeading: false,
            Leading: 27,
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

        setFontStyle({
            Name: "Product Copy",
            Value: productNameValue,
            FontName: "Roboto",
            FontWeight: "Light",
            Size: 23,
            RedColor: 255,
            GreenColor: 255,
            BlueColor: 255,
            FontCaps: false,
            AutoLeading: false,
            Leading: 23,
        }),

    ];

    const { position: newHeadlinePosition } = await getBoundsAndPosition(changeHeroCopy, "boundingBox", 1, "height", 30);

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
        })
    ];

    const { position: baseOTPosition } = await getBoundsAndPosition(offsetHeadline, "boundingBox", 2, "height", 30);
    const newOTPosition = baseOTPosition + newHeadlinePosition

    const offsetOT = [
        selectLayer({
            Name: "OT"
        }),
        setOffset({
            Name: "OT",
            Vertical: newOTPosition,
        }),
        getBounds({
            Name: "OT"
        })
    ];

    const { position: baseProductPosition } = await getBoundsAndPosition(offsetOT, "boundingBox", 2, "height", -10);
    const newProductPosition = baseProductPosition + newOTPosition

    const offsetProduct = [
        selectGroup({
            FirstName: "Product",
            LastName: "Product Copy"
        }),
        makeSmartObj(),
        selectLayer({
            Name: "Product"
        }),
        setOffset({
            Name: "Product",
            Vertical: newProductPosition
        }),
        getBounds({
            Name: "Product",
            Property: "bounds"
        })
    ];

    const { position: baseSubheadlinePosition } = await getBoundsAndPosition(offsetProduct, "bounds", 4, "height", 70);
    const newSubheadlinePosition = baseSubheadlinePosition + newProductPosition

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
        })
    ];

    const { position: baseCtaPosition } = await getBoundsAndPosition(offsetSubheadline, "boundingBox", 2, "height", 75);
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

        setCTABorder({
            Width: newCtaWidth
        }),

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
        })
    ];

    const { position: finalCropValue } = await getBoundsAndPosition(offsetCta, "bounds", 2, "bottom", 40);

    const makeBackground = makeSolid({
        Name: "Background",
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



