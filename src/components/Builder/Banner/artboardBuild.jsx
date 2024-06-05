import React from "react";
import { core, app, batchPlay, storage } from '../../../App.js';
import useBannerContext from '../../../hook/useBannerContext.jsx';
import { selectLayer, setOffset } from '../../../hook/hooksJSON.jsx'

export async function artboardBuild(buildInfo) {

    const { artboards } = buildInfo;

    let currentX = [0, 0, 0, 0, 0, 0, 0]; // Adicionado para manter o controle do X atual para cada linha
    let currentY = [0, 0, 0, 0, 0, 0, 0]; // Adicionado para manter o controle do Y atual para cada linha
    let maxHeight = [0, 0, 0, 0, 0, 0, 0]; // Adicionado para manter o controle da altura máxima para cada linha

    for (const artboard in artboards) {
        const width = artboards[artboard].width;
        const height = artboards[artboard].height;
        const ratio = artboards[artboard].ratio;

        const name = `${width}x${height}`;

        // Determina a linha com base na proporção
        let row;
        switch (true) {
            case (ratio < 1):
                row = 5;
                break;
            case (ratio < 1.5):
                row = 4;
                break;
            case (ratio < 2):
                row = 3;
                break;
            case (ratio < 3):
                row = 2;
                break;
            case (ratio < 4):
                row = 1;
                break;
            default:
                row = 0;
                break;
        }

        // Atualiza a posição Y para a soma das alturas máximas e paddings de todas as linhas anteriores
        if (row > 0) {
            currentY[row] = maxHeight.slice(0, row).reduce((a, b) => a + b, 0) + (row * 40);
        }

        try {
            const targetFunction = async () => {
                try {
                    // Cria as artboards
                    const createArtboards = [
                        {
                            _obj: "make",
                            _target: [
                                {
                                    _ref: "artboardSection"
                                }
                            ],
                            layerSectionStart: 1,
                            layerSectionEnd: 2,
                            name: "",
                            artboardRect: {
                                _obj: "classFloatRect",
                                top: currentY[row] + 1, // Atualizado para usar o Y atual da linha
                                left: currentX[row] + 1, // Atualizado para usar o X atual da linha
                                bottom: currentY[row] + height + 1,
                                right: currentX[row] + width + 1
                            },
                            _options: {
                                dialogOptions: "dontDisplay"
                            }
                        },
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
                                name: name
                            },
                            _options: {
                                dialogOptions: "dontDisplay"
                            }
                        }
                    ];

                    await batchPlay(createArtboards, {});

                    currentX[row] += width + 40; // Atualiza o X atual após a criação da artboard

                    console.log('%cArtboards criadas com sucesso!', 'color: #00EAADFF;');
                } catch (error) {
                    console.error('Erro ao criar as artboards:', error);
                }
            };

            const options = {
                commandName: 'Criar Artboards',
                interactive: false,
            };

            await core.executeAsModal(targetFunction, options);
        } catch (error) {
            console.error('Erro ao criar as artboards:', error);
        }

        // Atualiza a altura máxima da linha atual se a altura da artboard for maior
        if (height > maxHeight[row]) {
            maxHeight[row] = height;
        }


        // Se o X atual exceder um limite (por exemplo, a largura da tela), mova para a próxima linha
        if (currentX[row] > 100000) { // 1920 pode ser substituído pela largura da tela
            currentX[row] = 0;
            currentY[row] += maxHeight[row] + 40; // Atualiza o Y atual para a próxima linha
        }
    }


};