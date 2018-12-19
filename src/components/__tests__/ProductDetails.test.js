import React from "react";
import { shallow, mount } from "enzyme";

import ProductDetails from "../../ProductDetails";

describe("ProductDetails", () => {
    let component;
    let product;

    // BEFORE EACH TEST, SETUP THE TEST AS FOLLOWS::::::
    beforeEach(() => {
        product = {
            id: 1,
            name: "NIKE Liteforce Blue Sneakers",
            description: "Lorem lipsum",
            status: "Available"
        };
    });

    beforeEach(() => {
        // Full DOM rendering. The children for this component will be used for testing.
        component = mount(<ProductDetails product={product} foo={10} />);
    });

    it("should exist", () => {
        expect(component).toBeTruthy();
        // props() to get the props of a component
        expect(component.props().product).toEqual(product);
    });

    it("should display product data when props are passed", () => {
        /**
         * Get the element by class 'product-title' and make sure the output is the same
         * as the mock data in beforeEach method.
         * */
        let title = component.find(".product-title");
        expect(title.text()).toEqual(product.name);

        let description = component.find(".product-description");
        expect(description.text()).toEqual(product.description);

        let status = component.find(".product-status");
        expect(status.text()).toEqual(product.status);
    });

    it("should diplay error if in empty state", () => {
        /**
         * Full rendering without any props.
         */
        const component = mount(<ProductDetails />);

        const error = component.find(".product-error");
        expect(error.text()).toEqual("Sorry. Product doesnt exist");

        component.unmount();
    });
});
