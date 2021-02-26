import {
    Wrapper,
    Label,
    Input
} from './style.js';

export default function InputComponent({ label, name, type, functionChange }){
    return (
       <Wrapper>
           <Label htmlFor={name}>{label}</Label>
           <Input type={type} id={name} name={name} onChange={functionChange}/>
       </Wrapper>
    );
}