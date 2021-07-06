import React from "react";
import { render, fireEvent, act } from "@testing-library/react";
import Products from "./products";
import { Provider } from "react-redux";
import { createGlobalStore } from "../../redux/store";
import { MemoryRouter } from "react-router-dom";
import * as expectedData from "../../../public/data.json";
import Category from "../../components/category/category";
import { ProductProps } from "../../redux/types";

describe("Products screen", () => {
  let container: HTMLElement, getByText: any;

  beforeEach(() => {
    ({ container, getByText } = render(
      <Provider store={createGlobalStore()}>
        <Products />
      </Provider>,
      {
        wrapper: MemoryRouter,
      }
    ));
  });

  it("Page contains Basket Button", () => {
    const BasketButton = getByText(/Basket/i);

    expect(BasketButton).toBeInTheDocument();
  });

  it("page render correctly", () => {
    expect(container.firstChild).toHaveClass('products')
  });
});
