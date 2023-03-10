import { style } from "@mui/system";
import styled from "styled-components";
import {
  primaryColor,
  secondaryColor,
  tertiaryColor,
} from "../../constants/colors";

export const ItemCard = styled.main`
  width: 100%;
  /* margin: 8px 0 0; */
`;

export const InformCard = styled.section`
  display: flex;
  width: 100%;
  margin: 0.5rem 0 0;
  position: relative;
  border-radius: 8px;
  border: solid 1px ${secondaryColor};
`;

export const ImgProduct = styled.img`
  width: 97px;
  height: 7rem;
  border-radius: 8px 0 0 8px;
`;

export const InformProduct = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 0 0 1rem;
`;

export const BoxNameQuantity = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Name = styled.p`
  margin-top: 1rem;
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  color: ${primaryColor};
`;

export const Description = styled.p`
  margin-top: 8px;
  font-family: "Roboto", sans-serif;
  font-size: 0.875rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  color: ${secondaryColor};
`;

export const Box = styled.div`
  width: 100%;
  margin-top: 9px;
  display: flex;
  justify-content: space-between;
`;

export const Price = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  color: ${tertiaryColor};
`;

export const ButtonAdd = styled.button`
  width: 5.625rem;
  height: 1.938rem;
  border-radius: 8px 0 8px 0;
  border: solid 1px ${tertiaryColor};
  background-color: white;
  margin: 9px -1px 0 17px;
`;

export const ButtonRemove = styled(ButtonAdd)`
  border: 1px solid red;
  color: red;
`;

export const QuantityProduct = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.063rem;
  height: 2.063rem;
  border: 1px solid red;
  color: red;
  border-radius: 0 8px 0 8px;
`;
