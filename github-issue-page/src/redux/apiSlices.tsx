// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { RootState } from "../redux/store";

// type apiArgs = {
//   data?: {
//     name: string;
//     description?: string;
//     color: string;
//   };
//   owner: string;
//   repo: string;
//   labelName?: string;
//   userToken?: string;
// };

// export const apiSlice = createApi({
//   reducerPath: "api",
//   tagTypes: ["Labels"],
//   baseQuery: fetchBaseQuery({ baseUrl: "https://api.github.com" }),
//   endpoints: (builder) => ({
//     getLabels: builder.query<RootState, apiArgs>({
//       query: (userInfo) => ({
//         url: `/repos/${userInfo.owner}/${userInfo.repo}/labels`,
//       }),
//       providesTags: ["Labels"],
//     }),
//     createLabels: builder.mutation<RootState, apiArgs>({
//       query: (createInfo) => ({
//         url: `/repos/${createInfo.owner}/${createInfo.repo}/labels`,
//         method: "POST",
//         headers: new Headers({
//           Accept: "application/vnd.github+json",
//           Authorization: `Bearer ${createInfo.userToken}`,
//         }),
//         body: createInfo.data,
//       }),
//       invalidatesTags: ["Labels"],
//     }),
//     updateLabels: builder.mutation<RootState, apiArgs>({
//       query: (updateInfo) => ({
//         url: `/repos/${updateInfo.owner}/${updateInfo.repo}/labels/${updateInfo.labelName}`,
//         method: "PATCH",
//         headers: new Headers({
//           Accept: "application/vnd.github+json",
//           Authorization: `Bearer ${updateInfo.userToken}`,
//         }),
//         body: updateInfo.data,
//       }),
//       invalidatesTags: ["Labels"],
//     }),
//     deleteLabels: builder.mutation<RootState, apiArgs>({
//       query: (deleteLabels) => ({
//         url: `/repos/${deleteLabels.owner}/${deleteLabels.repo}/labels/${deleteLabels.labelName}`,
//         method: "DELETE",
//         headers: new Headers({
//           Accept: "application/vnd.github+json",
//           Authorization: `Bearer ${deleteLabels.userToken}`,
//         }),
//         body: deleteLabels.data,
//       }),
//       invalidatesTags: ["Labels"],
//     }),
//   }),
// });

// export const {
//   useGetLabelsQuery,
//   useCreateLabelsQuery,
//   useUpdateLabelsQuery,
//   useDeleteLabelsQuery,
// } = apiSlice;
