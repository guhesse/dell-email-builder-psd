import { core, batchPlay } from '../../../App.js'
import { organizeAndSetColorLabel } from '../../../hook/hooksJSON.jsx';

export async function organizeLayers(buildInfo) {

    const { selectedModules, copyValues } = buildInfo

    const { header, skinny, hero, plugin, fpo, banner, footer, birdseed } = selectedModules

    const fpoCount = copyValues.fpo.number

    console.log('fpoCount:', fpoCount)

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

            if (header !== "" && header !== null) {
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

            if (skinny !== null && skinny !== "") {
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

            if (hero === "hero1-lifestyle-product") {
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
            } else if (hero === "hero1-lifestyle") {
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
            } else if (hero === "hero1-product") {
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
            } else if (hero === "aw-hero1-lifestyle-product") {
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
            } else if (hero === "hero2-promotion") {
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

            if (plugin === "plugin") {
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
            } else if (plugin === "supercharger") {
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

            if (fpoCount !== 0 && fpoCount !== null) {
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

            if (banner !== "" && banner !== null) {
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


            if (footer !== "" && footer !== null) {
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

            if (birdseed !== "" && birdseed !== null) {
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