import React, { Component } from 'react';

export default class App extends Component {
  state = {
    tech: [],
  };

  

  render() {
    return (
      <div className="container">
        
        {this.state.tech.map(post => (
          <div className="post alert alert-light">
            <h1>{post.title.rendered}</h1>
            <div>
              <img src={} alt="" />
            </div>
            <p dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
          </div>
        ))}
      </div>
    );
  }
}
