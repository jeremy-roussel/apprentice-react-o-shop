import loginTypes from './loginActionTypes';
import { userService } from '../../services/userService';
import history from '../../utils/history';

const loginActions = {
    login,
    logout,
};

function login(username, password) {
    return (dispatch) => {
        dispatch({ type: loginTypes.LOGIN_REQUEST, user: {username}});

        userService.login(username, password).then(
            (user) => {
                dispatch({ type: loginTypes.LOGIN_SUCCESS, user});
                history.push('/');
            },
            (error) => {
                dispatch({type: loginTypes.LOGIN_FAILURE, error});
            }
        );
    };
}

function logout() {
    userService.logout();
    return { type: loginTypes.LOGOUT};
};

export { loginActions }
