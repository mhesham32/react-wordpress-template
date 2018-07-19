import React from 'react';

const MiniPost = ({ title, image, desc }) => (
  <div className="mini-post__container col col-lg-4 col-sm-12 col-md-4">
    <div className="mini-post ">
      <div className="mini-post__image--container">
        <div
          className="mini-post__image"
          style={{ backgroundImage: `url(${image})` }}
        />
      </div>
      <h1 className="mini-post__title">{title}</h1>
      <p
        className="mini-post__desc"
        dangerouslySetInnerHTML={{ __html: desc }}
      />
    </div>
  </div>
);

export default MiniPost;
