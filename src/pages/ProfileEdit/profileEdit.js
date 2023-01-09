import React, { useEffect, useState } from "react";
import { ButtonStyled, Form, InputMaterial, Main, SubTitle } from "./style";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { goToBack, goToProfile } from "../../routes/coordinator";
import { BASE_URL } from "../../constants/url";
import { useRequestData } from "../../hooks/useRequestData";
import Header from "../../components/Header/header.js";

const ProfileEdit = () => {
  useProtectedPage();
  const person = useRequestData({}, `${BASE_URL}/profile`);
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [cpf, setCpf] = useState('')
  
  const navigate = useNavigate();
  
   

  useEffect(() => {
    getPerson();
  }, []);

  const token = localStorage.getItem("token");
  const getPerson = async () => {
    await axios
      .get(`${BASE_URL}/profile`, {
        headers: {
          auth: token,
        },
      })
      .then((res) => {        
        setName(res.data.user.name)
        setEmail(res.data.user.email)
        setCpf(res.data.user.cpf)   
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  const updateProfile = async () => {
    const body = {
      name,
      email,
      cpf
    }
    await axios
      .put(`${BASE_URL}/profile`, body, {
        headers: {
          auth: token,
        },
      })
      .then((res) => {
        goToProfile(navigate);     
      })
      .catch((error) => {
        alert(error.response.message)
      });
  };

  const cpfFormat = (value) => {
    if (person.user && cpf) {
      return value
        .replace(/\D/g, "")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d{1,2})/, "$1-$2")
        .replace(/(-\d{2})\d+?$/, "$1");
    }
  };

  const onSubmitForm = (event) => {
    event.preventDefault();
    updateProfile();
  };

  return (    
      <Main>
        <Header back/>
        <SubTitle>Editar perfil</SubTitle>
        <Form onSubmit={onSubmitForm}>
          <InputMaterial
            id="outlined-basic"
            name="name"
            type={"text"}
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <InputMaterial
            id="outlined-basic"
            name="email"
            type={"email"}
            placeholder={"Digite seu email"}
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <InputMaterial
            id="outlined-basic"
            placeholder={'Digite seu cpf'}
            name="cpf"
            type={"text"}
            variant="outlined"
            value={cpfFormat(cpf)}
            onChange={(e) => setCpf(e.target.value)}
            required
          />
          <ButtonStyled type="submit">Salvar</ButtonStyled>
        </Form>
      </Main>
  );
};

export default ProfileEdit;
