import { api } from "../../components/config/api";
import { GET_RESTAURANTS_ORDER_FAILURE, GET_RESTAURANTS_ORDER_REQUEST, GET_RESTAURANTS_ORDER_SUCCESS, UPDATE_ORDER_STATUS_FAILURE, UPDATE_ORDER_STATUS_REQUEST, UPDATE_ORDER_STATUS_SUCCESS } from "./ActionType";


export const updateOrderStatus = ({orderId, orderStatus, jwt}) => async (dispatch) => {
  dispatch({ type: UPDATE_ORDER_STATUS_REQUEST });
  try {
    const response = await api.put(`/api/admin/orders/${orderId}/${orderStatus}`,{}, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });

    const updatedOrder = response.data;

    dispatch({ type: UPDATE_ORDER_STATUS_SUCCESS, payload: updatedOrder });
    console.log("order updated", updatedOrder);
  } catch (error) {
    dispatch({ type: UPDATE_ORDER_STATUS_FAILURE, payload: error });
    console.log("error", error);
  }
};

export const fetchRestaurantOrder = ({restaurantId,orderStatus ,jwt}) => async (dispatch) => {
  dispatch({ type: GET_RESTAURANTS_ORDER_REQUEST });
  try {
    const {data} = await api.get(`/api/order/restaurant/${restaurantId}`, {
      params: {order_status: orderStatus},
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });

    const orders = data;
    console.log("restaurant orders....", orders);
    dispatch({
      type: GET_RESTAURANTS_ORDER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({ type: GET_RESTAURANTS_ORDER_FAILURE, payload: error });
    console.log("error", error);
  }
};

