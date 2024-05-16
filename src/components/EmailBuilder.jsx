import React from 'react';
import { core, batchPlay} from '../App.js';
import useAppContext from '../hook/useAppContext.jsx';
import useCalculateTotalHeight from '../hook/calculateTotalHeight.jsx';
import { slBuild, headerBuild, fundingBuild, skinnyBuild, heroBuild, pluginBuild, fpoBuild, bannerBuild, footerBuild, birdseedBuild} from './Builder/Builds.jsx';
import { clearAllLayers, fitToScreenPosBuild, fitToScreenPreBuild } from './Builder/BuildTools/buildTools.jsx';
import { organizeAndSetColorLabel } from "../hook/hooksJSON.jsx";

export default function EmailBuilder() {

    const { selectedBrand, colors, selectedModules, copyValues } = useAppContext();

    // Fazer depois a função para deletar artboard caso exista uma 

    // { _obj: "make", _target: [{ _ref: "layer" }], using: { _obj: "layer", name: "Background" }, layerID: 6, _options: { dialogOptions: "dontDisplay" } },
    // { _obj: "make", _target: [{ _ref: "backgroundLayer" }], using: { _ref: "layer", _enum: "ordinal", _value: "targetEnum" }, _options: { dialogOptions: "dontDisplay" } },
    // { _obj: "select", _target: [{ _ref: "layer", _name: "Artboard 1" }], makeVisible: false, layerID: [3], _options: { dialogOptions: "dontDisplay" } },
    // { _obj: "delete", _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }], layerID: [4, 3], _options: { dialogOptions: "dontDisplay" } }

    async function organizeDocument() {

        const targetFunction = async (executionContext) => {
            try {
                const sslOrganize = organizeAndSetColorLabel({
                    Name: "SL + SSL",
                    Index: 1,
                    Color: "gray",
                })
                await batchPlay(sslOrganize, {});

                const vfOrganize = organizeAndSetColorLabel({
                    Name: "Funding",
                    Index: 1,
                    Color: "indigo",
                })
                await batchPlay(vfOrganize, {});

                if (selectedHeader !== "" && selectedHeader !== null) {
                    const headerOrganize = [
                        { _obj: "select", _target: [{ _ref: "layer", _name: "Header" }], makeVisible: false, _options: { dialogOptions: "dontDisplay" } },
                        { _obj: "move", _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }], to: { _ref: "layer", _index: 1 }, adjustment: false, version: 5, _options: { dialogOptions: "dontDisplay" } },
                        { _obj: "placedLayerConvertToLayers", _options: { dialogOptions: "dontDisplay" } },
                        {
                            _obj: "set",
                            _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }],
                            to: { _obj: "layer", name: "Header", color: { _enum: "color", _value: "blue" } },
                            _options: { dialogOptions: "dontDisplay" }
                        },
                    ]
                    await batchPlay(headerOrganize, {});
                }

                if (selectedSkinny !== null && selectedSkinny !== "") {
                    const skinnyOrganize = [
                        { _obj: "select", _target: [{ _ref: "layer", _name: "Skinny Banner" }], makeVisible: false, _options: { dialogOptions: "dontDisplay" } },
                        { _obj: "move", _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }], to: { _ref: "layer", _index: 1 }, adjustment: false, version: 5, _options: { dialogOptions: "dontDisplay" } },
                        { _obj: "placedLayerConvertToLayers", _options: { dialogOptions: "dontDisplay" } },
                        {
                            _obj: "set",
                            _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }],
                            to: { _obj: "layer", name: "Skinny Banner", color: { _enum: "color", _value: "magenta" } },
                            _options: { dialogOptions: "dontDisplay" }
                        },
                    ]
                    await batchPlay(skinnyOrganize, {});
                }

                if (selectedHero === "hero1-lifestyle-product") {
                    const heroOrganize = [
                        { _obj: "select", _target: [{ _ref: "layer", _name: "Hero / Layout 1 / Lifestyle & Product" }], makeVisible: false, _options: { dialogOptions: "dontDisplay" } },
                        { _obj: "move", _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }], to: { _ref: "layer", _index: 1 }, adjustment: false, version: 5, _options: { dialogOptions: "dontDisplay" } },
                        { _obj: "placedLayerConvertToLayers", _options: { dialogOptions: "dontDisplay" } },
                        {
                            _obj: "set",
                            _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }],
                            to: { _obj: "layer", name: "Hero", color: { _enum: "color", _value: "fuchsia" } },
                            _options: { dialogOptions: "dontDisplay" }
                        },
                    ]
                    await batchPlay(heroOrganize, {});
                } else if (selectedHero === "hero1-lifestyle") {
                    const heroOrganize = [
                        { _obj: "select", _target: [{ _ref: "layer", _name: "Hero / Layout 1 / Lifestyle" }], makeVisible: false, _options: { dialogOptions: "dontDisplay" } },
                        { _obj: "move", _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }], to: { _ref: "layer", _index: 1 }, adjustment: false, version: 5, _options: { dialogOptions: "dontDisplay" } },
                        { _obj: "placedLayerConvertToLayers", _options: { dialogOptions: "dontDisplay" } },
                        {
                            _obj: "set",
                            _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }],
                            to: { _obj: "layer", name: "Hero", color: { _enum: "color", _value: "fuchsia" } },
                            _options: { dialogOptions: "dontDisplay" }
                        },
                    ]
                    await batchPlay(heroOrganize, {});
                } else if (selectedHero === "hero1-product") {
                    const heroOrganize = [
                        { _obj: "select", _target: [{ _ref: "layer", _name: "Hero / Layout 1 / Product" }], makeVisible: false, _options: { dialogOptions: "dontDisplay" } },
                        { _obj: "move", _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }], to: { _ref: "layer", _index: 1 }, adjustment: false, version: 5, _options: { dialogOptions: "dontDisplay" } },
                        { _obj: "placedLayerConvertToLayers", _options: { dialogOptions: "dontDisplay" } },
                        {
                            _obj: "set",
                            _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }],
                            to: { _obj: "layer", name: "Hero", color: { _enum: "color", _value: "fuchsia" } },
                            _options: { dialogOptions: "dontDisplay" }
                        },
                    ]
                    await batchPlay(heroOrganize, {});
                } else if (selectedHero === "aw-hero1-lifestyle-product") {
                    const heroOrganize = [
                        { _obj: "select", _target: [{ _ref: "layer", _name: "Hero / AW Layout 1 / Lifestyle & Product" }], makeVisible: false, _options: { dialogOptions: "dontDisplay" } },
                        { _obj: "move", _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }], to: { _ref: "layer", _index: 1 }, adjustment: false, version: 5, _options: { dialogOptions: "dontDisplay" } },
                        { _obj: "placedLayerConvertToLayers", _options: { dialogOptions: "dontDisplay" } },
                        {
                            _obj: "set",
                            _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }],
                            to: { _obj: "layer", name: "Hero", color: { _enum: "color", _value: "fuchsia" } },
                            _options: { dialogOptions: "dontDisplay" }
                        },
                    ]
                    await batchPlay(heroOrganize, {});
                } else if (selectedHero === "hero2-promotion") {
                    const heroOrganize = [
                        { _obj: "select", _target: [{ _ref: "layer", _name: "Hero / Layout 2 / Promotion" }], makeVisible: false, _options: { dialogOptions: "dontDisplay" } },
                        { _obj: "move", _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }], to: { _ref: "layer", _index: 1 }, adjustment: false, version: 5, _options: { dialogOptions: "dontDisplay" } },
                        { _obj: "placedLayerConvertToLayers", _options: { dialogOptions: "dontDisplay" } },
                        {
                            _obj: "set",
                            _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }],
                            to: { _obj: "layer", name: "Hero", color: { _enum: "color", _value: "fuchsia" } },
                            _options: { dialogOptions: "dontDisplay" }
                        },
                    ]
                    await batchPlay(heroOrganize, {});
                }

                if (selectedPlugin === "plugin") {
                    const pluginOrganize = [
                        { _obj: "select", _target: [{ _ref: "layer", _name: "Plugin" }], makeVisible: false, _options: { dialogOptions: "dontDisplay" } },
                        { _obj: "move", _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }], to: { _ref: "layer", _index: 1 }, adjustment: false, version: 5, _options: { dialogOptions: "dontDisplay" } },
                        { _obj: "placedLayerConvertToLayers", _options: { dialogOptions: "dontDisplay" } },
                        {
                            _obj: "set",
                            _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }],
                            to: { _obj: "layer", name: "Plugin", color: { _enum: "color", _value: "violet" } },
                            _options: { dialogOptions: "dontDisplay" }
                        },
                    ]
                    await batchPlay(pluginOrganize, {});
                } else if (selectedPlugin === "supercharger") {
                    const superchargerOrganize = [
                        { _obj: "select", _target: [{ _ref: "layer", _name: "Supercharger" }], makeVisible: false, _options: { dialogOptions: "dontDisplay" } },
                        { _obj: "move", _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }], to: { _ref: "layer", _index: 1 }, adjustment: false, version: 5, _options: { dialogOptions: "dontDisplay" } },
                        { _obj: "placedLayerConvertToLayers", _options: { dialogOptions: "dontDisplay" } },
                        {
                            _obj: "set",
                            _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }],
                            to: { _obj: "layer", name: "Supercharger", color: { _enum: "color", _value: "violet" } },
                            _options: { dialogOptions: "dontDisplay" }
                        },
                    ]
                    await batchPlay(superchargerOrganize, {});
                }

                if (selectedFpoValue !== 0 && selectedFpoValue !== null) {
                    const fpoOrganize = [
                        { _obj: "select", _target: [{ _ref: "layer", _name: "FPOs" }], makeVisible: false, _options: { dialogOptions: "dontDisplay" } },
                        { _obj: "move", _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }], to: { _ref: "layer", _index: 1 }, adjustment: false, version: 5, _options: { dialogOptions: "dontDisplay" } },
                        { _obj: "placedLayerConvertToLayers", _options: { dialogOptions: "dontDisplay" } },
                        {
                            _obj: "set",
                            _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }],
                            to: { _obj: "layer", name: "FPO", color: { _enum: "color", _value: "red" } },
                            _options: { dialogOptions: "dontDisplay" }
                        },
                    ]
                    await batchPlay(fpoOrganize, {});
                }

                if (selectedBanner !== "" && selectedBanner !== null) {
                    const bannerOrganize = [
                        { _obj: "select", _target: [{ _ref: "layer", _name: "Banner" }], makeVisible: false, _options: { dialogOptions: "dontDisplay" } },
                        { _obj: "move", _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }], to: { _ref: "layer", _index: 1 }, adjustment: false, version: 5, _options: { dialogOptions: "dontDisplay" } },
                        { _obj: "placedLayerConvertToLayers", _options: { dialogOptions: "dontDisplay" } },
                        {
                            _obj: "set",
                            _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }],
                            to: { _obj: "layer", name: "Banner", color: { _enum: "color", _value: "orange" } },
                            _options: { dialogOptions: "dontDisplay" }
                        },
                    ]
                    await batchPlay(bannerOrganize, {});
                }


                if (selectedFooter !== "" && selectedFooter !== null) {
                    const footerOrganize = [
                        { _obj: "select", _target: [{ _ref: "layer", _name: "Footer" }], makeVisible: false, _options: { dialogOptions: "dontDisplay" } },
                        { _obj: "move", _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }], to: { _ref: "layer", _index: 1 }, adjustment: false, version: 5, _options: { dialogOptions: "dontDisplay" } },
                        { _obj: "placedLayerConvertToLayers", _options: { dialogOptions: "dontDisplay" } },
                        {
                            _obj: "set",
                            _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }],
                            to: { _obj: "layer", name: "Footer", color: { _enum: "color", _value: "yellowColor" } },
                            _options: { dialogOptions: "dontDisplay" }
                        },
                    ]
                    await batchPlay(footerOrganize, {});
                }

                if (selectedBirdseed !== "" && selectedBirdseed !== null) {
                    const birdseedOrganize = [
                        { _obj: "select", _target: [{ _ref: "layer", _name: "Birdseed" }], makeVisible: false, _options: { dialogOptions: "dontDisplay" } },
                        { _obj: "move", _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }], to: { _ref: "layer", _index: 1 }, adjustment: false, version: 5, _options: { dialogOptions: "dontDisplay" } },
                        { _obj: "placedLayerConvertToLayers", _options: { dialogOptions: "dontDisplay" } },
                        {
                            _obj: "set",
                            _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }],
                            to: { _obj: "layer", name: "Birdseed", color: { _enum: "color", _value: "green" } },
                            _options: { dialogOptions: "dontDisplay" }
                        },
                    ]
                    await batchPlay(birdseedOrganize, {});
                }

                console.log('%cFit final executado com sucesso!', 'color: #00EAADFF;');
            } catch (error) {
                console.error('N\u00e3o foi poss\u00edvel ajustar o zoom para "Fit on Screen Pos":', error);
            }
        }

        const options = {
            commandName: 'Ajuste de documento pos montagem',
            interactive: true,
        };

        await core.executeAsModal(targetFunction, options);
    };

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
            // await organizeDocument();

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




