import { createStore, applyMiddleware, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

import loginReducer from './login/reducers';
import registerReducer from './register/registerReducer'
import addProductReducer from './addProduct/addProductReducer'

const store = createStore(
    combineReducers({
        login: loginReducer,
        register: registerReducer,
        addProduct: addProductReducer,
    }),
    composeWithDevTools(applyMiddleware(thunkMiddleware))
);

export default store;
