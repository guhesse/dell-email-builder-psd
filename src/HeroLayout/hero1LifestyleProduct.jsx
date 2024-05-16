import { batchPlay } from "../App.js";
import limitCharsPerLine from '../hook/charLimiter.jsx';
import { selectLayer, setFontStyle, setOverlayColor, setSolidFill, getBounds, setOffset, selectGroup, alignGroupY, makeSmartObj, makeSolid, setTwoFontStyle, setCTABorder, setFinalCrop } from "../hook/hooksJSON.jsx";
import { getBoundsAndPosition } from "../hook/getBoundsAndPosition.jsx";

export default async function Hero1LifestyleProduct(colors, heroCopy) {

    var accentColor = colors["accentColor"]
    var secondaryColor = colors["secondaryColor"]
    var tertiaryColor = colors["tertiaryColor"]

    var { badge, headline, subheadline, productName, productSupercharger, cta } = heroCopy || {}

    headline = limitCharsPerLine(
        headline || "", 20, "capitalized"
    );

    subheadline = limitCharsPerLine(
        subheadline || "", 55, "capitalized"
    );

    productName = limitCharsPerLine(
        productName || "Product Name", 13, "capitalized"
    );

    productSupercharger = limitCharsPerLine(
        productSupercharger || "Supercharger", 13, "capitalized"
    );

    const changeColors = [
        selectLayer({
            Name: "Pattern"
        }),
        setOverlayColor({
            Name: "Pattern",
            RedColor: tertiaryColor.r,
            GreenColor: tertiaryColor.g,
            BlueColor: tertiaryColor.b,
        })
    ];

    await batchPlay(changeColors, {});

    const changeHeroCopy = [

        setFontStyle({
            Name: "Badge",
            Value: badge,
            FontName: "Roboto",
            FontWeight: "Bold",
            Size: 20,
            RedColor: secondaryColor.r,
            GreenColor: secondaryColor.g,
            BlueColor: secondaryColor.b,
            FontCaps: true,
        }),

        getBounds({
            Name: "Badge",
        }),

        setFontStyle({
            Name: "Headline",
            Value: headline,
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
            Value: subheadline,
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

    const productCopy = productName + "\r" + productSupercharger;

    const productCopyChange = [
        setTwoFontStyle({
            Name: "Product Copy",
            Value: productCopy,
            Slice: productName.length + 1,
            FontName: ["Roboto", "Roboto"],
            FontWeight: ["Light", "Medium"],
            Size: [29, 25],
            RedColor: [255, secondaryColor.r],
            GreenColor: [255, secondaryColor.g],
            BlueColor: [255, secondaryColor.b],
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
            Name: "Hero CTA Copy",
            Value: cta,
            FontName: "Roboto",
            FontWeight: "Medium",
            Size: 18,
            RedColor: accentColor.r,
            GreenColor: accentColor.g,
            BlueColor: accentColor.b,
            FontCaps: false,
            AutoLeading: true,
        }),

        getBounds({
            Name: "Hero CTA Copy"
        })
    ]

    const { position: newCtaWidth } = await getBoundsAndPosition(changeCtaCopy, "boundingBox", 1, "width", 15);

    const changeCtaBorder = [
        setSolidFill({
            Name: "Hero CTA Border",
            RedColor: tertiaryColor.r,
            GreenColor: tertiaryColor.g,
            BlueColor: tertiaryColor.b,
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
        })
    ];

    const { position: baseFinalCropValue } = await getBoundsAndPosition(offsetCta, "bounds", 2, "height", 100);
    const finalCropValue = baseFinalCropValue + newCtaPosition

    const makeBackground = makeSolid({
        Name: "Hero Background",
        RedColor: accentColor.r,
        GreenColor: accentColor.g,
        BlueColor: accentColor.b,
        Bottom: finalCropValue,
        Right: 600,
    })
    await batchPlay(makeBackground, {})

    const finalCrop = setFinalCrop({
        Bottom: finalCropValue,
    })
    await batchPlay(finalCrop, {});
}

