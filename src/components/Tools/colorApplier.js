import { batchPlay, core } from "../../App.js";

export async function colorApplier(colorValue) {
    console.log("tentando puxar a cor", colorValue);

    try {
        const targetFunction = async (executionContext) => {
            const setColor = [
                {
                    _obj: "set",
                    _target: [
                        {
                            _ref: "layer",
                            _enum: "ordinal",
                            _value: "targetEnum"
                        }
                    ],
                    to: {
                        _obj: "layer",
                        color: {
                            _enum: "color",
                            _value: colorValue
                        }
                    },
                    _options: {
                        dialogOptions: "dontDisplay"
                    }
                }
            ]
            await batchPlay(setColor, {});
        }
        const options = {
            commandName: 'Setar Cor',
            interactive: true,
        };

        await core.executeAsModal(targetFunction, options);
    } catch (error) {
        console.error('Erro ao setar a cor a layer:', error);
    }
};



