import { TApiResponse, TLoginResponse } from "../../../interface/globalInterface";
import { ILoginBody, IUser } from "../../../interface/userInterface";
import { api } from "../../api";

export const userApi = api.injectEndpoints({
  endpoints: (build) => ({
    // 
    getUser: build.query<TApiResponse<IUser>, string>({
      query: (q) => `/users/all?${q ? q : ""}`,
    }),
    // 
    login: build.mutation<TLoginResponse, Partial<ILoginBody>>({
      query: (body) => ({
        url: `/users/login`,
        method: "POST",
        body,
      }),
      transformErrorResponse: (response) => response.data,
    }),
    // 
    register: build.mutation<TApiResponse<IUser>, Partial<IUser>>({
      query: (body) => ({
        url: `/users/sign-up`,
        method: "POST",
        body,
      }),
      transformErrorResponse: (response) => response.data,
    }),

    //
  }),
  overrideExisting: false,
});

export const { useGetUserQuery, useLoginMutation, useRegisterMutation } = userApi;
