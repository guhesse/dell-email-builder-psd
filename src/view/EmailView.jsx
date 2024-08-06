import { useState } from 'react';
import ShowModal from '../showModal.jsx';
import EmailBuilder from '../components/Builder/EmailPsd/EmailBuilder.jsx';
import CsvReader from '../CsvReader.js';
import { BannerSelector, VfBannerSelector, BirdseedSelector, FooterSelector, FpoSelector, FundingSelector, HeaderSelector, HeroSelector, PluginSelector, SkinnySelector, SubjectLineSelector } from '../components/Selectors/Email/EmailSelectors.jsx';
import EmailCoder from '../components/Builder/Coder/EmailCoder.jsx';

export default function EmailView() {
    const [selectedCase, setSelectedCase] = useState("code");

    const handleCaseClick = (caseName) => {
        setSelectedCase(caseName);
    };

    const getButtonStyle = (caseName) => {
        return {
            cursor: 'pointer',
            color: selectedCase === caseName ? 'white' : 'gray',
            fontWeight: selectedCase === caseName ? '700' : '500'
        };
    };

    // <CsvReader />

    return (
        <>
            <div style={{ display: "flex", justifyContent: "center", paddingBottom: "10px" }}>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", width: "150px" }}>
                    <div
                        style={getButtonStyle('photoshop')}
                        onClick={() => handleCaseClick('photoshop')}
                    >
                        Photoshop
                    </div>
                    <div
                        style={getButtonStyle('code')}
                        onClick={() => handleCaseClick('code')}
                    >
                        Code
                    </div>
                </div>
            </div>
            <sp-divider></sp-divider>
            {selectedCase !== 'photoshop' && <EmailCoder />}
            {selectedCase !== 'code' && (
                <>
                    <SubjectLineSelector />
                    <HeaderSelector />
                    <FundingSelector />
                    <SkinnySelector />
                    <HeroSelector />
                    <PluginSelector />
                    <FpoSelector />
                    <BannerSelector />
                    <VfBannerSelector />
                    <FooterSelector />
                    <BirdseedSelector />
                    <EmailBuilder />
                </>
            )}
        </>
    );
}