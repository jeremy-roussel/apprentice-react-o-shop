import { createStore, applyMiddleware, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

import loginReducer from './login/reducers';
import registerReducer from './register/registerReducer'

const store = createStore(
    combineReducers({
        login: loginReducer,
        register: registerReducer,
    }),
    composeWithDevTools(applyMiddleware(thunkMiddleware))
);

export default store;
