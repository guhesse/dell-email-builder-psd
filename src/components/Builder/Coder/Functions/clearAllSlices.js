import { core, batchPlay } from "../../../../App.js";
import { clearAllSlices } from "../../../../hook/hooksJSON.jsx";

export async function clearAllSlicesEnd() {
    const targetFunction = async (executionContext) => {
        try {

            const clearAllSlicesEnd = [clearAllSlices()]

            await batchPlay(clearAllSlicesEnd, {})

            console.log('Todas as slices limpas!', 'color: #00EAADFF;');
        } catch (error) {
            console.error('Não foi posssível limpar as slices.', error);
        }
    }

    const options = {
        commandName: 'Limpar todas as slices',
        interactive: true,
    };

    await core.executeAsModal(targetFunction, options);
}