import { core, batchPlay } from '../../../App.js'

export async function clearArtboards() {
    const targetFunction = async () => {
        try {
            const artboardExists = [
                { _obj: "get", _target: [{ _ref: "layer", _name: "Artboard 1" }] }
            ];

            await batchPlay(artboardExists, {});

            console.log(artboardExists[0])

            const deleteArtboards = [
                { _obj: "make", _target: [{ _ref: "layer" }], using: { _obj: "layer", name: "Background" }, layerID: 6, _options: { dialogOptions: "dontDisplay" } },
                { _obj: "make", _target: [{ _ref: "backgroundLayer" }], using: { _ref: "layer", _enum: "ordinal", _value: "targetEnum" }, _options: { dialogOptions: "dontDisplay" } },
                { _obj: "select", _target: [{ _ref: "layer", _name: "Artboard 1" }], makeVisible: false, layerID: [3], _options: { dialogOptions: "dontDisplay" } },
                { _obj: "delete", _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }], layerID: [4, 3], _options: { dialogOptions: "dontDisplay" } },
            ];

            if (artboardExists.length > 0) {
                await batchPlay(deleteArtboards, {});
                console.log('%Artboards deletadas com sucesso!', 'color: #00EAADFF;');
            } else {
                console.log('%cNenhuma artboard encontrada. A função não será executada.', 'color: #FF5733;');
            }

            console.log('%Artboards deletadas com sucesso!', 'color: #00EAADFF;');
        } catch (error) {
            console.error('%cNenhuma artboard encontrada. A função não será executada.', 'color: #FF5733;', error);
        }
    }

    const options = {
        commandName: 'Limpar camadas',
        interactive: true,
    };

    await core.executeAsModal(targetFunction, options);
}