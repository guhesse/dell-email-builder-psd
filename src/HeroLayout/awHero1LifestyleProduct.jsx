import { batchPlay } from "../App.js";
import limitCharsPerLine from '../hook/charLimiter.jsx';
import { selectLayer, setFontStyle, setSolidFill, getBounds, setOffset, selectGroup, makeSmartObj, makeSolid, setCTABorder, setFinalCrop, alignGroupX } from "../hook/hooksJSON.jsx";
import { getBoundsAndPosition } from "../hook/getBoundsAndPosition.jsx";

export default async function AwHero1LifestyleProduct(colors, heroValues) {

    var accentColor = colors["accentColor"]
    var secondaryColor = colors["secondaryColor"]
    var tertiaryColor = colors["tertiaryColor"]

    var { badge, headline, subheadline, productName, cta } = heroValues || {}

    headline = limitCharsPerLine(
        headline || "", 18, "upper"
    );

    subheadline = limitCharsPerLine(
        subheadline || "", 55, "capitalized"
    );

    productName = limitCharsPerLine(
        productName || "", 35, "capitalized"
    );


    const changeHeroCopy = [

        setFontStyle({
            Name: "Badge",
            Value: badge,
            FontName: "Alienware",
            FontWeight: "Bold",
            Size: 20,
            RedColor: tertiaryColor.r,
            GreenColor: tertiaryColor.g,
            BlueColor: tertiaryColor.b,
            Tracking: 40,
            FontCaps: true,
        }),

        getBounds({
            Name: "Badge",
        }),

        setFontStyle({
            Name: "Headline",
            Value: headline,
            FontName: "Alienware",
            FontWeight: "Bold",
            Size: 44,
            RedColor: tertiaryColor.r,
            GreenColor: tertiaryColor.g,
            BlueColor: tertiaryColor.b,
            FontCaps: true,
            AutoLeading: false,
            Leading: 48,
        }),

        setFontStyle({
            Name: "Subheadline",
            Value: subheadline,
            FontName: "Roboto",
            FontWeight: "Regular",
            Size: 20,
            RedColor: tertiaryColor.r,
            GreenColor: tertiaryColor.g,
            BlueColor: tertiaryColor.b,
            FontCaps: false,
            AutoLeading: true,
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

    const productCopyChange = [
        setFontStyle({
            Name: "Product Name",
            Value: productName,
            FontName: "Alienware",
            FontWeight: "Light",
            Size: 16,
            RedColor: tertiaryColor.r,
            GreenColor: tertiaryColor.g,
            BlueColor: tertiaryColor.b,
            Tracking: 50,
            AutoLeading: true,
            FontCaps: false,
        })
    ]

    await batchPlay(productCopyChange, {});

    const offsetProductCopy = [
        selectGroup({
            FirstName: "Product Image",
            LastName: "Product Name"
        }),
        alignGroupX()
    ]
    await batchPlay(offsetProductCopy, {});

    const offsetProduct = [
        selectGroup({
            FirstName: "Product",
            LastName: "Product Name"
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
            Value: cta,
            FontScript: "OpenSans-Bold",
            FontName: "Open Sans",
            FontWeight: "Bold",
            Size: 16,
            RedColor: tertiaryColor.r,
            GreenColor: tertiaryColor.g,
            BlueColor: tertiaryColor.b,
            FontCaps: true,
            AutoLeading: true,
        }),

        getBounds({
            Name: "CTA Copy"
        })
    ]

    const { position: newCtaWidth } = await getBoundsAndPosition(changeCtaCopy, "boundingBox", 1, "width", 5);

    const changeCtaBorder = [
        setSolidFill({
            Name: "CTA Border",
            RedColor: accentColor.r,
            GreenColor: accentColor.g,
            BlueColor: accentColor.b,
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
        Name: "Hero Background",
        RedColor: secondaryColor.r,
        GreenColor: secondaryColor.g,
        BlueColor: secondaryColor.b,
        Bottom: finalCropValue,
        Right: 600,
    })
    await batchPlay(makeBackground, {})

    const finalCrop = setFinalCrop({
        Bottom: finalCropValue,
    })
    await batchPlay(finalCrop, {});
}