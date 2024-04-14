import React from 'react';

const Icon = ({ size, path }) => {
    // Objeto contendo os SVGs para diferentes tamanhos
    const icons = {
        's': (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="14" height="14" >
                {path}
            </svg>
        ),
        'm': (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" >
                {path}
            </svg>
        ),
        'l': (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" width="28" height="28" >
                {path}
            </svg>
        ),
        'xl': (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="28" height="28" >
                {path}
            </svg>
        ),
        // Adicione mais tamanhos conforme necessário
    };


    // Renderiza o ícone com base no tamanho recebido
    return (
        <div>
            {icons[size]}
        </div>
    );
};

export default Icon;
