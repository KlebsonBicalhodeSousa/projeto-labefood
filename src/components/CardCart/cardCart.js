import React from "react";
import { Amount, CardComponent, ImageCard, InfoCard, Main } from "./styled";

const CardCart = ({ name, price, photoUrl, amount, description }) => {
  return (
    <Main>
      <CardComponent>
        <ImageCard src={photoUrl} />
      </CardComponent>
      <InfoCard>
        <div>
          <p>{name}</p>
          <Amount>{amount}</Amount>
        </div>
        <div>
          <p>{description}</p>
        </div>
        <div>
          <p>
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(price)}
          </p>
        </div>
      </InfoCard>
    </Main>
  );
};

export default CardCart;
