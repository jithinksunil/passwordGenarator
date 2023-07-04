import { createContext, useState } from "react";
export const MyContext = createContext(null);

export default function MyProvider({ children }) {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [password, setPassword] = useState(null);
  const [isLoading, setLoading] = useState(false);
  return (
    <MyContext.Provider
      value={{
        userLoggedIn,
        setUserLoggedIn,
        password,
        setPassword,
        isLoading,
        setLoading
      }}
    >
      {children}
    </MyContext.Provider>
  );
}
