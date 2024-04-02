import { batchPlay } from "../App.js";
import limitCharsPerLine from '../hook/charLimiter.jsx';
import { selectLayer, setFontStyle, setOverlayColor, setSolidFill, getBounds, setOffset, selectGroup, alignGroupY, makeSmartObj, makeSolid, setTwoFontStyle, setCTABorder, setFinalCrop } from "../hook/hooksJSON.jsx";
import { getBoundsAndPosition } from "../hook/getBoundsAndPosition.jsx";

export default async function Hero1LifestyleProduct(accentRed, accentGreen, accentBlue, secondaryRed, secondaryGreen, secondaryBlue, tertiaryRed, tertiaryGreen, tertiaryBlue, badgeValue, headlineValue, subHeadlineValue, inlinePromoValue, productNameValue, productSuperchargerValue, heroCtaValue) {

    headlineValue = await limitCharsPerLine(
        headlineValue || "", 20, "capitalized"
    );

    subHeadlineValue = await limitCharsPerLine(
        subHeadlineValue || "", 55, "capitalized"
    );

    productNameValue = await limitCharsPerLine(
        productNameValue || "Product Name", 13, "capitalized"
    );

    productSuperchargerValue = await limitCharsPerLine(
        productSuperchargerValue || "Supercharger", 13, "capitalized"
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
        })
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

    const { position: baseLifestylePosition } = await getBoundsAndPosition(offsetHeadline, "boundingBox", 2, "height", 30);
    const newLifestylePosition = baseLifestylePosition + newHeadlinePosition

    const offsetLifestyle = [
        selectLayer({
            Name: "Lifestyle"
        }),
        setOffset({
            Name: "Lifestyle",
            Vertical: newLifestylePosition
        }),
        getBounds({
            Name: "Lifestyle",
            Property: "bounds"
        })
    ];

    const { position: baseSubheadlinePosition } = await getBoundsAndPosition(offsetLifestyle, "bounds", 2, "height", 40);
    const newSubheadlinePosition = baseSubheadlinePosition + newLifestylePosition

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

    const { position: baseProductPosition } = await getBoundsAndPosition(offsetSubheadline, "boundingBox", 2, "height", 50);
    const newProductPosition = baseProductPosition + newSubheadlinePosition

    const productCopy = productNameValue + "\r" + productSuperchargerValue;

    const productCopyChange = [
        setTwoFontStyle({
            Name: "Product Copy",
            Value: productCopy,
            Slice: productNameValue.length + 1,
            FontName: ["Roboto", "Roboto"],
            FontWeight: ["Light", "Medium"],
            Size: [29, 25],
            RedColor: [255, secondaryRed],
            GreenColor: [255, secondaryGreen],
            BlueColor: [255, secondaryBlue],
            BaselineShift: [0, -4],
            Tracking: [30, 30],
            FontCaps: [false, false],
            AutoLeading: [false, false],
            Leading: [30, 30],
        })
    ]

    await batchPlay(productCopyChange, {});

    const offsetProductCopy = [
        selectGroup({
            FirstName: "Product Copy",
            LastName: "Product Image"
        }),
        alignGroupY()
    ]
    await batchPlay(offsetProductCopy, {});

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

    const { position: baseCtaPosition } = await getBoundsAndPosition(offsetProduct, "bounds", 4, "height", 40);
    const newCtaPosition = baseCtaPosition + newProductPosition

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
        })
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

    const { position: baseFinalCropValue } = await getBoundsAndPosition(offsetCta, "bounds", 2, "height", 100);
    const finalCropValue = baseFinalCropValue + newCtaPosition

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