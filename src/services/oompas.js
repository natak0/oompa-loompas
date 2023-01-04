import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const oompasApi = createApi({
  reducerPath: "oompaApi",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas",
  }),
  tagTypes: ["List", "Character"],
  endpoints: (builder) => ({
    getOompasByPage: builder.query({
      query: (page) => `?page=${page}`,
      refetchOnMountOrArgChange: 86400, // refetch if 24 hours have passed
      providesTags: (result, error, arg) =>
        result ? [{ type: "List", result }] : ["List"],
    }),
    getOompasByCharacter: builder.query({
      query: (id) => `/${id}`,
      refetchOnMountOrArgChange: 86400,
      providesTags: (result, error, id) =>
        result ? [{ type: "Character", result }] : ["Character"],
    }),
  }),
});

// Export hooks based on the defined endpoints
export const { useGetOompasByPageQuery, useGetOompasByCharacterQuery } =
  oompasApi;
