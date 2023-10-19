import { TApiResponse, TLoginResponse } from "../../../interface/globalInterface";
import { IPackage } from "../../../interface/packageInterface";
import { api } from "../../api";

export const packagesApi = api.injectEndpoints({
  endpoints: (build) => ({
    //
    createPackage: build.mutation<TApiResponse<IPackage>, Partial<IPackage>>({
      query: (body) => ({
        url: `/package`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Package"],
      transformErrorResponse: (response) => response.data,
    }),
    //
    getPackage: build.query<TApiResponse<IPackage[]>, string>({
      query: (q) => `/package/?${q ? q : ""}`,
      providesTags: ["Package"],
    }),

    getSinglePackage: build.query<TApiResponse<IPackage>, string>({
      query: (id) => `/package/${id}`,
      providesTags: ["Package"],
    }),
    //
    updatePackage: build.mutation<TLoginResponse, Partial<IPackage>>({
      query: ({ id, ...body }) => ({
        url: `/package/${id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["Package"],
      transformErrorResponse: (response) => response.data,
    }),
    //
    removePackage: build.mutation<TLoginResponse, String>({
      query: (id) => ({
        url: `/package/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Package"],
      transformErrorResponse: (response) => response.data,
    }),

    //
  }),
  overrideExisting: false,
});

export const {
  useCreatePackageMutation,
  useGetPackageQuery,
  useGetSinglePackageQuery,
  useUpdatePackageMutation,
  useRemovePackageMutation,
} = packagesApi;
