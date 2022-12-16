import { Button, TextField } from "@mui/material"
import styled from "styled-components"


export const Main = styled.div`
    padding: 10px;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Form = styled.form`
margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 80%;
    height: 60%;
    margin: 5px;
    border: solid black 1px;
`
export const InputMaterial = styled(TextField)`
    width: 100%;
`
export const ButtonStyled = styled(Button)`
    &&{
        color: #000;
        width: 100%;
        height: 2.813rem;
        background-color: #E8222E;
        
    }
`