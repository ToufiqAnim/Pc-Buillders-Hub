import { configureStore } from "@reduxjs/toolkit";
import selectPcPartsReducer from "./features/selectPcParts";
export const store = configureStore({
  reducer: {
    selectPcParts: selectPcPartsReducer,
  },
});
