import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedComponents: [],
};

export const pcbuilderlSlice = createSlice({
  name: "pcBuilder",
  initialState,
  reducers: {
    addComponents: (state, action) => {
      const newItem = action.payload;
      const category = newItem.category;

      const existingItemIndex = state.selectedComponents.findIndex(
        (item) => item.category === category
      );

      if (existingItemIndex !== -1) {
        state.selectedComponents[existingItemIndex] = newItem;
      } else {
        state.selectedComponents.push(newItem);
      }
    },
    removeComponents: (state, action) => {
      state.selectedComponents = state.selectedComponents.filter(
        (item) => item._id !== action.payload._id
      );
    },
  },
});

export const { addComponents, removeComponents } = pcbuilderlSlice.actions;

export default pcbuilderlSlice.reducer;
