import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentPage: 0,
  pages: 0,
  pagesize: 10,
  page: 1
}

export const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    resetPagination: (state) => {
      state.currentPage = initialState.currentPage
      state.pages = initialState.pages
      state.pagesize = initialState.pagesize
      state.page = initialState.page
    },
    updatePagination: (state, action) => {
      const { currentPage, pages } = action.payload
      state.currentPage = currentPage
      state.pages = pages
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
  resetPagination,
  updatePagination,
  changePagesize,
  changePage
} = paginationSlice.actions

export default paginationSlice.reducer