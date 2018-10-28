import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import MiniPost from '../posts/MiniPost';
import Pagination from '../shared/Pagination';
import fetchSearchData from '../../actions/search';
import { getPostsMiniData } from '../../reducers/searchReducer';

function Search({
  searchPosts,
  error,
  noResults,
  searchText,
  pages,
  fetchData,
  loading,
}) {
  const Results = () =>
    noResults ? (
      <div className="alert alert-warning">No Results Found!</div>
    ) : (
      <div className="home__posts conatiner">
        <div className="row justify-content-center home__flex">
          {searchPosts.map(post => (
            <MiniPost {...post} key={post.title} linkText="Read More..." />
          ))}
        </div>
      </div>
    );

  if (!loading && searchText === '') {
    return <Redirect to="/" />;
  }

  return (
    <React.Fragment>
      <h1 className="display-4">
        Search Results for: <p className="lead">{`" ${searchText} "`}</p>
      </h1>
      {error ? (
        <div className="alert alert-danger">Error! Something went wrong.</div>
      ) : (
        <Results />
      )}
      {pages > 1 && (
        <Pagination
          pages={pages}
          fetchData={page => fetchData(searchText, page)}
        />
      )}
    </React.Fragment>
  );
}

const mapStateToProps = ({ search }) => ({
  searchPosts: getPostsMiniData(search),
  searchText: search.searchText,
  error: search.error,
  noResults: search.noResults,
  pages: parseInt(search.pages),
  loading: search.loading,
});

Search.propTypes = {
  searchText: PropTypes.string.isRequired,
  searchPosts: PropTypes.array.isRequired,
  error: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  noResults: PropTypes.bool.isRequired,
  pages: PropTypes.number.isRequired,
  fetchData: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  { fetchData: fetchSearchData }
)(Search);
