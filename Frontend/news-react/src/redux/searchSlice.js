import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { updatePagination } from './paginationSlice'
import axios from 'axios'

const initialState = {
  loading: false,
  country: "ar",
  keywords: "",
  dateFrom: "",
  dateTo: "",  
  data: null,
  error: ''
}

export const fetchSearch = createAsyncThunk('fetchSearch', async (_, thunkAPI) => {
  const searchState = thunkAPI.getState().search;
  const paginationState = thunkAPI.getState().pagination;
  const querystring = `?keywords=${searchState.keywords}
    &dateFrom=${searchState.dateFrom}
    &dateTo=${searchState.dateTo}
    &pagesize=${paginationState.pagesize}
    &page=${paginationState.page}`

  return axios
    .get(`${import.meta.env.VITE_NEWSAPI_URL}search${querystring}`)
    .then(response => {
      thunkAPI.dispatch(updatePagination(response.data));
      return response.data
    })
})

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    resetSearchData: (state) => {
      state.data = null
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
  resetSearchData,
  changeCountry,
  changeDateFrom,
  changeDateTo, 
  changeKeywords } = searchSlice.actions

export default searchSlice.reducer