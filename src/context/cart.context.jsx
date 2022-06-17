import { createContext , useEffect, useState } from "react";


export const CartContext = createContext({
    isCartOpen : false,
    setIsCartOpen : ()=> {},
    cartItems : [],
    addItemToCart: () => {},
    removeItemFromCart : () => {},
    cartCount : 0,
    erasingItem : () => {},
    priceCount : 0,
})

const addCartItem = (cartItems , productToAdd)=>{

    const existance = cartItems.find((cartItem)=>cartItem.id === productToAdd.id)

    if(existance){
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id ? 
            {...cartItem,quantity : cartItem.quantity + 1}
            : cartItem
        );
    }
    return [...cartItems , {...productToAdd , quantity : 1}]
}

const removeCartItem = (cartItems ,  productToRemove) => {
    if(productToRemove.quantity>1){
        return cartItems.map((cartItem)=> 
            cartItem.id===productToRemove.id ?
            {...cartItem,quantity:cartItem.quantity-1}
            : cartItem
        );
    }
    return cartItems.filter((item)=> item.id !== productToRemove.id)
}

const eraseItem = (cartItems , itemToRemove) => {
    
    return cartItems.filter((item)=> item.id !== itemToRemove.id)
}


export const CartProvider = ({ children }) => {
    const [isCartOpen , setIsCartOpen] = useState(false);
    const [cartItems  ,   setCartItem] = useState([]);
    const [cartCount  ,  setCartCount] = useState(0);
    const [priceCount , setPriceCount] = useState(0);

    useEffect(()=>{
        const newCartCount = cartItems.reduce((total, cartItem)=> total + cartItem.quantity, 0);
        setCartCount(newCartCount);
    },[cartItems])

    useEffect(()=>{
        const newPriceCount = cartItems.reduce((totalPrice, cartItem) => totalPrice + cartItem.price * cartItem.quantity,0);
        setPriceCount(newPriceCount);
    },[cartItems])

    const addItemToCart = (productToAdd) => {
        setCartItem(addCartItem(cartItems , productToAdd ));
    }
    const removeItemFromCart = (productToRemove) => {
        setCartItem(removeCartItem(cartItems ,  productToRemove))
    }
    const erasingItem = (itemToRemove) => {
        setCartItem( eraseItem(cartItems , itemToRemove))
    }

    const value = {isCartOpen, setIsCartOpen, addItemToCart, removeItemFromCart, erasingItem, cartItems, cartCount, priceCount}

    return(
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}