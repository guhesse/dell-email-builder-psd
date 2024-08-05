import { core, batchPlay } from "../../../../App.js";
import { getBounds, createSlice } from "../../../../hook/hooksJSON.jsx";

export async function getBannerContent(params) {
    const { selectedModules: { banner } } = params;

    const targetFunction = async (executionContext) => {
        if (banner === "left" || banner === "right") {
            try {
                const headlineBounds = [getBounds({ Name: "Banner Headline", Property: "bounds" })];
                const sliceHeadline = await createSlice("XXXXXX_Banner1_Headline_Image", headlineBounds);
                await batchPlay(sliceHeadline, {});

                const lifestyleBounds = [getBounds({ Name: "Image Container", Property: "bounds" })];
                const sliceLifestyle = await createSlice("XXXXXX_Banner1_Image", lifestyleBounds);
                await batchPlay(sliceLifestyle, {});

                console.log('Cores obtidas com sucesso!', 'color: #00EAADFF;');
            } catch (error) {
                console.error('Não obter as cores', error);
            }
        }
    };

    const options = {
        commandName: 'Get Banner Content',
        interactive: false,
    };

    await core.executeAsModal(targetFunction, options);
}