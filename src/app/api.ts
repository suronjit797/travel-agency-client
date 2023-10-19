/* eslint-disable prettier/prettier */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "./store";

const customFetchBaseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:5000/api/v1",

  prepareHeaders: (headers, { getState }) => {
    const st = getState() as RootState;
    const token = st?.user?.token;

    if (token) {
      headers.set("Authorization", token);
    }

    return headers;
  },
});

export const api = createApi({
  reducerPath: "api",
  // baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1" }),
  tagTypes: ["User", "project"],
  baseQuery: customFetchBaseQuery,
  endpoints: () => ({}),
});
