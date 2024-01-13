import { useState, useEffect } from 'react';

const useFileEntry = (filePath) => {
    const [fileEntry, setFileEntry] = useState(null);

    useEffect(() => {
        const fetchFileEntry = async () => {
            try {
                const fs = storage.localFileSystem;
                const pluginDir = await fs.getPluginFolder();
                const entry = await pluginDir.getEntry(filePath);

                setFileEntry(entry);
            } catch (error) {
                // Trate os erros conforme necessário
                console.error('Erro ao obter o arquivo:', error);
            }
        };

        fetchFileEntry();
    }, [filePath]); // Execute o efeito sempre que filePath mudar

    return fileEntry;
};

export default useFileEntry;
