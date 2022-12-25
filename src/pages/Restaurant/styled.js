import styled from "styled-components";
import { secondaryColor } from "../../constants/colors";

export const ContainerRestaurant = styled.div`
  width: 360px;
  height: 834px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: solid 1px ${secondaryColor};
`;
export const CardRestaurant = styled.div`
  padding: 0 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
