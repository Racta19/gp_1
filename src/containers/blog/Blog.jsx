import React from 'react';
import { blog1, blog2, blog3, blog4, blog5 } from './imports'
import { Article } from '../../components';

import './Blog.css';

const Blog = () => {
  return (
    <div className='gpt3__blog section__pading' id='blog'>

      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>
          A lot is happening, We are blogging about it..
        </h1>
      </div>

      <div className='gpt3__blog-container'>
        <div className='gpt3__blog-container_groupA'>
          <Article imageurl={blog1} date='Sep 26, 2022' title='GPT-3 and Open  AI is the future. Let us exlore how it is?'/>
        </div>
        <div className='gpt3__blog-container_groupB'>
          <Article imageurl={blog2} date='Sep 24, 2022' title='GPT-3 and Open  AI is the future. Let us exlore how it is?' />
          <Article imageurl={blog3} date='Sep 22, 2022' title='GPT-3 and Open  AI is the future. Let us exlore how it is?' />
          <Article imageurl={blog4} date='Sep 12, 2022' title='GPT-3 and Open  AI is the future. Let us exlore how it is?' />
          <Article imageurl={blog5} date='Sep 2, 2022' title='GPT-3 and Open  AI is the future. Let us exlore how it is?' />

        </div>
      </div>

    </div>
  )
}

export default Blog