import { Button } from './style';

export default function ButtonComponent({ text, type, onClick }) {
    return (
        <Button type={type} onClick={onClick} > { text } </Button>        
    );
}