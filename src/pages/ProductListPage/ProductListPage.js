import React, {Component} from "react";
import ProductList from "../../components/ProductList/ProductList";
import ProductItem from "../../components/ProductItem/ProductItem";
import {connect} from "react-redux";
import { Link } from "react-router-dom";
import { actionFetchProductsRequest, actionDeleteProductRequest } from "../../actions";

class ProductListPage extends Component {

    componentDidMount() {
        this.props.fetchAllProducts();
    };

    showProducts = (products) => {
        let result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return (
                    <ProductItem
                        key={index}
                        product={product}
                        index={index}
                        onDelete={this.onDelete}
                    />
                );
            });
        }
        return result;
    };

    onDelete = (id) => {
        this.props.deleteProduct(id);
    };

    render() {
        let { products } = this.props;

        return (
            <div className="col-md-12">
                <Link to="/products/add" className="btn btn-success mt-3 mb-3">Add Product</Link>
                <ProductList>
                    {this.showProducts(products)}
                </ProductList>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return  {
        fetchAllProducts : () => {
            dispatch(actionFetchProductsRequest());
        },
        deleteProduct : (id) => {
            dispatch(actionDeleteProductRequest(id));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);
