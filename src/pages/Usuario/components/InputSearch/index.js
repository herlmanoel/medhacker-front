import {
    Wrapper,
    Input,
    WrapperIcon,
} from './style.js';
import { useState, useContext } from 'react';
import { Search } from 'react-feather';
import axios from '../../../../services';
import { Contextusuarios } from '../../context';

export default function InputComponent({ name, type }) {
    const [campo, setCampo] = useState('');
    const { setDataUsuarios } = useContext(Contextusuarios);

    async function handlePesquisa(event) {
        const { value } = event.target;
        setCampo(value);
    }
    async function getDataUsuariosByName(){
        console.log("AQUI")
        await axios.get(`usuariospesquisa/${campo}`)
            .then(result => {
                
                const { data } = result;
                console.log(data)
                return setDataUsuarios(data);
        });
    }
    return (
        <Wrapper>
            <Input type={type} id={name} name={name} value={campo}  onChange={(event) => handlePesquisa(event)} placeholder="Pesquisar" />
            <WrapperIcon onClick={(event) => getDataUsuariosByName(event)}>
                <Search color="#000" />
            </WrapperIcon>
        </Wrapper>
    );
}