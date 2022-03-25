import React from 'react';


const Author = ({ author }) => {
  return (
    <div className='text-center mt-20 mb-8 p-12 relative rounded-lg bg-black bg-opacity-10'>
      <h3 className='text-white my-8 text-xl font-bold'>{author.name}</h3>
      <p className='text-white text-lg'>{author.bio}</p>
    </div>
  )
}

export default Author;
