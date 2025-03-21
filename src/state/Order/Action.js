import { api } from "../../components/config/api";
import { CREATE_ORDER_FAILURE, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, GET_USER_ORDERS_FAILURE, GET_USER_ORDERS_REQUEST, GET_USER_ORDERS_SUCCESS } from "./ActionType";


export const createOrder = (reqData) => async (dispatch) => {
  dispatch({ type: CREATE_ORDER_REQUEST });
  try {
    const { data } = await api.post(`/api/order`,reqData.createOrder, {
      headers: {
        Authorization: `Bearer ${reqData.jwt}`,
      },
    });

    // if(data.payment_url){
    //   window.location.href = data.payment_url;
    // }

    dispatch({ type: CREATE_ORDER_SUCCESS, payload: data });
    console.log("order created", data);
  } catch (error) {
    dispatch({ type: CREATE_ORDER_FAILURE, payload: error });
    console.log("error", error);
  }
};

export const getUserOrder = (jwt) => async (dispatch) => {
  dispatch({ type: GET_USER_ORDERS_REQUEST });
  try {
    const {data} = await api.get(`/api/order/user`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    console.log("user orders", data);
    dispatch({
      type: GET_USER_ORDERS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({ type: GET_USER_ORDERS_FAILURE, payload: error });
    console.log("error", error);
  }
};

