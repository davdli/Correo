import React from 'react'

const PostCard = ({ post }) => {
  return (
    <div>
      {post.title}
      {post.exerpt}
    </div>
  )
}

export default PostCard
