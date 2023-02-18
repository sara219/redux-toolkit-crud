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

    }
})


export default postsSlice.reducer