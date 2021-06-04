import {
    Wrapper,
    Label,
    Input
} from './style.js';



export default function InputComponent({ label, name, type, functionChange, value, disabled }){
    return (
       <Wrapper>
           <Label htmlFor={name}>{label}</Label>
           <Input type={type} id={name} name={name} value={value} onChange={functionChange} disabled={disabled}/>
       </Wrapper>
    );
}