import React from 'react';
import { Link } from 'react-router-dom';

const Jumbotron = () => (
  <div className="jumbotron">
    <h1 className="display-4">React Blog!</h1>
    <p className="lead">
      This is a simple hero unit, a simple jumbotron-style component for calling
      extra attention to featured content or information.
    </p>
    <hr className="my-4" />
    <p>
      It uses utility classes for typography and spacing to space content out
      within the larger container.
    </p>
    <Link className="btn btn-primary btn-lg" to="/about" role="button">
      Learn more
    </Link>
  </div>
);

export default Jumbotron;
