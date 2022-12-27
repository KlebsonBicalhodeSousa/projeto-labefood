import { useContext } from "react";
import { GlobalStateContext } from "../../global/GlobalContex";
import ModalSelectQuantity from "../modal/ModalSelectQuantity";
import { Box, BoxNameQuantity, ButtonAdd, Description, ImgProduct, InformCard, InformProduct, ItemCard, Name, Price } from "./styled";

const ItemCardRestaurantDetail = ({ product }) => {
    // const [showModal, setShowModal] = useState(false)
    const {showModal, setShowModal} = useContext(GlobalStateContext)

  return (
    <ItemCard>
        <InformCard>
            <ImgProduct src={product.photoUrl} alt="Imagem do Produto"/>
            <InformProduct>
                <BoxNameQuantity>
                    <Name>{product.name}</Name>
                </BoxNameQuantity>                
                <Description>{product.description}</Description>
                <Box>
                    <Price>R${product.price}</Price>
                    <ButtonAdd onClick={()=> setShowModal(true)}>adicionar</ButtonAdd>
                </Box>
                <ModalSelectQuantity  open={showModal} setOpen={setShowModal}/>
            </InformProduct>
        </InformCard>
    </ItemCard>
  );
};
export default ItemCardRestaurantDetail;