import { createContext, useState } from "react";
export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) => {
    const [count, sentCount] = useState(0)
     
    return (
        <ShoppingCartContext.Provider value={{
            count,
            sentCount
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}