/* eslint-disable prettier/prettier */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";



const customFetchBaseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:5000/api/v1",

  prepareHeaders: (headers, { getState }) => {
    // Get the access token from your Redux state
    // const accessToken = getState().users;

    // If you have an access token, add it to the headers
    
    // if (accessToken) {
    //   headers.set('Authorization', `Bearer ${accessToken}`);
    // }

    return headers;
  },
});


export const api = createApi({
  reducerPath: "api",
  // baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1" }),
  baseQuery: customFetchBaseQuery,
  endpoints: () => ({}),
});
