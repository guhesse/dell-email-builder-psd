
// CsvContext.js
import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from './AppContext.js';
import { storage } from '../App.js';
import limitCharsPerLine from '../hook/charLimiter.jsx';

export default function AppProvider({ children }) {

    const [csvLoaded, setCsvLoaded] = useState(false);
    const [csvValues, setCsvValues] = useState({
        'Source File': '',
        'URN': '',
        'Campaign Name': '',
        'Delivery Label': '',
        'Deployment Date': '',
        'Country': '',
        'Segment': '',
        'SL': '',
        'SSL': '',
        'From Name': '',
        'TFCID': '',
        'Campaign Type': '',
        'Inline Promo': '',
        'Basic Info': '',
        'Vendor Funding Name': '',
        'Funding/WEP Content': '',
        'Banner Text': '',
        'Expiry Date/Time in BRT': '',
        'Skinny Banner Headline': '',
        'Skinny Banner Text': '',
        'Skinny Banner Background Color': '',
        'Skinny Banner Text Color': '',
        'Skinny CTA Text': '',
        'Header Plugin Text': '',
        'Header Plugin Text Color': '',
        'Header Plugin Background Color': '',
        'HERO Template': '',
        'Badge Text': '',
        'Headline Text': '',
        'HERO1 Image': '',
        'HERO1 Product Name': '',
        'HERO1 Product Inline Promo': '',
        'HERO1 Product Description': '',
        'HERO2 Image': '',
        'HERO2 Product Name': '',
        'HERO2 Product Inline Promo': '',
        'HERO2 Product Description': '',
        'HERO3 Image': '',
        'HERO3 Product Name': '',
        'HERO3 Product Inline Promo': '',
        'HERO3 Product Description': '',
        'HERO4 Image': '',
        'HERO4 Product Name': '',
        'HERO4 Product Inline Promo': '',
        'HERO4 Product Description': '',
        'HERO5 Image': '',
        'HERO5 Product Name': '',
        'HERO5 Product Inline Promo': '',
        'HERO5 Product Description': '',
        'SHL': '',
        'HERO CTA1 Text': '',
        'HERO CTA2 Text': '',
        'Plugin1 Image': '',
        'Plugin1 Text': '',
        'Plugin1 Text Color': '',
        'Plugin1 Background Color': '',
        'Plugin2 Text': '',
        'Plugin2 Text Color': '',
        'Plugin2 Background Color': '',
        'Order_Code 1(Hero Product)': '',
        'Order_Code 2(Hero Product)': '',
        'Order_Code 3(Hero Product)': '',
        'Order_Code 4(Hero Product)': '',
        'Order_Code 5(Hero Product)': '',
        'Order_Code 6(Bundle 1)': '',
        'Order_Code 7(Bundle 2)': '',
        'Order_Code 8(Bundle 3)': '',
        'Order_Code 9(Bundle 4)': '',
        'Order_Code 10(Bundle 5)': '',
        'Bundle1_ProductName': '',
        'Bundle1_Inline_Promo': '',
        'Bundle1_Description': '',
        'Bundle1_Image': '',
        'Bundle2_ProductName': '',
        'Bundle2_Inline_Promo': '',
        'Bundle2_Description': '',
        'Bundle2_Image': '',
        'Bundle3_ProductName': '',
        'Bundle3_Inline_Promo': '',
        'Bundle3_Description': '',
        'Bundle3_Image': '',
        'Bundle4_ProductName': '',
        'Bundle4_Inline_Promo': '',
        'Bundle4_Description': '',
        'Bundle4_Image': '',
        'Bundle5_ProductName': '',
        'Bundle5_Inline_Promo': '',
        'Bundle5_Description': '',
        'Bundle5_Image': '',
        'Banner1 Layout': '',
        'Banner1 Image': '',
        'Banner1 Headline': '',
        'Banner1 Headline Image': '',
        'Banner1 Text': '',
        'Banner1 Text Align': '',
        'Banner1 Background Color': '',
        'Banner1 Text Color': '',
        'Banner1 CTA Text': '',
        'Banner1 Border': '',
        'Banner2 Layout': '',
        'Banner2 Image': '',
        'Banner2 Headline': '',
        'Banner2 Headline Image': '',
        'Banner2 Text': '',
        'Banner2 Text Align': '',
        'Banner2 Background Color': '',
        'Banner2 Text Color': '',
        'Banner2 CTA Text': '',
        'Banner2 Border': '',
        'Birdseed 1A': '',
        'Birdseed 1 Link Text': '',
        'Birdseed 1B': '',
        'Birdseed 2': '',
        'Header Plugin Link': '',
        'CDT Link': '',
        'Skinny Banner Link': '',
        'Headline Link': '',
        'HERO1 Link': '',
        'HERO2 Link': '',
        'HERO3 Link': '',
        'HERO4 Link': '',
        'HERO5 Link': '',
        'SHL Link': '',
        'HERO CTA1 Link': '',
        'HERO CTA2 Link': '',
        'Plugin1 Link': '',
        'Plugin2 Link': '',
        'Bundle1_Link': '',
        'Bundle2_Link': '',
        'Bundle3_Link': '',
        'Bundle4_Link': '',
        'Bundle5_Link': '',
        'Banner1 Link': '',
        'Banner2 Link': '',
        'Birdseed 1 Link': '',
    });

    const loadDefaultValuesFromCsv = async () => {
        try {
            const fs = storage.localFileSystem;
            const file = await fs.getFileForOpening({ types: ['csv'] });

            if (file) {
                // Adapte esta parte para carregar os valores padrão do CSV
                const loadedValues = await readCSVFile(file);
                setCsvValuesDefault(loadedValues);
            }
        } catch (error) {
            console.error('Erro ao ler o arquivo CSV:', error);
        }
    };

    function hexToRgb(hex, colorsList) {
        const matchingColor = Object.entries(colorsList).find(([name, color]) => {
            return color.hex === hex;
        });

        return matchingColor ? matchingColor[0] : `rgb(${parseInt(hex.substring(1, 3), 16)}, ${parseInt(hex.substring(3, 5), 16)}, ${parseInt(hex.substring(5, 7), 16)})`;
    }

    const handleColorChange = (colorType, colorsList, setColors) => {
        return (color) => {
            const colorObj = typeof color === 'string' ? colorsList[color] : color;
            const r= colorsList[color].r
            const g = colorsList[color].g
            const b = colorsList[color].b
            const rgbColor = colorsList[color].rgb
            const hexColor = colorsList[color].hex;
            setColors(prevColors => ({
                ...prevColors,
                [colorType]: {
                    r: r,
                    g: g,
                    b: b,
                    rgb: rgbColor,
                    name: colorObj.name,
                    hex: hexColor
                }
            }));
        };
    };

    const colorsList = {
        "AW WarmRed": {
            name: "AW WarmRed",
            r: 255, g: 76, b: 52,
            hex: '#FF4C34',
            rgb: "rgb(255, 76, 52)",
        },
        "AW CoolRed": {
            name: "AW CoolRed",
            r: 255, g: 0, b: 54,
            hex: '#FF0136',
            rgb: "rgb(255, 0, 54)",
        },
        "AW DarkViolet": {
            name: "AW DarkViolet",
            r: 65, g: 2, b: 144,
            hex: '#410290',
            rgb: "rgb(65, 2, 144)",
        },
        "AW VividViolet": {
            name: "AW VividViolet",
            r: 102, g: 51, b: 204,
            hex: '#6633CC',
            rgb: "rgb(102, 51, 204)",
        },
        "AW LGray": {
            name: "AW LGray",
            r: 192, g: 194, b: 196,
            hex: '#C0C2C4',
            rgb: "rgb(192, 194, 196)"
        },
        "AW MGray": {
            name: "AW MGray",
            r: 128, g: 130, b: 133,
            hex: '#808284',
            rgb: "rgb(128, 130, 133)",
        },
        "AW DGray": {
            name: "AW DGray",
            r: 40, g: 40, b: 41,
            hex: '#282829',
            rgb: "rgb(40, 40, 41)",
        },
        "AW White": {
            name: "AW White",
            r: 254, g: 254, b: 254,
            hex: '#FFFFFF',
            rgb: "rgb(254, 254, 254)",
        },
        white: {
            name: "white",
            r: 254, g: 254, b: 254,
            hex: '#FEFEFE',
            rgb: "rgb(254, 254, 254)",
        },
        quartz: {
            name: "quartz",
            r: 238, g: 238, b: 238,
            hex: '#EEEEEE',
            rgb: "rgb(238, 238, 238)",
        },
        granite: {
            name: "granite",
            r: 200, g: 201, b: 199,
            hex: '#C8C9C7',
            rgb: "rgb(200, 201, 199)",
        },
        gray: {
            name: "gray",
            r: 128, g: 128, b: 128,
            hex: '#808080',
            rgb: "rgb(128, 128, 128)",
        },
        steel: {
            name: "steel",
            r: 110, g: 110, b: 110,
            hex: '#6e6e6e',
            rgb: "rgb(110, 110, 110)",
        },
        carbon: {
            name: "carbon",
            r: 68, g: 68, b: 68,
            hex: '#444444',
            rgb: "rgb(68, 68, 68)",
        },
        black: {
            name: "black",
            r: 0, g: 0, b: 0,
            hex: '#000000',
            rgb: "rgb(0, 0, 0)",
        },
        glacier: {
            name: "glacier",
            r: 229, g: 248, b: 255,
            hex: '#E5F8FF',
            rgb: "rgb(229, 248, 255)",
        },
        mist: {
            name: "mist",
            r: 203, g: 238, b: 255,
            hex: '#CBEEFF',
            rgb: "rgb(203, 238, 255)",
        },
        pool: {
            name: "pool",
            r: 159, g: 221, b: 255,
            hex: '#9FDDFF',
            rgb: "rgb(159, 221, 255)",
        },
        sky: {
            name: "sky",
            r: 128, g: 199, b: 251,
            hex: '#80C7FB',
            rgb: "rgb(128, 199, 251)",
        },
        cornflower: {
            name: "cornflower",
            r: 88, g: 165, b: 230,
            hex: '#58a5e6',
            rgb: "rgb(88, 165, 230)",
        },
        dellBlue: {
            name: "dellBlue",
            r: 6, g: 114, b: 203,
            hex: '#0672CB',
            rgb: "rgb(6, 114, 203)",
        },
        coblat: {
            name: "coblat",
            r: 29, g: 86, b: 192,
            hex: '#1d56c0',
            rgb: "rgb(29, 86, 192)",
        },
        royal: {
            name: "royal",
            r: 12, g: 50, b: 164,
            hex: '#0C32A4',
            rgb: "rgb(12, 50, 164)",
        },
        navy: {
            name: "navy",
            r: 0, g: 34, b: 127,
            hex: '#00227F',
            rgb: "rgb(0, 34, 127)",
        },
        midnight: {
            name: "midnight",
            r: 13, g: 33, b: 85,
            hex: '#0D2155',
            rgb: "rgb(13, 33, 85)",
        },
        teaGreen: {
            name: "teaGreen",
            r: 228, g: 255, b: 214,
            hex: '#E4FFD6',
            rgb: "rgb(228, 255, 214)",
        },
        honeydew: {
            name: "honeydew",
            r: 191, g: 255, b: 183,
            hex: '#BFFFb7',
            rgb: "rgb(191, 255, 183)",
        },
        lime: {
            name: "lime",
            r: 159, g: 255, b: 153,
            hex: '#9FFF99',
            rgb: "rgb(159, 255, 153)",
        },
        mint: {
            name: "mint",
            r: 123, g: 252, b: 118,
            hex: '#7BFC76',
            rgb: "rgb(123, 252, 118)",
        },
        grass: {
            name: "grass",
            r: 78, g: 231, b: 96,
            hex: '#4EE760',
            rgb: "rgb(78, 231, 96)",
        },
        basil: {
            name: "basil",
            r: 55, g: 204, b: 92,
            hex: '#37CC5C',
            rgb: "rgb(55, 204, 92)",
        },
        kelly: {
            name: "kelly",
            r: 52, g: 158, b: 95,
            hex: '#349E5F',
            rgb: "rgb(52, 158, 95)",
        },
        hunter: {
            name: "hunter",
            r: 36, g: 117, b: 84,
            hex: '#247554',
            rgb: "rgb(36, 117, 84)",
        },
        forest: {
            name: "forest",
            r: 27, g: 87, b: 68,
            hex: '#1B5744',
            rgb: "rgb(27, 87, 68)",
        },
        deepGreen: {
            name: "deepGreen",
            r: 36, g: 71, b: 57,
            hex: '#244739',
            rgb: "rgb(36, 71, 57)",
        },
        periwinkle: {
            name: "periwinkle",
            r: 222, g: 221, b: 255,
            hex: '#DEDDFF',
            rgb: "rgb(222, 221, 255)",
        },
        lilac: {
            name: "lilac",
            r: 200, g: 192, b: 255,
            hex: '#C8C0FF',
            rgb: "rgb(200, 192, 255)",
        },
        lavender: {
            name: "lavender",
            r: 190, g: 175, b: 255,
            hex: '#BEAFFf',
            rgb: "rgb(190, 175, 255)",
        },
        wisteria: {
            name: "wisteria",
            r: 170, g: 150, b: 250,
            hex: '#AA96FA',
            rgb: "rgb(170, 150, 250)",
        },
        iris: {
            name: "iris",
            r: 159, g: 120, b: 252,
            hex: '#9F78FC',
            rgb: "rgb(159, 120, 252)",
        },
        amethyst: {
            name: "amethyst",
            r: 142, g: 92, b: 239,
            hex: '#8E5CEF',
            rgb: "rgb(142, 92, 239)",
        },
        violet: {
            name: "violet",
            r: 116, g: 61, b: 212,
            hex: '#743DD4',
            rgb: "rgb(116, 61, 212)",
        },
        plum: {
            name: "plum",
            r: 97, g: 44, b: 176,
            hex: '#612CB0',
            rgb: "rgb(97, 44, 176)",
        },
        eggplant: {
            name: "eggplant",
            r: 80, g: 10, b: 150,
            hex: '#500A96',
            rgb: "rgb(80, 10, 150)",
        },
        raisin: {
            name: "raisin",
            r: 42, g: 20, b: 90,
            hex: '#2A145A',
            rgb: "rgb(42, 20, 90)",
        },
        sand: {
            name: "sand",
            r: 251, g: 238, b: 206,
            hex: '#FBEECE',
            rgb: "rgb(251, 238, 206)",
        },
        marigold: {
            name: "marigold",
            r: 249, g: 214, b: 116,
            hex: '#F9D674',
            rgb: "rgb(249, 214, 116)",
        },
        apricot: {
            name: "apricot",
            r: 244, g: 187, b: 94,
            hex: '#F4BB5E',
            rgb: "rgb(244, 187, 94)",
        },
        orange: {
            name: "orange",
            r: 225, g: 127, b: 63,
            hex: '#E17F3F',
            rgb: "rgb(225, 127, 63)",
        },
        coral: {
            name: "coral",
            r: 225, g: 99, b: 63,
            hex: '#E1633F',
            rgb: "rgb(225, 99, 63)",
        },
        cherry: {
            name: "cherry",
            r: 210, g: 51, b: 61,
            hex: '#D2333D',
            rgb: "rgb(210, 51, 61)",
        },
        scarlet: {
            name: "scarlet",
            r: 179, g: 11, b: 55,
            hex: '#B30B37',
            rgb: "rgb(179, 11, 55)",
        },
        ruby: {
            name: "ruby",
            r: 133, g: 19, b: 63,
            hex: '#85133F',
            rgb: "rgb(133, 19, 63)",
        },
        burgundy: {
            name: "burgundy",
            r: 105, g: 29, b: 63,
            hex: '#691D3F',
            rgb: "rgb(105, 29, 63)",
        },
        wine: {
            name: "wine",
            r: 74, g: 25, b: 58,
            hex: '#4A193A',
            rgb: "rgb(74, 25, 58)",
        },
    };

    const [colors, setColors] = useState({
        accentColor: colorsList["deepGreen"],
        secondaryColor: colorsList["mint"],
        tertiaryColor: colorsList["teaGreen"],
    });

    const handleAccentColorChange = handleColorChange("accentColor", colorsList, setColors);
    const handleSecondaryColorChange = handleColorChange("secondaryColor", colorsList, setColors);
    const handleTertiaryColorChange = handleColorChange("tertiaryColor", colorsList, setColors);

    const [selectedModules, setSelectedModules] = useState({
        header: null,
        brand: 'dell',
        vf: null,
        skinny: null,
        hero: null,
        plugin: null,
        fpo: null,
        banner: null,
        footer: null,
        birdseed: null,
        birdseedCopy: false
    });

    const [copyValues, setCopyValues] = useState({
        subject: {
            sl: "",
            ssl: "",
        },
        vf: {
            copy: "",
        },
        skinny: {
            headline: "",
            copy: "",
        },
        hero: {
            badge: "",
            headline: "",
            ot: "",
            subheadline: "",
            inlinePromo: "",
            specs: "",
            price: "",
            productName: "",
            productSupercharger: "",
            cta: "",
        },
        plugin: {
            single: "",
            left: "",
            center: "",
            right: "",
        },
        banner: {
            bannerHeadlineValue: "",
            bannerCopyValue: "",
            bannerCtaValue: "",
        },
        fpo: {
            number: null,
        },
        birdseed: {
            copy: "",
            day: null,
            month: null,
            year: null
        }
    });

    // Values e estados dos inputs

    const [selectedBrand, setSelectedBrand] = useState('dell');
    const [selectedPlugin, setSelectedPlugin] = useState(null);
    const [selectedFpoSegment, setSelectedFpoSegment] = useState(null);
    const [selectedBanner, setSelectedBanner] = useState(null);
    const [selectedFooter, setSelectedFooter] = useState(null);
    const [selectedBirdseed, setSelectedBirdseed] = useState(null);
    const [selectedBirdseedCopy, setSelectedBirdseedCopy] = useState(false);

    const [selectedFpoValue, setSelectedFpoValue] = useState(null);

    const [bannerCopyValues, setBannerCopyValues] = useState({
        bannerHeadlineValue: "",
        bannerCopyValue: "",
        bannerCtaValue: "",
    })

    const [birdseedValues, setBirdseedValues] = useState({
        copy: "",
        day: null,
        month: null,
        year: null
    })

    // const [birdseedCopyValues, setBirdseedCopyValues] = useState('');

    // const [birdseedDate, setBirdseedDate] = useState({
    //     selectedDay: null,
    //     selectedMonth: null,
    //     selectedYear: null,
    // });


    useEffect(() => {

        if (csvLoaded === true) {


            if (csvValues['HERO1 Image'].match(/background color:\s*#([0-9A-Fa-f]{6})/i) || "deepGreen") {
                const accentColorMatch = csvValues['HERO1 Image'].match(/background color:\s*#([0-9A-Fa-f]{6})/i);
                setAccentColor(accentColorMatch ? hexToRgb(`#${accentColorMatch[1]}`) : "deepGreen");
            }

            if (csvValues['HERO1 Image'].match(/accent color:\s*#([0-9A-Fa-f]{6})/i) || "mint") {
                const secondaryColorMatch = csvValues['HERO1 Image'].match(/accent color:\s*#([0-9A-Fa-f]{6})/i);
                setSecondaryColor(secondaryColorMatch ? hexToRgb(`#${secondaryColorMatch[1]}`) : "mint");
            }

            if (csvValues['HERO1 Image'].match(/accent color:\s*#([0-9A-Fa-f]{6})/i) || "teaGreen") {
                const tertiaryColorMatch = csvValues['HERO1 Image'].match(/accent color:\s*#([0-9A-Fa-f]{6})/i);
                setTertiaryColor(tertiaryColorMatch ? hexToRgb(`#${tertiaryColorMatch[1]}`) : "teaGreen");
            }

            // setSubjectValues({
            //     slValue: csvValues['SL'] || "",
            //     sslValue: csvValues['SSL'] || "",
            // });

            // if (csvValues['Campaign Type'] === "CSB") {
            //     setSelectedHeader("csb");
            //     setCsvValues({
            //         ...csvValues,
            //         'Campaign Type': "csb"
            //     });
            // } else if (csvValues['Campaign Type'] === "outlet") {
            //     setSelectedHeader("outlet");
            //     setCsvValues({
            //         ...csvValues,
            //         'Campaign Type': "outlet"
            //     });
            // } else if (csvValues['Campaign Type'] === "DEXN") {
            //     setSelectedHeader("sb-gdo-dexn");
            //     setCsvValues({
            //         ...csvValues,
            //         'Campaign Type': "sb-gdo-dexn"
            //     });
            // } else {
            //     setSelectedHeader(null)
            // }


            setSelectedFunding(csvValues['Vendor Funding Name'] || "");
            if (csvValues['Vendor Funding Name'] === "") {
                setSelectedFunding(null);
            } else if (csvValues['Vendor Funding Name'] === "NVF") {
                setSelectedFunding("no-vf");
                setCsvValues({
                    ...csvValues,
                    'Vendor Funding Name': "no-vf"
                });
            } else if (csvValues['Vendor Funding Name'] === "Jumpstart Home") {
                setSelectedFunding("win11");
                setCsvValues({
                    ...csvValues,
                    'Vendor Funding Name': "win11"
                });
            } else if (csvValues['Vendor Funding Name'] === "Jumpstart Pro") {
                setSelectedFunding("win11");
                setCsvValues({
                    ...csvValues,
                    'Vendor Funding Name': "win11"
                });
            }

            setFundingCopyValue(csvValues['Funding/WEP Content'] || "");

            setSkinnyTitleValue(csvValues['Skinny Banner Headline'] || "")

            setSkinnyCopyValue(csvValues['Skinny Banner Text'] || "")

            if (csvValues['Skinny Banner Headline'] !== undefined && csvValues['Skinny Banner Headline'] !== "") {
                setSelectedSkinny("left")
            }

            setSelectedHero(csvValues['HERO Template'] || "");
            if (
                csvValues['HERO Template'] === "HERO LAYOUT 1" &&
                csvValues['HERO1 Image'].includes("Lifestyle")
            ) {
                setSelectedHero("hero1-lifestyle");
                setCsvValues({
                    ...csvValues,
                    'HERO Template': "hero1-lifestyle"
                });
            } else if (
                csvValues['HERO Template'] === "HERO LAYOUT 1" &&
                !csvValues['HERO1 Image'].includes("Lifestyle")
            ) {
                setSelectedHero("hero1-standard");
                setCsvValues({
                    ...csvValues,
                    'HERO Template': "hero1-standard"
                });
            } else if (csvValues['HERO Template'] === "HERO LAYOUT 2") {
                setSelectedHero("hero2-promotion");
                setCsvValues({
                    ...csvValues,
                    'HERO Template': "hero2-promotion"
                });
            } else {
                setSelectedHero(null);
            }

            setHeroCopyValues({
                badgeValue: csvValues['Badge Text'] || "",
                headlineValue: csvValues['Headline Text'] || "",
                subHeadlineValue: csvValues['SHL'] || "",
                OTValue: '',
                inlinePromoValue: csvValues['HERO1 Product Inline Promo'] || "",
                inlinePromo2Value: csvValues['HERO2 Product Inline Promo'] || "",
                specsValue: csvValues['HERO1 Product Description'] || "",
                priceValue: "XXX",
                productNameValue: csvValues['HERO1 Product Name'] || "",
                productSuperchargerValue: csvValues['HERO1 Product Inline Promo'] || "",
                heroCtaValue: csvValues['HERO CTA1 Text'] || "",
            });

            setPluginCopyValues({
                pluginCopyValue: csvValues['Plugin1 Text'] || "",
                leftPluginCopyValue: "",
                centerPluginCopyValue: "",
                rightPluginCopyValue: "",
            });


            if (csvValues['Plugin1 Text'] !== "") {
                setSelectedPlugin("plugin");
            } else {
            }

            if (csvValues['Order_Code 10(Bundle 5)'] !== undefined && csvValues['Order_Code 10(Bundle 5)'] !== "") {
                setSelectedFpoValue(5);
            } else if (csvValues['Order_Code 9(Bundle 4)'] !== undefined && csvValues['Order_Code 9(Bundle 4)'] !== "") {
                setSelectedFpoValue(4);
            } else if (csvValues['Order_Code 8(Bundle 3)'] !== undefined && csvValues['Order_Code 8(Bundle 3)'] !== "") {
                setSelectedFpoValue(3);
            } else if (csvValues['Order_Code 7(Bundle 2)'] !== undefined && csvValues['Order_Code 7(Bundle 2)'] !== "") {
                setSelectedFpoValue(2);
            } else if (csvValues['Order_Code 6(Bundle 1)'] !== undefined && csvValues['Order_Code 6(Bundle 1)'] !== "") {
                setSelectedFpoValue(1);
            } else {
                setSelectedFpoValue(null)
            }

            if (csvValues['Campaign Type'] === "") {
                setSelectedFpoSegment("sb");
                setSelectedFooter(null);
            } else if (csvValues['Campaign Type'] === "CSB") {
                setSelectedFpoSegment("sb");
                setSelectedFooter("csb-four-btn");
            } else if (csvValues['Campaign Type'] === "sb") {
                setSelectedFpoSegment("sb");
                setSelectedFooter("sb-four-btn");
            } else if (csvValues['Campaign Type'] === "DEXN") {
                setSelectedFpoSegment("sb");
                setSelectedFooter("experts");
            }

            // setSelectedFpoValue(selectedFpoValue)

            setSelectedBanner(csvValues['Banner1 Layout'] || null);
            if (csvValues['Banner1 Layout'] === "") {
                setCsvValues({
                    ...csvValues,
                    'Banner1 Layout': null
                })
            } else if (csvValues['Banner1 Layout'] === "IMG RIGHT") {
                setCsvValues({
                    ...csvValues,
                    'Banner1 Layout': "right"
                });
            } else if (csvValues['Banner1 Layout'] === "IMG LEFT") {
                setCsvValues({
                    ...csvValues,
                    'Banner1 Layout': "left"
                });
            }

            setBannerCopyValues({
                bannerHeadlineValue: csvValues['Banner1 Headline'] || "",
                bannerCopyValue: csvValues['Banner1 Text'] || "",
                bannerCtaValue: csvValues['Banner1 CTA Text'] || "",
            })


            setSelectedBirdseed(csvValues['Campaign Type'] || "");
            if (csvValues['Campaign Type'] === "") {
                setSelectedBirdseed(null)
            } else if (csvValues['Campaign Type'] !== "Outlet") {
                setSelectedBirdseed("standard")
            } else {
                setSelectedBirdseed("outlet")
            }

            const dateParts = (csvValues['Birdseed 2'] || "").split('/');

            if (dateParts.length === 3) {
                const [day, month, year] = dateParts.map(Number);;

                // Atualize o estado com os valores extraídos da data
                setBirdseedDate({
                    selectedDay: day || "",
                    selectedMonth: month || "",
                    selectedYear: year || "",
                });
            }

            setSelectedBirdseedCopy(!!csvValues['Birdseed 1A']);

            setBirdseedCopyValues(csvValues['Birdseed 1A'] || "");


        }
    }, [
        csvValues['HERO1 Image'],
        csvValues.SL,
        csvValues.SSL,
        csvValues['Funding/WEP Content'],
        csvValues['Campaign Type'],
        csvValues['Skinny Banner Headline'],
        csvValues['Skinny Banner Text'],
        csvValues['Badge Text'],
        csvValues['Headline Text'],
        csvValues['SHL'],
        csvValues['HERO1 Product Inline Promo'],
        csvValues['HERO2 Product Inline Promo'],
        csvValues['HERO1 Product Description'],
        csvValues['HERO1 Product Name'],
        csvValues['HERO CTA1 Text'],
        csvValues['HERO Template'],
        csvValues['Plugin1 Text'],
        csvValues['Order_Code 6(Bundle 1)'],
        csvValues['Order_Code 7(Bundle 2)'],
        csvValues['Order_Code 8(Bundle 3)'],
        csvValues['Order_Code 9(Bundle 4)'],
        csvValues['Order_Code 10(Bundle 5)'],
        csvValues['Banner1 Layout'],
        csvValues['Banner1 Headline'],
        csvValues['Banner1 Text'],
        csvValues['Banner1 CTA Text'],
        csvValues['Segment'],
        csvValues['Birdseed 1A'],
        csvValues['Birdseed 2'],
    ]);

    // console.log("Valores que serão passados para os componentes:", {
    //     // csvValues,
    //     // subjectValues,
    //     // selectedHeader,
    //     // selectedBrand,
    //     // selectedFpoSegment,
    //     // selectedFpoValue,
    //     // selectedBanner,
    //     // selectedFooter,
    //     // selectedBirdseed,
    //     // selectedBirdseedCopy,
    //     // birdseedCopyValues,
    //     // birdseedDate
    // });

    const cores = {}

    // console.log(copyValues)

    return (
        <AppContext.Provider value={{
            csvValues,
            setCsvValues,
            csvLoaded,
            setCsvLoaded,
            loadDefaultValuesFromCsv,

            colors,
            colorsList,
            setColors,
            handleAccentColorChange,
            handleSecondaryColorChange,
            handleTertiaryColorChange,
            cores,
            handleColorChange,

            selectedModules,
            setSelectedModules,

            copyValues,
            setCopyValues,

            selectedBrand,
            setSelectedBrand,

            selectedFpoSegment,
            setSelectedFpoSegment,
            selectedFpoValue,
            setSelectedFpoValue,

            selectedBanner,
            setSelectedBanner,
            bannerCopyValues,
            setBannerCopyValues,

            selectedFooter,
            setSelectedFooter,

            selectedBirdseed,
            setSelectedBirdseed,
            birdseedValues,
            setBirdseedValues,
            // selectedBirdseedCopy,
            // setSelectedBirdseedCopy,
            // birdseedCopyValues,
            // setBirdseedCopyValues,
            // birdseedDate,
            // setBirdseedDate,
        }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    return useContext(AppContext);
};