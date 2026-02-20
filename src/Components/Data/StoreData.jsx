import { createContext, useState, useContext, useEffect, useMemo } from "react";

export const StoreContext = createContext();

export const StoreData = ({ children }) => {
  const [allUsers, setAllUsers] = useState(
    () => JSON.parse(localStorage.getItem("users")) || [],
  );

  const storeUsers = (userData) => {
    let allUsers = JSON.parse(localStorage.getItem("all-users")) || [];
    const existingIndex = allUsers.findIndex((u) => u.email === userData.email);

    if (existingIndex !== -1) {
      allUsers[existingIndex] = userData;
    } else {
      allUsers.push(userData);
    }

    localStorage.setItem("all-users", JSON.stringify(allUsers));
    setAllUsers(allUsers);
  };

  useEffect(() => {
    setAllUsers(JSON.parse(localStorage.getItem("all-users")) || []);
  }, []);

  const value = useMemo(
    () => ({
      StoreData,
      storeUsers,
      allUsers,
    }),
    [allUsers],
  );

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
