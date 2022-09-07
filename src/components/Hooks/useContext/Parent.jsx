import React, { createContext, useState } from "react";
import { Child4 } from "./Child4";

export const UserContext = createContext();

export const Parent = () => {
  const [user, setUser] = useState("Hallo Ini Contex");
  return (
    <UserContext.Provider value={{user, setUser}}>
      <div>
        <h1>Header</h1>
        <Child4 />
      </div>
    </UserContext.Provider>
  );
};
