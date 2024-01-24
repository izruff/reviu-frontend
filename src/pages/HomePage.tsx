import PostCard from "../components/PostCard";
import TrendingPostCard from "../components/TrendingPostCard";
import React from "react";
import { Divider, Stack, Typography } from "@mui/material";

const HomePage = () => {
  const [trendingList, setTrendingList] = React.useState([]);
  const [discoverList, setDiscoverList] = React.useState([]);

  React.useEffect(() => {
    // TODO
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
          <TrendingPostCard post={post} />
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
          <PostCard post={post} />
        ))}
      </Stack>
    </>
  );
};

export default HomePage;
