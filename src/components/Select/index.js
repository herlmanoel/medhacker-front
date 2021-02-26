import {
    SelectBlock,
    Label,
    Select,
} from './style.js';

export default function SelectComponent({ label, name, ...rest }) {

    return (
        <SelectBlock>
            <Label htmlFor={name}>{label}</Label>
            <Select defaultValue="" name={name} {...rest}>

            </Select>
        </SelectBlock>
    );
}