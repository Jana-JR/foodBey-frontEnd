import * as actionTypes from "./ActionType"
const initialState = {
  orders: [],
  isLoading: false,
  error: null,
  
};


export const restaurantsOrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_RESTAURANTS_ORDER_REQUEST:
    case actionTypes.UPDATE_ORDER_STATUS_REQUEST:
      
      return { ...state, 
        isLoading: true, 
        error: null, 
    };

    case actionTypes.GET_RESTAURANTS_ORDER_SUCCESS:
      return { ...state,
        error:null, 
        isLoading: false, 
        orders: action.payload
    };
    case actionTypes.UPDATE_ORDER_STATUS_SUCCESS:
      const updatedOrders = state.orders.map((order) => 
      order.id === action.payload.id?action.payload:order
    );
      return { ...state,
        error:null, 
        isLoading: false, 
        orders: updatedOrders
    };

    case actionTypes.GET_RESTAURANTS_ORDER_FAILURE:
    case actionTypes.UPDATE_ORDER_STATUS_FAILURE:
      return { ...state,
        error: action.error, 
        isLoading: false, 
      
    };

    
     default:
      return state;
  }
};
