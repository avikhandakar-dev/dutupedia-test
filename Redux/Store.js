import { createStore } from 'redux';


const initialState = {};
const middleware = [thunkMiddleware];
const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);
export default store;

