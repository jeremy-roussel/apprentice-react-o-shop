import { createStore, applyMiddleware, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

import loginReducer from './login/reducers';

const store = createStore(
    combineReducers({
        login: loginReducer,
    }),
    composeWithDevTools(applyMiddleware(thunkMiddleware))
);

export default store;
