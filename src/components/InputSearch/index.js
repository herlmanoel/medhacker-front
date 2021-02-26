import {
    Wrapper,
    Input,
    WrapperIcon,
} from './style.js';
// import {useContext, useState} from 'react';
import { Search } from 'react-feather';
// import { ContextListagem } from '../../context/Listagem';
export default function InputComponent({ name, type }) {
    // const [valueInput, setValueInput] = useState('');
    // const { dataTable, setDataTable } = useContext(ContextListagem);

    // async function handleOnChange(event) {
    //     const { value } = event.target;
    //     setValueInput(value);
    //     var s = "foo";
    //     console.log(s.indexOf("oo"));
    // }

    return (
        <Wrapper>
            <WrapperIcon>
                <Search />
            </WrapperIcon>
            <Input type={type} id={name} name={name}  placeholder="Pesquisar" />
        </Wrapper>
    );
}