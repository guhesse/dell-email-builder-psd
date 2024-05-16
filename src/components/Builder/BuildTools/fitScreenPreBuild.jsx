import { core, batchPlay } from '../../../App.js'

export async function fitToScreenPreBuild() {
    const targetFunction = async (executionContext) => {
        try {

            const setBackgroundColor = [
                { _obj: "set", _target: [{ _ref: "color", _property: "backgroundColor" }], to: { _obj: "HSBColorClass", hue: { _unit: "angleUnit", _value: 0 }, saturation: 0, brightness: 100 }, source: "photoshopPicker", _options: { dialogOptions: "dontDisplay" } }
            ]
            await batchPlay(setBackgroundColor, {});

            const cropDocument = [
                { _obj: "select", _target: [{ _ref: "cropTool" }], _options: { dialogOptions: "dontDisplay" } },
                { _obj: "select", _target: [{ _ref: "moveTool" }], _options: { dialogOptions: "dontDisplay" } },
                { _obj: "crop", to: { _obj: "rectangle", top: { _unit: "pixelsUnit", _value: 0 }, left: { _unit: "pixelsUnit", _value: 0 }, bottom: { _unit: "pixelsUnit", _value: 5000.223315669948 }, right: { _unit: "pixelsUnit", _value: 650 } }, angle: { _unit: "angleUnit", _value: 0 }, delete: true, AutoFillMethod: 1, cropFillMode: { _enum: "cropFillMode", _value: "defaultFill" }, cropAspectRatioModeKey: { _enum: "cropAspectRatioModeClass", _value: "pureAspectRatio" }, constrainProportions: false, _options: { dialogOptions: "dontDisplay" } }
            ]
            await batchPlay(cropDocument, {});

            const zoomFit = [
                { _obj: "select", _target: [{ _ref: "menuItemClass", _enum: "menuItemType", _value: "fitOnScreen", },], _options: { dialogOptions: "dontDisplay", }, },
            ];
            await batchPlay(zoomFit, {});

            console.log('%cFit inicial executado com sucesso!', 'color: #00EAADFF;');
        } catch (error) {
            console.error('N\u00e3o foi poss\u00edvel ajustar o zoom para "Fit on Screen":', error);
        }
    }

    const options = {
        commandName: 'Ajuste de documento pre montagem',
        interactive: true,
    };

    await core.executeAsModal(targetFunction, options);
};