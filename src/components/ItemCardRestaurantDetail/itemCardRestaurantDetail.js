import { useContext } from "react";
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
} from "./styled";

const ItemCardRestaurantDetail = ({ product }) => {
  // const [showModal, setShowModal] = useState(false)
  const { showModal, setShowModal, addToCart, cart } =
    useContext(GlobalStateContext);
  const choiceQuantity = (quantity) => {
    addToCart(product, quantity);
    setShowModal(false);
  };

  const productInCart = cart.find((productCart) => productCart.id === product.id);
  console.log(productInCart);

  return (
    <ItemCard>
      <InformCard>
        <ImgProduct src={product.photoUrl} alt="Imagem do Produto" />
        <InformProduct>
          <BoxNameQuantity>
            <Name>{product.name}</Name>
          </BoxNameQuantity>
          <Description>{product.description}</Description>
          <Box>
            <Price>R${product.price}</Price>
            {
            productInCart? 
              <ButtonRemove>Remover</ButtonRemove>
             : 
              <ButtonAdd onClick={() => setShowModal(true)}>
                adicionar
              </ButtonAdd>
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
