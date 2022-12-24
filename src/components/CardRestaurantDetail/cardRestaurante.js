import { useNavigate } from "react-router-dom";
import { goToRestaurant } from "../../routes/coordinator";
import {
  ContainerCardRestaurant,
  ContainerTimePrice,
  ImgRestaurant,
  InformShipping,
  InformTime,
  NameRestaurant,
} from "./styled";

const CardRestaurante = ({ restaurant }) => {
  const navigate = useNavigate()
  return (    
    <ContainerCardRestaurant onClick={()=>goToRestaurant(navigate, restaurant.id)}>
      <ImgRestaurant src={restaurant.logoUrl} />
      <NameRestaurant>{restaurant.name}</NameRestaurant>
      <ContainerTimePrice>
        <InformTime>{restaurant.deliveryTime} min</InformTime>
        <InformShipping>Frete R${restaurant.shipping}</InformShipping>
      </ContainerTimePrice>
    </ContainerCardRestaurant>
  );
};
export default CardRestaurante;
