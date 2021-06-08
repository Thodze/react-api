import React, {Component} from "react";
import ProductList from "../../components/ProductList/ProductList";
import ProductItem from "../../components/ProductItem/ProductItem";
import {connect} from "react-redux";
import apiCaller from "../../utils/apiCaller";
import { Link } from "react-router-dom";

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
        apiCaller('products', 'GET', null).then(res => {
            this.setState({
                products : res.data
            });
        });
    };

    /**
     *
     * @param products
     * @returns {null}
     */
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
        let { products } = this.state;
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
                    {this.shoProducts(products)}
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

export default connect(mapStateToProps, null)(ProductListPage);
