import { BoxInform, ClockStyled, ContainerSpace, OrderContainer, RestaurantName, Title, TotalPrice } from "./styled"

const OrderPopup = ({totalPrice, restaurantName}) => {
    return(
        <>
        <OrderContainer>
            <ClockStyled/>
            <BoxInform>
                <Title>Pedido em andamento</Title>
                <RestaurantName>{restaurantName}</RestaurantName>
                <TotalPrice>Subtotal R${totalPrice}</TotalPrice>
            </BoxInform>
        </OrderContainer>
        <ContainerSpace/>        
        </>        
    )
}

export default OrderPopup