import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { Post } from "../interface/Post";

export interface PostState {
    items: Post[]
}

const initialState: PostState = {
    items: []
}


export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addPost: function(state, action){
            state.items.push(action.payload)
        }
    }
})


export const { addPost } = postsSlice.actions
export default postsSlice.reducer
