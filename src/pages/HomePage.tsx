import { PostCard } from "../components/PostCard";
import { TrendingPostCard } from "../components/TrendingPostCard";
import { Container, Typography } from "@mui/material";

const HomePage = () => {
  const trendingList = ["some", "trending", "posts"];
  const discoverList = ["some posts", "we recommend", "on your", "home page"]

  return (
    <>
      <Container>
        <Typography>Trending Today</Typography>
        {trendingList.map((postTitle) => (
          <TrendingPostCard title={postTitle} />
        ))}
      </Container>
      <Container>
        <Typography>Discover</Typography>
        {discoverList.map((postTitle) => (
          <PostCard title={postTitle} topic={"placeholder"} />
        ))}
      </Container>
    </>
  );
};

export default HomePage;
