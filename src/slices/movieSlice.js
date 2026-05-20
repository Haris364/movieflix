import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  query: '',
  genre: '',
  quality: '',
  rating: 0,
  year: '',
  language: '',
  orderBy: 'desc',
  page: 1,
}

const movieSlice = createSlice({
  name: 'movies',
  initialState,

  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload
    },

    setGenre: (state, action) => {
      state.genre = action.payload
    },

    setQuality: (state, action) => {
      state.quality = action.payload
    },

    setRating: (state, action) => {
      state.rating = action.payload
    },

    setYear: (state, action) => {
      state.year = action.payload
    },

    setLanguage: (state, action) => {
      state.language = action.payload
    },

    setOrderBy: (state, action) => {
      state.orderBy = action.payload
    },

    nextPage: (state) => {
      state.page += 1
    },

    prevPage: (state) => {
      if (state.page > 1) {
        state.page -= 1
      }
    },
  },
})

export const {
  setQuery,
  setGenre,
  setQuality,
  setRating,
  setYear,
  setLanguage,
  setOrderBy,
  nextPage,
  prevPage,
} = movieSlice.actions

export default movieSlice.reducer