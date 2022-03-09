import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getCategories } from '../services';

const Categories = () => {
  const [categories, setCategories] = useState([])

  // fetch data from graphcms from graphql query
  useEffect(() => {
    getCategories()
      .then((newCategories) => setCategories(newCategories))
  }, [])

  return (
    <div>
      Categories
    </div>
  )
}

export default Categories
