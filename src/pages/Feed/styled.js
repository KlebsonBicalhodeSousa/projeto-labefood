import styled from "styled-components";
import { primaryColor, secondaryColor } from "../../constants/colors";

export const ContainerFeed = styled.div`
  width: 100%;
  min-width: 320px;
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

export const Line = styled.div`
  border-bottom: solid 1px rgba(0, 0, 0, 0.25);
  width: 100%;
  margin: 0 0 8px 0;
`

export const Menu = styled.nav`
  max-width: 360px;
  height: 45px;
  margin: 0.5rem 1rem 0 1rem;
  display: flex;
  align-items: center;
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
export const ContainerSpace = styled.div`
    height: 3.663rem;
`
