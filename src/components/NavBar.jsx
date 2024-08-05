import useAppContext from '../hook/useAppContext.jsx';
import ColorSelector from './Selectors/Email/ColorSelector.js';
import NavColorSelector from './Selectors/Email/NavColorSelector.js';
import NavBrandSelector from './Selectors/Email/NavBrandSelector.js';

export default function Navbar() {

    const { route, setRoute } = useAppContext();

    const fontStyles = {
        fontWeight: '400',
    }

    const navStyle = {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: '5px'
    }

    const selectedStyle = {
        color: 'white',
    }

    return (
        <div>
            <div style={navStyle}>
                <h3
                    style={route === '/email' ? selectedStyle : fontStyles}
                    onClick={() => setRoute('/email')}>
                    Email
                </h3>
                <h3
                    style={route === '/banner' ? selectedStyle : fontStyles}
                    onClick={() => setRoute('/banner')}>
                    Banner
                </h3>
                <h3
                    style={route === '/tools' ? selectedStyle : fontStyles}
                    onClick={() => setRoute('/tools')}>
                    Tools
                </h3>
                <NavBrandSelector />
                <NavColorSelector />
            </div>
            <sp-divider style={{ marginBottom: '10px' }}></sp-divider>
        </div>
    )
}