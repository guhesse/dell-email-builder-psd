// CsvReader.js
import React, { useState, useEffect } from 'react';
import { storage } from './App.js';
import CsvBriefingForm from './CsvBriefingForm.js';
import useAppContext from './hook/useAppContext.jsx';

export default function CsvReader() {
    const { csvValues, setCsvValues } = useAppContext();
    const [ isModalOpen, setIsModalOpen ] = useState(false);

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
            <sp-label>CSV Reader</sp-label>
            <div>
                <sp-button type="submit" onClick={handleFileInputChange}>Select a File</sp-button>
            </div>

            {isModalOpen && (
                <div className="modal-border">
                    <CsvBriefingForm closeModal={closeModal} />
                </div>
            )}
        </div>
    );
}
