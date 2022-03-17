/*
next.js file based routing
dont have to use react react router dom
put files how you want them to structured
http://localhost:3000/post/[slug]
*/

import React from 'react';
import { getPosts, getPostDetails } from '../../services';
import { PostDetail, Categories, PostWidget, Author, Comments, CommentsForm } from '../../components';

const PostDetails = () => {
  return (
    <div>
      PostDetails
    </div>
  )
}

export default PostDetails;
