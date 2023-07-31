import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedParts: [],
};

export const selectPcPartsSlice = createSlice({
  name: "selectPcParts",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const category = newItem.category;

      const existingItemIndex = state.selectedParts.findIndex(
        (item) => item.category === category
      );

      if (existingItemIndex !== -1) {
        state.selectedParts[existingItemIndex] = newItem;
      } else {
        state.selectedParts.push(newItem);
      }
    },
    removeItem: (state, action) => {
      state.selectedParts = state.selectedParts.filter(
        (item) => item._id !== action.payload._id
      );
    },
  },
});

export const { addItem, removeItem } = selectPcPartsSlice.actions;

export default selectPcPartsSlice.reducer;
