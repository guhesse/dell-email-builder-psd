// CsvReader.js
import React, { useState, useEffect } from 'react';
import { storage } from './App.js';
import CsvBriefingForm from './CsvBriefingForm.js';
import useAppContext from './hook/useAppContext.jsx';

export default function CsvReader() {
    const { csvValues, setCsvValues } = useAppContext();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isOptionsOpen, setIsOptionsOpen] = useState(false);

    async function readCSVFile(file) {
        try {
            const contents = await file.read();
            const rows = contents.split(/\n(?=;)/);
            const headerRow = rows[0].split(';');

            const columnIndexBasicInfo = headerRow.indexOf('Basic Info');
            const columnIndexEnterContent = headerRow.indexOf('Enter Content');

            if (columnIndexBasicInfo !== -1 && columnIndexEnterContent !== -1) {
                const loadedValues = {};
                for (let i = 1; i < rows.length; i++) {
                    const columns = rows[i].split(';');
                    const basicInfoValue = columns[columnIndexBasicInfo];
                    const enterContentValue = columns[columnIndexEnterContent];

                    // Remover quebras de linha de cada célula usando expressão regular
                    const cleanedBasicInfoValue = basicInfoValue ? basicInfoValue.replace(/\r?\n/g, ' ').replace(/^"|"$/g, '') : '';
                    const cleanedEnterContentValue = enterContentValue ? enterContentValue.replace(/\r?\n/g, ' ').replace(/^"|"$/g, '') : '';

                    if (cleanedBasicInfoValue !== '' && cleanedEnterContentValue !== '') {
                        loadedValues[cleanedBasicInfoValue] = cleanedEnterContentValue;
                    }
                }
                return loadedValues;
            } else {
                console.log('Índices das colunas não encontrados.');
                return {};
            }
        } catch (error) {
            console.error('Erro ao ler o arquivo CSV:', error);
            return {};
        }
    }

    // Função para lidar com a mudança no input do arquivo
    async function handleFileInputChange() {
        try {
            const fs = storage.localFileSystem;
            const file = await fs.getFileForOpening({ types: ['csv'] });

            if (file) {
                const loadedValues = await readCSVFile(file);
                setCsvValues(loadedValues);
                setIsModalOpen(true);
            }
        } catch (error) {
            console.error('Erro ao ler o arquivo CSV:', error);
        }
    }

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const toggleOptions = () => {
        setIsOptionsOpen(!isOptionsOpen);
    };

    useEffect(() => {
        if (isModalOpen) {
            document.body.classList.add('modal-open');
            return () => {
                document.body.classList.remove('modal-open');
            };
        }
    }, [isModalOpen]);

    return (
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start", flexDirection: "column" }} className="group">

            {isOptionsOpen ? (
                <>
                    <sp-label onClick={toggleOptions} style={{ cursor: "pointer" }}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <p>CSV Reader </p>
                            <span style={{ marginLeft: "8px", display: "flex", alignItems: "center", fill: "#8a8a8a" }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 14 16" >
                                    <title>S ChevronDown 18 N</title>
                                    <rect id="Canvas" fill="#8a8a8a" opacity="0" width="11" height="11" />
                                    <path className="fill" d="M4,7.01a1,1,0,0,1,1.7055-.7055l3.289,3.286,3.289-3.286a1,1,0,0,1,1.437,1.3865l-.0245.0245L9.7,11.7075a1,1,0,0,1-1.4125,0L4.293,7.716A.9945.9945,0,0,1,4,7.01Z" />
                                </svg>
                            </span>
                        </div>
                    </sp-label>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', marginTop: '5px' }}>
                        <sp-button type="submit" variant="primary" onClick={handleFileInputChange}>Select a File</sp-button>
                    </div>
                </>
            ) : (
                <sp-label onClick={toggleOptions} style={{ cursor: "pointer" }}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <p>CSV Reader </p>
                        <span style={{ marginLeft: "10px", display: "flex", alignItems: "center", fill: "#8a8a8a" }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 10 10" >
                                <g id="ChevronSize75">
                                    <rect id="Frame" width="7" height="7" fill="black" opacity="0" />
                                    <path d="M7.4834,4.40625,3.85986.7832a.83969.83969,0,0,0-1.1875,1.1875L5.70166,5,2.67236,8.0293a.83969.83969,0,1,0,1.1875,1.1875l3.62354-3.623A.83933.83933,0,0,0,7.4834,4.40625Z" />
                                </g>
                            </svg>

                        </span>
                    </div>
                </sp-label>)}

            {isModalOpen && isOptionsOpen && (
                <div className="modal-border">
                    <CsvBriefingForm closeModal={closeModal} />
                </div>
            )}
        </div>
    );

}
