import React from "react"
import { BoxInform, DeliveryDate, HistoryContainer, RestaurantName, TotalPrice } from "./styled"

const CardOrderHistory = ({ restaurantName, totalPrice, createdAt }) => {

    const convertDate = (timeStamp) => {
        let time = new Date(timeStamp)
        let day = time.getDate().toString().padStart(2, '0')
        let month = (time.getMonth()+1).toString().padStart(2, '0')
        let year = time.getFullYear()

        return `${day}/${month}/${year}`
    }
    return(
        <HistoryContainer>
            <BoxInform>
                <RestaurantName>{restaurantName}</RestaurantName>
                <DeliveryDate>{convertDate(createdAt)}</DeliveryDate>
                <TotalPrice>Subtotal: {totalPrice.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    })}</TotalPrice>
            </BoxInform>
            
        </HistoryContainer>
    )
}

export default CardOrderHistory