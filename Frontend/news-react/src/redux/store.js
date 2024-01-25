import { configureStore } from '@reduxjs/toolkit'
import topHeadlinesReducer from './topHeadlinesSlice'
import searchReducer from './searchSlice'

const store = configureStore({
  reducer: {
    topHeadlines: topHeadlinesReducer,
    search: searchReducer
  }
})

export default store