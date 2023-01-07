import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/header.js";
import { BASE_URL } from "../../constants/url";
import { useForm } from "../../hooks/useForm";
import { useRequestData } from "../../hooks/useRequestData.js";
import { goToFeed, goToProfile } from "../../routes/coordinator";
import { ButtonStyled, Form, InputMaterial, Main, SubTitle } from "./styled";

const AdressEdit = () => {

  // const getAdress = useRequestData({}, `${BASE_URL}/profile/address`)
  // console.log(getAdress.address)

  const {form, onChangeForm, setForm} = useForm({
    street: "",
    number: "",
    neighbourhood: "",
    city: "",
    state: "",
    complement: ""
  })

  useEffect(() => {
    getAddress();
  }, []);

  const token = localStorage.getItem('token')

  const getAddress = async () => {
    await axios
      .get(`${BASE_URL}/profile/address`, {
        headers: {
          auth: token,
        },
      })
      .then((res) => {  
        console.log(res.data.address)      
        setForm({
          street: res.data.address.street,
          number: res.data.address.number,
          neighbourhood: res.data.address.neighbourhood,
          city: res.data.address.city,
          state: res.data.address.state,
          complement: res.data.address.complement
        })   
      })
      .catch((error) => {
        console.log(error.response);
      });
  }

  const navigate = useNavigate()
  
  const insertAdrees = async () => {
    axios.put(`${BASE_URL}/address`, form, {
      headers: {
        auth: localStorage.getItem("token")
      }
    })
    .then((res)=>{
      localStorage.setItem("token", res.data.token)
      goToFeed(navigate)
      goToProfile(navigate)
    })
    .catch((error) => {
      alert(error.response)
    })
  }
  
    const onSubmitFormAdress = (event) => {
      event.preventDefault()
      insertAdrees()
    }

    return (
      <Main>
        <Header back/>
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
  
  export default AdressEdit;