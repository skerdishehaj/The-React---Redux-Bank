import accountReducer from './features/accounts/accountSlice-old-way';
import customerReducer from './features/customers/customerSlice-old-way';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    account: accountReducer,
    customer: customerReducer,
  },
});

export default store;

// ! Redux Toolkit RTK is the modern way to write Redux code
// * 1. It is an opinionated aproach, forcing us to use Redux best practices
// * 2. Allows us to write Redux code faster, with less boilerplate
// * 3. Gives us 3 big things:
// *    a. it allows us to mutate the state directly in the reducer
// *    b. action creators are generated automatically
// *    c. automatic setup of thunk middleware and Redux Dev Tools
