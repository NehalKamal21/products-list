import {
  ACTION_SET_DARK_MODE,
  ACTION_FETCH_DATA,
  GlobalAction,
  UiState,
  ProductProps,
  ACTION_UPDATE_PRODUCT,
  CategoryProps,
} from "./types";

const INITIAL_STATE: UiState = {
  darkMode: false,
  data: [],
};

export function uiStateReducer(
  state: UiState = INITIAL_STATE,
  action: GlobalAction
): UiState {
  switch (action.type) {
    case ACTION_SET_DARK_MODE: {
      return {
        ...state,
        darkMode: action.payload,
      };
    }

    case ACTION_FETCH_DATA: {
      const { payload } = action;
      const updatedData = payload.productCategories.map(
        (item: CategoryProps) => {
          return {
            ...item,
            products: item.products.map((product: ProductProps) => {
              return {
                ...product,
                selected: false,
              };
            }),
          };
        }
      );

      return {
        ...state,
        data: updatedData,
      };
    }

    case ACTION_UPDATE_PRODUCT: {
      const { data } = state;
      const { checked, productName } = action.payload;
      const updateData = data.map((item: CategoryProps) => {
        return {
          ...item,
          products: item.products.map((product: ProductProps) => {
            return {
              ...product,
              selected:
                product.name === productName ? checked : product.selected,
            };
          }),
        };
      });

      return {
        ...state,
        data: updateData,
      };
    }
    
    default:
      return state;
  }
}
