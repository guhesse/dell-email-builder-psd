import { useState } from "react";

// Hook para lidar com o estado de toggle
const useToggleState = (initialState) => {
    const [state, setState] = useState(initialState);
    const toggleState = (newState) => {
        // Verifica se o novo estado é booleano
        if (typeof newState === "boolean") {
            setState(newState);
        } else {
            // Se não for booleano, alterna entre true e false
            setState((prevState) => !prevState);
        }
    };
    return [state, toggleState];
};

// Hook para lidar com o estado de toggle e sua função de atualização
const useToggleFunctionState = (initialState) => {
    const [state, setState] = useState(initialState);
    const toggleState = () => {
        setState((prevState) => !prevState);
    };
    return [state, toggleState, setState];
};

export { useToggleState, useToggleFunctionState };
