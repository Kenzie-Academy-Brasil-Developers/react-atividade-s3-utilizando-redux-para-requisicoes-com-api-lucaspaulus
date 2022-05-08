import React from 'react';
import { useSelector } from 'react-redux';
import * as S from "./style.js"
function DigimonList() {
    const {digimons} = useSelector((state)=> state)
    console.log(digimons)
    return (
        <div>
            <S.Container>
                {digimons.map((digimon, index)=> (
                      <ul key={index}>
                        <li>{digimon[0].name}</li>
                        <li><img src={digimon[0].img}/></li>
                        <li>{digimon[0].level}</li>
                      </ul>
                      
                
                ))}
               
            </S.Container>
        </div>
    )
}

export default DigimonList;
