import { core, batchPlay } from "../../../../App.js";
import { getBounds, createSlice } from "../../../../hook/hooksJSON.jsx";

export async function getPluginContent(params) {
    const { selectedModules: { plugin } } = params;

    const targetFunction = async (executionContext) => {
        if (plugin === "supercharger") {
            try {
                const superchargerBounds = [getBounds({ Name: "Plugin Background", Property: "bounds" })];
                const sliceSupercharger = await createSlice("XXXXXX_Plugin1_Image", superchargerBounds);
                await batchPlay(sliceSupercharger, {});

                console.log('%cCores obtidas com sucesso!', 'color: #00EAADFF;');
            } catch (error) {
                console.error('Não obter as cores', error);
            }
        }
    };

    const options = {
        commandName: 'Get Plugin Content',
        interactive: false,
    };

    await core.executeAsModal(targetFunction, options);
}