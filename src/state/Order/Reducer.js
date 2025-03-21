import * as actionTypes from "./ActionType"
const initialState = {
  orders: [],
  isLoading: false,
  error: null,
  search: [],
};


export const orderReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case actionTypes.GET_USER_ORDERS_REQUEST:
      return { ...state, 
        isLoading: true, 
        error: null, 
        message: null 
    };

    case actionTypes.GET_USER_ORDERS_SUCCESS:
      return { ...state,
        error:null, 
        isLoading: false, 
        orders: payload
    };

    case actionTypes.GET_USER_ORDERS_FAILURE:
      return { ...state,
        error: payload, 
        isLoading: false, 
      
    };

    
     default:
      return state;
  }
};
