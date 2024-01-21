import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filter: '',
},
  reducers: {
    setFilter: (_, action) => ({
        filter: action.payload,
        }),
    },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
