import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { createGlobalStore } from "../../redux/store";
import { MemoryRouter } from "react-router-dom";
import Category from "./category";
import { ProductProps } from "../../redux/types";

describe("Products screen", () => {
    let container: HTMLElement, getByText: any;
    const products: ProductProps = [{
        name: 'product name', selected: false, description: 'test description', price: [{
            amount: "10", billingFrequency: "monthly",
            periodStart: '1',
        }]
    }]
    beforeEach(() => {
        ({ container, getByText } = render(
            <Provider store={createGlobalStore()}>
                <Category name="test category" products={products} key="ii" darkMode={false}  />
            </Provider>,
            {
                wrapper: MemoryRouter,
            }
        ));
    });

    it("Page Load category name", () => {
        const categoryText = getByText(/test category/i);

        expect(categoryText).toBeInTheDocument();
    });
});
