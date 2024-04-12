import { useState } from "react";

// Hook para lidar com o estado de toggle
const useToggleState = (initialState) => {
    const [state, setState] = useState(initialState);
    const toggleState = () => {
        setState((prevState) => !prevState);
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
