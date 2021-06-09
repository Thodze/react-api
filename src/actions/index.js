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