import { createContext, useState } from "react";

export const ContextLogin = createContext();

export default function LoginProvider({ children }) {
  const [error, setError] = useState({ mensage: '', erro: false });
  return (
    <ContextLogin.Provider
      value={{
        error,
        setError,
      }}
    >
      {children}
    </ContextLogin.Provider>
  );
}
