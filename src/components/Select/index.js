import React, { SelectHTMLAttributes } from 'react';

import {
    SelectBlock,
    Label,
    Select,
} from './style.js';

export default function SelectComponent({ label, name, ...rest }) {
    console.log(options);
    return (
        <SelectBlock>
            <Label htmlFor={name}>{label}</Label>
            <Select defaultValue="" id={name} {...rest}>
                {/* <option value="" disabled hidden>Selecione uma opção</option>

                {options.map((option) => {
                    return <option key={option.value} value={option.value}>{option.label}</option>
                })} */}
            </Select>
        </SelectBlock>
    );
}