import { configureStore } from '@reduxjs/toolkit'
import { themeReducer } from './slices/theme'
import { postsReducer } from './slices/posts'



const store = configureStore({
  reducer: {
    theme: themeReducer,
    posts: postsReducer
  }
})


export default store
