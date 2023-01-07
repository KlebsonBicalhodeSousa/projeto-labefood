import { SettingsPowerSharp } from "@mui/icons-material";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import CardRestaurant from "../../components/CardRestaurant/cardRestaurant";
import Header from "../../components/Header/header.js";
import MenuNav from "../../components/Menu/menu";
import OrderPopup from "../../components/OrderPopup/OrderPopup";
import { BASE_URL } from "../../constants/url";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import {
  CardsRestaurants,
  ContainerFeed,
  InputSearch,
  Line,
  Menu,
  MenuItem,
} from "./styled";

const Feed = () => {
  useProtectedPage();

  const [restaurants, setRestaurants] = useState([]);
  const [categoryRestaurant, setCategoryRestaurant] = useState([]);
  const [inputText, setInputText] = useState("");
  const [selectCategory, setSelectCategory] = useState("");
  const {setters, states} = useContext(GlobalStateContext)

  useEffect(() => {
    getRestaurants();
    getActiveOrder()
  }, []);

  const token = localStorage.getItem("token");

  const getRestaurants = async () => {
    await axios
      .get(`${BASE_URL}/restaurants`, {
        headers: {
          auth: token,
        },
      })
      .then((res) => {
        setRestaurants(res.data.restaurants);
        filterCategory(res.data.restaurants);
      })
      .catch((error) => {
        alert(error.response);
      });
  };

  const filterCategory = (restaurants) => {
    const arrayCategory = [];
    restaurants.map((restaurant) => {
      arrayCategory.push(restaurant.category);
    });
    const takeOutRepeat = [...new Set(arrayCategory)];

    const changeObjectCategory = []

    takeOutRepeat.map((category)=>{
      const insertObject = {category, select: false}
      changeObjectCategory.push(insertObject)
    })
    setCategoryRestaurant(changeObjectCategory);
  };

  const getActiveOrder = async () => {
    await axios
      .get(`${BASE_URL}/active-order`, {
        headers: {
          auth: token,
        },
      })
      .then((res) => {
        setters.setOrder(res.data.order);
        const timeCurrent = new Date().getTime()
        const expiresAt = res.data.order.expiresAt

        setTimeout(()=>{
          getActiveOrder()          
        }, expiresAt - timeCurrent)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const filterRestaurant = restaurants
    .filter((restaurant) =>
      inputText
        ? restaurant.name.toLowerCase().includes(inputText.toLowerCase())
        : true
    )
    .filter((restaurant) =>
      selectCategory
        ? restaurant.category
            .toLowerCase()
            .includes(selectCategory.toLowerCase())
        : true
    )
    .map((restaurant) => {
      return <CardRestaurant key={restaurant.id} restaurant={restaurant} />;
    });

  const onClickCategory = (parameter)=>{
    setSelectCategory(parameter)

    const selectedCategoryColor = categoryRestaurant.map((categ)=>{
      if (categ.category === parameter){
        return {
          ...categ, 
          select: true
        }
      } else{
        return {
          ...categ, 
          select: false
        }
      }
    })
    setCategoryRestaurant(selectedCategoryColor)
  }

  return (
    <ContainerFeed>
      <Header title={"Rappi4"} />
      <Line></Line>
      <InputSearch
        value={inputText}
        onChange={(event) => setInputText(event.target.value)}
      />
      <Menu>
        <MenuItem onClick={() => onClickCategory("")}>
          Todos
        </MenuItem>
        {categoryRestaurant.map((category) => {
          return (
            <MenuItem
              key={category.category}
              select={category.select}
              onClick={() => onClickCategory(category.category)}
            >
              {category.category}
            </MenuItem>
          );
        })}
      </Menu>
      <CardsRestaurants>{filterRestaurant}</CardsRestaurants>
      {states.order && <OrderPopup 
        restaurantName={states.order.restaurantName} 
        totalPrice={states.order.totalPrice}/>}
      <MenuNav page={"feed"}/>
    </ContainerFeed>
  );
};

export default Feed;
