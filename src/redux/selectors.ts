import {Selector} from "react-redux";
import {GlobalState} from "./types";

export const getDarkMode: Selector<GlobalState, boolean> = state => state.uiState.darkMode;