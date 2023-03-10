import React from 'react';

import './Article.css';

const Article = ({ imageurl, date, title }) => {
  return (
    <div className='gpt3__blog-container-article'>
      <div className='gpt3__blog-container_article-image'>
        <img src={imageurl} alt="blog" />
      </div>
      <div className='gpt3__blog-container-article-content'>
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read Full Article...</p>
      </div>
    </div>
  )
}

export default Article