// useCalculateTotalHeight.js
import { useState } from 'react';

export default function useCalculateTotalHeight(initialModulesHeight) {
    const [modulesHeight, setModulesHeight] = useState(initialModulesHeight);

    const calculateTotalHeight = (currentModule, selectedModules) => {
        // Limpa as alturas dos módulos
        setModulesHeight({
            sl: '',
            header: '',
            vf: '',
            skinny: '',
            hero: '',
            plugin: '',
            fpo: '',
            banner: '',
            footer: '',
            birdseed: '',
        });

        let totalHeight = 90;

        let modules

        switch (currentModule) {
            case 'skinny':
                modules = ['skinny'];
                break;
            case 'hero':
                modules = ['skinny', 'hero'];
                break;
            case 'plugin':
                modules = ['skinny', 'hero', 'plugin'];
                break;
            case 'fpo':
                modules = ['skinny', 'hero', 'plugin', 'fpo'];
                break;
            case 'banner':
                modules = ['skinny', 'hero', 'plugin', 'fpo', 'banner'];
                break;
            case 'footer':
                modules = ['skinny', 'hero', 'plugin', 'fpo', 'banner', 'footer'];
                break;
            case 'birdseed':
                modules = ['skinny', 'hero', 'plugin', 'fpo', 'banner', 'footer', 'birdseed'];
                break;
            default:
                modules = ['skinny', 'hero', 'plugin', 'fpo', 'banner', 'footer', 'birdseed'];
                break;
        }

        let currentModuleHeight = (modulesHeight[currentModule] / 2) || 0;

        modules.forEach(module => {
            if (selectedModules[module] && modulesHeight[module] !== null) {
                totalHeight += modulesHeight[module];

                console.log(`Módulo: ${module}, Altura: ${modulesHeight[module]}`);
            } else {
                console.log(`Módulo: ${module}, Não selecionado ou altura nula`);
            }
        });

        // Verifica se o módulo 'vf' está selecionado e não é nulo
        if (selectedModules['vf'] !== null && modulesHeight['vf'] !== null) {
            // Adiciona a altura do módulo 'vf' ao total
            totalHeight += modulesHeight['vf'] + 20;
        } else if (modulesHeight['header'] !== null) {
            // Se 'vf' não está selecionado e 'header' não é nulo, adiciona a altura do módulo 'header' ao total
            totalHeight += modulesHeight['header'] + 20;
        }

        // Subtrai a altura do módulo atual do total
        totalHeight -= currentModuleHeight;

        return totalHeight;
    };

    return [modulesHeight, setModulesHeight, calculateTotalHeight];
}