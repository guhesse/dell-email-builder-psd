import React from 'react';
import { colorApplier } from './colorApplier.js';
import { core } from '../../App.js';

export default function ColorOrganizer() {
    const colors = [
        { name: "Red", hex: "#ff0000", value: "red" },
        { name: "Orange", hex: "#ffa500", value: "orange" },
        { name: "Yellow", hex: "#ffff00", value: "yellowColor" },
        { name: "Green", hex: "#008000", value: "grain" },
        { name: "Seafoam", hex: "#1b959a", value: "seafoam" },
        { name: "Blue", hex: "#89bdf8", value: "blue" },
        { name: "Indigo", hex: "#6767ec", value: "indigo" },
        { name: "Magenta", hex: "#d83790", value: "magenta" },
        { name: "Violet", hex: "#c038cc", value: "violet" },
        { name: "Grey", hex: "#acacac", value: "gray" },
        { name: "None", hex: "#f0f0f0", value: "none" }
    ];

    const handleClick = async (colorValue) => {
        console.log(`Button clicked: ${colorValue}`);
        console.log('Calling colorApplier...');
        await colorApplier(colorValue);
    };

    return (
        <>
            {colors.map((color) => (
                <sp-button
                    quiet
                    key={color.hex}
                    variant="secondary"
                    style={{ fontSize: "0.75rem", backgroundColor: color.hex, color: "black", margin: "2px" }}
                    onClick={() => handleClick(color.value)}
                >
                    {color.name}
                </sp-button>
            ))}
        </>
    );
}
