import styled from "styled-components";
import { primaryColor, secondaryColor } from "../../constants/colors";

export const ContainerFeed = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  `;
export const CardsRestaurants = styled.div`
padding: 0 1rem;

`;
export const InputSearch = styled.input`
  width: 100%;
  height: 3.5rem;
  padding: 1rem 0.503rem 1rem 1.063rem;
  border-radius: 2px;
  border: solid 1px ${secondaryColor};
`;
