import React from 'react';
import useAppContext from '../hook/useAppContext.jsx';
import useCalculateTotalHeight from '../hook/calculateTotalHeight.jsx';
import { slBuild, headerBuild, fundingBuild, skinnyBuild, heroBuild, pluginBuild, fpoBuild, bannerBuild, footerBuild, birdseedBuild } from './Builder/Builds.jsx';
import { clearAllLayers, fitToScreenPosBuild, fitToScreenPreBuild, organizeLayers, clearArtboards } from './Builder/BuildTools/buildTools.jsx';

export default function EmailBuilder() {

    const { colors, selectedModules, copyValues } = useAppContext();

    const [modulesHeight, setModulesHeight, calculateTotalHeight] = useCalculateTotalHeight({
        sl: '',
        header: '',
        vf: '',
        skinny: '',
        hero: '',
        plugin: '',
        fpo: '',
        banner: '',
        birdseed: '',
    });

    const buildInfo = {
        selectedModules,
        copyValues,
        modulesHeight,
        colors,
        calculateTotalHeight,
    };

    const handleBuild = async () => {
        try {
            await clearAllLayers();
            // await clearArtboards();
            await fitToScreenPreBuild();
            await slBuild(buildInfo);
            await headerBuild(buildInfo)
            await fundingBuild(buildInfo);
            await skinnyBuild(buildInfo);
            await heroBuild(buildInfo);
            await pluginBuild(buildInfo);
            await fpoBuild(buildInfo);
            await bannerBuild(buildInfo);
            await footerBuild(buildInfo);
            await birdseedBuild(buildInfo);
            await fitToScreenPosBuild(buildInfo);
            await organizeLayers(buildInfo);

            console.log('%cTodas as fun\u00e7\u00f5es foram executadas com sucesso.', 'color: #00EAADFF;');
        } catch (error) {
            console.error('Erro ao montar o layout:', error);
        }
    };

    return (
        <>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <sp-button variant="accent" width="130" onClick={handleBuild}>
                    Build Email
                </sp-button>
            </div >
        </>
    )
}