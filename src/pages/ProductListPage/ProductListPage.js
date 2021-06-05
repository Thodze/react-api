import React, {Component} from "react";
import ProductList from "../../components/ProductList/ProductList";
import ProductItem from "../../components/ProductItem/ProductItem";

class ProductListPage extends Component {

    shoProducts = (products) => {
        let result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return (
                    <ProductItem
                        key={index}
                        product={product}
                        index={index}
                    />
                );
            });
        }
        return result;
    };

    render() {
        let products = [];
        return (
            <div className="col-md-12">
                <button type="button" className="btn btn-success mt-3 mb-3">Add Product</button>
                <ProductList>
                    {this.shoProducts(products)}
                </ProductList>
            </div>
        );
    }
}

export default ProductListPage;
