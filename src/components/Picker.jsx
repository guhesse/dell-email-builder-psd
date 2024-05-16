import React from 'react';

const Picker = ({ label, placeholder, id, options, selectedValue, onSelect }) => (
    <sp-picker size="m" label={label} placeholder={placeholder} id={id} class='largePicker'>
        <sp-menu>
            <sp-menu-group>
                {options.map((option) => (
                    <sp-menu-item
                        key={option.value}
                        selected={selectedValue === option.value ? selectedValue : undefined}
                        onClick={() => onSelect(option.value)}
                    >
                        {option.label}
                    </sp-menu-item>
                ))}
            </sp-menu-group>
        </sp-menu>
    </sp-picker>
);

export default Picker;
