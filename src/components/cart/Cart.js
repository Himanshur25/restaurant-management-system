import { createContext, useState } from "react";

export const CartContext = createContext({
    cartItems: [],
    setCartItems: ()=>null,
});

export default function CartProvider({children}) {
    const [cartItems, setCartItems] = useState([]);
    const value = {cartItems, setCartItems};

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}