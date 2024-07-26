import useAppContext from '../hook/useAppContext.jsx';
import ColorSelector from './Selectors/Email/ColorSelector.js';

export default function Navbar() {

    const { route, setRoute } = useAppContext();

    console.log(route)

    const fontStyles = {
        fontWeight: '400',
    }

    const navStyle = {
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
            <ColorSelector />
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
            </div>
            <sp-divider style={{ marginBottom: '10px' }}></sp-divider>
        </div>
    )
}