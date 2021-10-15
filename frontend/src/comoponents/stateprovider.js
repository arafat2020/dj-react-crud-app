import React, { createContext, useState } from "react";


export const UserContext = createContext();

// This context provider is passed to any component requiring the context
export const UserProvider = ({ children }) => {
  const [lode, setLoad] = useState(false);
  
  
  

  return (
    <UserContext.Provider
      value={{
        
        lode,
        setLoad,
              
      }}
    >
      {children}
    </UserContext.Provider>
  );
};