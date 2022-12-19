import {
  ContainerCardRestaurant,
  ContainerTimePrice,
  ImgRestaurant,
  InformShipping,
  InformTime,
  Main,
  NameRestaurant,
} from "./styled";

const CardRestaurante = ({ restaurant }) => {
  return (    
    <ContainerCardRestaurant>
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
