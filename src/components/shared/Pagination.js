import React from 'react';
import PropTypes from 'prop-types';

class Pagination extends React.Component {
  static propTypes = {
    pages: PropTypes.number.isRequired,
    fetchData: PropTypes.func.isRequired,
  };

  state = {
    currentPage: 1,
    hasPrevious: false,
    hasNext: false,
  };

  componentWillMount() {
    const { pages } = this.props;
    if (pages === 1) {
      this.setState({ hasPrevious: false, hasNext: false });
    } else if (pages > 1) {
      this.setState({ hasNext: true });
    }
  }

  componentWillUpdate(nextProps, nextState) {
    if (this.state.currentPage !== nextState.currentPage) {
      this.afterCurrentPageChange(nextState.currentPage);
    }
  }

  makeArray = length => {
    const arr = [];
    // eslint-disable-next-line
    for (let i = 0; i < length; i++) {
      arr.push(i + 1);
    }
    return arr;
  };

  handleChangePage = numberOfPage => {
    this.setState({ currentPage: numberOfPage });
  };

  handleNextClick = () => {
    const numberOfPages = this.props.pages;
    const { hasNext, currentPage } = this.state;
    const nextCurrent = currentPage + 1;
    if (hasNext && nextCurrent <= numberOfPages) {
      this.setState({ currentPage: nextCurrent });
    }
  };

  handlePreviousClick = () => {
    const { hasPrevious, currentPage } = this.state;
    const previousCurrent = currentPage - 1;
    if (hasPrevious && previousCurrent >= 1) {
      this.setState({ currentPage: previousCurrent });
    }
  };

  fetchDataByPage = page => {
    const { fetchData } = this.props;
    window.scroll(0, 0);
    return fetchData(page);
  };

  afterCurrentPageChange = currentPage => {
    const numberOfPages = this.props.pages;

    if (currentPage > 1) {
      this.setState({ hasPrevious: true });
    }
    if (currentPage === 1) {
      this.setState({ hasPrevious: false });
    }
    if (currentPage === numberOfPages) {
      this.setState({ hasNext: false });
    } else {
      this.setState({ hasNext: true });
    }
    this.fetchDataByPage(currentPage);
  };

  render() {
    const { hasNext, hasPrevious, currentPage } = this.state;
    const numberOfPages = this.props.pages;
    return (
      <div className="pagination-container">
        <nav aria-label="...">
          <ul className="pagination pagination-lg">
            <li className={`page-item ${hasPrevious ? null : 'disabled'}`}>
              <button className="page-link" onClick={this.handlePreviousClick}>
                Previous
              </button>
            </li>
            {this.makeArray(numberOfPages).map(item => (
              <li
                className={`page-item ${
                  currentPage === item ? 'active' : null
                }`}
              >
                <button
                  className="page-link "
                  onClick={() => this.handleChangePage(item)}
                >
                  {item}
                </button>
              </li>
            ))}
            <li className={`page-item ${hasNext ? null : 'disabled'}`}>
              <button className="page-link" onClick={this.handleNextClick}>
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Pagination;
