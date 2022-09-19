import React, { useContext } from "react";
import { useQuery, gql } from "@apollo/client";
import { Grid } from "semantic-ui-react";

import PostCards from "../components/PostCards";
import { AuthContext } from "../context/auth";
import PostForm from "../components/PostForm";
import { FETCH_POSTS_QUERY } from "../util/graphql";

const Home = () => {
  const { user } = useContext(AuthContext);
  const { loading, data } = useQuery(FETCH_POSTS_QUERY);
  var posts = [];
  if (data) {
    posts = data.getPosts;
  }

  return (
    <Grid columns={3}>
      <Grid.Row className="mt-2">
        <h1>Recent Posts</h1>
      </Grid.Row>
      <Grid.Row>
        <Grid.Row>
          {user && (
            <Grid.Column>
              <PostForm />
            </Grid.Column>
          )}
        </Grid.Row>
        {loading ? (
          <h1>Loading posts...</h1>
        ) : (
          posts.length > 0 &&
          posts.map((post) => (
            <Grid.Column key={post.id} style={{ marginBottom: 20 }}>
              <PostCards post={post} />
            </Grid.Column>
          ))
        )}
      </Grid.Row>
      <Grid.Row></Grid.Row>
    </Grid>
  );
};

export default Home;
