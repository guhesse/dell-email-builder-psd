
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

    // const updateValues = (valueMapping) => {
    //     const updatedValues = {};
    //     Object.keys(valueMapping).forEach((key) => {
    //         updatedValues[key] = csvValues[valueMapping[key]];
    //     });
    //     return updatedValues;
    // };

    function hexToRgb(hex) {
        // Remove o caractere '#' se estiver presente
        hex = hex.replace(/^#/, '');

        // Verifica se o valor hex corresponde a alguma cor no objeto cores
        const matchingColor = Object.entries(cores).find(([name, rgb]) => {
            return rgb.r === parseInt(hex.substring(0, 2), 16) &&
                rgb.g === parseInt(hex.substring(2, 4), 16) &&
                rgb.b === parseInt(hex.substring(4, 6), 16);
        });

        // Se encontrar uma correspondência, retorna o nome da cor, caso contrário, retorna o valor RGB formatado
        return matchingColor ? matchingColor[0] : `rgb(${parseInt(hex.substring(0, 2), 16)}, ${parseInt(hex.substring(2, 4), 16)}, ${parseInt(hex.substring(4, 6), 16)})`;
    }

    const cores = {
        "AW WarmRed": { r: 255, g: 76, b: 52 },
        "AW CoolRed": { r: 255, g: 0, b: 54 },
        "AW DarkViolet": { r: 65, g: 2, b: 144 },
        "AW VividViolet": { r: 102, g: 51, b: 204 },
        "AW LGray": { r: 192, g: 194, b: 196 },
        "AW MGray": { r: 128, g: 130, b: 133 },
        "AW DGray": { r: 40, g: 40, b: 41 },
        white: { r: 254, g: 254, b: 254 },
        quartz: { r: 238, g: 238, b: 238 },
        granite: { r: 200, g: 201, b: 199 },
        gray: { r: 128, g: 128, b: 128 },
        steel: { r: 110, g: 110, b: 110 },
        carbon: { r: 68, g: 68, b: 68 },
        black: { r: 0, g: 0, b: 0 },
        glacier: { r: 229, g: 248, b: 255 },
        mist: { r: 203, g: 238, b: 255 },
        pool: { r: 159, g: 221, b: 255 },
        sky: { r: 128, g: 199, b: 251 },
        cornflower: { r: 88, g: 165, b: 230 },
        dellBlue: { r: 6, g: 114, b: 203 },
        coblat: { r: 29, g: 86, b: 192 },
        royal: { r: 12, g: 50, b: 164 },
        navy: { r: 0, g: 34, b: 127 },
        midnight: { r: 13, g: 33, b: 85 },
        teaGreen: { r: 228, g: 255, b: 214 },
        honeydew: { r: 191, g: 255, b: 183 },
        lime: { r: 159, g: 255, b: 153 },
        mint: { r: 123, g: 252, b: 118 },
        grass: { r: 78, g: 231, b: 96 },
        basil: { r: 55, g: 204, b: 92 },
        kelly: { r: 52, g: 158, b: 95 },
        hunter: { r: 36, g: 117, b: 84 },
        forest: { r: 27, g: 87, b: 68 },
        deepGreen: { r: 36, g: 71, b: 57 },
        periwinkle: { r: 222, g: 221, b: 255 },
        lilac: { r: 200, g: 192, b: 255 },
        lavender: { r: 190, g: 175, b: 255 },
        wisteria: { r: 170, g: 150, b: 250 },
        iris: { r: 159, g: 120, b: 252 },
        amethyst: { r: 142, g: 92, b: 239 },
        violet: { r: 116, g: 61, b: 212 },
        plum: { r: 97, g: 44, b: 176 },
        eggplant: { r: 80, g: 10, b: 150 },
        raisin: { r: 42, g: 20, b: 90 },
        sand: { r: 251, g: 238, b: 206 },
        marigold: { r: 249, g: 214, b: 116 },
        apricot: { r: 244, g: 187, b: 94 },
        orange: { r: 225, g: 127, b: 63 },
        coral: { r: 225, g: 99, b: 63 },
        cherry: { r: 210, g: 51, b: 61 },
        scarlet: { r: 179, g: 11, b: 55 },
        ruby: { r: 133, g: 19, b: 63 },
        burgundy: { r: 105, g: 29, b: 63 },
        wine: { r: 74, g: 25, b: 58 }
    };

    const [accentColor, setAccentColor] = useState("deepGreen");
    const [secondaryColor, setSecondaryColor] = useState("mint");
    const [tertiaryColor, setTertiaryColor] = useState("teaGreen");

    const [accentColorHex, setAccentColorHex] = useState("#244739");
    const [secondaryColorHex, setSecondaryColorHex] = useState("#7BFC76");
    const [tertiaryColorHex, setTertiaryColorHex] = useState("#E4FFD6");

    function rgbToHex(rgb) {
        return '#' + ((1 << 24) + (rgb.r << 16) + (rgb.g << 8) + rgb.b).toString(16).slice(1);
    }

    const handleAccentColorChange = (color) => {
        const colorString = typeof color === 'string' ? color : hexToRgb(color);
        const hexColor = rgbToHex(cores[color]);
        setAccentColor(colorString);
        setAccentColorHex(hexColor);
    };


    const handleSecondaryColorChange = (color) => {
        const colorString = typeof color === 'string' ? color : hexToRgb(color);
        const hexColor = rgbToHex(cores[color]);
        setSecondaryColor(colorString);
        setSecondaryColorHex(hexColor);
    };


    const handleTertiaryColorChange = (color) => {
        const colorString = typeof color === 'string' ? color : hexToRgb(color);
        const hexColor = rgbToHex(cores[color]);
        setTertiaryColor(colorString);
        setTertiaryColorHex(hexColor);
    };

    // Values e estados dos inputs

    const [selectedHeader, setSelectedHeader] = useState(null);
    const [selectedBrand, setSelectedBrand] = useState('dell');
    const [selectedFunding, setSelectedFunding] = useState(null);
    const [selectedSkinny, setSelectedSkinny] = useState(null);
    const [selectedHero, setSelectedHero] = useState(null);
    const [selectedPlugin, setSelectedPlugin] = useState(null);
    const [selectedFpoSegment, setSelectedFpoSegment] = useState("");
    const [selectedBanner, setSelectedBanner] = useState(null);
    const [selectedFooter, setSelectedFooter] = useState(null);
    const [selectedBirdseed, setSelectedBirdseed] = useState(null);
    const [selectedBirdseedCopy, setSelectedBirdseedCopy] = useState(false);


    const [slValue, setSlValue] = useState("");
    const [sslValue, setSslValue] = useState("");
    const [fundingCopyValue, setFundingCopyValue] = useState("");
    const [skinnyTitleValue, setSkinnyTitleValue] = useState("");
    const [skinnyCopyValue, setSkinnyCopyValue] = useState("");

    const [heroCopyValues, setHeroCopyValues] = useState({
        badgeValue: "",
        headlineValue: "",
        OTValue: "",
        subHeadlineValue: "",
        inlinePromoValue: "",
        specsValue: "",
        priceValue: "",
        productNameValue: "",
        productSuperchargerValue: "",
        heroCtaValue: "",
    });

    const [pluginCopyValues, setPluginCopyValues] = useState({
        pluginCopyValue: "",
        leftPluginCopyValue: "",
        centerPluginCopyValue: "",
        rightPluginCopyValue: "",
    });

    const [selectedFpoValue, setSelectedFpoValue] = useState(null);

    const [bannerCopyValues, setBannerCopyValues] = useState({
        bannerHeadlineValue: "",
        bannerCopyValue: "",
        bannerCtaValue: "",
    })

    const [birdseedCopyValues, setBirdseedCopyValues] = useState('');

    const [birdseedDate, setBirdseedDate] = useState({
        selectedDay: null,
        selectedMonth: null,
        selectedYear: null,
    });


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

            setSlValue((csvValues.SL) || "");
            setSslValue((csvValues.SSL) || "");

            if (csvValues['Campaign Type'] === "CSB") {
                setSelectedHeader("csb");
                setCsvValues({
                    ...csvValues,
                    'Campaign Type': "csb"
                });
            } else if (csvValues['Campaign Type'] === "outlet") {
                setSelectedHeader("outlet");
                setCsvValues({
                    ...csvValues,
                    'Campaign Type': "outlet"
                });
            } else if (csvValues['Campaign Type'] === "DEXN") {
                setSelectedHeader("sb-gdo-dexn");
                setCsvValues({
                    ...csvValues,
                    'Campaign Type': "sb-gdo-dexn"
                });
            } else {
                setSelectedHeader(null)
            }


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
    //     // heroCopyValues
    //     // csvValues,
    //     // accentColor,
    //     // secondaryColor,
    //     // tertiaryColor,
    //     // slValue,
    //     // sslValue,
    //     // selectedHeader,
    //     // selectedBrand,
    //     // selectedFunding,
    //     // fundingCopyValue,
    //     // selectedSkinny,
    //     // selectedHero,
    //     // selectedPlugin,
    //     // selectedFpoSegment,
    //     // selectedFpoValue,
    //     // selectedBanner,
    //     // selectedFooter,
    //     // selectedBirdseed,
    //     // selectedBirdseedCopy,
    //     // birdseedCopyValues,
    //     // birdseedDate
    // });



    return (
        <AppContext.Provider value={{
            csvValues,
            setCsvValues,
            csvLoaded,
            setCsvLoaded,
            loadDefaultValuesFromCsv,


            accentColor,
            setAccentColor,
            secondaryColor,
            setSecondaryColor,
            tertiaryColor,
            setTertiaryColor,
            accentColorHex,
            secondaryColorHex,
            tertiaryColorHex,
            cores,
            handleAccentColorChange,
            handleSecondaryColorChange,
            handleTertiaryColorChange,

            setSlValue,
            setSslValue,
            slValue,
            sslValue,

            selectedHeader,
            setSelectedHeader,

            selectedBrand,
            setSelectedBrand,

            selectedFunding,
            setSelectedFunding,
            fundingCopyValue,
            setFundingCopyValue,

            selectedSkinny,
            setSelectedSkinny,
            skinnyTitleValue,
            setSkinnyTitleValue,
            skinnyCopyValue,
            setSkinnyCopyValue,

            selectedHero,
            setSelectedHero,
            heroCopyValues,
            setHeroCopyValues,

            selectedPlugin,
            setSelectedPlugin,
            pluginCopyValues,
            setPluginCopyValues,

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
            selectedBirdseedCopy,
            setSelectedBirdseedCopy,
            birdseedCopyValues,
            setBirdseedCopyValues,
            birdseedDate,
            setBirdseedDate,
        }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    return useContext(AppContext);
};