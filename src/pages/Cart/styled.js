import styled from "styled-components";
import { quaternaryColor, secondaryColor } from "../../constants/colors";
import { Button } from "@mui/material";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  font-family: "Roboto";
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  h1{
    margin-left: 1rem;
  }
`;
export const CartConfig = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;
export const InfoProfile = styled.div`
  height: 4.75rem;
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  font-size: 1.2rem;
  background-color: #eee;
  p:nth-child(1) {
    color: ${secondaryColor};
  }
`;
export const InfoRestaurant = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 1.2rem;
  p:nth-child(1) {
    color: ${quaternaryColor};
  }
`;
export const CartInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const EmptyCart = styled.p`
  font-size: 3rem;
  text-align: center;
`;
export const Payment = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  p,
  label {
    font-size: 1.2rem;
  }
`;
export const Freight = styled.p`
  display: flex;
  justify-content: flex-end;
  margin: 5px;
`;
export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0.938rem 0 1.563rem 1rem;
  p:nth-child(2) {
    color: ${quaternaryColor};
    font-size: 1.5rem;
  }
`;
export const ButtonStyled = styled(Button)`
  && {
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  div {
    margin: 5px;
  }
  label {
    font-size: 1rem;
    text-transform: uppercase;
  }
  input {
    height: 20px;
    width: 20px;
    
  }
`;
