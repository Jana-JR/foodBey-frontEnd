import * as actionTypes from "./ActionType"
import {LOGOUT} from "../Authentication/ActionType"
const initialState = {
  cart: null,
  cartItems: [],
  isLoading: false,
  error: null,
};


export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FIND_CART_REQUEST:
    case actionTypes.GET_ALL_CART_ITEMS_REQUEST:
    case actionTypes.UPDATE_CART_ITEM_REQUEST:
    case actionTypes.REMOVE_CART_ITEM_REQUEST:
    
  
      return { ...state, 
        isLoading: true, 
        error: null, 
        message: null 
    };

    
    case actionTypes.FIND_CART_SUCCESS:
      return { ...state, 
        isLoading: false, 
        cart:action.payload,
        cartItems:action.payload.items,
    };

    case actionTypes.ADD_ITEM_TO_CART_SUCCESS:
      return { ...state, 
        isLoading: false,
        cartItems: [action.payload, ...state.cartItems], 
    };


    case actionTypes.REMOVE_CART_ITEM_SUCCESS:
      return { ...state, 
        isLoading: false,
        cartItems:state.cartItems.filter(
          (item) => item.id !== action.payload
        ),
    };

    case actionTypes.UPDATE_CART_ITEM_SUCCESS:
      return { ...state, 
        isLoading: false,
        cartItems:state.cartItems.map(
          (item) => item.id === action.payload.id?action.payload:item
        ),
       };

   

    case actionTypes.FIND_CART_FAILURE:
    case actionTypes.UPDATE_CART_ITEM_FAILURE:
    case actionTypes.REMOVE_CART_ITEM_FAILURE:
    case actionTypes.GET_ALL_CART_ITEMS_FAILURE:
      return { ...state, 
        isLoading: false, 
        error: action.payload,
        message:null
    };

    case LOGOUT:
      localStorage.removeItem("jwt");
      return {...state, cartItems:[], cart:null, success:"Logout success"}
      

    default:
      return state;
  }
};
