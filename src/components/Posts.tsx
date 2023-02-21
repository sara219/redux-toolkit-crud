import React, { ChangeEvent, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Post } from '../interface/Post'
import { addPost, deletePost, updatePost } from '../redux/postsReducer'
import { RootState } from '../redux/store'

export const Posts = () => {
  const [title, setTitle] = useState<string>('')
  const [desc, setDesc] = useState<string>('')

  // --------------------------------

  // hook to update post
  const [edit, setEdit] = useState<boolean>(false)
  const [currentId, setCurrentId] = useState<number>()

  const [updatedTitle, setUpdatedTitle] = useState<string>('')
  const [updatedDesc, setUpdatedDesc] = useState<string>('')

  // --------------------------------

  const postsList = useSelector((state: RootState) => state.posts.items)

  const dispatch = useDispatch()

  const handleChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  }

  const handleChangeDesc = (event: ChangeEvent<HTMLInputElement>) => {
    setDesc(event.target.value)
  }

  // ------------update--------------------

  const handleUpdateTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setUpdatedTitle(e.target.value)
  }

  const handleUpdateDesc = (e: ChangeEvent<HTMLInputElement>) => {
    setUpdatedDesc(e.target.value)
  }

  // --------------------------------

  // -------------generate random id number-------------------
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
                <button
                  onClick={() => {
                    setEdit(true)
                    setCurrentId(post.id)
                  }}
                  className='update'
                >
                  Update
                </button>
                <button
                  onClick={() => dispatch(deletePost(post.id))}
                  className='delete'
                >
                  Delete
                </button>

                {edit && currentId === post.id && (
                  <>
                    <input
                      type='text'
                      value={updatedTitle}
                      placeholder='Update Title'
                      onChange={handleUpdateTitle}
                    />
                    <input
                      type='text'
                      value={updatedDesc}
                      placeholder='Update Description'
                      onChange={handleUpdateDesc}
                    />
                    <button
                      className='update-post'
                      onClick={() => {
                        dispatch(
                          updatePost({
                            id: post.id,
                            title: updatedTitle,
                            desc: updatedDesc,
                          })
                        )
                        setEdit(false)
                        setUpdatedTitle('')
                        setUpdatedDesc('')
                      }}
                    >
                      Update Post
                    </button>
                  </>
                )}
              </div>
            ))
          : 'there is no posts'}
      </div>
    </div>
  )
}
