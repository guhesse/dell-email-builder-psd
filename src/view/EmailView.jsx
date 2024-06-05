import ShowModal from '../showModal.jsx';
import EmailBuilder from '../components/EmailBuilder.jsx';
import CsvReader from '../CsvReader.js';
import { BannerSelector, BirdseedSelector, BrandSelector, ColorSelector, FooterSelector, FpoSelector, FundingSelector, HeaderSelector, HeroSelector, PluginSelector, SkinnySelector, SubjectLineSelector } from '../components/Selectors/Email/EmailSelectors.jsx';

export default function EmailView() {
    return (
        <>
            <ShowModal />
            <CsvReader />
            <BrandSelector />
            <ColorSelector />
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