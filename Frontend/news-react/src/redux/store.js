import { configureStore } from '@reduxjs/toolkit'
import topHeadlinesReducer from './topHeadlinesSlice'
import searchReducer from './searchSlice'
import paginationReducer from './paginationSlice'

const store = configureStore({
  reducer: {
    topHeadlines: topHeadlinesReducer,
    search: searchReducer,
    pagination: paginationReducer
  }
})

export default store