import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  loading: false,
  country: "ar",
  keywords: "",
  dateFrom: "",
  dateTo: "",
  pagesize: 10,
  page: 1,
  data: null,
  error: ''
}

export const fetchSearch = createAsyncThunk('fetchSearch', async (_, thunkAPI) => {
  const state = thunkAPI.getState().search;
  const querystring = `?keywords=${state.keywords}&dateFrom=${state.dateFrom}&dateTo=${state.dateTo}&pagesize=${state.pagesize}&page=${state.page}`
  return axios
    .get(`${import.meta.env.VITE_NEWSAPI_URL}search${querystring}`)
    .then(response => response.data)
})

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    resetPagination: (state) => {
      state.pagesize = initialState.pagesize,
      state.page = initialState.page
    },
    changeCountry: (state, action) => {
      state.country = action.payload
    },
    changeDateFrom: (state, action) => {
      state.dateFrom = action.payload
    },
    changeDateTo: (state, action) => {
      state.dateTo = action.payload
    },
    changeKeywords: (state, action) => {
      state.keywords = action.payload
    },
    changePagesize: (state, action) => {
      state.pagesize = action.payload
    },
    changePage: (state, action) => {
      state.page = action.payload
    }
  }, 
  extraReducers: (builder) => {
    builder.addCase(fetchSearch.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchSearch.fulfilled, (state, action) => {
      state.loading = false
      state.data = action.payload
      state.error = ''
    })
    builder.addCase(fetchSearch.rejected, (state, action) => {
      state.loading = false
      state.data = null
      state.error = action.error.message
    })
  }
})

export const { 
  resetPagination,
  changeCountry,
  changeDateFrom,
  changeDateTo, 
  changeKeywords,
  changePagesize, 
  changePage } = searchSlice.actions

export default searchSlice.reducer