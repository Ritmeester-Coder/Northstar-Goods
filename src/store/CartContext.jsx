import { createContext, useContext, useEffect, useMemo, useReducer, useState } from "react";

const CartContext = createContext(null);

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      const existingItem = state.items.find((item) => item.id === action.payload.id);

      if (existingItem) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          ),
        };
      }

      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }],
      };
    }

    case "INCREMENT_ITEM":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item,
        ),
      };

    case "DECREMENT_ITEM":
      return {
        ...state,
        items: state.items
          .map((item) =>
            item.id === action.payload ? { ...item, quantity: item.quantity - 1 } : item,
          )
          .filter((item) => item.quantity > 0),
      };

    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };

    case "TOGGLE_CART":
      return {
        ...state,
        isCartOpen: action.payload,
      };

    default:
      return state;
  }
}

const initialState = {
  items: [],
  isCartOpen: false,
};

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState, initialCartState);
  const [notice, setNotice] = useState("");

  const totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  useEffect(() => {
    window.localStorage.setItem("northstar-cart", JSON.stringify(state.items));
  }, [state.items]);

  const value = useMemo(
    () => ({
      items: state.items,
      isCartOpen: state.isCartOpen,
      totalItems,
      subtotal,
      notice,
      addToCart(product) {
        dispatch({ type: "ADD_ITEM", payload: product });
        dispatch({ type: "TOGGLE_CART", payload: true });
        setNotice(`${product.name} added to cart`);
      },
      incrementItem(id) {
        dispatch({ type: "INCREMENT_ITEM", payload: id });
      },
      decrementItem(id) {
        dispatch({ type: "DECREMENT_ITEM", payload: id });
      },
      removeItem(id) {
        dispatch({ type: "REMOVE_ITEM", payload: id });
      },
      openCart() {
        dispatch({ type: "TOGGLE_CART", payload: true });
      },
      closeCart() {
        dispatch({ type: "TOGGLE_CART", payload: false });
      },
      clearNotice() {
        setNotice("");
      },
    }),
    [notice, state.isCartOpen, state.items, subtotal, totalItems],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

function initialCartState(defaultState) {
  if (typeof window === "undefined") {
    return defaultState;
  }

  const savedItems = window.localStorage.getItem("northstar-cart");

  if (!savedItems) {
    return defaultState;
  }

  try {
    return {
      ...defaultState,
      items: JSON.parse(savedItems),
    };
  } catch {
    return defaultState;
  }
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return context;
}