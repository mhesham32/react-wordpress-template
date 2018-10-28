import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import findSearchResults from '../../actions/search';

class SearchArea extends React.Component {
  static propTypes = {
    findSearchResults: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
  };

  state = {
    searchText: '',
  };

  handleTextChange = ({ target }) => {
    this.setState({ searchText: target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.findSearchResults(this.state.searchText).then(() => {
      this.props.history.push('/search');
      // the Search Comp will redirect if there is no search Text in the redux store
      // so this will not affect the store so we are fine if cleared the input after search
      this.setState({ searchText: '' });
    });
  };

  render() {
    return (
      <form className="form-inline my-2 my-lg-0" onSubmit={this.handleSubmit}>
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={this.handleTextChange}
          required
          value={this.state.searchText}
        />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          {this.props.loading ? 'Loading...' : 'Search'}
        </button>
      </form>
    );
  }
}

const mapStateToProps = ({ search }) => ({
  loading: search.loading,
});

export default connect(
  mapStateToProps,
  { findSearchResults }
)(withRouter(SearchArea));
