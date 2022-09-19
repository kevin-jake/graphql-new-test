import React from "react";
import { useQuery, gql } from "@apollo/client";
import { Grid } from "semantic-ui-react";
import PostCards from "../components/PostCards";

const FETCH_POSTS_QUERY = gql`
  {
    getPosts {
      id
      body
      createdAt
      username
      likeCount
      likes {
        username
      }
      commentCount
      comments {
        id
        username
        createdAt
        body
      }
    }
  }
`;

const Home = () => {
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
