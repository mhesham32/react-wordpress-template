import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MiniPost = ({ title, image, desc, linkText, slug, id }) => (
  <div className="mini-post__container ">
    <div className="mini-post ">
      <Link to={`/post/${slug}/${id}`} className="mini-post__image--container">
        <div
          className="mini-post__image"
          style={{ backgroundImage: `url(${image})` }}
        />
      </Link>
      <h1 className="mini-post__title">{title}</h1>
      <p className="mini-post__desc">{desc}</p>
      <p>
        <Link to={`/post/${slug}/${id}`}>{linkText}</Link>
      </p>
    </div>
  </div>
);

MiniPost.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default MiniPost;
