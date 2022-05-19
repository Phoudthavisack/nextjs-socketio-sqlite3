import { createContext, useState } from "react";

// material
import { CssBaseline } from "@mui/material";
// hooks
import { getCookie } from "../hooks/useCookie";
// ------------------------------------------------- //
const Context = createContext();
export default function Contexts({ children }) {
  //   const [token, setToken] = useState(getCookie("token"));
  const [token, setToken] = useState("abc");
  return (
    <Context.Provider
      value={{
        token,
        setToken,
      }}>
      {children}
      <CssBaseline />
    </Context.Provider>
  );
}
export { Context };
