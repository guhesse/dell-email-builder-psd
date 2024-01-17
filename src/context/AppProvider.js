
// CsvContext.js
import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from './AppContext.js';
import { storage } from '../App.js';

export default function AppProvider({ children }) {
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

    const updateValues = (valueMapping) => {
        const updatedValues = {};
        Object.keys(valueMapping).forEach((key) => {
            updatedValues[key] = csvValues[valueMapping[key]];
        });
        return updatedValues;
    };

    // Seletor de Cores

    const cores = {
        white: { r: 254, g: 254, b: 254 },
        quartz: { r: 238, g: 238, b: 238 },
        granite: { r: 200, g: 201, b: 199 },
        gray: { r: 128, g: 128, b: 128 },
        carbon: { r: 68, g: 68, b: 68 },
        black: { r: 0, g: 0, b: 0 },
        sky: { r: 128, g: 199, b: 251 },
        dellBlue: { r: 6, g: 114, b: 203 },
        royal: { r: 12, g: 50, b: 164 },
        glacier: { r: 229, g: 248, b: 255 },
        midnight: { r: 13, g: 33, b: 85 },
        teaGreen: { r: 228, g: 255, b: 214 },
        honeydew: { r: 191, g: 255, b: 183 },
        lime: { r: 159, g: 255, b: 153 },
        basil: { r: 55, g: 204, b: 92 },
        hunter: { r: 36, g: 117, b: 84 },
        deepGreen: { r: 36, g: 71, b: 57 },
        periwinkle: { r: 222, g: 221, b: 255 },
        lavender: { r: 190, g: 175, b: 255 },
        amethyst: { r: 142, g: 92, b: 239 },
        plum: { r: 97, g: 44, b: 176 },
        raisin: { r: 42, g: 20, b: 90 },
        sand: { r: 251, g: 238, b: 206 },
        apricot: { r: 244, g: 187, b: 94 },
        coral: { r: 225, g: 99, b: 63 },
        scarlet: { r: 179, g: 11, b: 55 },
        burgundy: { r: 105, g: 29, b: 63 }
    };

    const [accentColor, setAccentColor] = useState("deepGreen");
    const [secondaryColor, setSecondaryColor] = useState("lime");
    const [tertiaryColor, setTertiaryColor] = useState("honeydew");

    const handleAccentColorChange = (color) => {
        setAccentColor(color);
    };

    const handleSecondaryColorChange = (color) => {
        setSecondaryColor(color);
    };

    const handleTertiaryColorChange = (color) => {
        setTertiaryColor(color);
    };

    // console.log("Accent Color RGB", cores[accentColor]?.r, cores[accentColor]?.g, cores[accentColor]?.b);
    // console.log("Secondary Color RGB", cores[secondaryColor]?.r, cores[secondaryColor]?.g, cores[secondaryColor]?.b);
    // console.log("Tertiary Color RGB", cores[tertiaryColor]?.r, cores[tertiaryColor]?.g, cores[tertiaryColor]?.b);


    // Values e estados dos inputs

    const [selectedHeader, setSelectedHeader] = useState("");
    const [selectedFunding, setSelectedFunding] = useState("");
    const [selectedSkinny, setSelectedSkinny] = useState("");

    const [slValue, setSlValue] = useState("");
    const [sslValue, setSslValue] = useState("");
    const [fundingCopyValue, setFundingCopyValue] = useState("");
    const [skinnyTitleValue, setSkinnyTitleValue] = useState("");
    const [skinnyCopyValue, setSkinnyCopyValue] = useState("");


    useEffect(() => {

        setSlValue(csvValues.SL || "");
        setSslValue(csvValues.SSL || "");

        setSelectedHeader(csvValues['Campaign Type'] || "csb");
        if (csvValues['Campaign Type'] === "CSB") {
            setCsvValues({
                ...csvValues,
                'Campaign Type': "csb"
            });
        }

        setSelectedFunding(csvValues['Vendor Funding Name'] || "no-vf");
        if (csvValues['Vendor Funding Name'] === "Jumpstart Home") {
            setCsvValues({
                ...csvValues,
                'Vendor Funding Name': "win11"
            });
        }
        setFundingCopyValue(csvValues['Funding/WEP Content'] || "");

    }, [csvValues.SL, csvValues.SSL, csvValues['Funding/WEP Content'], csvValues['Campaign Type']]);


    return (
        <AppContext.Provider value={{
            csvValues,
            setCsvValues,
            loadDefaultValuesFromCsv,

            accentColor,
            secondaryColor,
            tertiaryColor,
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

        }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    return useContext(AppContext);
};