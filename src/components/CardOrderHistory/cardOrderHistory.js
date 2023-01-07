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
    console.log(convertDate(createdAt)  )
    return(
        <HistoryContainer>
            <BoxInform>
                <RestaurantName>{restaurantName}</RestaurantName>
                <DeliveryDate>{convertDate(createdAt)}</DeliveryDate>
                <TotalPrice>Subtotal: {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(totalPrice)}</TotalPrice>
            </BoxInform>
            
        </HistoryContainer>
    )
}

export default CardOrderHistory