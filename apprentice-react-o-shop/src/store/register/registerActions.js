import registerTypes from './registerActionTypes';
import { userService } from '../../services/userService';
import history from '../../utils/history';

const registerActions = {
    register
};

function register(user) {
    return (dispatch) => {
        dispatch({ type: registerTypes.REGISTER_REQUEST, user });

        userService.register(user).then(
            (user) => {
                dispatch({ type: registerTypes.REGISTER_SUCCESS, user });
                history.push('/');
            },
            (error) => {
                dispatch({ type: registerTypes.REGISTER_FAILURE, error });
            }
        )
    }
}

export default registerActions;
