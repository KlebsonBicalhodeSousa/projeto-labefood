import styled from "styled-components";
import { secondaryColor } from "../../constants/colors";

export const ContainerRestaurant = styled.div`
  width: 360px;
  height: auto;
  padding: 0 16px 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: solid 1px ${secondaryColor};
`;
export const CardRestaurant = styled.div`
  /* padding: 0 1rem; */
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SectionProductByCategory = styled.div`
  padding-bottom: 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Category = styled.p`
  width: 100%;
  font-family: "Roboto";
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  border-bottom: 1px solid black;
`;
