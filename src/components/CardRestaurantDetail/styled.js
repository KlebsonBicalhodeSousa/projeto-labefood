import styled from "styled-components";
import { primaryColor, secondaryColor } from "../../constants/colors";

export const ContainerCardRestaurant = styled.div`
  width: 100%;
  padding: 0 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border: solid 1px ${secondaryColor}; */
  margin: 9px 16px 12px;
`;
export const ImgRestaurant = styled.img`
  width: 328px;
  height: 120px;
  border-radius: 10px 10px 0 0;
`;

export const NameRestaurant = styled.h3`
  width: 328px;
  height: 18px;
  margin: 12px 16px 8px;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: ${primaryColor};
`;

export const Inform = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const InformCategory = styled.p`
  width: 104px;
  height: 18px;
  margin: 0 8px 0 0;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: ${secondaryColor};
`;

export const ContainerTimePrice = styled.div`
  display: flex;
  width: 100%;
`;

export const InformTime = styled.p`
  width: 104px;
  height: 18px;
  margin: 8px 8px 10px 0px;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: ${secondaryColor};
`;

export const InformShipping = styled.p`
  width: 104px;
  height: 18px;
  margin: 8px 128px 10px 8px;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: ${secondaryColor};
`;

export const InformAdress = styled.p`
  width: 328px;
  height: 18px;
  margin: 0px 0 16px;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: ${secondaryColor};
`;
