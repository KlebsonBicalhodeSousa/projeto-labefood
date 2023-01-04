import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/header.js";
import { BASE_URL } from "../../constants/url";
import { useForm } from "../../hooks/useForm";
import { goToFeed } from "../../routes/coordinator";
import { ButtonStyled, Form, InputMaterial, LogoContainer, Main, SubTitle } from "./styled";
import logo from "../../assets/logo.svg";

const SignUpAdress = () => {

  const {form, onChangeForm, clear} = useForm({
    street: "",
    number: "",
    neighbourhood: "Vila N. Conceição",
    city: "",
    state: "",
    complement: ""
  })

  const navigate = useNavigate()

  const onSubmitFormAdress = (event) => {
    event.preventDefault()
    insertAdrees()
  }

  const insertAdrees = async () => {
    axios.put(`${BASE_URL}/address`, form, {
      headers: {
        auth: localStorage.getItem("token")
      }
    })
    .then((res)=>{
      localStorage.setItem("token", res.data.token)
      goToFeed(navigate)
    })
    .catch((error) => {
      alert(error.response)
    })
  }
    return (
      <Main>
        <Header back/>
        <LogoContainer>
        <img src={logo} />
      </LogoContainer>
        <SubTitle>Meu endereço</SubTitle>
        <Form onSubmit={onSubmitFormAdress}>
        <InputMaterial
          id="outlined-basic"
          label={"Logradouro"}
          name="street"
          type={"text"}
          placeholder={"Rua / Av."}
          variant="outlined"
          value={form.street}
          onChange={onChangeForm}
          required
        />
        <InputMaterial
          id="outlined-basic"
          label={"Número"}
          name="number"
          type={"text"}
          placeholder={"Número"}
          variant="outlined"
          value={form.number}
          onChange={onChangeForm}
          required
        />
        <InputMaterial
          id="outlined-basic"
          label={"Complemento"}
          name="complement"
          type={"text"}
          placeholder={"Apto / Bloco"}
          variant="outlined"
          value={form.complement}
          onChange={onChangeForm}
        />
        <InputMaterial
          id="outlined-basic"
          label={"Bairro"}
          name="neighbourhood"
          type={"text"}
          placeholder={"Bairro"}
          variant="outlined"
          value={form.neighbourhood}
          onChange={onChangeForm}
          required
        />
        <InputMaterial
          id="outlined-basic"
          label={"Cidade"}
          name="city"
          type={"text"}
          placeholder={"Cidade"}
          variant="outlined"
          value={form.city}
          onChange={onChangeForm}
          required
        />
        <InputMaterial
          id="outlined-basic"
          label={"Estado"}
          name="state"
          type={"text"}
          placeholder={"Estado"}
          variant="outlined"
          value={form.state}
          onChange={onChangeForm}
          required
        />
        <ButtonStyled type="submit">Confirmar</ButtonStyled>
        </Form>
      </Main>
    );
  }
  
  export default SignUpAdress;