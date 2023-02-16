import React from 'react'
export const Posts = () => {
  return (
    <div>
      <div className='form'>
        <input type='text' placeholder='Enter Title' />
        <input type='text' placeholder='Enter Description' />
        <button>ADD YOU POST</button>
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
