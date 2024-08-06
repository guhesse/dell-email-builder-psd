import React, { useState } from 'react';
import { storage, core, batchPlay } from '../../../App.js';
import { hideLayer, showLayer } from '../../../hook/hooksJSON.jsx';
import { clearAllSlicesEnd } from './Functions/clearAllSlices.js';
import useAppContext from '../../../hook/useAppContext.jsx';
import EmailHTML from './HTMLs/EmailHTML.js';

const ExportHtml = () => {

    const { selectedModules } = useAppContext();

    const { header, plugin, banner } = selectedModules;

    const htmlContent = EmailHTML({});

    const fs = storage.localFileSystem;

    const [messages, setMessages] = useState([]);

    const addMessage = (msg, type = 'success') => {
        setMessages((prevMessages) => [...prevMessages, { msg, type }]);
        setTimeout(() => {
            setMessages((prevMessages) => prevMessages.slice(1));
        }, 3000); // Remove a mensagem após 3 segundos
    };

    const handleExport = async () => {
        try {
            const folder = await fs.getFolder();

            if (folder) {
                const file = await folder.createFile("email.html", { overwrite: true });
                await file.write(htmlContent);
                addMessage('Arquivo HTML exportado com sucesso!', 'success');

                const imagesFolder = await folder.createFolder("images", { overwrite: true });
                const pluginDir = await fs.getPluginFolder();

                let logoHeader;
                let iconCall;
                let iconChat;
                let iconNb;

                if (header === "csb") {
                    logoHeader = await pluginDir.getEntry('assets/html/html-images/XXXXXX_dell-logo.png');
                    iconCall = await pluginDir.getEntry('assets/html/html-images/XXXXXX_icon-call.png');
                    iconChat = await pluginDir.getEntry('assets/html/html-images/XXXXXX_icon-chat.png');
                    iconNb = await pluginDir.getEntry('assets/html/html-images/XXXXXX_icon-nb.png');
                } else if (header === "outlet") {
                    logoHeader = await pluginDir.getEntry('assets/html/html-images/XXXXXX_outlet-logo.png');
                    iconCall = await pluginDir.getEntry('assets/html/html-images/XXXXXX_icon-call.png');
                    iconChat = await pluginDir.getEntry('assets/html/html-images/XXXXXX_icon-chat.png');
                    iconNb = await pluginDir.getEntry('assets/html/html-images/XXXXXX_icon-nb.png');
                } else if (header === "alienware") {
                    logoHeader = await pluginDir.getEntry('assets/html/html-images/XXXXXX_alienware-logo.png');
                    iconCall = await pluginDir.getEntry('assets/html/html-images/XXXXXX_icon-call.png');
                    iconChat = await pluginDir.getEntry('assets/html/html-images/XXXXXX_icon-chat.png');
                    iconNb = await pluginDir.getEntry('assets/html/html-images/XXXXXX_icon-nb.png');
                } else if (header === "sb-gdo-dexn" || header === "sb-rd") {
                    logoHeader = await pluginDir.getEntry('assets/html/html-images/XXXXXX_dell-logo.png');
                    iconCall = await pluginDir.getEntry('assets/html/html-images/XXXXXX_icon-rd-chat.png');
                }

                if (logoHeader) {
                    await logoHeader.copyTo(imagesFolder, { overwrite: true });
                    addMessage('Logo do header copiado com sucesso!', 'success');
                } else {
                    addMessage('Erro ao encontrar o logo do header no diretório do plugin.', 'error');
                }

                if (iconCall) {
                    await iconCall.copyTo(imagesFolder, { overwrite: true });
                    addMessage('Ícone de call copiado com sucesso!', 'success');
                } else {
                    addMessage('Erro ao encontrar o ícone de call no diretório do plugin.', 'error');
                }

                if (iconChat) {
                    await iconChat.copyTo(imagesFolder, { overwrite: true });
                    addMessage('Ícone de chat copiado com sucesso!', 'success');
                } else {
                    addMessage('Erro ao encontrar o ícone de chat no diretório do plugin.', 'error');
                }

                if (iconNb) {
                    await iconNb.copyTo(imagesFolder, { overwrite: true });
                    addMessage('Ícone do notebook copiado com sucesso!', 'success');
                } else {
                    addMessage('Erro ao encontrar o ícone do notebook no diretório do plugin.', 'error');
                }

                let logoWin;

                if (selectedModules.vf === "win11") {
                    logoWin = await pluginDir.getEntry('assets/html/html-images/XXXXXX_win11.png');
                }

                if (logoWin) {
                    await logoWin.copyTo(imagesFolder, { overwrite: true });
                    addMessage('Logo Windows 11 copiado com sucesso!', 'success');
                } else {
                    addMessage('Erro ao encontrar o logo do Windows 11 no diretório do plugin.', 'error');
                }

                async function exportSlices(folder) {
                    try {
                        const token = fs.createSessionToken(folder);

                        const exportOptions = {
                            as: {
                                _obj: "PNG",
                                extendedQuality: 9,
                                matteColor: {
                                    _enum: "matteColor",
                                    _value: "none"
                                }
                            },
                            in: {
                                _path: token,
                                _kind: "local"
                            },
                            lowerCase: true,
                            saveStage: {
                                _enum: "saveStageType",
                                _value: "saveBegin"
                            },
                            _isCommand: false
                        };

                        const targetFunction = async (executionContext) => {
                            try {
                                const token = fs.createSessionToken(folder);

                                const hideBackgrounds = [
                                    hideLayer({ Name: "Hero Background" })
                                ];

                                if (plugin === "plugin" || plugin === "supercharger") {
                                    hideBackgrounds.push(hideLayer({ Name: "Plugin Background" }));
                                }

                                if (banner === "left" || banner === "right") {
                                    hideBackgrounds.push(hideLayer({ Name: "Banner Background" }));
                                }

                                hideBackgrounds.push(hideLayer({ Name: "Background" }));

                                await batchPlay(hideBackgrounds, {});

                                async function exportSlices() {
                                    const saveForWebSlices = await batchPlay(
                                        [
                                            {
                                                _obj: "export",
                                                using: {
                                                    _obj: "SaveForWeb",
                                                    $Op: {
                                                        _enum: "$SWOp",
                                                        _value: "$OpSa"
                                                    },
                                                    $DIDr: true,
                                                    in: {
                                                        _path: token,
                                                        _kind: "local"
                                                    },
                                                    pathName: "C:\\Users\\hesse\\Downloads\\HTML\\images\\XXXXXX_Hero_Headline_Image.png",
                                                    format: {
                                                        _enum: "$IRFm",
                                                        _value: "$PN24"
                                                    },
                                                    interfaceIconFrameDimmed: false,
                                                    transparency: true,
                                                    $Mtt: true,
                                                    $EICC: true,
                                                    $MttR: 255,
                                                    $MttG: 255,
                                                    $MttB: 255,
                                                    $SHTM: false,
                                                    $SImg: true,
                                                    $SWsl: {
                                                        _enum: "$STsl",
                                                        _value: "$SLUs"
                                                    },
                                                    $SWch: {
                                                        _enum: "$STch",
                                                        _value: "$CHsR"
                                                    },
                                                    $SWmd: {
                                                        _enum: "$STmd",
                                                        _value: "$MDCC"
                                                    },
                                                    $ohXH: false,
                                                    $ohIC: true,
                                                    $ohAA: true,
                                                    $ohQA: true,
                                                    $ohCA: false,
                                                    $ohIZ: true,
                                                    $ohTC: {
                                                        _enum: "$SToc",
                                                        _value: "$OC03"
                                                    },
                                                    $ohAC: {
                                                        _enum: "$SToc",
                                                        _value: "$OC03"
                                                    },
                                                    $ohIn: -1,
                                                    $ohLE: {
                                                        _enum: "$STle",
                                                        _value: "$LE03"
                                                    },
                                                    $ohEn: {
                                                        _enum: "$STen",
                                                        _value: "$EN00"
                                                    },
                                                    $olCS: false,
                                                    $olEC: {
                                                        _enum: "$STst",
                                                        _value: "$ST00"
                                                    },
                                                    $olWH: {
                                                        _enum: "$STwh",
                                                        _value: "$WH01"
                                                    },
                                                    $olSV: {
                                                        _enum: "$STsp",
                                                        _value: "$SP04"
                                                    },
                                                    $olSH: {
                                                        _enum: "$STsp",
                                                        _value: "$SP04"
                                                    },
                                                    $olNC: [
                                                        {
                                                            _obj: "$SCnc",
                                                            $ncTp: {
                                                                _enum: "$STnc",
                                                                _value: "$NC00"
                                                            }
                                                        },
                                                        {
                                                            _obj: "$SCnc",
                                                            $ncTp: {
                                                                _enum: "$STnc",
                                                                _value: "$NC19"
                                                            }
                                                        },
                                                        {
                                                            _obj: "$SCnc",
                                                            $ncTp: {
                                                                _enum: "$STnc",
                                                                _value: "$NC28"
                                                            }
                                                        },
                                                        {
                                                            _obj: "$SCnc",
                                                            $ncTp: {
                                                                _enum: "$STnc",
                                                                _value: "$NC24"
                                                            }
                                                        },
                                                        {
                                                            _obj: "$SCnc",
                                                            $ncTp: {
                                                                _enum: "$STnc",
                                                                _value: "$NC24"
                                                            }
                                                        },
                                                        {
                                                            _obj: "$SCnc",
                                                            $ncTp: {
                                                                _enum: "$STnc",
                                                                _value: "$NC24"
                                                            }
                                                        }
                                                    ],
                                                    $obIA: false,
                                                    $obIP: "",
                                                    $obCS: {
                                                        _enum: "$STcs",
                                                        _value: "$CS01"
                                                    },
                                                    $ovNC: [
                                                        {
                                                            _obj: "$SCnc",
                                                            $ncTp: {
                                                                _enum: "$STnc",
                                                                _value: "$NC01"
                                                            }
                                                        },
                                                        {
                                                            _obj: "$SCnc",
                                                            $ncTp: {
                                                                _enum: "$STnc",
                                                                _value: "$NC20"
                                                            }
                                                        },
                                                        {
                                                            _obj: "$SCnc",
                                                            $ncTp: {
                                                                _enum: "$STnc",
                                                                _value: "$NC02"
                                                            }
                                                        },
                                                        {
                                                            _obj: "$SCnc",
                                                            $ncTp: {
                                                                _enum: "$STnc",
                                                                _value: "$NC19"
                                                            }
                                                        },
                                                        {
                                                            _obj: "$SCnc",
                                                            $ncTp: {
                                                                _enum: "$STnc",
                                                                _value: "$NC06"
                                                            }
                                                        },
                                                        {
                                                            _obj: "$SCnc",
                                                            $ncTp: {
                                                                _enum: "$STnc",
                                                                _value: "$NC24"
                                                            }
                                                        },
                                                        {
                                                            _obj: "$SCnc",
                                                            $ncTp: {
                                                                _enum: "$STnc",
                                                                _value: "$NC24"
                                                            }
                                                        },
                                                        {
                                                            _obj: "$SCnc",
                                                            $ncTp: {
                                                                _enum: "$STnc",
                                                                _value: "$NC24"
                                                            }
                                                        },
                                                        {
                                                            _obj: "$SCnc",
                                                            $ncTp: {
                                                                _enum: "$STnc",
                                                                _value: "$NC22"
                                                            }
                                                        }
                                                    ],
                                                    $ovCM: false,
                                                    $ovCW: true,
                                                    $ovCU: true,
                                                    $ovSF: true,
                                                    $ovCB: true,
                                                    $ovSN: "images"
                                                },
                                                _options: {
                                                    dialogOptions: "dontDisplay"
                                                }
                                            }
                                        ],
                                        {}
                                    );
                                }

                                exportSlices();

                                const showBackgrounds = [
                                    showLayer({ Name: "Hero Background" })
                                ];

                                if (plugin === "plugin" || plugin === "supercharger") {
                                    showBackgrounds.push(showLayer({ Name: "Plugin Background" }));
                                }

                                if (banner === "left" || banner === "right") {
                                    showBackgrounds.push(showLayer({ Name: "Banner Background" }));
                                }

                                showBackgrounds.push(showLayer({ Name: "Background" }))

                                await batchPlay(showBackgrounds, {});


                            } catch (error) {
                                console.error('Erro ao salvar o arquivo:', error);
                            }
                        };

                        await core.executeAsModal(targetFunction);
                    } catch (error) {
                        console.error('Erro ao exportar fatias:', error);
                    }
                }

                await exportSlices(folder);

                await clearAllSlicesEnd();


            } else {
                addMessage('Operação cancelada pelo usuário.', 'warn');
            }
        } catch (error) {
            console.error('Erro ao exportar HTML:', error);
            addMessage('Erro ao exportar HTML.', 'error');
        }
    };

    return (
        <div>
            <button onClick={handleExport}>Exportar HTML</button>
            <div className="toast-container">
                {messages.map((message, index) => (
                    <div key={index} className={`toast show ${message.type}`}>{message.msg}</div>
                ))}
            </div>
        </div>
    );
};

export default ExportHtml;