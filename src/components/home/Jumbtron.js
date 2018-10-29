import React from 'react';

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
    <a
      className="btn btn-primary btn-lg"
      href="https://mostafahesham.com/post/Simple-Wordpress-React-template"
      role="button"
    >
      Learn more
    </a>
  </div>
);

export default Jumbotron;
