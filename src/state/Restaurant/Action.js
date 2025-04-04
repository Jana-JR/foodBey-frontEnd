
import { api } from "../../components/config/api";
import {
    CREATE_CATEGORY_FAILURE,
    CREATE_CATEGORY_REQUEST,
  CREATE_CATEGORY_SUCCESS,
  CREATE_EVENTS_FAILURE,
  CREATE_EVENTS_REQUEST,
  CREATE_EVENTS_SUCCESS,
  DELETE_EVENTS_FAILURE,
  DELETE_EVENTS_REQUEST,
  DELETE_EVENTS_SUCCESS,
  DELETE_RESTAURANT_FAILURE,
  DELETE_RESTAURANT_REQUEST,
  DELETE_RESTAURANT_SUCCESS,
  GET_ALL_EVENTS_FAILURE,
  GET_ALL_EVENTS_REQUEST,
  GET_ALL_EVENTS_SUCCESS,
  GET_RESTAURANT_CATEGORY_FAILURE,
  GET_RESTAURANT_CATEGORY_REQUEST,
  GET_RESTAURANT_CATEGORY_SUCCESS,
  GET_RESTAURANT_EVENTS_FAILURE,
  GET_RESTAURANT_EVENTS_REQUEST,
  GET_RESTAURANT_EVENTS_SUCCESS,
  UPDATE_RESTAURANT_FAILURE,
  UPDATE_RESTAURANT_STATUS_FAILURE,
  UPDATE_RESTAURANT_STATUS_REQUEST,
  UPDATE_RESTAURANT_STATUS_SUCCESS,
} from "../Restaurant/ActionType";
import {
  CREATE_RESTAURANT_FAILURE,
  CREATE_RESTAURANT_SUCCESS,
  GET_RESTAURANT_BY_ID_FAILURE,
  GET_RESTAURANT_BY_ID_REQUEST,
  GET_RESTAURANT_BY_ID_SUCCESS,
  GET_RESTAURANT_BY_USER_ID_REQUEST,
  UPDATE_RESTAURANT_REQUEST,
  UPDATE_RESTAURANT_SUCCESS,
  CREATE_RESTAURANT_REQUEST,
  GET_ALL_RESTAURANTS_FAILURE,
  GET_ALL_RESTAURANTS_REQUEST,
  GET_ALL_RESTAURANTS_SUCCESS,
  GET_RESTAURANT_BY_USER_ID_FAILURE,
  GET_RESTAURANT_BY_USER_ID_SUCCESS,
} from "./ActionType";

