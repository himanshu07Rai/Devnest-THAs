import { useState, createContext, useContext } from "react";

const UserContext = createContext();

const UserContextProvider = (props) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  function login() {
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
    setLoggedIn(true);
  }
  function logout() {
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
    setLoggedIn(false);
  }

  const value = {
    loggedIn,
    login,
    logout,
    loading,
  };
  return (
    <UserContext.Provider value={value}>{props.children}</UserContext.Provider>
  );
};

export const useAuth = () => useContext(UserContext);

export default UserContextProvider;
