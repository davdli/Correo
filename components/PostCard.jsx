import React from 'react';
import moment from 'moment'; // form date
import Link from 'next/link'

const PostCard = ({ post }) => {
  console.log(post);

  return (
    <div className='bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8'>
      <div className='relative overflow-hidden shadow-md pb-80 mb-6'>
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className='object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg'
        />
      </div>
      <h1 className='transition duration-700 text-center mb-8 cursor:pointer hover:text-pink-600 text-3xl font-semibold'>
        <Link href={`/posts/${post.slug}`}>
          {post.title}
        </Link>
      </h1>
      <div className='block lg:flex text-center items-center justify-center mb-8 w-full'>
        <div className='flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8'>
          <p className='inline align-middle text-gray-700 ml-2 text-lg'>{post.author.name}</p>
        </div>
        <div className='font-medium text-gray-700'>
          <span>
            {moment(post.createdAt).format('MMM DD, YYYY')}
          </span>
        </div>
      </div>
    </div>
  )
}

export default PostCard
