import styled from "styled-components";
import { Button } from "@mui/material";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";

export const Main = styled.div`
  padding: 10px;
  min-width: 320px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    font-size: 1rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 50%;
  margin-top: 20px;
  gap: 20px;
`;
export const InputMaterial = styled(TextField)`
  && {
    width: 100%;
  }
`;
export const VisibilityButton = styled(IconButton)`
  && {
    position: absolute;
    right: 2%;
  }
`;

export const ButtonStyled = styled(Button)`
  && {
    color: #000;
    width: 100%;
    height: 2.813rem;
    background-color: #e8222e;
  }
`;

export const Redirect = styled.p`
position: relative;
height: 1.5rem;
display: flex;
align-items: center;
justify-content: center;
  button {
    border: none;
    font-family: 'Roboto', sans-serif;
    background: none;
    font-size: 1rem;
    font-weight: 400;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: center;
    color: blue;
    margin-left: 5px;
    :hover {
        font-weight: 700;
        margin-left: 3.7px;
    }
  }
`;

export const DivPassword = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;
export const LogoContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
`;