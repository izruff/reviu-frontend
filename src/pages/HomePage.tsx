import PostCard from "../components/PostCard";
import TrendingPostCard from "../components/TrendingPostCard";
import { Divider, Stack, Typography } from "@mui/material";

const HomePage = () => {
  const trendingList = [
    "some",
    "posts",
    "which",
    "are",
    "at the",
    "time",
    "trending",
  ];
  const discoverList = ["some posts", "we recommend", "on your", "home page"];

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
        }}>
        {trendingList.map((postTitle) => (
          <TrendingPostCard title={postTitle} />
        ))}
      </Stack>

      <Typography variant="h1" marginTop={8} marginBottom={4}>
        Discover
      </Typography>
      <Stack
        direction="column"
        spacing={1}
        divider={<Divider orientation="horizontal" flexItem />}>
        {discoverList.map((postTitle) => (
          <PostCard title={postTitle} topic={"placeholder"} />
        ))}
      </Stack>
    </>
  );
};

export default HomePage;
