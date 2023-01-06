import React, { useState } from "react";
import CardCart from "../../components/CardCart/cardCart.js";
import Header from "../../components/Header/header.js";
import MenuNav from "../../components/Menu/menu.js";
import { BASE_URL } from "../../constants/url.js";
import { useRequestData } from "../../hooks/useRequestData.js";
import {
  CartConfig,
  CartInfo,
  EmptyCart,
  Form,
  Freight,
  InfoProfile,
  InfoRestaurant,
  Main,
  Payment,
  Total,
  ButtonStyled,
} from "./styled.js";

const Cart = () => {
  const profile = useRequestData({}, `${BASE_URL}/profile`);
  const [payment, setPayment] = useState([]);
  const [payMentMethod, setPaymentMethod] = useState({
    money: false,
    creditcard: false,
  });

  const mockData = [
    {
      name: "Penne do Campo",
      price: 32,
      photoUrl:
        "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/1b7b1a90-043d-45d6-9932-2903b304b956/201905291247_x5ae_c.jpg",
      amount: 2,
      description: "A tradição italiana na sua casa",
    },
    {
      name: "Massa Carbonara",
      price: 42,
      photoUrl:
        "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/106acf72-a1f6-4ed7-aded-e8b33144e754/201807281336_39690308.jpg",
      amount: 1,
      description: "A tradição italiana na sua casa",
    },
    // {
    //   name: "Hambúrguer",
    //   price: 7.9,
    //   photoUrl:
    //     "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/d596c695-8f68-4ebf-9e09-da6e4e9d1672/201908081120_697a_h.png",
    //   amount: 2,
    //   description: "Pequeno e saboroso",
    // },
    // {
    //   name: "Big Mac",
    //   price: 20.9,
    //   photoUrl:
    //     "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/d596c695-8f68-4ebf-9e09-da6e4e9d1672/201908081117_zWUW_b.png",
    //   amount: 1,
    //   description: "O clássico e mais pedido.",
    // },
  ];

  const onChangePayment = (event) => {
    const newCheck = { ...payMentMethod };
    newCheck[event.target.name] = event.target.checked;

    const result = Object.keys(newCheck).filter((pay) => {
      if (newCheck[pay]) {
        return [pay, payment];
      }
    });
    setPayment(result);
    setPaymentMethod(newCheck);
  };
  return (
    <Main>
      <Header title={"Meu Carrinho"} back/>
      <CartConfig>
        <InfoProfile>
          <p>Endereço de entrega</p>
          <p>{profile.user && profile.user.address}</p>
        </InfoProfile>
        <InfoRestaurant>
          <p>Nome do restaurant</p>
          <p>Rua do restaurante</p>
          <p>30 - 45 min</p>
        </InfoRestaurant>
        <CartInfo>
          {mockData.length > 0 ? (
            mockData.map((data) => {
              return (
                <CardCart
                  key={data.name}
                  name={data.name}
                  price={data.price}
                  photoUrl={data.photoUrl}
                  amount={data.amount}
                  description={data.description}
                />
              );
            })
          ) : (
            <EmptyCart>Carrinho vazio</EmptyCart>
          )}
        </CartInfo>
        <Payment>
          <Freight>
            Frete{" "}
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(6)}
          </Freight>
          <Total>
            Subtotal{" "}
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(10)}
          </Total>
          <h1>Forma de Pagamento</h1>
          <hr />
          <Form>
            {Object.keys(payMentMethod).map((key) => {
              const checked = payMentMethod[key];
              return (
                <div key={key}>
                  <input
                    checked={checked}
                    name={key}
                    id={key}
                    type="checkbox"
                    onChange={onChangePayment}
                  />
                  <label>{key}</label>
                </div>
              );
            })}
            <ButtonStyled>Confirmar</ButtonStyled>
          </Form>
        </Payment>
      </CartConfig>
      <MenuNav page={"cart"}/>
    </Main>
  );
};

export default Cart;
