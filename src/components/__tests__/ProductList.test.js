import React from "react";
import { mount } from "enzyme";

import ProductsList from "../../ProductsList";

// New test suite
describe("ProductList", () => {
    let productData;
    let component;
    let handleProductClick;

    /**
     * Before each test, create dummy data.
     */
    beforeEach(() => {
        productData = [
            {
                id: 1,
                name: "NIKE Liteforce Blue Sneakers",
                description: "Lorem lipsum",
                status: "Available"
            }
        ];
    });

    /**
     * Create a mock function.
     * Mount the ProductList component along with 'children' as MOUNT is
     * being used.
     */
    beforeEach(() => {
        handleProductClick = jest.fn();
        component = mount(
            <ProductsList
                products={productData}
                selectProduct={handleProductClick}
            />
        );
    });

    it("should call selectProduct when clicked", () => {
        const firstLink = component.find("a").first();
        firstLink.simulate("click");
        expect(handleProductClick.mock.calls.length).toEqual(1);
    });

    it("should display all the items", () => {
        const links = component.find("a");
        expect(links.length).toEqual(productData.length);
    });
});
