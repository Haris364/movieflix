import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const movieApi = createApi({
  reducerPath: 'movieApi',

  baseQuery: fetchBaseQuery({
    baseUrl: 'https://yts.bz/api/v2/',
  }),

  endpoints: (builder) => ({

    getMovies: builder.query({
      query: ({
        page,
        query,
        quality,
        genre,
        rating,
        year,
        language,
        orderBy,
      }) =>

        `list_movies.json?page=${page}&limit=20&query_term=${query}&quality=${quality}&genre=${genre}&minimum_rating=${rating}&year=${year}&language=${language}&order_by=${orderBy}`,
    }),

    getMovieDetails: builder.query({
      query: (id) =>
        `movie_details.json?movie_id=${id}&with_images=true&with_cast=true`,
    }),

    getSuggestions: builder.query({
      query: (id) =>
        `movie_suggestions.json?movie_id=${id}`,
    }),

    searchMovies: builder.query({
      query: (searchText) =>
        `list_movies.json?query_term=${searchText}&limit=5`,
    }),
  }),
})

export const {
  useGetMoviesQuery,
  useGetMovieDetailsQuery,
  useGetSuggestionsQuery,
  useSearchMoviesQuery,
} = movieApi