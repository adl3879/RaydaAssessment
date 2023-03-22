import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const auctionSlice = createApi({
  reducerPath: "auctionSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://run.mocky.io/v3/7f02819f-8254-410a-b8af-ab98572bd26b",
  }),
  tagTypes: ["Auction"],
  endpoints: (builder) => ({
    getAuctionItems: builder.query({
      query: () => "/",
    }),
  }),
});

export const { useGetAuctionItemsQuery } = auctionSlice;
