import styled from "styled-components";

export const Container = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0;
    width: 100%;
    max-width: 320px;
    
    
    ul{
        padding: 0;
        margin-bottom: 20px;
        background-color: black;
        padding: 20px;
        border-radius: 4px;
    }
    img{
        width: 50%;
        margin: 15px 0;
        border-radius: 4px;
      
         
    }

    li{
        list-style: none;
        color: white;
        
    }
`