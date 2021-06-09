import React, {Component} from "react";
import ProductList from "../../components/ProductList/ProductList";
import ProductItem from "../../components/ProductItem/ProductItem";
import {connect} from "react-redux";
import apiCaller from "../../utils/apiCaller";
import { Link } from "react-router-dom";
import { actionFetchProductsRequest } from "../../actions";

class ProductListPage extends Component {

    /**
     *
     * @param props
     */
    constructor(props) {
        super(props);
        this.state = {
            products : []
        }
    }

    componentDidMount() {
        this.props.fetchAllProducts();
    };

    /**
     *
     * @param products
     * @returns {null}
     */
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
        apiCaller(`products/${id}`, 'DELETE', null).then(res => {
            let { products } = this.state;
            if (res.status === 200) {
                let index = this.findIndex(products, id);
                if (index !== -1 ){
                    products.splice(index, 1);
                    this.setState({
                        products : products
                    })
                }
            }
        });
    };

    findIndex = (products, id) => {
        let result = -1;
        products.forEach((product, index) => {
            if (product.id === id) {
                result = index;
            }
        });
        return result;
    }

    render() {
        let { products } = this.props;
        // let products = [];
        /*axios({
            method: 'GET',
            url: 'http://localhost:3000/products',
            data: null
        }).then(res => {
            console.log(res);
            products = res.data;
        }).catch(err => {
            console.log(err);
        });*/
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
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);
