import React from 'react';
import { Link } from 'react-router-dom';

const Jumbotron = () => (
  <div className="jumbotron">
    <h1 className="display-4">React Blog!</h1>
    <p className="lead">
      This is a simple wordpress template made with React.js library you can
      post or change its view with your wordpress back-end
    </p>
    <hr className="my-4" />
    <p>
      Disclaimer the posts in this Blog isn't mine I put random pieces of posts
      from various websites to fill it instead of using dummy text
    </p>
    <Link className="btn btn-primary btn-lg" to="/about" role="button">
      Learn more
    </Link>
  </div>
);

export default Jumbotron;
