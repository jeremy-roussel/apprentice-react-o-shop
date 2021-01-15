import addProductTypes from './addProductActionTypes';

const initialState = []

const addProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case addProductTypes.ADD_PRODUCT_REQUEST:
            return {
                ...state,
                addingProduct: true,
                product: action.product,
                erro: null,
            }
        case addProductTypes.ADD_PRODUCT_SUCCESS:
            return {
                ...state,
                productAdded: true,
                product: action.product,
                error: null,
            }
        case addProductTypes.ADD_PRODUCT_FAILURE:
            return {
                ...state,
                productAdded: false,
                product: null,
                error: action.error,
            }
        default:
            return state
    }
}

export default addProductReducer;
