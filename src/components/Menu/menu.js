import { useNavigate } from "react-router-dom"
import { goToCart, goToFeed, goToProfile } from "../../routes/coordinator"
import { AvatarStyled, CartStyled, ContainerSpace, HomeStyled, MenuContainer } from "./styled"

const MenuNav = ({page}) => {
    const navigate = useNavigate()
    return(
        <>
        <MenuContainer>
            <HomeStyled onClick={() => goToFeed(navigate)} pagecurrent={page === "feed"}/>
            <CartStyled onClick={() => goToCart(navigate)} pagecurrent={page === "cart"}/>
            <AvatarStyled onClick={() => goToProfile(navigate)} pagecurrent={page === "profile"}/>
        </MenuContainer>
        <ContainerSpace/>
        </>        
    )
}

export default MenuNav