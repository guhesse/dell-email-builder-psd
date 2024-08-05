import { core, batchPlay } from '../../../App.js'

export async function fitToScreenPosBuild(buildInfo) {

    var { selectedModules, modulesHeight } = buildInfo

    const allModulesSizes = ((buildInfo.calculateTotalHeight('birdseed', buildInfo.selectedModules) + (modulesHeight.birdseed / 2) + 60));

    const targetFunction = async (executionContext) => {
        try {
            const batchCropDocument = [
                { _obj: "select", _target: [{ _ref: "cropTool" }], _options: { dialogOptions: "dontDisplay" } },
                { _obj: "select", _target: [{ _ref: "moveTool" }], _options: { dialogOptions: "dontDisplay" } },
                { _obj: "crop", to: { _obj: "rectangle", top: { _unit: "pixelsUnit", _value: 0 }, left: { _unit: "pixelsUnit", _value: 0 }, bottom: { _unit: "pixelsUnit", _value: parseFloat(allModulesSizes) }, right: { _unit: "pixelsUnit", _value: 650 } }, angle: { _unit: "angleUnit", _value: 0 }, delete: true, AutoFillMethod: 1, cropFillMode: { _enum: "cropFillMode", _value: "defaultFill" }, cropAspectRatioModeKey: { _enum: "cropAspectRatioModeClass", _value: "pureAspectRatio" }, constrainProportions: false, _options: { dialogOptions: "dontDisplay" } }
            ]

            await batchPlay(batchCropDocument, {});

            const batchZoomFit = [

                { _obj: "select", _target: [{ _ref: "menuItemClass", _enum: "menuItemType", _value: "fitOnScreen", },], _options: { ialogOptions: "dontDisplay", }, },];

            await batchPlay(batchZoomFit, {});

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