import useAppContext from '../hook/useAppContext.jsx';
import BannerProvider from '../context/BannerProvider.js';
import { EmailView, BannerView } from './Views.jsx';

export default function Router() {
    const { route } = useAppContext();

    switch (route) {
        case '/email':
            return (
                <EmailView />
            );
        case '/banner':
            return (
                <BannerProvider>
                    <BannerView />
                </BannerProvider>
            )
        default:
            return (
                <p>
                    DEFAULT AMIGON
                </p>
            );
    }
}