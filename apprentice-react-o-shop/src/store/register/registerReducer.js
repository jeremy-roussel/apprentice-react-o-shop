import registerTypes from './registerActionTypes';

const initialState = {}

const registerReducer = (state = initialState, action) => {
    switch (action.type) {
        case registerTypes.REGISTER_REQUEST:
            return {
                registering: true,
                user: action.user,
            };
        case registerTypes.REGISTER_SUCCESS:
            return {
                registered: true,
                user: action.user,
            }
        case registerTypes.REGISTER_FAILURE:
            return {
                error: action.error
            }
        default:
            return state;
    }
}

export default registerReducer;
