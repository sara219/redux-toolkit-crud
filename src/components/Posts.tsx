import React, { ChangeEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addPost } from '../redux/postsReducer'

export const Posts = () => {
  const [title, setTitle] = useState<string>('')
  const [desc, setDesc] = useState<string>('')

  const dispatch = useDispatch()

  const handleChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  }

  const handleChangeDesc = (e: ChangeEvent<HTMLInputElement>) => {
    setDesc(e.target.value)
  }

  const addPostItem = () => {
    dispatch(addPost({ id: 1, title, desc}))
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
        <div className='post'>
          <h2>POST TITLE</h2>
          <p>POST DESC</p>
          <button className='update'>Update</button>
          <button className='delete'>Delete</button>
        </div>
      </div>
    </div>
  )
}
