import addProductActionTypes from './addProductActionTypes';
import { productService } from '../../services/productService';
import history from '../../utils/history';

const addProductActions = {
    addProduct,
}

function addProduct(product) {
    return (dispatch) => {
        dispatch({ type: addProductActionTypes.ADD_PRODUCT_REQUEST, product: product });

        productService.addProduct(product).then(
            (product) => {
                dispatch({ type: addProductActionTypes.ADD_PRODUCT_SUCCESS, product: product});
                history.push('/admin-products')
            },
            (error) => {
                dispatch({ type: addProductActionTypes.ADD_PRODUCT_FAILURE, error: error });
            }
        )
    }
}

export default addProductActions;
