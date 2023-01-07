import React from "react";
import { useNavigate } from "react-router-dom";
import CardOrderHistory from "../../components/CardOrderHistory/cardOrderHistory.js";
import Header from "../../components/Header/header.js";
import MenuNav from "../../components/Menu/menu.js";
import { BASE_URL } from "../../constants/url.js";
import { useProtectedPage } from "../../hooks/useProtectedPage.js";
import { useRequestData } from "../../hooks/useRequestData.js";
import { goToAdressEdit, goToProfileEdit } from "../../routes/coordinator.js";
import { AddressPerson, HistoryPurchase, Information, Main, OrderHistory, ProfileContainer, ProfilePerson } from "./styled.js";

const Profile = () => {
  useProtectedPage()

  const navigate = useNavigate()

const person = useRequestData({}, `${BASE_URL}/profile`)
const order = useRequestData({}, `${BASE_URL}/orders/history`);

  return (
    <Main>
        <Header title="Meu Perfil"/>
        <Information>
          <ProfilePerson>
            <div>
              <p>{person.user && person.user.name}</p>
              <p>{person.user && person.user.email}</p>
              <p>{person.user && person.user.cpf}</p>
            </div>
            <div onClick={() => goToProfileEdit(navigate, person.user.id)}>Editar</div>
          </ProfilePerson>
        <AddressPerson>
          <div>
            <h4>Endereço Cadastrado</h4>
            <p>{person.user && person.user.address}</p>
          </div>
          <div onClick={() => goToAdressEdit(navigate, person.user.id)}>Editar</div>
        </AddressPerson>
        </Information>
        <HistoryPurchase>
          <h3>Histórico de compras</h3>
          <OrderHistory>
            {order.orders && order.orders.map((order) => {
              console.log(order)
              return (
                <CardOrderHistory key={order}
                restaurantName={order.restaurantName}
                totalPrice={order.totalPrice}
                createdAt={order.createdAt}
                />
              )
            })}
          
          </OrderHistory>
        </HistoryPurchase>
        <MenuNav page={"profile"}/>
      </Main>
    );
  }
  
  export default Profile;