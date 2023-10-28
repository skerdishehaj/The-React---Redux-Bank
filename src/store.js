import { applyMiddleware, combineReducers, createStore } from 'redux';
import accountReducer from './features/accounts/accountSlice';
import customerReducer from './features/customers/customerSlice';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

// ! To use the middleware we need to follow 3 steps:
// * 1. Import the middleware from redux-thunk
// * 2. Add it to the store
// * 3. Use it in the action creator
