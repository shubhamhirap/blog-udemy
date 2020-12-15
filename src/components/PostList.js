import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";

export class PostList extends Component {
  componentDidUpdate() {
    this.props.fetchPosts();
  }

  render() {
    console.log(this.props.posts);
    return <div>post list</div>;
  }
}

const mapStateToProps = (state) => {
  return { posts: state.posts };
};

export default connect(mapStateToProps, { fetchPosts })(PostList);
