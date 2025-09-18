import React, { createContext, useContext, useEffect, useState } from "react";
import { ReactNode } from "react";
import toast from "react-hot-toast";

type CartItem = {
  name: string;
  price: number;
  itemCount: number;
};

type CartContextType = {
  cartItems: CartItem[];
  TotalCartAmount: number;
  IVA: number;
  shipping: number;
  grandTotal: number;
  handleDeleteItems: () => void;
};

const CartContext = createContext<CartContextType>({
  cartItems: [],
  TotalCartAmount: 0,
  IVA: 0,
  shipping: 0,
  grandTotal: 0,
  handleDeleteItems: () => {},
});

export function CartProvider({ children }: { children: ReactNode }) {
  const getCartItems = () => {
    const items = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);

      if (key) {
        const itemStr = localStorage.getItem(key);
        if (itemStr) {
          const item = JSON.parse(itemStr);
          if (item && item.name && item.price) {
            items.push(item);
          }
        }
      }
    }
    return items;
  };

  function handleDeleteItems() {
    const keysToRemove = [];

    for (let i = localStorage.length - 1; i >= 0; i--) {
      const key = localStorage.key(i);
      if (key && key.startsWith("cart_")) {
        keysToRemove.push(key);
      }
    }

    keysToRemove.forEach((key) => localStorage.removeItem(key));
    window.dispatchEvent(new Event("storage"));
    toast.success("Cart cleared successfully!");
  }

  const [cartItems, setCartItems] = useState(getCartItems());
  const TotalCartAmount = cartItems.reduce(
    (acc, item) => acc + item.price * item.itemCount,
    0
  );
  const IVA = TotalCartAmount * 0.13;
  const shipping = 50;
  const grandTotal = TotalCartAmount + IVA + shipping;

  useEffect(() => {
    const handleStorageChange = () => {
      setCartItems(getCartItems());
    };

    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("cart-updated", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("cart-updated", handleStorageChange);
    };
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        TotalCartAmount,
        IVA,
        shipping,
        grandTotal,
        handleDeleteItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
