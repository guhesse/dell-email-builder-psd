
import { core, app, batchPlay, storage } from '../../App.js';
import { selectAllAndCopy } from '../../hook/hooksJSON.jsx';

export async function birdseedBuild(buildInfo) {

    var { selectedModules, modulesHeight, copyValues } = buildInfo

    var { birdseed } = selectedModules
    const birdseedValues = copyValues.birdseed

    var { copy, day, month, year } = birdseedValues || {}


    if (birdseed === "" || birdseed === null) {
        console.warn('Birdseed n\u00e3o selecionado');
        modulesHeight.birdseed = 0;
        return;
    }

    const birdseedFilePath = `assets/birdseeds/${birdseed}.psd`;

    try {
        const fs = storage.localFileSystem;
        const pluginDir = await fs.getPluginFolder();
        const fileEntry = await pluginDir.getEntry(birdseedFilePath);


        day = day === null ? 1 : day;
        month = month === null ? 1 : month;
        year = year === null ? 2024 : year;

        let formattedDay = day < 10 ? `0${day}` : day;
        let formattedMonth = month < 10 ? `0${month}` : month;



        const targetFunction = async (executionContext) => {
            try {
                await app.open(fileEntry);

                let batchBirdseedCopy = [];

                if (copy) {

                    const defaultTextSliceOne = `Ofertas v\u00e1lidas at\u00e9 ${formattedDay}/${formattedMonth}/${year}, limitadas, por linha de produto, a 3 unidades para pessoa f\u00edsica, seja por aquisi\u00e7\u00e3o direta e/ou entrega a ordem, que n\u00e3o tenha adquirido equipamentos Dell nos \u00faltimos 4 meses, e a 5 unidades para pessoa jur\u00eddica ou grupo de empresas com at\u00e9 500 funcion\u00e1rios registrados. Frete gr\u00e1tis para todo o Brasil. C\u00e1lculo do valor do produto sem frete. Nossos notebooks e desktops s\u00e3o constru\u00eddos especialmente para voc\u00ea. Nada de m\u00e1quinas paradas em estoque. O prazo de entrega pode ser estimado junto ao site da Dell.\r\rPre\u00e7os referenciados com impostos para consumidores pessoas f\u00edsicas, comprando com CPF. O pre\u00e7o final aplic\u00e1vel nas vendas para pessoas jur\u00eddicas comprando com CNPJ pode variar de acordo com o Estado em que estiver localizado o adquirente do produto, em raz\u00e3o dos diferenciais de impostos para cada estado. As ofertas podem ser adquiridas atrav\u00e9s de cart\u00e3o de cr\u00e9dito das operadoras Visa, MasterCard, American Express, Elo e Hypercard, atrav\u00e9s de Boleto ou PayPal. Para mais detalhes, consulte o seu representante de vendas ou visite o site`

                    const defaultTextURLOne = ` www.dell.com.br.\r\r`

                    const defaultTextSliceTwo = `Garantia total m\u00ednima (legal + contratual) de 1 ano, inclui pe\u00e7as e m\u00e3o de obra, restrita aos produtos Dell. Na garantia no centro de reparos, o cliente, ap\u00f3s contato telef\u00f4nico com o Suporte T\u00e9cnico da Dell com diagn\u00f3stico remoto, dever\u00e1 levar o seu equipamento ao centro de reparos localizado em SP ou encaminhar pelos Correios. Na garantia a domic\u00edlio/assist\u00eancia t\u00e9cnica no local, t\u00e9cnicos ser\u00e3o deslocados, se necess\u00e1rio, ap\u00f3s consulta telef\u00f4nica com diagn\u00f3stico remoto. Garantia a dom\u00edcilio n\u00e3o dispon\u00edvel para acess\u00f3rios. Produtos e softwares de outras marcas est\u00e3o sujeitos aos termos de garantia dos respectivos fabricantes. Para mais informa\u00e7\u00f5es sobre Servi\u00e7os, acesse`

                    const defaultTextURLTwo = ` www.dell.com.br/servicos.\r\r`

                    const defaultTextSliceThree = `Empresa beneficiada pela Lei da Inform\u00e1tica. Fotos meramente ilustrativas. PowerEdge, Vostro, Latitude, PowerVault, Precision, OptiPlex, XPS, Inspiron, Alienware, CompleteCare e ProSupport s\u00e3o marcas registradas da \u00a9 2023 Dell Inc. Todos os direitos reservados. Microsoft e Windows s\u00e3o marcas registradas da Microsoft Corporation nos EUA. Ultrabook, Celeron, Celeron Inside, Core Inside, Intel, Intel Logo, Intel Atom, Intel Atom Inside, Intel Core, Intel Inside, Intel Inside Logo, Intel vPro, Intel Evo, Pentium, Pentium Inside, vPro Inside, Xeon, Xeon Inside, Intel Agilex, Arria, Cyclone, Movidius, eASIC, Ethernet, Iris, MAX, Select Solutions, Si Photonics, Stratix, Tofino, and Intel Optane s\u00e3o marcas registradas da Intel Corporation e suas subsidi\u00e1rias. \u00a9 2023 Advanced Micro Devices, Inc. Todos os direitos reservados. A sigla AMD, o logotipo de seta da AMD e as combina\u00e7\u00f5es resultantes s\u00e3o marcas registradas da Advanced Micro Devices, Inc. \u00a9 2023 NVIDIA, o logotipo NVIDIA, GeForce, GeForce RTX, GeForce RTX Super, GeForce GTX, GeForce GTX Super, GRID, SHIELD, Battery Boost, Reflex, DLSS, CUDA, FXAA, GameStream, G-SYNC, G-SYNC Ultimate, NVLINK, ShadowPlay, SLI, TXAA, PhysX, GeForce Experience, GeForce NOW, Maxwell, Pascal e Turing s\u00e3o marcas comerciais e/ou marcas registradas da NVIDIA Corporation nos EUA e em outros pa\u00edses. \r\rDell Brasil / Av. Industrial Belgraf, 400 / Eldorado do Sul, RS / CEP 92990-000 / Brasil. `;

                    // Concatena o birdseedCopyValue antes do texto padr\u00e3o
                    const BirdseedCopy = copy + "\r\r" + defaultTextSliceOne + defaultTextURLOne + defaultTextSliceTwo + defaultTextURLTwo + defaultTextSliceThree;


                    batchBirdseedCopy = [
                        { _obj: "select", _target: [{ _ref: "layer", _name: "Birdseed Copy" }], makeVisible: false, layerID: [9993], _options: { dialogOptions: "dontDisplay" } },

                        {
                            _obj: "set", _target: [{ _ref: "textLayer", _enum: "ordinal", _value: "targetEnum" }],

                            to: {
                                _obj: "textLayer", textKey: BirdseedCopy, textStyleRange: [

                                    { _obj: "textStyleRange", from: 0, to: copy.length + defaultTextSliceOne.length + 2, textStyle: { _obj: "textStyle", fontPostScriptName: "ArialMT", fontName: "Arial", fontStyleName: "Regular", size: { _unit: "pointsUnit", _value: 10 }, color: { _obj: "RGBColor", red: 68, green: 68, blue: 68 } } },

                                    { _obj: "textStyleRange", from: copy.length + defaultTextSliceOne.length + 2, to: copy.length + defaultTextSliceOne.length + 2 + defaultTextURLOne.length, textStyle: { _obj: "textStyle", fontPostScriptName: "ArialMT", fontName: "Arial", fontStyleName: "Regular", size: { _unit: "pointsUnit", _value: 10 }, underline: { _enum: "underline", _value: "underlineOnLeftInVertical" }, underlineOffset: { _unit: "pointsUnit", _value: 0 }, color: { _obj: "RGBColor", red: 6, green: 114, blue: 203 } } },

                                    { _obj: "textStyleRange", from: copy.length + defaultTextSliceOne.length + defaultTextURLOne.length + 2, to: copy.length + defaultTextSliceOne.length + 2 + defaultTextURLOne.length + defaultTextSliceTwo.length, textStyle: { _obj: "textStyle", fontPostScriptName: "ArialMT", fontName: "Arial", fontStyleName: "Regular", size: { _unit: "pointsUnit", _value: 10 }, color: { _obj: "RGBColor", red: 68, green: 68, blue: 68 } } },

                                    { _obj: "textStyleRange", from: copy.length + defaultTextSliceOne.length + 2 + defaultTextURLOne.length + defaultTextSliceTwo.length + 1, to: copy.length + defaultTextSliceOne.length + 2 + defaultTextURLOne.length + defaultTextSliceTwo.length + defaultTextURLTwo.length, textStyle: { _obj: "textStyle", fontPostScriptName: "ArialMT", fontName: "Arial", fontStyleName: "Regular", size: { _unit: "pointsUnit", _value: 10 }, underline: { _enum: "underline", _value: "underlineOnLeftInVertical" }, underlineOffset: { _unit: "pointsUnit", _value: 0 }, color: { _obj: "RGBColor", red: 6, green: 114, blue: 203 } } },

                                    { _obj: "textStyleRange", from: copy.length + defaultTextSliceOne.length + defaultTextURLOne.length + defaultTextSliceTwo.length + defaultTextURLTwo.length + 2, to: copy.length + defaultTextSliceOne.length + 2 + defaultTextURLOne.length + defaultTextSliceTwo.length + defaultTextURLTwo.length + defaultTextSliceThree.length, textStyle: { _obj: "textStyle", fontPostScriptName: "ArialMT", fontName: "Arial", fontStyleName: "Regular", size: { _unit: "pointsUnit", _value: 10 }, color: { _obj: "RGBColor", red: 68, green: 68, blue: 68 } } },
                                ]
                            },

                            _isCommand: true
                        },

                        { _obj: "get", _target: [{ _property: "bounds" }, { _ref: "layer", _name: "Birdseed Copy" }], }
                    ];

                } else {

                    const defaultTextSliceOne = `Ofertas v\u00e1lidas at\u00e9 ${formattedDay}/${formattedMonth}/${year}, limitadas, por linha de produto, a 3 unidades para pessoa f\u00edsica, seja por aquisi\u00e7\u00e3o direta e/ou entrega a ordem, que n\u00e3o tenha adquirido equipamentos Dell nos \u00faltimos 4 meses, e a 5 unidades para pessoa jur\u00eddica ou grupo de empresas com at\u00e9 500 funcion\u00e1rios registrados. Frete gr\u00e1tis para todo o Brasil. C\u00e1lculo do valor do produto sem frete. Nossos notebooks e desktops s\u00e3o constru\u00eddos especialmente para voc\u00ea. Nada de m\u00e1quinas paradas em estoque. O prazo de entrega pode ser estimado junto ao site da Dell.\r\rPre\u00e7os referenciados com impostos para consumidores pessoas f\u00edsicas, comprando com CPF. O pre\u00e7o final aplic\u00e1vel nas vendas para pessoas jur\u00eddicas comprando com CNPJ pode variar de acordo com o Estado em que estiver localizado o adquirente do produto, em raz\u00e3o dos diferenciais de impostos para cada estado. As ofertas podem ser adquiridas atrav\u00e9s de cart\u00e3o de cr\u00e9dito das operadoras Visa, MasterCard, American Express, Elo e Hypercard, atrav\u00e9s de Boleto ou PayPal. Para mais detalhes, consulte o seu representante de vendas ou visite o site`

                    const defaultTextURLOne = ` www.dell.com.br.\r\r`

                    const defaultTextSliceTwo = `Garantia total m\u00ednima (legal + contratual) de 1 ano, inclui pe\u00e7as e m\u00e3o de obra, restrita aos produtos Dell. Na garantia no centro de reparos, o cliente, ap\u00f3s contato telef\u00f4nico com o Suporte T\u00e9cnico da Dell com diagn\u00f3stico remoto, dever\u00e1 levar o seu equipamento ao centro de reparos localizado em SP ou encaminhar pelos Correios. Na garantia a domic\u00edlio/assist\u00eancia t\u00e9cnica no local, t\u00e9cnicos ser\u00e3o deslocados, se necess\u00e1rio, ap\u00f3s consulta telef\u00f4nica com diagn\u00f3stico remoto. Garantia a dom\u00edcilio n\u00e3o dispon\u00edvel para acess\u00f3rios. Produtos e softwares de outras marcas est\u00e3o sujeitos aos termos de garantia dos respectivos fabricantes. Para mais informa\u00e7\u00f5es sobre Servi\u00e7os, acesse`

                    const defaultTextURLTwo = ` www.dell.com.br/servicos.\r\r`

                    const defaultTextSliceThree = `Empresa beneficiada pela Lei da Inform\u00e1tica. Fotos meramente ilustrativas. PowerEdge, Vostro, Latitude, PowerVault, Precision, OptiPlex, XPS, Inspiron, Alienware, CompleteCare e ProSupport s\u00e3o marcas registradas da \u00a9 2023 Dell Inc. Todos os direitos reservados. Microsoft e Windows s\u00e3o marcas registradas da Microsoft Corporation nos EUA. Ultrabook, Celeron, Celeron Inside, Core Inside, Intel, Intel Logo, Intel Atom, Intel Atom Inside, Intel Core, Intel Inside, Intel Inside Logo, Intel vPro, Intel Evo, Pentium, Pentium Inside, vPro Inside, Xeon, Xeon Inside, Intel Agilex, Arria, Cyclone, Movidius, eASIC, Ethernet, Iris, MAX, Select Solutions, Si Photonics, Stratix, Tofino, and Intel Optane s\u00e3o marcas registradas da Intel Corporation e suas subsidi\u00e1rias. \u00a9 2023 Advanced Micro Devices, Inc. Todos os direitos reservados. A sigla AMD, o logotipo de seta da AMD e as combina\u00e7\u00f5es resultantes s\u00e3o marcas registradas da Advanced Micro Devices, Inc. \u00a9 2023 NVIDIA, o logotipo NVIDIA, GeForce, GeForce RTX, GeForce RTX Super, GeForce GTX, GeForce GTX Super, GRID, SHIELD, Battery Boost, Reflex, DLSS, CUDA, FXAA, GameStream, G-SYNC, G-SYNC Ultimate, NVLINK, ShadowPlay, SLI, TXAA, PhysX, GeForce Experience, GeForce NOW, Maxwell, Pascal e Turing s\u00e3o marcas comerciais e/ou marcas registradas da NVIDIA Corporation nos EUA e em outros pa\u00edses.\r\rDell Brasil / Av. Industrial Belgraf, 400 / Eldorado do Sul, RS / CEP 92990-000 / Brasil. `;

                    // Concatena o birdseedCopyValue antes do texto padr\u00e3o
                    const BirdseedCopy = defaultTextSliceOne + defaultTextURLOne + defaultTextSliceTwo + defaultTextURLTwo + defaultTextSliceThree;


                    batchBirdseedCopy = [
                        { _obj: "select", _target: [{ _ref: "layer", _name: "Birdseed Copy" }], makeVisible: false, layerID: [9993], _options: { dialogOptions: "dontDisplay" } },

                        {
                            _obj: "set", _target: [{ _ref: "textLayer", _enum: "ordinal", _value: "targetEnum" }],

                            to: {
                                _obj: "textLayer", textKey: BirdseedCopy, textStyleRange: [

                                    { _obj: "textStyleRange", from: 0, to: defaultTextSliceOne.length, textStyle: { _obj: "textStyle", fontPostScriptName: "ArialMT", fontName: "Arial", fontStyleName: "Regular", size: { _unit: "pointsUnit", _value: 10 }, color: { _obj: "RGBColor", red: 68, green: 68, blue: 68 } } },

                                    { _obj: "textStyleRange", from: defaultTextSliceOne.length, to: defaultTextSliceOne.length + defaultTextURLOne.length, textStyle: { _obj: "textStyle", fontPostScriptName: "ArialMT", fontName: "Arial", fontStyleName: "Regular", size: { _unit: "pointsUnit", _value: 10 }, underline: { _enum: "underline", _value: "underlineOnLeftInVertical" }, underlineOffset: { _unit: "pointsUnit", _value: 0 }, color: { _obj: "RGBColor", red: 6, green: 114, blue: 203 } } },

                                    { _obj: "textStyleRange", from: defaultTextSliceOne.length + defaultTextURLOne.length, to: defaultTextSliceOne.length + defaultTextURLOne.length + defaultTextSliceTwo.length, textStyle: { _obj: "textStyle", fontPostScriptName: "ArialMT", fontName: "Arial", fontStyleName: "Regular", size: { _unit: "pointsUnit", _value: 10 }, color: { _obj: "RGBColor", red: 68, green: 68, blue: 68 } } },

                                    { _obj: "textStyleRange", from: defaultTextSliceOne.length + defaultTextURLOne.length + defaultTextSliceTwo.length, to: defaultTextSliceOne.length + defaultTextURLOne.length + defaultTextSliceTwo.length + defaultTextURLTwo.length, textStyle: { _obj: "textStyle", fontPostScriptName: "ArialMT", fontName: "Arial", fontStyleName: "Regular", size: { _unit: "pointsUnit", _value: 10 }, underline: { _enum: "underline", _value: "underlineOnLeftInVertical" }, underlineOffset: { _unit: "pointsUnit", _value: 0 }, color: { _obj: "RGBColor", red: 6, green: 114, blue: 203 } } },

                                    { _obj: "textStyleRange", from: defaultTextSliceOne.length + defaultTextURLOne.length + defaultTextSliceTwo.length + defaultTextURLTwo.length, to: defaultTextSliceOne.length + defaultTextURLOne.length + defaultTextSliceTwo.length + defaultTextURLTwo.length + defaultTextSliceThree.length, textStyle: { _obj: "textStyle", fontPostScriptName: "ArialMT", fontName: "Arial", fontStyleName: "Regular", size: { _unit: "pointsUnit", _value: 10 }, color: { _obj: "RGBColor", red: 68, green: 68, blue: 68 } } },
                                ]
                            },

                            _isCommand: true
                        },

                        { _obj: "get", _target: [{ _property: "bounds" }, { _ref: "layer", _name: "Birdseed Copy" }], }
                    ];

                }

                const resultBirdseedBoundingBox = await batchPlay(batchBirdseedCopy, {});
                const birdseedBoundingBox = resultBirdseedBoundingBox[2].bounds;
                const finalCropValue = birdseedBoundingBox.bottom._value;

                const finalCrop = [
                    { _obj: "make", _target: [{ _ref: "contentLayer" }], using: { _obj: "contentLayer", type: { _obj: "solidColorLayer", color: { _obj: "RGBColor", red: 255, grain: 255, blue: 255 } }, shape: { _obj: "rectangle", unitValueQuadVersion: 1, top: { _unit: "pixelsUnit", _value: 0 }, left: { _unit: "pixelsUnit", _value: 0 }, bottom: { _unit: "pixelsUnit", _value: finalCropValue }, right: { _unit: "pixelsUnit", _value: 564 }, topRight: { _unit: "pixelsUnit", _value: 0 }, topLeft: { _unit: "pixelsUnit", _value: 0 }, bottomLeft: { _unit: "pixelsUnit", _value: 0 }, bottomRight: { _unit: "pixelsUnit", _value: 0 } }, }, layerID: 9901, _options: { dialogOptions: "dontDisplay" } },
                    { _obj: "select", _target: [{ _ref: "layer", _name: "Rectangle 1" }], makeVisible: false, layerID: [9891], _options: { dialogOptions: "dontDisplay" } },
                    { _obj: "set", _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }], to: { _obj: "layer", name: "Background" }, _options: { dialogOptions: "dontDisplay" } },
                    { _obj: "move", _target: [{ _ref: "layer", _enum: "ordinal", _value: "targetEnum" }], to: { _ref: "layer", _index: 0 }, adjustment: false, version: 5, layerID: [9891], _options: { dialogOptions: "dontDisplay" } }, { _obj: "select", _target: [{ _ref: "cropTool" }], _options: { dialogOptions: "dontDisplay" } },
                    { _obj: "select", _target: [{ _ref: "moveTool" }], _options: { dialogOptions: "dontDisplay" } },
                    { _obj: "crop", to: { _obj: "rectangle", top: { _unit: "pixelsUnit", _value: 0 }, left: { _unit: "pixelsUnit", _value: 0 }, bottom: { _unit: "pixelsUnit", _value: finalCropValue }, right: { _unit: "pixelsUnit", _value: 564 } }, angle: { _unit: "angleUnit", _value: 0 }, delete: true, AutoFillMethod: 1, cropFillMode: { _enum: "cropFillMode", _value: "defaultFill" }, cropAspectRatioModeKey: { _enum: "cropAspectRatioModeClass", _value: "pureAspectRatio" }, constrainProportions: false, _options: { dialogOptions: "dontDisplay" } }
                ]
                await batchPlay(finalCrop, {});

                const secondDocument = app.documents[1];
                const birdseedWidth = secondDocument.width;
                modulesHeight.birdseed = secondDocument.height;

                // Copia e cola o modulo
                const selectAndCopy = selectAllAndCopy()
                await batchPlay(selectAndCopy, {});

                const activeDocument = app.activeDocument;
                await activeDocument.paste();

                const pastedGroup = activeDocument.layers[activeDocument.layers.length - 1];
                const docWidth = activeDocument.width;
                const docHeight = activeDocument.height;


                const offsetModules = buildInfo.calculateTotalHeight('birdseed', buildInfo.selectedModules);

                const offsetX = ((docWidth - docWidth) - (docWidth / 2) + (birdseedWidth / 2) + 43);
                const offsetY = ((docHeight - docHeight) - (docHeight / 2) + offsetModules + 20);

                pastedGroup.translate(offsetX, offsetY);

                console.log('%cBirdseed inserido com sucesso!', 'color: #00EAADFF;');
            } catch (error) {
                console.error('Erro ao inserir o Birdseed:', error);
            }
        };

        const options = {
            commandName: 'Inserir Birdseed',
            interactive: true,
        };

        await core.executeAsModal(targetFunction, options);
    } catch (error) {
        // showAlert("executeAsModal was rejected (some other plugin is currently inside a modal scope)");
    }

}