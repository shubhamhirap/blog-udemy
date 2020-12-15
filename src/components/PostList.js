import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";

export class PostList extends Component {

    componentDidUpdate(){
        this.props.fetchPosts();
    }

  render() {
    return <div>post list</div>;
  }
}

export default connect(null, { fetchPosts })(PostList);
