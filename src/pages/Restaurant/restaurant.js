import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardRestauranteDetail from "../../components/CardRestaurantDetail/cardRestaurantDetail";
import Header from "../../components/Header/header.js";
import ItemCardRestaurantDetail from "../../components/ItemCardRestaurantDetail/itemCardRestaurantDetail";
import { BASE_URL } from "../../constants/url";
import {
  CardRestaurant,
  Category,
  ContainerRestaurant,
  SectionProductByCategory,
} from "./styled";

const Restaurant = () => {
  const [restaurantDetail, setRestaurantdetail] = useState({});
  const [categories, setCategories] = useState([]);
  console.log(restaurantDetail)

  const { restaurantId } = useParams();
  const token = localStorage.getItem("token");

  useEffect(() => {
    getRestaurant();
  }, []);

  useEffect(() => {
    if (restaurantDetail.products) {
      const newCategories = [];
      for (const product of restaurantDetail.products) {
        if (!newCategories.includes(product.category)) {
          newCategories.push(product.category);
        }
      }
      setCategories(newCategories);
    }
  }, [restaurantDetail]);
  console.log(categories);

  const getRestaurant = () => {
    axios
      .get(`${BASE_URL}/restaurants/${restaurantId}`, {
        headers: {
          auth: token,
        },
      })
      .then((res) => {
        setRestaurantdetail(res.data.restaurant);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
  return (
    <ContainerRestaurant>
      <Header title="Restaurante" back/>
      <CardRestaurant>
        <CardRestauranteDetail restaurantDetail={restaurantDetail} />
        {restaurantDetail.products &&
          categories.map((category) => {
            return (
              <SectionProductByCategory>
                <Category>{category}</Category>
                {restaurantDetail.products
                .filter((product)=>{
                  return product.category === category
                }).map((product) => {
                  return (
                    <ItemCardRestaurantDetail
                      key={product.id}
                      product={product}
                    />
                  );
                })}
              </SectionProductByCategory>
            );
          })}
        {/* {restaurantDetail.products &&
          restaurantDetail.products.map((product) => {
            return (
              <ItemCardRestaurantDetail key={product.id} product={product} />
            );
          })} */}
      </CardRestaurant>
    </ContainerRestaurant>
  );
};

export default Restaurant;
