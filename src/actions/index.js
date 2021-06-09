import * as Types from './../constants/ActionTypes';
import callAPI from "../utils/apiCaller";

export const actionFetchProductsRequest = () => {
    return (dispatch) => {
        return callAPI('products', 'GET', null).then(res => {
            dispatch(actionFetchProducts(res.data));
        })
    }
};

export const actionFetchProducts = (products) => {
    return {
        type: Types.FETCH_PRODUCTS,
        products
    }
};

export const actionDeleteProductRequest = (id) => {
    return (dispatch) => {
        return callAPI(`products/${id}`, 'DELETE', null).then(res => {
            dispatch(actionDeleteProduct(id));
        });
    }
};

export const actionDeleteProduct = (id) => {
    return {
        type: Types.DELETE_PRODUCTS,
        id
    }
};