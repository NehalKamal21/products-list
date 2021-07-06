import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { createGlobalStore } from "../../redux/store";
import { MemoryRouter } from "react-router-dom";
import { ProductProps } from "../../redux/types";
import Product from "./product";

describe("Products screen", () => {
    let container: HTMLElement, getByText: any;
    const product: ProductProps = [{
        name: 'product name', selected: false, description: 'test description', price: [{
            amount: "10", billingFrequency: "monthly",
            periodStart: '1',
        }]
    }]
    beforeEach(() => {
        ({ container, getByText } = render(
            <Provider store={createGlobalStore()}>
                <Product
                    name='product name'
                    description='test description'
                    price={[{
                        'amount': "10", 'billingFrequency': "monthly",
                        'periodStart': 1
                    }]}
                    selected={false} />
            </Provider>,
            {
                wrapper: MemoryRouter,
            }
        ));
    });

    it("Page Load Product name", () => {
        const ProductName = getByText(/product name/i);

        expect(ProductName).toBeInTheDocument();
    });

    it("Page Load Product Description", () => {
        const ProducDesc = getByText(/test description/i);

        expect(ProducDesc).toBeInTheDocument();
    });

    it("product checkbox loaded", () => {
        const checkbox = container.getElementsByTagName('input').length
        expect(checkbox).toBe(1);
    });

    it("product checkbox not selected", () => {
        const checkbox = container.getElementsByTagName('input[checked="checked"]')
        expect(checkbox).toHaveLength(0)
    });
});
