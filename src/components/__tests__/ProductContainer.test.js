import React from "react";
import ProductContainer from "../../ProductContainer";

import { shallow } from "enzyme";

describe("ProductContainer", () => {
    let componentDidMountSpy;
    let component;

    /**
     * Runs before each test
     */
    beforeEach(() => {
        component = shallow(<ProductContainer />);
    });

    it("should call componentDidMount once", () => {
        /**
         * Order is important when using spy. The component prototype needs
         * to be called with the component being mounted after.
         */
        componentDidMountSpy = spyOn(
            ProductContainer.prototype,
            "componentDidMount"
        );
        component = shallow(<ProductContainer />);
        expect(componentDidMountSpy).toHaveBeenCalledTimes(1);
    });

    it("should populate the state", () => {
        /**
         * Using beforeEach to render the component. Just after the state so
         * shallow works. Do not need to render the children in order to
         * see the state.
         * */
        expect(component.state().productList.length).toEqual(4);
    });

    it("should have a working method called handleProductClick", () => {
        /**
         * handleProductClick method requires the product ID. A filter method is
         * used to filter out the product with the product id and added to the selectedProduct
         * state.
         * Getting the productData from the state and placing
         * it into a const
         */
        const productData = component.state().productList;
        const firstProduct = productData[0].id;
        component.instance().handleProductClick(firstProduct);

        expect(component.state().selectedProduct).toEqual(productData[0]);
    });
});
