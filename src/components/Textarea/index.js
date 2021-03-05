import {
    Wrapper,
    Label,
    Textarea,
} from './style.js';

export default function TextareaComponent({ label, name, type, functionChange }){
    return (
       <Wrapper>
           <Label htmlFor={name}>{label}</Label>
           <Textarea rows="5" type={type} id={name} name={name} onChange={functionChange}/>
       </Wrapper>
    );
}