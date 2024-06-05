import React from 'react';
import useBannerContext from "../../../hook/useBannerContext.jsx";
import { artboardBuild } from "./artboardBuild.jsx";

export default function BannerBuilder() {

    const { artboards, setArtboards } = useBannerContext();

    const buildInfo = { 
        artboards 
    };

    const handleBuild = async () => {
        try {
            await artboardBuild(buildInfo);

            console.log('%cTodas as fun\u00e7\u00f5es foram executadas com sucesso.', 'color: #00EAADFF;');
        } catch (error) {
            console.error('Erro ao montar o layout:', error);
        }
    };

    return (
        <>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <sp-button variant="accent" width="130" onClick={handleBuild}>
                    Build Banners
                </sp-button>
            </div >
        </>
    )

}

