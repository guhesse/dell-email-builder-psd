import { useState } from 'react';
import useAppContext from '../../../../hook/useAppContext.jsx';
import { getHeroContent, getPluginContent, getBannerContent } from './Contents.js';
import { useToast } from '../../../../hook/useToast.js';

const GetAllContent = ({ }) => {
    // const [messages, setMessages] = useState([]);
    const addMessage = useToast();

    const { colors, selectedModules, copyValues, setCopyValues } = useAppContext();
    const params = { colors, selectedModules, copyValues, setCopyValues };

    const getContent = async () => {
        try {
            await getHeroContent(params);
            await getPluginContent(params);
            await getBannerContent(params);
            // await getHeroColors()

            addMessage('Todas as informações foram obtidas com sucesso.', 'success');
        } catch (error) {
            addMessage('Erro ao montar o layout: ' + error.message, 'error');
        }
    };

    return (
        <div>
            <button onClick={getContent}>Get PSD Info</button>
        </div>
    );
}

export default GetAllContent;