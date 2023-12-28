import { createContext, useContext, useReducer } from "react";


const CartContext = createContext();

const initialState = {
    cart: [],
    price: 125,
    quantity: 0,
    total: 0,
}
function reducer(state, action) {
    switch (action.type) {
        case "ADD_TO_CART": {
            const existingCartItemIdx = state.cart.findIndex(item => item.id === action.payload.id);
            const existingItem = state.cart[existingCartItemIdx];

            if (existingItem) {
                const updatedItem = {
                    ...existingItem,
                    quantity: existingItem.quantity + action.payload.quantity
                };

                const updatedItems = [...state.cart];
                updatedItems[existingCartItemIdx] = updatedItem;
                console.log(updatedItems)
                return {
                    ...state,
                    cart: updatedItems,
                    quantity: state.quantity + action.payload.quantity,
                    total: state.total + action.payload.quantity * state.price
                };
            } else {
                const newItem = {
                    id: action.payload.id,
                    quantity: action.payload.quantity,
                };

                return {
                    ...state,
                    cart: [...state.cart, newItem],
                    quantity: state.quantity + action.payload.quantity,
                    total: state.total + action.payload.quantity * state.price
                };
            }
        }

        case "REMOVE_ITEM": {
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload.itemId),
            };
        }

        default:
            return state;
    }
}


const CartProvider = ({ children }) => {
    const [{ cart, price, quantity, total }, dispatch] = useReducer(reducer, initialState);
    console.log(cart)
    function addToCart(id, quantity) {
        dispatch({
            type: "ADD_TO_CART",
            payload: {
                id,
                quantity
            }
        });
        console.log(id, quantity, total, cart)
    }

    return (
        <CartContext.Provider value={{ cart, price, quantity, total, addToCart, dispatch }}>
            {children}
        </CartContext.Provider>
    )
}

function useCart() {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
}

export { CartProvider, useCart }

