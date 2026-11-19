import { createContext, useState } from "react";
export const stateContext = createContext();
function StateProvider({ children }) {
  const [cart, setCart] = useState([]);
  return (
    <stateContext.Provider value={{ cart, setCart }}>
      {children}
    </stateContext.Provider>
  );
}
export default StateProvider;
