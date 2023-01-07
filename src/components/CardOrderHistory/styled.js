import styled from "styled-components";
import { primaryColor, secondaryColor, tertiaryColor } from "../../constants/colors";

export const HistoryContainer = styled.div`  
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 7.375rem;
    
    /* border: solid 1px ${secondaryColor}; */
`
export const BoxInform = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;
    height: 100%;
    border: solid 1px ${secondaryColor};
`
export const DeliveryDate = styled.p`
    font-family: 'Montserrat';
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    padding: 0.25rem;
`
export const RestaurantName = styled.p`
    font-family: 'Montserrat';
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: ${tertiaryColor};
    padding: 0.25rem;
`
export const TotalPrice = styled.p`
    font-family: 'Montserrat';
    font-size: 1rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    padding: 0.25rem;
    text-transform: uppercase;
`
    