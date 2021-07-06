export const ACTION_SET_DARK_MODE = "ACTION_SET_DARK_MODE";
export const ACTION_FETCH_DATA = 'ACTION_FETCH_DATA';
export const ACTION_UPDATE_PRODUCT = 'ACTION_UPDATE_PRODUCT';

export interface ActionSetDarkMode {
  type: typeof ACTION_SET_DARK_MODE;
  payload: boolean;
}

export interface ActionFetchData {
  type: typeof ACTION_FETCH_DATA;
  payload: any;
}
 
export interface updateProductPayload {
  checked: boolean;
  productName: string;
}

export interface ActionUpdateProduct{
  type: typeof ACTION_UPDATE_PRODUCT;
  payload: updateProductPayload;
}

export type UiAction = ActionSetDarkMode | ActionFetchData | ActionUpdateProduct;

export type GlobalAction = UiAction;

export type UiState = Readonly<{
  darkMode: boolean;
  data: any[];
}>;

export type GlobalState = Readonly<{
  uiState: UiState;
}>;


export interface PriceProps {
  amount: string;
  billingFrequency: string;
  periodStart: Number;
}

export interface ProductProps {
  description: string;
  name: string;
  price: PriceProps[];
  selected: boolean;
  toggleSelected: Function;
}

export interface CategoryProps {
  name: string;
  darkMode: boolean;
  products: ProductProps[];
}

export interface BasketItemProps {
  name: string;
  price: PriceProps[];
}