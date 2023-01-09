import axios from "axios";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CardCart from "../../components/CardCart/cardCart.js";
import Header from "../../components/Header/header.js";
import ItemCardRestaurantDetail from "../../components/ItemCardRestaurantDetail/itemCardRestaurantDetail.js";
import MenuNav from "../../components/Menu/menu.js";
import { BASE_URL } from "../../constants/url.js";
import { GlobalStateContext } from "../../global/GlobalStateContext.js";
import { useProtectedPage } from "../../hooks/useProtectedPage.js";
import { useRequestData } from "../../hooks/useRequestData.js";
import { goToFeed } from "../../routes/coordinator.js";
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
  useProtectedPage();
  const profile = useRequestData({}, `${BASE_URL}/profile`);
  const [payment, setPayment] = useState("");
  const [fullPrice, setFullPrice] = useState(0);
  
  const [payMentMethod] = useState([
    'money',
    'creditcard'
  ]);

  const {states, setters} = useContext(GlobalStateContext)
  const {cart, restaurant} = states
  const {setOrder, setCart} = setters

  const navigate = useNavigate()
 
    const totalPrice = () => {
      let totPrice = 0
      let total
      for (let product of cart) {
          totPrice += product.price * product.quantity
          total = restaurant.shipping + totPrice
        setFullPrice(total)
      }
    }

  useEffect(() => {
    totalPrice()
  }, [])

  const onChangePayment = (event) => {
   
    setPayment(event.target.value);
  };

  const token = localStorage.getItem("token")

  const placeOrder = async () => {
    const body = {
      products: cart.map((product) => {
        return ({
          id: product.id,
          quantity: product.quantity
        })
      }),
      paymentMethod: payment
    }
    await axios.post(`${BASE_URL}/restaurants/${restaurant.id}/order`, body, {
      headers: {
        auth: token
      }
    })
    .then((res) => {
      setOrder(res.data.order)
      setCart([])
      goToFeed(navigate)
    })
    .catch((error) => {
      alert(error.response.data.message)
    })
  }

  const onSubmitPlaceOrder = (event) => {
    event.preventDefault()
    placeOrder()
  }

  return (
    <Main>
      <Header title={"Meu Carrinho"} back/>
      <CartConfig>
        <InfoProfile>
          <p>Endereço de entrega</p>
          <p>{profile.user && profile.user.address}</p>
        </InfoProfile>
        <InfoRestaurant>
          <p>{restaurant.name}</p>
          <p>{restaurant.address}</p>
          <p>{restaurant.deliveryTime} min</p>
        </InfoRestaurant>
        <CartInfo>
          {cart.length > 0 ? (
            cart.map((product) => {
              return (
                <ItemCardRestaurantDetail
                  key={product.id}
                  product={product}
                  restaurant={restaurant}
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
            }).format(restaurant.shipping && cart.length ? restaurant.shipping : 0)}
          </Freight>
          <Total>
            <p>Subtotal</p>
            <p>{new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(cart.length? fullPrice : 0)}</p>
            
          </Total>
          <h1>Forma de Pagamento</h1>
          <hr />
          <Form onSubmit={onSubmitPlaceOrder}>
            {payMentMethod.map((key) => {
              return (
                <div key={key}>
                  <input
                    checked={payment === key}
                    name={"payMentMethod"}
                    id={key}
                    type="radio"
                    onChange={onChangePayment}
                    value={key}
                  />
                  <label htmlFor={key}>{key}</label>
                </div>
              );
            })}
            <ButtonStyled type="submit">Confirmar</ButtonStyled>
          </Form>
        </Payment>
      </CartConfig>
      <MenuNav page={"cart"}/>
    </Main>
  );
};

export default Cart;
