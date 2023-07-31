import { configureStore } from "@reduxjs/toolkit";
import pcBuilderReducer from "./features/selectPcParts";
export const store = configureStore({
  reducer: {
    selectComponent: pcBuilderReducer,
  },
});
