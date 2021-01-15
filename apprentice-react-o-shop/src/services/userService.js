import handleResponse from './handleResponse';

export const userService = {
    login,
    logout,
    register,
}

const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
};

function login(username, password) {

    requestOptions.body = JSON.stringify({username, password})

    return fetch('/users/authenticate', requestOptions)
        .then(handleResponse)
        .then((user) =>{
            localStorage.setItem('user', JSON.stringify(user));
            return user;
        });
}

function logout() {
    localStorage.removeItem('user');
}

function register(user) {

    requestOptions.body = JSON.stringify(user)

    return fetch('/users/register', requestOptions)
        .then(handleResponse)
}
