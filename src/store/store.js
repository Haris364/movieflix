import { configureStore } from '@reduxjs/toolkit'
import movieReducer from '../slices/movieSlice'
import { movieApi } from '../services/movieApi'

export const store = configureStore({
  reducer: {
    movies: movieReducer,
    [movieApi.reducerPath]: movieApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(movieApi.middleware),
})