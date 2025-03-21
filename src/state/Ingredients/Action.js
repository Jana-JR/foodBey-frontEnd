import { api } from "../../components/config/api";
import { CREATE_INGREDIENT_CATEGORY_FAILURE, CREATE_INGREDIENT_CATEGORY_REQUEST, CREATE_INGREDIENT_CATEGORY_SUCCESS, CREATE_INGREDIENT_FAILURE, CREATE_INGREDIENT_REQUEST, CREATE_INGREDIENT_SUCCESS, GET_INGREDIENT_CATEGORY_FAILURE, GET_INGREDIENT_CATEGORY_REQUEST, GET_INGREDIENT_CATEGORY_SUCCESS, UPDATE_STOCK } from "./ActionType";


export const getIngredientsOfRestaurant = ({id, jwt}) => async (dispatch) => {

  try {
    const response = await api.get(`/api/admin/ingredients/restaurant/${id}`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
   
    console.log("get all Ingredients", response.data);
    dispatch({ type: GET_INGREDIENTS, payload: response.data });

  } catch (error) {

    console.log("error", error);
  }
};


export const createIngredient = ({data, jwt}) => async (dispatch) => {
  dispatch({ type: CREATE_INGREDIENT_REQUEST });
  try {
    const {data} = await api.post(`/api/admin/ingredients`,data, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    console.log("create Ingredients", response.data);
    dispatch({
      type: CREATE_INGREDIENT_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({ type: CREATE_INGREDIENT_FAILURE, payload: error });
    console.log("error", error);
  }
};


export const createIngredientCategory = ({data, jwt}) => async (dispatch) => {
  dispatch({ type: CREATE_INGREDIENT_CATEGORY_REQUEST });
  try {
    const {data} = await api.post(`/api/admin/ingredients/category`,data, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    console.log("create Ingredients category", response.data);
    dispatch({
      type: CREATE_INGREDIENT_CATEGORY_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({ type: CREATE_INGREDIENT_CATEGORY_FAILURE, payload: error })
    console.log("error", error);
  }
};

export const getIngredientCategory = ({id, jwt}) => async (dispatch) => {
  dispatch({ type: GET_INGREDIENT_CATEGORY_REQUEST });
  try {
    const response = await api.get(`/api/admin/ingredients/restaurant/${id}/category`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    console.log("get Ingredients category", response.data);
    dispatch({
      type: GET_INGREDIENT_CATEGORY_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({ type: GET_INGREDIENT_CATEGORY_FAILURE, payload: error })
    console.log("error", error);
  }
};


export const updateStockOfIngredient = ({id, jwt}) => async (dispatch) => {
  
  try {
    const {data} = await api.put(`/api/admin/ingredients/${id}/stock`,{}, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    console.log("update Ingredients Stock", data);
    dispatch({
      type: UPDATE_STOCK,
      payload: data,
    });
  } catch (error) {
    console.log("error", error);
  }
};

