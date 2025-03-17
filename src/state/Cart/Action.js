import { api } from "../../components/config/api";
import {ADD_ITEM_TO_CART_FAILURE, ADD_ITEM_TO_CART_REQUEST, ADD_ITEM_TO_CART_SUCCESS, CLEAR_CART_FAILURE, CLEAR_CART_REQUEST, CLEAR_CART_SUCCESS, FIND_CART_FAILURE, FIND_CART_REQUEST, FIND_CART_SUCCESS, GET_ALL_CART_ITEMS_FAILURE, GET_ALL_CART_ITEMS_REQUEST, GET_ALL_CART_ITEMS_SUCCESS, REMOVE_CART_ITEM_FAILURE, REMOVE_CART_ITEM_REQUEST, REMOVE_CART_ITEM_SUCCESS, UPDATE_CART_ITEM_FAILURE, UPDATE_CART_ITEM_REQUEST, UPDATE_CART_ITEM_SUCCESS} from "./ActionType"

export const  findCart= (token) => async (dispatch) => {
  dispatch({ type: FIND_CART_REQUEST });
  try {
    const response = await api.get(`/api/cart`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch({ type: FIND_CART_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FIND_CART_FAILURE, payload: error });
    console.log("error", error);
  }
};

export const getAllCartItems = (reqData) => async (dispatch) => {
  dispatch({ type: GET_ALL_CART_ITEMS_REQUEST });
  try {
    const response = await api.get(`/api/carts/${reqData.cartId}/items`, {
      headers: {
        Authorization: `Bearer ${reqData.token}`,
      },
    });
    dispatch({
      type: GET_ALL_CART_ITEMS_SUCCESS,
      payload: response.data, 
    });
  } catch (error) {
    dispatch({ type: GET_ALL_CART_ITEMS_FAILURE, payload: error });
    console.log("error", error);
  }
};

export const addItemToCart = (reqData) => async (dispatch) => {
  dispatch({ type: ADD_ITEM_TO_CART_REQUEST });
  try {
    const { data } = await api.put(`/api/cart/add`, reqData.cartItem, {
      headers: {
        Authorization: `Bearer ${reqData.token}`,
      },
    });
    console.log("add iem to cart", data);
    dispatch({
      type: ADD_ITEM_TO_CART_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({ type: ADD_ITEM_TO_CART_FAILURE, payload: error });
    console.log("error", error);
  }
};

// export const getAllIngredientsOfMenuItems = (reqData) => async (dispatch) => {
//   console.log("token---> ", reqData.token);
//   dispatch({ type: CREATE_RESTAURANT_REQUEST });
//   try {
//     const response = await api.post(`/api/admin/restaurants`, reqData.data, {
//       headers: {
//         Authorization: `Bearer ${reqData.token}`,
//       },
//     });
//     dispatch({
//       type: CREATE_RESTAURANT_SUCCESS,
//       payload: data,
//     });
//     console.log("restaurant created", data);
//   } catch (error) {
//     dispatch({ type: CREATE_RESTAURANT_FAILURE, payload: error });
//     console.log("error", error);
//   }
// };

export const updateCartItem =
  (reqData) =>
  async (dispatch) => {
    dispatch({ type: UPDATE_CART_ITEM_REQUEST });
    try {
      const {data} = await api.put(
        `/api/cart-item/update`, reqData.data,
        
        {
          headers: {
            Authorization: `Bearer ${reqData.jwt}`,
          },
        }
      );
      dispatch({
        type: UPDATE_CART_ITEM_SUCCESS,
        payload: data,
      });
      console.log("cart item updated", data);
    } catch (error) {
      dispatch({ type: UPDATE_CART_ITEM_FAILURE, payload: error });
      console.log("error", error);
    }
  };

export const removeCartItem =
  ({ cartItemId, jwt }) =>
  async (dispatch) => {
    dispatch({ type: REMOVE_CART_ITEM_REQUEST});
    try {
      const {data} = await api.delete(
        `/api/cart-items/${cartItemId}/remove`,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      dispatch({
        type: REMOVE_CART_ITEM_SUCCESS,
        payload: cartItemId,
      });
      console.log("cart item removed", data);
    } catch (error) {
      dispatch({ type: REMOVE_CART_ITEM_FAILURE, payload: error });
      console.log("error", error);
    }
  };

  export const clearCart =
  () =>
  async (dispatch) => {
    dispatch({ type: CLEAR_CART_REQUEST });
    try {
      const {data} = await api.put(
        `/api/cart/clear`, {},
        
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        }
      );
      dispatch({
        type: CLEAR_CART_SUCCESS,
        payload: data,
      });
      console.log("cart item updated", data);
    } catch (error) {
      dispatch({ type: CLEAR_CART_FAILURE, payload: error });
      console.log("error", error);
    }
  };