export const getAllRestaurants = (token) => async (dispatch) => {

  dispatch({ type: GET_ALL_RESTAURANTS_REQUEST });
  try {
    const { data } = await api.get(`/api/restaurants`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch({ type: GET_ALL_RESTAURANTS_SUCCESS, payload: data });
    console.log("all restaurants", data);
  } catch (error) {
    dispatch({ type: GET_ALL_RESTAURANTS_FAILURE, payload: error });
    console.log("error", error);
  }
};

export const getRestaurantById = (reqData) => async (dispatch) => {
  dispatch({ type: GET_RESTAURANT_BY_ID_REQUEST });
  try {
    const response = await api.get(`/api/restaurants/${reqData.restaurantId}`, {
      headers: {
        Authorization: `Bearer ${reqData.jwt}`,
      },
    });
    dispatch({
      type: GET_RESTAURANT_BY_ID_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({ type: GET_RESTAURANT_BY_ID_FAILURE, payload: error });
    console.log("error", error);
  }
};

export const getRestaurantByUserId = (jwt) => async (dispatch) => {
  dispatch({ type: GET_RESTAURANT_BY_USER_ID_REQUEST });
  try {
    const { data } = await api.get(`/api/admin/restaurants/user`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    console.log("get Restaurant By User Id", data);
    dispatch({
      type: GET_RESTAURANT_BY_USER_ID_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({ type: GET_RESTAURANT_BY_USER_ID_FAILURE, payload: error });
    console.log("error", error);
  }
};

export const createRestaurant = (reqData) => async (dispatch) => {
  console.log("token---> ", reqData.token);
  dispatch({ type: CREATE_RESTAURANT_REQUEST });
  try {
    const {data} = await api.post(`/api/admin/restaurants`, reqData.data, {
      headers: {
        Authorization: `Bearer ${reqData.token}`,
      },
    });
    dispatch({
      type: CREATE_RESTAURANT_SUCCESS,
      payload: data,
    });
    console.log("restaurant created", data);
  } catch (error) {
    dispatch({ type: CREATE_RESTAURANT_FAILURE, payload: error });
    console.log("error", error);
  }
};

export const updateRestaurant =
  ({ restaurantId, restaurantData, jwt }) =>
  async (dispatch) => {
    dispatch({ type: UPDATE_RESTAURANT_REQUEST });
    try {
      const res = await api.put(
        `/api/admin/restaurants/${restaurantId}`,
        restaurantData,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      dispatch({
        type: UPDATE_RESTAURANT_SUCCESS,
        payload: res.data,
      });
      console.log("restaurant updated", res.data);
    } catch (error) {
      dispatch({ type: UPDATE_RESTAURANT_FAILURE, payload: error });
      console.log("error", error);
    }
  };

export const deleteRestaurant =
  ({ restaurantId, jwt }) =>
  async (dispatch) => {
    dispatch({ type: DELETE_RESTAURANT_REQUEST });
    try {
      const res = await api.delete(
        `/api/admin/restaurants/${restaurantId}`,
        
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      dispatch({
        type: DELETE_RESTAURANT_SUCCESS,
        payload: restaurantId,
      });
      console.log("restaurant deleted", res.data);
    } catch (error) {
      dispatch({ type: DELETE_RESTAURANT_FAILURE, payload: error });
      console.log("error", error);
    }
  };

export const updateRestaurantStatus =
  ({ restaurantId, restaurantData, jwt }) =>
  async (dispatch) => {
    dispatch({ type: UPDATE_RESTAURANT_STATUS_REQUEST });
    try {
      const res = await api.put(
        `/api/admin/restaurants/${restaurantId}/status`,
        {},
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      dispatch({
        type: UPDATE_RESTAURANT_STATUS_SUCCESS,
        payload: res.data,
      });
      console.log("restaurant status updated", res.data);
    } catch (error) {
      dispatch({ type: UPDATE_RESTAURANT_STATUS_FAILURE, payload: error });
      console.log("error", error);
    }
  };

export const createEvent =
  ({ data, jwt, restaurantId }) =>
  async (dispatch) => {
    dispatch({ type: CREATE_EVENTS_REQUEST });
    try {
      const res = await api.post(
        `/api/admin/events/restaurant/${restaurantId}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      dispatch({
        type: CREATE_EVENTS_SUCCESS,
        payload: restaurantId,
      });
      console.log("event created", res.data);
    } catch (error) {
      dispatch({ type: CREATE_EVENTS_FAILURE, payload: error });
      console.log("error", error);
    }
  };

export const getAllEvents =
  ({ jwt }) =>
  async (dispatch) => {
    dispatch({ type: GET_ALL_EVENTS_REQUEST });
    try {
      const res = await api.get(
        `/api/events`,

        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      dispatch({
        type: GET_ALL_EVENTS_SUCCESS,
        payload: res.data,
      });
      console.log("all events ", res.data);
    } catch (error) {
      dispatch({ type: GET_ALL_EVENTS_FAILURE, payload: error });
      console.log("error", error);
    }
  };

export const deleteEvent =
  ({ eventId, jwt }) =>
  async (dispatch) => {
    dispatch({ type: DELETE_EVENTS_REQUEST });
    try {
      const res = await api.delete(
        `/api/admin/events/${eventId}`,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      dispatch({
        type: DELETE_EVENTS_SUCCESS,
        payload: eventId,
      });
      console.log("event deleted", res.data);
    } catch (error) {
      dispatch({ type: DELETE_EVENTS_FAILURE, payload: error });
      console.log("error", error);
    }
  };

  export const getRestaurantEvents =
  ({ restaurantId, jwt }) =>
  async (dispatch) => {
    dispatch({ type: GET_RESTAURANT_EVENTS_REQUEST });
    try {
      const res = await api.get(
        `/api/admin/events/restaurant/${restaurantId}`,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      dispatch({
        type: GET_RESTAURANT_EVENTS_SUCCESS,
        payload: res.data,
      });
      console.log("All event ", res.data);
    } catch (error) {
      dispatch({ type: GET_RESTAURANT_EVENTS_FAILURE, payload: error });
      console.log("error", error);
    }
  };

  export const createCategory =
  ({ reqData, jwt }) =>
  async (dispatch) => {
    dispatch({ type: CREATE_CATEGORY_REQUEST });
    try {
      const res = await api.post(
        `/api/admin/category`,
        reqData,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      dispatch({
        type: CREATE_CATEGORY_SUCCESS,
        payload: res.data,
      });
      console.log("category created", res.data);
    } catch (error) {
      dispatch({ type: CREATE_CATEGORY_FAILURE, payload: error });
      console.log("error", error);
    }
  };

  export const getRestaurantCategory =
  ({ restaurantId, jwt }) =>
  async (dispatch) => {
    dispatch({ type: GET_RESTAURANT_CATEGORY_REQUEST });
    try {
      const res = await api.get(
        `/api/category/restaurant/${restaurantId}`,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      dispatch({
        type: GET_RESTAURANT_CATEGORY_SUCCESS,
        payload: res.data,
      });
      console.log("get restaurant category", res.data);
    } catch (error) {
      dispatch({ type: GET_RESTAURANT_CATEGORY_FAILURE, payload: error });
      console.log("error", error);
    }
  };