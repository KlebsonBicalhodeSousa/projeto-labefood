import styled from "styled-components";
import { primaryColor, tertiaryColor } from "../../constants/colors";
import { ReactComponent as Clock } from '../../assets/clock.svg'

export const OrderContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 7.375rem;
    position: fixed;
    bottom: 3.063rem;
    background-color: ${primaryColor};
    padding: 0 0 0 2rem;
`

export const ContainerSpace = styled.div`
    height: 7.375rem;
    margin-top: 1rem;
`
export const BoxInform = styled.div`
    
`
export const Title = styled.h3`
    font-family: 'Montserrat';
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #fff;
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
export const ClockStyled = styled(Clock)`
    
`