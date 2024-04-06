import { batchPlay } from "../App.js";
import limitCharsPerLine from '../hook/charLimiter.jsx';
import { selectLayer, setFontStyle, setSolidFill, getBounds, setOffset, selectGroup, makeSmartObj, makeSolid, setCTABorder, setFinalCrop, alignGroupX } from "../hook/hooksJSON.jsx";
import { getBoundsAndPosition } from "../hook/getBoundsAndPosition.jsx";

export default async function AwHero1LifestyleProduct(accentRed, accentGreen, accentBlue, secondaryRed, secondaryGreen, secondaryBlue, tertiaryRed, tertiaryGreen, tertiaryBlue, badgeValue, headlineValue, subHeadlineValue, productNameValue, heroCtaValue) {

    headlineValue = await limitCharsPerLine(
        headlineValue || "", 18, "upper"
    );

    subHeadlineValue = await limitCharsPerLine(
        subHeadlineValue || "", 55, "capitalized"
    );

    productNameValue = await limitCharsPerLine(
        productNameValue || "", 35, "capitalized"
    );


    const changeHeroCopy = [

        setFontStyle({
            Name: "Badge",
            Value: badgeValue,
            FontName: "Alienware",
            FontWeight: "Bold",
            Size: 20,
            RedColor: tertiaryRed,
            GreenColor: tertiaryGreen,
            BlueColor: tertiaryBlue,
            Tracking: 40,
            FontCaps: true,
        }),

        getBounds({
            Name: "Badge",
        }),

        setFontStyle({
            Name: "Headline",
            Value: headlineValue,
            FontName: "Alienware",
            FontWeight: "Bold",
            Size: 44,
            RedColor: tertiaryRed,
            GreenColor: tertiaryGreen,
            BlueColor: tertiaryBlue,
            FontCaps: true,
            AutoLeading: false,
            Leading: 48,
        }),

        setFontStyle({
            Name: "Subheadline",
            Value: subHeadlineValue,
            FontName: "Roboto",
            FontWeight: "Regular",
            Size: 20,
            RedColor: tertiaryRed,
            GreenColor: tertiaryGreen,
            BlueColor: tertiaryBlue,
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
            Value: productNameValue,
            FontName: "Alienware",
            FontWeight: "Light",
            Size: 16,
            RedColor: tertiaryRed,
            GreenColor: tertiaryGreen,
            BlueColor: tertiaryBlue,
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
            Value: heroCtaValue,
            FontScript: "OpenSans-Bold",
            FontName: "Open Sans",
            FontWeight: "Bold",
            Size: 16,
            RedColor: tertiaryRed,
            GreenColor: tertiaryGreen,
            BlueColor: tertiaryBlue,
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
            RedColor: accentRed,
            GreenColor: accentGreen,
            BlueColor: accentBlue,
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
        RedColor: secondaryRed,
        GreenColor: secondaryGreen,
        BlueColor: secondaryBlue,
        Bottom: finalCropValue,
        Right: 600,
    })
    await batchPlay(makeBackground, {})

    const finalCrop = setFinalCrop({
        Bottom: finalCropValue,
    })
    await batchPlay(finalCrop, {});
}