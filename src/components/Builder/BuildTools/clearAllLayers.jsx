import { core, batchPlay } from '../../../App.js'

export async function clearAllLayers() {
    const targetFunction = async (executionContext) => {
        try {
            const getLayerIndex = [
                { _obj: 'get', _target: [{ _ref: 'layer', _index: 2 }], },
            ];

            await batchPlay(getLayerIndex, {});

            const deleteAllLayers = [
                { _obj: 'selectAllLayers', _target: [{ _ref: 'layer', _enum: 'ordinal', _value: 'targetEnum' }], _options: { dialogOptions: 'silent' } },
                { _obj: 'delete', _target: [{ _ref: 'layer', _enum: 'ordinal', _value: 'targetEnum' }], _options: { dialogOptions: 'silent' } },
            ];

            await batchPlay(deleteAllLayers, {});

            console.log('%cCamadas deletadas com sucesso!', 'color: #00EAADFF;');
        } catch (error) {
            if (error.message.includes('The object “Layer 1” is not currently available.')) {
                console.log('%cNenhuma camada encontrada no índice 1. A função não será executada.', 'color: #FF5733;');
            } else {
                console.error('Não foi possível deletar as Camadas', error);
            }
        }
    };

    const options = {
        commandName: 'Limpar camadas',
        interactive: true,
    };

    await core.executeAsModal(targetFunction, options);
}