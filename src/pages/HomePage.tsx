import { API_URL } from "../constants";
import PostCard from "../components/PostCard";
import TrendingPostCard from "../components/TrendingPostCard";
import { PostType } from "../types/Post";
import React from "react";
import { Divider, Stack, Typography } from "@mui/material";

const HomePage = () => {
  const [trendingList, setTrendingList] = React.useState<PostType[]>([]);
  const [discoverList, setDiscoverList] = React.useState<PostType[]>([]);

  React.useEffect(() => {
    fetch(`${API_URL}/public/posts`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        return res.json();
      })
      .then((rawData) => {
        /* eslint-disable */
        for (let post of rawData) {
          post.createdAt = new Date(post.createdAt);
          post.updatedAt = new Date(post.updatedAt);
          post.deletedAt = new Date(post.deletedAt);
        }
        return rawData;
        /* eslint-enable */
      })
      .then((data: PostType[]) => {
        // Discover list should be have a "infinite scroll" feature which gets 15 more posts every time the user scrolls to the bottom, but this is not yet implemented so we will display all posts instead
        // Trending list should be sorted from popularity (vote/comment count) and limited to 10 posts; as this is not yet implemented, we will use the same data as the discover list
        setTrendingList(data);
        setDiscoverList(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Typography variant="h1" marginBottom={4}>
        Trending Today
      </Typography>
      <Stack
        direction="row"
        spacing={3}
        sx={{
          height: "300px",
          overflowX: "auto",
          padding: 2,
        }}
      >
        {trendingList.map((post) => (
          <TrendingPostCard key={post.id} post={post} />
        ))}
      </Stack>

      <Typography variant="h1" marginTop={8} marginBottom={4}>
        Discover
      </Typography>
      <Stack
        direction="column"
        spacing={1}
        divider={<Divider orientation="horizontal" flexItem />}
      >
        {discoverList.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </Stack>
    </>
  );
};

export default HomePage;
