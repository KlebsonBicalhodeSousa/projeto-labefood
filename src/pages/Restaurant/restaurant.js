import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardRestauranteDetail from "../../components/CardRestaurantDetail/cardRestaurantDetail";
import Header from "../../components/Header/header.js";
import ItemCardRestaurantDetail from "../../components/ItemCardRestaurantDetail/itemCardRestaurantDetail";
import { BASE_URL } from "../../constants/url";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import {
  CardRestaurant,
  Category,
  ContainerRestaurant,
  Line,
  SectionProductByCategory,
} from "./styled";

const Restaurant = () => {
  useProtectedPage()
  const [restaurant, setRestaurant] = useState({});
  const [categories, setCategories] = useState([]);
  

  const { restaurantId } = useParams();
  const token = localStorage.getItem("token");

  useEffect(() => {
    getRestaurant();
  }, []);

  useEffect(() => {
    if (restaurant.products) {
      const newCategories = [];
      for (const product of restaurant.products) {
        if (!newCategories.includes(product.category)) {
          newCategories.push(product.category);
        }
      }
      setCategories(newCategories);
    }
  }, [restaurant]);

  const getRestaurant = () => {
    axios
      .get(`${BASE_URL}/restaurants/${restaurantId}`, {
        headers: {
          auth: token,
        },
      })
      .then((res) => {
        setRestaurant(res.data.restaurant);
      })
      .catch((error) => {
        alert(error.response.message);
      });
  };
  return (
    <ContainerRestaurant>
      <Header title="Restaurante" back/>
      <Line></Line>
      <CardRestaurant>
        <CardRestauranteDetail restaurantDetail={restaurant} />
        {
        restaurant.products 
        &&
          categories.map((category) => {
            return (
              <SectionProductByCategory key={category}>
                <Category>{category}</Category>
                {
                restaurant.products
                .filter((product) => {
                  return product.category === category
                }).map((product) => {
                  return (
                    <ItemCardRestaurantDetail
                      key={product.id}
                      product={product}
                      restaurant={restaurant}
                    />
                  );
                })}
              </SectionProductByCategory>
            );
          })}
      </CardRestaurant>
    </ContainerRestaurant>
  );
};

export default Restaurant;
