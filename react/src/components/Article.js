import React from 'react';

const Article = props => {
  return(
    <div id='article' className="row column">
      <h1 id='headline'>{props.title}</h1>
      <div id='block_body'>
      <img className='center' id='article_image' src={props.image_url}></img>
      <p>{props.body}</p>
      </div>
      <hr />
    </div>
  );
};

export default Article;
