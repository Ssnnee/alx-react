import React from "react";


export const defaultUser = {
  email: "",
  password: "",
  isLoggedIn: false,
};

export const defaultLogOut = () => {
  console.log("Logging out");
}

export const AppContext = React.createContext({
  user: defaultUser,
  logOut: defaultLogOut,
});

