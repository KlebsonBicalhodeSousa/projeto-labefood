import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/header.js";
import { BASE_URL } from "../../constants/url.js";
import { useProtectedPage } from "../../hooks/useProtectedPage.js";
import { useRequestData } from "../../hooks/useRequestData.js";
import { goToProfileEdit } from "../../routes/coordinator.js";
import { AddressPerson, HistoryPurchase, Information, Main, ProfileContainer, ProfilePerson } from "./styled.js";

const Profile = () => {
  useProtectedPage()

  const navigate = useNavigate()

const person = useRequestData({}, `${BASE_URL}/profile`)
console.log(person.user)

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
          <div>Editar</div>
        </AddressPerson>
        </Information>
        <HistoryPurchase>Histórico de compras</HistoryPurchase>
      </Main>
    );
  }
  
  export default Profile;