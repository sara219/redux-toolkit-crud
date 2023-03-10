import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Post } from '../interface/Post'

export interface PostState {
  items: Post[]
}

const initialState: PostState = {
  items: [],
}

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: function(state, action) {
      state.items.push(action.payload)
    },
    deletePost: function(state, action: PayloadAction<number>) {
      state.items = state.items.filter((post) => post.id !== action.payload)
    },
    updatePost: function(state, action) {
      state.items.map((item) => {
        if (item.id === action.payload.id) {
          item.title = action.payload.title
          item.desc = action.payload.desc
        }
      })
    },
  },
})

export const { addPost, deletePost, updatePost } = postsSlice.actions
export default postsSlice.reducer
