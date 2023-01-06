import { useContext, useState } from "react";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import ModalSelectQuantity from "../modal/ModalSelectQuantity";
import {
  Box,
  BoxNameQuantity,
  ButtonAdd,
  ButtonRemove,
  Description,
  ImgProduct,
  InformCard,
  InformProduct,
  ItemCard,
  Name,
  Price,
  QuantityProduct,
} from "./styled";

const ItemCardRestaurantDetail = ({ product, restaurant }) => {
  const [showModal, setShowModal] = useState(false)
  const {requests, states} = useContext(GlobalStateContext)
  const {addToCart, removeToCart} = requests
  const {cart} = states

  const choiceQuantity = (quantity) => {
    addToCart(product, quantity, restaurant);
    setShowModal(false);
  };

  const productInCart = cart.find((productCart) => productCart.id === product.id);

  return (
    <ItemCard>
      <InformCard>
        <ImgProduct src={product.photoUrl} alt="Imagem do Produto" />
        <InformProduct>
          <BoxNameQuantity>
            <Name>{product.name}</Name>
            {productInCart && <QuantityProduct>{productInCart.quantity}</QuantityProduct>}
          </BoxNameQuantity>
          <Description>{product.description}</Description>
          <Box>
            <Price>R${product.price}</Price>
            
            {productInCart ?
            <ButtonRemove onClick={() => removeToCart(product.id)}>Remover</ButtonRemove> 
            :  
            <ButtonAdd onClick={() => setShowModal(true)}>adicionar</ButtonAdd>
            }
          </Box>
          <ModalSelectQuantity
            choiceQuantity={choiceQuantity}
            open={showModal}
            setOpen={setShowModal}
          />
        </InformProduct>
      </InformCard>
    </ItemCard>
  );
};
export default ItemCardRestaurantDetail;
