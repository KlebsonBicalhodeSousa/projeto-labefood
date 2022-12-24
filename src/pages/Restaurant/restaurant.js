import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/url";
import { ContainerRestaurant } from "./styled";

const Restaurant = () => {

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
      console.log(res.data)
    })
    .catch((error)=>{
      console.log(error.response)
    })
  }
    return (
      <ContainerRestaurant>
        Restaurant
      </ContainerRestaurant>
    );
  }
  
  export default Restaurant;