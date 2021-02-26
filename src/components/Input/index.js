import {
    Wrapper,
    Label,
    Input
} from './style.js';

export default function InputComponent({ label, name, type }){
    return (
       <Wrapper>
           <Label htmlFor={name}>{label}</Label>
           <Input type={type} id={name} name={name}/>
       </Wrapper>
    );
}