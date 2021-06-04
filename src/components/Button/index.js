import { Button } from './style';

export default function ButtonComponent({ text, type, onClick, width }) {
    return (
        <Button width={width} type={type} onClick={onClick} > { text } </Button>        
    );
}