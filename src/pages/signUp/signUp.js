import React, { useState } from "react";
import { useForm } from "../../hooks/useForm";
import { ButtonStyled, DivPassword, Form, InputMaterial, LogoContainer, Main, SubTitle, VisibilityButton } from "./styled";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import axios from "axios";
import { BASE_URL } from "../../constants/url";
import { useNavigate } from "react-router-dom";
import { goToSignUpAdress } from "../../routes/coordinator";
import Header from "../../components/Header/header.js";
import logo from "../../assets/logo.svg"


const SignUp = () => {
  const { form, onChangeForm, clean } = useForm({
    "name": "",
    "email": "",
    "cpf": "",
    "password": "",
  });

  const [confirmPassword, setConfirmPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [showCheckPassword, setShowCheckPassword] = useState(false)
  const [checKErrorPassword, setCheckErrorPassword] = useState(false);

  const navigate = useNavigate()

  const cpfFormat = (value) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})/, "$1-$2")
      .replace(/(-\d{2})\d+?$/, "$1")
  }

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleClickShowCheckPassword = () => {
    setShowCheckPassword(!showCheckPassword);
  };

  const onSubmitForm = (event) => {
    event.preventDefault()
    if (form.password !== confirmPassword) {
      setCheckErrorPassword(true)
    } else {
      setCheckErrorPassword(false)
      createUser()
    }

  }

  const createUser = async () => {
    await axios.post(`${BASE_URL}/signup`, form)
    .then((res) => {
      localStorage.setItem("token", res.data.token)
      alert(`Seja bem vindo ${res.data.user.name}`)
      goToSignUpAdress(navigate)
    })
    .catch((error) => {
      alert("Ops! Algo deu, confira se os dados digitados estão corretos.")
    })
  }
  return (
    <Main>
      <Header back/>
      <LogoContainer>
        <img src={logo} />
      </LogoContainer>
      <SubTitle>Cadastrar</SubTitle>
      <Form onSubmit={onSubmitForm}>        
          <InputMaterial
          id="outlined-basic"
          label={"Nome"}
          name="name"
          type={"text"}
          placeholder={"Digite seu nome"}
          variant="outlined"
          value={form.name}
          onChange={onChangeForm}
        />          
        <InputMaterial
          id="outlined-basic"
          label={"Email"} 
          name="email"
          type={"email"}
          placeholder={"Digite seu email"}
          variant="outlined"
          value={form.emal}
          onChange={onChangeForm}
          required
        />
        <InputMaterial
          id="outlined-basic"
          label={"cpf"} 
          name="cpf"
          type={"text"}
          placeholder={"Digite seu cpf"}
          variant="outlined"
          value={cpfFormat(form.cpf)}
          onChange={onChangeForm}
          required
        />
        <DivPassword>
          <InputMaterial
            id="outlined-adorment-password"
            label={"Password"}
            name="password"
            type={showPassword ? "text" : "password"}
            variant="outlined"
            placeholder={"Mínimo 6 caracteres"}
            inputProps={{
              minLength: 6,
              title: "A senha deve conter no mínimo 6 caracteres",
            }}
            value={form.password}
            onChange={onChangeForm}  
            required
          />
          <VisibilityButton
            aria-label="toggle password visibility"
            onClick={handleClickShowPassword}
            edge="end"
          >
            {showPassword ? <Visibility /> : <VisibilityOff />}
          </VisibilityButton>
        </DivPassword>
        <DivPassword>
          <InputMaterial
            error={checKErrorPassword}
            helperText={checKErrorPassword ? "Senha deve ser igual a anterior" : ""}
            id="outlined-adorment-password"
            label={"Confirmar"}
            type={showCheckPassword ? "text" : "password"}
            variant="outlined"
            placeholder={"Mínimo 6 caracteres"}
            inputProps={{
              minLength: 6,
              title: "A senha deve conter no mínimo 6 caracteres",
            }}
            value={confirmPassword}
            onChange={(e)=> setConfirmPassword(e.target.value)}
            // onChange={onChangeForm}
            required
          />
          <VisibilityButton
            aria-label="toggle password visibility"
            onClick={handleClickShowCheckPassword}
            edge="end"
          >
            {showCheckPassword ? <Visibility /> : <VisibilityOff />}
          </VisibilityButton>
        </DivPassword>
        <ButtonStyled type="submit">Confirmar</ButtonStyled>

      </Form>
    </Main>
  );
};

export default SignUp;
