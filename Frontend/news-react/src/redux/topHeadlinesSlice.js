import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { updatePagination } from './paginationSlice'
import axios from 'axios'

const initialState = {
  loading: false,
  country: "ar",
  data: null,
  error: ''
}

export const fetchTopHeadlines = createAsyncThunk('fetchTopHeadlines', async (_, thunkAPI) => {
  const stateTopHeadlines = thunkAPI.getState().topHeadlines;
  const paginationState = thunkAPI.getState().pagination;
  const querystring = `?country=${stateTopHeadlines.country}&pagesize=${paginationState.pagesize}&page=${paginationState.page}`
  return axios
    .get(`${import.meta.env.VITE_NEWSAPI_URL}top-headlines${querystring}`)
    .then(response => {
      thunkAPI.dispatch(updatePagination(response.data));
      return response.data
    })
})

export const topHeadlinesSlice = createSlice({
  name: "topHeadlines",
  initialState,
  reducers: {
    resetTopHeadData: (state) => {
      state.data = null
    },
    changeCountry: (state, action) => {
      state.country = action.payload
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
  resetTopHeadData,
  changeCountry } = topHeadlinesSlice.actions

export default topHeadlinesSlice.reducer