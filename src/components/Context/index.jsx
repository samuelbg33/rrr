import { createContext, useState } from "react";
export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) => {
    const [count, sentCount] = useState(0)

    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () =>setIsProductDetailOpen(true)
    const closeProductDetail = () =>setIsProductDetailOpen(false)
   
    //chekout
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
    const openCheckoutSideMenu = () =>setIsCheckoutSideMenuOpen(true)
    const closeCheckoutSideMenu = () =>setIsCheckoutSideMenuOpen(false)



    // product Detail show pproduct
    const [productToShow,setProductToShow] = useState({})
    //shopping cart
    const [cartProducts,setCartProducts] = useState([])




    return (
        <ShoppingCartContext.Provider value={{
            count,
            sentCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            isCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu


        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}