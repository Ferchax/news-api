import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  country: "ar",
  pagesize: 10,
  page: 1
}

export const topHeadlinesSlice = createSlice({
  name: "topHeadlines",
  initialState,
  reducers: {
    changeCountry: (state, action) => {
      state.country = action.payload
    },
    changePagesize: (state, action) => {
      state.pagesize = action.payload
    },
    changePage: (state, action) => {
      state.page = action.payload
    }
  }
})

export const { 
  changeCountry, 
  changePagesize, 
  changePage } = topHeadlinesSlice.actions

export default topHeadlinesSlice.reducer