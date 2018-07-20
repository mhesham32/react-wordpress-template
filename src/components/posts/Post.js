import React from 'react';
import PropTypes from 'prop-types';

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

MiniPost.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default MiniPost;
