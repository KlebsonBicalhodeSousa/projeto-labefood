import styled from "styled-components";
import { quaternaryColor, secondaryColor } from "../../constants/colors";
import { Button } from "@mui/material";

export const Main = styled.div`
  display: flex;
  height: 7rem;
  margin: 0 1rem 1rem;
  border-radius: 8px;
  border: solid 1px ${secondaryColor};
  position: relative;
`;
export const CardComponent = styled.div`
  margin-right: 1rem;
`;
export const ImageCard = styled.img`
  width: 6.063rem;
  height: 7rem;
  margin: 0 0 12px;
  border-radius: 8px 0 0 8px;
`;
export const InfoCard = styled.div`
  /* margin: 1.125rem 0 1rem 0; */
  width: 100%;
  height: 100%;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  div:nth-child(1) {
    display: flex;
    margin-top: 1.125rem;
    p:nth-child(1) {
      font-family: "Roboto";
      font-size: 1rem;
      letter-spacing: -0.39px;
      color: ${quaternaryColor};
    }
  }
  div:nth-child(2) {
    p {
      font-family: "Roboto";
      font-size: 0.875rem;
      letter-spacing: -0.34px;
      color: ${secondaryColor};
    }
  }
  div:nth-child(3) {
    display: flex;
    justify-content: space-between;
    p {
      font-family: "Roboto";
      font-size: 1rem;      
      letter-spacing: -0.39px;
      color: #000;
    }
  }
`;
export const Amount = styled.p`
  width: 33px;
  height: 33px;
  margin: 0 0 9px 16px;
  padding: 7px 12px;
  border-radius: 0 8px 0 8px;
  border: solid 1px ${quaternaryColor};
  position: absolute;
  top: 0;
  right: 0;
`;

export const ButtonStyled = styled(Button)`
  && {
    width: 90px;
  height: 31px;
  /* margin: 9px 0 0 17px; */
  padding: 8px 23px 9px 24px;
  border-radius: 8px 0 8px 0;
  border: solid 1px #e02020;
  color: ${quaternaryColor};
  }
`;