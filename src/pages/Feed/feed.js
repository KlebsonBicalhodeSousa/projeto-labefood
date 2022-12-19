import axios from "axios";
import React, { useEffect, useState } from "react";
import CardRestaurante from "../../components/CardRestaurante/cardRestaurante";
import { BASE_URL } from "../../constants/url";
import { CardsRestaurants, ContainerFeed } from "./styled";

const Feed = () => {
  const [restaurants, setRestaurants] = useState([]);
  console.log(restaurants);

  useEffect(() => {
    getRestaurants();
  }, []);

  const getRestaurants = async () => {
    const token = localStorage.getItem("token");
    await axios
      .get(`${BASE_URL}/restaurants`, {
        headers: {
          auth: token,
        },
      })
      .then((res) => {
        setRestaurants(res.data.restaurants);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
  return (
      <ContainerFeed>
        <CardsRestaurants>
          {
            restaurants.map((restaurant)=>{
              return <CardRestaurante key={restaurant.id} restaurant={restaurant}/>
            })
          }
        </CardsRestaurants>
      </ContainerFeed>
  );
};

export default Feed;
