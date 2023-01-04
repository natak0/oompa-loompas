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
      providesTags: (result, error, arg) =>
        result ? [{ type: "List", result }] : ["List"],
    }),
    getOompasByCharacter: builder.query({
      query: (id) => `/characters/${id}`,
      providesTags: (result, error, id) =>
        result ? [{ type: "Character", result, error, id }] : ["Character"],
    }),
  }),
});

// Export hooks based on the defined endpoints
export const { useGetOompasByPageQuery, useGetOompasByCharacterQuery } =
  oompasApi;
