import React, { ChangeEvent, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Post } from '../interface/Post'
import { addPost, deletePost } from '../redux/postsReducer'
import { RootState } from '../redux/store'

export const Posts = () => {
  const [title, setTitle] = useState<string>('')
  const [desc, setDesc] = useState<string>('')
  const postsList = useSelector((state: RootState) => state.posts.items)

  const dispatch = useDispatch()

  const handleChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  }

  const handleChangeDesc = (e: ChangeEvent<HTMLInputElement>) => {
    setDesc(e.target.value)
  }

  const generateRandomId = (): number => {
    const randomNo = Math.floor(Math.random() * 10000000)
    return randomNo
  }

  const addPostItem = () => {
    const newPost: Post = {
      id: generateRandomId(),
      title,
      desc,
    }
    dispatch(addPost(newPost))

    setTitle('')
    setDesc('')
  }

  return (
    <div>
      <div className='form'>
        <input
          type='text'
          placeholder='Enter Title'
          value={title}
          onChange={handleChangeTitle}
        />
        <input
          type='text'
          placeholder='Enter Description'
          value={desc}
          onChange={handleChangeDesc}
        />
        <button onClick={addPostItem}>ADD YOU POST</button>
      </div>

      <div className='posts'>
        {postsList.length > 0
          ? postsList.map((post) => (
              <div className='post' key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.desc}</p>
                <button className='update'>Update</button>
                <button
                  onClick={() => dispatch(deletePost(post.id))}
                  className='delete'
                >
                  Delete
                </button>
              </div>
            ))
          : 'there is no posts'}
      </div>
    </div>
  )
}
