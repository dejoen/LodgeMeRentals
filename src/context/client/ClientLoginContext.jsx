/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const ClientLoginContext = createContext();

const ClientLoginContextProvider = ({ children }) => {
  const [clientLoginData, setClientLoginData] = useState({
    data: {},
    isLoggedIn: false,
    showPopUp: false,
    failedToLoginMessage: "",
  });
  return (
    <ClientLoginContext.Provider value={{ clientLoginData, setClientLoginData }}>
      {children}
    </ClientLoginContext.Provider>
  );
};

export default ClientLoginContextProvider;
