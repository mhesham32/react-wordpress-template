import React, { Component } from 'react';

export default class HomePosts extends Component {
  state = {
    posts: [],
  };

  async componentdidMount() {
    const res = await fetch('http://localhost/wordpress/wp-json/wp/v2/tech');
    const data = await res.json();
    this.setState({ posts: data });
  }

  render() {
    return (
      <div className="home__posts conatiner">
        <div className="row justify-content-between">
          {this.state.posts.map(post => (
            <div className="home__post__container col-12 col-sm-12 col-lg-4">
              <div className="home__post  rounded ">
                <img
                  className="home__post--image"
                  src={post.better_featured_image.source_url}
                  alt="Card cap"
                />
                <div className="">
                  <h1 className="home__post--heading h4">
                    {post.title.rendered}
                  </h1>
                  <p
                    className="home__post--text"
                    dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
