import { createSlice } from '@reduxjs/toolkit';

// ! createSlice is a function that returns an object with 3 properties:
// * 1. name: the name of the slice
// * 2. initialState: the initial state of the slice
// * 3. reducers: an object with the action creators
// ! createSlice will generate the action types for us

const customerSlice = createSlice({
  name: 'customer',
  initialState: {
    fullName: '',
    nationalID: '',
    createdAt: '',
  },
  reducers: {
    createCustomer: {
      prepare(fullName, nationalID) {
        return {
          payload: {
            fullName,
            nationalID,
            createdAt: new Date().toISOString(),
          },
        };
      },

      reducer(state, action) {
        state.fullName = action.payload.fullName;
        state.nationalID = action.payload.nationalID;
        state.createdAt = action.payload.createdAt;
      },
    },
    updateName(state, action) {
      state.fullName = action.payload;
    },
  },
});

export const { createCustomer, updateName } = customerSlice.actions;
export default customerSlice.reducer;
