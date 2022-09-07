import React, { useContext } from "react";
import { UserContext } from "./Parent";
// import { UserContext } from "../..//../App";
// import { UserContext } from "./UserContexts";
// import { UserContext } from "./Parent";

export const Child4 = () => {
    const user = useContext(UserContext);
    console.log(user, "userr")
  return (
    <div>
      <div>{`Hello ${user} again!`}</div>
    </div>
  );
};
