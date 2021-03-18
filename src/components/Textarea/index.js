import {
    Wrapper,
    Label,
    Textarea,
} from './style.js';

export default function TextareaComponent({ label, name, type, functionChange, value }){
    return (
       <Wrapper>
           <Label htmlFor={name}>{label}</Label>
           <Textarea rows="5" type={type} id={name} name={name} onChange={functionChange} value={value}>  </Textarea>
       </Wrapper>
    );
}