import { TApiResponse, TLoginResponse } from "../../../interface/globalInterface";
import { ILoginBody, IUser } from "../../../interface/userInterface";
import { api } from "../../api";

export const userApi = api.injectEndpoints({
  endpoints: (build) => ({
    //
    login: build.mutation<TLoginResponse, Partial<ILoginBody>>({
      query: (body) => ({
        url: `/users/login`,
        method: "POST",
        body,
      }),
      invalidatesTags: ['User'],
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
    getUser: build.query<TApiResponse<IUser[]>, string>({
      query: (q) => `/users/all?${q ? q : ""}`,
    }),
    //
    getProfile: build.query<TApiResponse<IUser>, string>({
      query: () => `/users`,
      providesTags: ['User'],
      

    }),
    //
    getSingleUser: build.query<TApiResponse<IUser[]>, string>({
      query: (id) => `/users/${id}`,
    }),
    //
    updateUser: build.mutation<TLoginResponse, Partial<IUser>>({
      query: ({ id, ...body }) => ({
        url: `/users/${id}`,
        method: "PATCH",
        body,
      }),
      transformErrorResponse: (response) => response.data,
    }),
    //
    removeUser: build.mutation<TLoginResponse, String>({
      query: (id) => ({
        url: `/users/${id}`,
        method: "DELETE",
      }),
      transformErrorResponse: (response) => response.data,
    }),

    //
  }),
  overrideExisting: false,
});

export const {
  useGetUserQuery,
  useLoginMutation,
  useRegisterMutation,
  useGetProfileQuery,
  useGetSingleUserQuery,
  useUpdateUserMutation,
  useRemoveUserMutation,
} = userApi;
