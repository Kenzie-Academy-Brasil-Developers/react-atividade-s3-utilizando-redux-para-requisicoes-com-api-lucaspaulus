import React from 'react';
import {useState} from 'react';
import { useDispatch } from 'react-redux';
import addDigimonsThunk from "../../store/modules/digimons/thunks"

import * as S from "./style.js"
function Search() {
    const [input, setInput] = useState("")
    const [error, setError] = useState(false)
    console.log(input)
    const dispatch = useDispatch()

    const handleSearch = () => {
        setError(false)
        dispatch(addDigimonsThunk(input, setError))
            
        setInput("")
    }


    return (
        <S.Container>
            <S.Input 
            value={input} 
            onChange={(event)=> setInput(event.target.value)} 
            placeholder="Procure seu Digimon">
            </S.Input>
            <S.Button onClick={handleSearch}>Pesquisar</S.Button>
            <S.error>{error && "Digimon não encontrado"}</S.error>
        </S.Container>
    )
}

export default Search;
