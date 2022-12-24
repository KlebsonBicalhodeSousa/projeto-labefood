import styled from "styled-components";
import { Button, IconButton } from "@mui/material";
import TextField from "@material-ui/core/TextField";

export const InputMaterial = styled(TextField)`
    width: 100%;
`

export const Main = styled.div`
    padding: 10px;
    min-width: 320px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center; 
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 30%;
    justify-content: space-between;
    margin: 5px;
    gap: 20px;
` 

export const ButtonStyled = styled(Button)`
    &&{
        color: #000;
        width: 100%;
        height: 2.813rem;
        background-color: #E8222E;
        
    }
`

export const VisibilityButton = styled(IconButton)`
    && {
        position: absolute;
        right: 3%;
    }
`

export const DivPassword = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    p{
        font-size: 1rem;
    }   
`