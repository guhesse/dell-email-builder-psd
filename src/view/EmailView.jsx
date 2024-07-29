import ShowModal from '../showModal.jsx';
import EmailBuilder from '../components/EmailBuilder.jsx';
import CsvReader from '../CsvReader.js';
import { BannerSelector, BirdseedSelector, FooterSelector, FpoSelector, FundingSelector, HeaderSelector, HeroSelector, PluginSelector, SkinnySelector, SubjectLineSelector } from '../components/Selectors/Email/EmailSelectors.jsx';

export default function EmailView() {
    return (
        <>
            <CsvReader />
            <SubjectLineSelector />
            <HeaderSelector />
            <FundingSelector />
            <SkinnySelector />
            <HeroSelector />
            <PluginSelector />
            <FpoSelector />
            <BannerSelector />
            <FooterSelector />
            <BirdseedSelector />
            <EmailBuilder />
        </>
    )
}