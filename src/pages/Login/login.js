import React, { useState } from "react";
import { ButtonStyled, DivPassword, Form, Main, InputMaterial, VisibilityButton, Redirect } from "./styled";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import axios from "axios";
import { BASE_URL } from "../../constants/url";
import { useNavigate } from "react-router-dom";
import { goToFeed, goToSignUp } from "../../routes/coordinator";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [checKErrorEmail, setCheckErrorEmail] = useState(false);
  const [checKErrorPassword, setCheckErrorPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const navigate = useNavigate()

  const onSubmitLogin = (event) => {
    event.preventDefault();

    const userLogin = {
      email,
      password,
    };
    loginApi(userLogin);
  };

  const loginApi = async (body) => {
    await axios
      .post(`${BASE_URL}/login`, body)
      .then((response) => {        
        setEmail("")
        setPassword("")
        setErrorEmail("")
        setErrorPassword("")
        setCheckErrorEmail(false)
        setCheckErrorPassword(false)
        localStorage.setItem("token", response.data.token)
        goToFeed(navigate)
        alert(`Seja bem vindo ${response.data.user.name}!`)

      })
      .catch((error) => {
        if (error.response.data.message.includes("Senha incorreta")) {
          setErrorPassword(error.response.data.message);
          setCheckErrorPassword(true);
        } else {
          setErrorEmail(error.response.data.message);
          setCheckErrorEmail(true);
        }
        alert(error.response.data.message);
      });
  };
  return (
    <Main>
      <p>Entrar</p>
      <Form onSubmit={onSubmitLogin}>
        <InputMaterial
          error={checKErrorEmail}
          helperText={checKErrorEmail ? errorEmail : ""}
          id="outlined-basic"
          label="E-mail"
          type={"email"}
          variant="outlined"
          placeholder={"email@email.com"}
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <DivPassword>
          <InputMaterial
            error={checKErrorPassword}
            helperText={checKErrorPassword ? errorPassword : ""}
            id="outlined-basic"
            label="Password"
            type={showPassword ? "password" : "text"}
            variant="outlined"
            placeholder={"Mínimo 6 caracteres"}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            inputProps={{
              minLength: 6,
              title: "A senha deve conter no mínimo 6 caracteres",
            }}
            required
          />
          <VisibilityButton
            aria-label="toggle password visibility"
            onClick={handleClickShowPassword}
            edge="end"
          >
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </VisibilityButton>
        </DivPassword>

        <ButtonStyled type="submit">Entrar</ButtonStyled>
      <Redirect>Não tem cadastro click <button onClick={()=>goToSignUp(navigate)}>Aqui</button></Redirect>
      </Form>
    </Main>
  );
};

export default Login;
