import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  loading: false,
  country: "ar",
  pagesize: 10,
  page: 1,
  data: null,
  error: ''
}

export const fetchTopHeadlines = createAsyncThunk('fetchTopHeadlines', async (_, thunkAPI) => {
  const state = thunkAPI.getState().topHeadlines;
  const querystring = `?country=${state.country}&pagesize=${state.pagesize}&page=${state.page}`
  return axios
    .get(`${import.meta.env.VITE_NEWSAPI_URL}top-headlines${querystring}`)
    .then(response => response.data)
})

export const topHeadlinesSlice = createSlice({
  name: "topHeadlines",
  initialState,
  reducers: {
    resetPagination: (state) => {
      state.pagesize = initialState.pagesize,
      state.page = initialState.page
    },
    changeCountry: (state, action) => {
      state.country = action.payload
    },
    changePagesize: (state, action) => {
      state.pagesize = action.payload
    },
    changePage: (state, action) => {
      state.page = action.payload
    },
    setData: (state, action) => {
      state.data = action.payload
    }
  }, 
  extraReducers: (builder) => {
    builder.addCase(fetchTopHeadlines.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchTopHeadlines.fulfilled, (state, action) => {
      state.loading = false
      state.data = action.payload
      state.error = ''
    })
    builder.addCase(fetchTopHeadlines.rejected, (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.error.message
    })
  }
})

export const { 
  resetPagination,
  changeCountry, 
  changePagesize, 
  changePage,
  setData } = topHeadlinesSlice.actions

export default topHeadlinesSlice.reducer