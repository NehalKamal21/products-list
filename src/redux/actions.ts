import axios from 'axios';
import { ACTION_SET_DARK_MODE, ACTION_FETCH_DATA, ActionSetDarkMode, ACTION_UPDATE_PRODUCT, ActionUpdateProduct } from "./types";

export function setDarkMode(darkMode: boolean): ActionSetDarkMode {
  return {
    type: ACTION_SET_DARK_MODE,
    payload: darkMode
  };
}

export const fetchData = () => async (dispatch: any): Promise<void> => {
  await axios.get("/data.json", {
    responseType: 'json',
    headers: {
      "Accept": "application/json; odata=verbose"
    }
  }).then(response => {
    dispatch({
      type: ACTION_FETCH_DATA,
      payload: response.data
    })
  })
}

export const updateProduct = (checked: boolean, productName: string): ActionUpdateProduct => {
  return {
    type: ACTION_UPDATE_PRODUCT,
    payload: {
      checked, productName
    }
  };
}
