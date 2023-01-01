import React from "react";
import Header from "../../components/Header/header.js";
import { CartConfig, InfoProfile, Main } from "./styled.js";

const Cart = () => {
  return (
    <Main>
      <Header title={"Meu Carrinho"} />
      <CartConfig>
        <InfoProfile>
          <p>Endereço de entrega</p>
          <p>Rua Alessandra Vieira, 42</p>
        </InfoProfile>
        <div>
          <p>Carrinho vazio</p>
        </div>
        <div>
          <p>Frete R$00,00</p>
          <div>
            <p>Subtotal</p>
            <p>R$00,00</p>
          </div>
        <h1>Forma de Pagamento</h1>
        <form>
          <label>Dinheiro</label>
          <input type="checkbox" id="música" name="interesse" value="música" />
          <label>Catão de Crédito</label>
          <input type="checkbox" id="música" name="interesse" value="música" />
          <button>Confirmar</button>
        </form>
        </div>
      </CartConfig>
    </Main>
  );
};

export default Cart;
