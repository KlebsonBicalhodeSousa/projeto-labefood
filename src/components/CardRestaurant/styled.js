import styled from "styled-components";
import { primaryColor, secondaryColor } from "../../constants/colors";

export const Main = styled.div`
  width: auto;
  height: auto;
  margin: 20px 0 0;
  padding: 8px 16px;
`;
export const ContainerCardRestaurant = styled.div`
  width: 100%;
  height: 200px;
  padding: 0 0 16px;
  margin-top: 10px;
  border-radius: 8px;
  border: solid 1px ${secondaryColor};
  cursor: pointer;
`;
export const ImgRestaurant = styled.img`
  width: 100%;
  height: 120px;
  margin: 0 0 12px;
  border-radius: 8px 8px 0 0;
`;

export const NameRestaurant = styled.h3`
  width: 296px;
  height: 18px;
  margin: 8px 16px 4px;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  color: ${primaryColor};
`;

export const ContainerTimePrice = styled.div`
  display: flex;
  width: 100%;
`;
export const InformTime = styled.p`
  width: 148px;
  height: 18px;
  margin: 4px 8px 0 16px;
  font-family: Roboto;
  font-size: 16px;
  color: #b8b8b8;
`;

export const InformShipping = styled.p`
  width: 140px;
  height: 18px;
  margin: 4px 16px 0 8px;
  font-family: Roboto;
  font-size: 16px;
  text-align: right;
  color: #b8b8b8;
`;
