import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../axios'

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const { data } = await axios.get('/posts', {
    page: '1',
    limit: '20'
  })

  return data
})


const initialState = {
  works: null,
  skills: null,
  status: 'loading'
}

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  extraReducers: {
    [fetchPosts.pending]: (state) => {

    },
    [fetchPosts.fulfilled]: (state, action) => {
      state.works = action.payload.filter(item => item.category === 'works')
      state.skills = action.payload.filter(item => item.category === 'skills')
      state.status = 'loaded'
    },
    [fetchPosts.rejected]: (state) => {
      state.works = null
      state.skills = null
      state.status = 'loading'
    },
  }
})

export const postsReducer = postsSlice.reducer
