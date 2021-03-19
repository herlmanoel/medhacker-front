import {
    Wrapper,
    Input,
    WrapperIcon,
} from './style.js';
import { useState } from 'react';
import { Search } from 'react-feather';
import axios from '../../../../services';
export default function InputComponent({ name, type }) {
    const [campo, setCampo] = useState('');
    async function handlePesquisa(event) {
        setCampo(event.target.value);
        await axios.get(`usuariospesquisa/${campo}`)
            .then(result => console.log(result))
        console.log(campo);
    }
    return (
        <Wrapper>
            <WrapperIcon>
                <Search />
            </WrapperIcon>
            <Input type={type} id={name} name={name} value={campo} onChange={(event) => handlePesquisa(event)}  placeholder="Pesquisar" />
        </Wrapper>
    );
}