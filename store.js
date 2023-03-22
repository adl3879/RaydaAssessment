import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { auctionSlice } from "./src/features/api/auctionSlice";

export const store = configureStore({
  reducer: {
    [auctionSlice.reducerPath]: auctionSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(auctionSlice.middleware),
});

setupListeners(store.dispatch);
