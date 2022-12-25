import { useNavigate } from "react-router-dom";
import { goToRestaurant } from "../../routes/coordinator";
import {
  ContainerCardRestaurant,
  ContainerTimePrice,
  ImgRestaurant,
  Inform,
  InformAdress,
  InformCategory,
  InformShipping,
  InformTime,
  NameRestaurant,
} from "./styled";

const CardRestauranteDetail = ({ restaurantDetail }) => {
  const navigate = useNavigate();
  return (
    <ContainerCardRestaurant>
      <ImgRestaurant src={restaurantDetail.logoUrl} />
      <NameRestaurant>{restaurantDetail.name}</NameRestaurant>
      <Inform>
        <InformCategory>{restaurantDetail.category}</InformCategory>
        <ContainerTimePrice>
          <InformTime>{restaurantDetail.deliveryTime} min</InformTime>
          <InformShipping>Frete R${restaurantDetail.shipping}</InformShipping>
        </ContainerTimePrice>
        <InformAdress>{restaurantDetail.address}</InformAdress>
      </Inform>
    </ContainerCardRestaurant>
  );
};
export default CardRestauranteDetail;
