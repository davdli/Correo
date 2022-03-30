import React, { useState, useEffect, useRef } from 'react';

const CommentsForm = ({ slug }) => {
  const [error, setError] = useState(false);
  const [localStorage, setlocalStorage] = useState(null);
  const [showSuccessMessage, setshowSuccessMessage] = useState(false);

  // read value from input field and send to graphcms
  // refs more efficient than tracking of entire input state
  const commentEl = useRef();
  const nameEl = useRef();
  const emailEl = useRef();
  const storeDataEl = useRef();

  return (
    <div className='bg-white shadow-lg rounded-lg p-8 pb-12 mb-8'>
      <h3 className='text-xl mb-8 font-semibold border-b pb-4'>CommentsForm</h3>
      <div className='grid grid-cols-1 gap-4 mb-4'>
        <textarea ref={commentEl} className='p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100'>

        </textarea>
      </div>
    </div>
  )
}

export default CommentsForm;
