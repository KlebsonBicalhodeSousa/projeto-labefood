import styled from "styled-components";
import { primaryColor, secondaryColor } from "../../constants/colors";

export const ContainerFeed = styled.div`
  width: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardsRestaurants = styled.div`
  padding: 0 1rem;
`;
export const InputSearch = styled.input`
  width: 328px;
  height: 56px;
  padding: 1rem 0.503rem 1rem 1.063rem;
  border-radius: 2px;
  border: solid 1px ${secondaryColor};
`;

export const Menu = styled.nav`
  width: 100%;
  height: 42px;
  margin: 8px 0 0;
  display: flex;
  padding: 12px 0 12px 16px;
  overflow-x: auto;
`;

export const MenuItem = styled.button`
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  text-align: center;
  color: ${(p) => p.select? primaryColor : "black"};
  border: none;
  background: transparent;
  padding: 0 1rem;
`;
