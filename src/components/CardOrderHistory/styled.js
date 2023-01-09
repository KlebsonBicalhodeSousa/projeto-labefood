import styled from "styled-components";
import { quaternaryColor, secondaryColor} from "../../constants/colors";

export const HistoryContainer = styled.div`  
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 7.375rem;
    padding: 0 1rem 0.5rem 1rem;
`
export const BoxInform = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    width: 100%;
    height: 100%;
    border-radius: 0.5rem;
    border: solid 1px ${secondaryColor};
`
export const DeliveryDate = styled.p`
    font-family: 'Roboto';
    font-size: 0.75rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    padding: 0.25rem;
`
export const RestaurantName = styled.p`
    font-family: 'Roboto';
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: ${quaternaryColor};
    padding: 0.25rem;
`
export const TotalPrice = styled.p`
    font-family: 'Roboto';
    font-size: 1rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    padding: 0.25rem;
    text-transform: uppercase;
`
    