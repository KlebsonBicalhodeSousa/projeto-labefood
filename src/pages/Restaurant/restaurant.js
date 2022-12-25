import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardRestauranteDetail from "../../components/CardRestaurantDetail/cardRestaurantDetail";
import Header from "../../components/Header/header.js";
import { BASE_URL } from "../../constants/url";
import { CardRestaurant, ContainerRestaurant } from "./styled";

const Restaurant = () => {
  const [restaurantDetail, setRestaurantdetail] = useState({})
  console.log(restaurantDetail)

  const {restaurantId} = useParams()
  const token = localStorage.getItem("token")

  useEffect(()=>{
    getRestaurant()
  }, [])

  const getRestaurant = () => {
    axios.get(`${BASE_URL}/restaurants/${restaurantId}`, {
      headers: {
        auth: token
      }
    })
    .then((res)=>{
      setRestaurantdetail(res.data.restaurant)
    })
    .catch((error)=>{
      console.log(error.response)
    })
  }
    return (
      <ContainerRestaurant>
        <Header title="Restaurante"/>
        <CardRestaurant>
          <CardRestauranteDetail restaurantDetail={restaurantDetail}/>
        </CardRestaurant>
        
      </ContainerRestaurant>
    );
  }
  
  export default Restaurant;