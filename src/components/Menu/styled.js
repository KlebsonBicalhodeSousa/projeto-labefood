import styled from "styled-components";
import { ReactComponent as Feed } from '../../assets/homepage.svg'
import { ReactComponent as Avatar } from '../../assets/avatar.svg'
import { ReactComponent as Cart } from '../../assets/shopping-cart.svg'

export const MenuContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    justify-items: center;
    width: 100%;
    height: 3.063rem;
    box-shadow: 0 -1px 3px 0 rgba(0, 0, 0, 0.2), 0 -2px 1px -1px rgba(0, 0, 0, 0.12), 0 -1px 3px 0 rgba(0, 0, 0, 0.2);
    position: fixed;
    bottom: 0;
    background-color: white;
`
export const AvatarStyled = styled(Avatar)`
    fill: ${(p) => p.pagecurrent ? "#E86E5A" : "#B8B8B8"};
`
export const HomeStyled = styled(Feed)`
    fill: ${(p) => p.pagecurrent ? "#E86E5A" : "#B8B8B8"};
`
export const CartStyled = styled(Cart)`
    fill: ${(p) => p.pagecurrent ? "#E86E5A" : "#B8B8B8"};
`
export const ContainerSpace = styled.div`
    height: 3.063rem;
    margin-top: 1rem;
`