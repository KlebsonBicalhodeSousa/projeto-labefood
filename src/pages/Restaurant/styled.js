import styled from "styled-components";
import { secondaryColor } from "../../constants/colors";

export const ContainerRestaurant = styled.div`
  width: 100%;
  height: auto;
  padding: 0 16px 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: solid 1px ${secondaryColor};
`;

export const Line = styled.div`
  border-bottom: solid 1px rgba(0, 0, 0, 0.25);
  width: 100%;
  margin: 0 0 8px 0;
`

export const CardRestaurant = styled.div`
  width: 360px;
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
