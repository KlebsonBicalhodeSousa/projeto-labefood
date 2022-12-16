import React from "react";
import { useForm } from "../../hooks/useForm";
import { ButtonStyled, Form, InputMaterial, Main } from "./styled";

const SignUpAdress = () => {

  const {form, onChangeForm} = useForm({
    street: "",
    number: "",
    neighbourhood: "Vila N. Conceição",
    city: "",
    state: "",
    complement: ""
  })

  const onSubmitFormAdress = (event) => {
    event.preventDefault()
  }
    return (
      <Main>
        <p>SignUpAdress</p>
        <Form onSubmit={onSubmitFormAdress}>
        <InputMaterial
          id="outlined-basic"
          label={"Logradouro"}
          name="streeet"
          type={"text"}
          placeholder={"Rua / Av."}
          variant="outlined"
          value={form.street}
          onChange={onChangeForm}
        />
        <InputMaterial
          id="outlined-basic"
          label={"Logradouro"}
          name="streeet"
          type={"text"}
          placeholder={"Rua / Av."}
          variant="outlined"
          value={form.street}
          onChange={onChangeForm}
        />
        <InputMaterial
          id="outlined-basic"
          label={"Logradouro"}
          name="streeet"
          type={"text"}
          placeholder={"Rua / Av."}
          variant="outlined"
          value={form.street}
          onChange={onChangeForm}
        />
        <InputMaterial
          id="outlined-basic"
          label={"Logradouro"}
          name="streeet"
          type={"text"}
          placeholder={"Rua / Av."}
          variant="outlined"
          value={form.street}
          onChange={onChangeForm}
        />
        <InputMaterial
          id="outlined-basic"
          label={"Logradouro"}
          name="streeet"
          type={"text"}
          placeholder={"Rua / Av."}
          variant="outlined"
          value={form.street}
          onChange={onChangeForm}
        />
        <InputMaterial
          id="outlined-basic"
          label={"Logradouro"}
          name="streeet"
          type={"text"}
          placeholder={"Rua / Av."}
          variant="outlined"
          value={form.street}
          onChange={onChangeForm}
        />
        <ButtonStyled type="submit">Confirmar</ButtonStyled>
        </Form>
      </Main>
    );
  }
  
  export default SignUpAdress;