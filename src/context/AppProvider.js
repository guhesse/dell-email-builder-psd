
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
        'Basic Info': '',
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
        'Basic Info': '',
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

    // Values dos inputs

    const [slValue, setSlValue] = useState("");
    const [sslValue, setSslValue] = useState("");

    useEffect(() => {
        setSlValue(csvValues.SL || "");
        setSslValue(csvValues.SSL || "");
    }, [csvValues.SL, csvValues.SSL]);


    // Alturas dos módulos

    const [slHeight, setSlHeight] = useState("");

    useEffect(() => {
        setSlHeight();
    });


    return (
        <AppContext.Provider value={{
            csvValues, setCsvValues, loadDefaultValuesFromCsv,
            setSlValue, setSslValue, slValue, sslValue,
            slHeight, setSlHeight,
        }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    return useContext(AppContext);
};