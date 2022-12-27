import { useState } from "react";
import { GlobalStateContext } from "./GlobalContex";

const GlobalState = ({ children }) => {
  const [showModal, setShowModal] = useState(false);

  const data = {
    showModal,
    setShowModal,
  };

  return (
    <GlobalStateContext.Provider value={data}>
      {children}
    </GlobalStateContext.Provider>
  );
};
export default GlobalState;
