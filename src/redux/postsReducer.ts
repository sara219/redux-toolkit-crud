import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface PostState {
    post: Array<string>
}

const initialState: PostState = {
    post: []
}


export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addPost: function(state, action){
            console.log(action,1111);
            
            // state.post.push()
        }
    }
})

export const { addPost } = postsSlice.actions
export default postsSlice.reducer