import { useState } from "react";
import { GlobalStateContext } from "./GlobalStateContext";

const GlobalState = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity) => {
    setCart([...cart, {...product, quantity}])
  }
  console.log(cart)

  const data = {
    showModal,
    setShowModal,
    cart,
    setCart,
    addToCart

  };

  return (
    <GlobalStateContext.Provider value={data}>
      {children}
    </GlobalStateContext.Provider>
  );
};
export default GlobalState;
