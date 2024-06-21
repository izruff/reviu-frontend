import { API_URL } from "../constants";
import PostCard from "../components/PostCard";
import { PostType } from "../types/Post";
import React from "react";
import { Divider, MenuItem, Select, Stack, Typography } from "@mui/material";

const PostSearchPage = () => {
  const [postSearchResults, setPostSearchResults] = React.useState<PostType[]>(
    [],
  );
  const [sortOption, setSortOption] = React.useState("age-asc");

  React.useEffect(() => {
    fetch(`${API_URL}/public/posts/${window.location.search}`, {
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
        setPostSearchResults(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [window.location.search]);

  return (
    <>
      <Typography variant="h2">Search Results</Typography>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="subtitle1">
          {postSearchResults.length} matching posts found.
        </Typography>
        <Stack direction="row" spacing={2}>
          <Typography variant="subtitle1">Sort by</Typography>
          <Select
            id="sort-by"
            value={sortOption}
            onChange={(e) => {
              setSortOption(e.target.value); // TODO: automatically get new search results
            }}
            displayEmpty
          >
            <MenuItem value="similarity">Similarity</MenuItem>
            <MenuItem value="popularity">Popularity</MenuItem>
            <MenuItem value="age-asc">Most Recent</MenuItem>
            <MenuItem value="age-desc">Oldest</MenuItem>
          </Select>
        </Stack>
      </Stack>
      <Divider sx={{ marginY: 1 }} />
      <Stack
        direction="column"
        spacing={1}
        divider={<Divider orientation="horizontal" flexItem />}
      >
        {postSearchResults.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </Stack>
    </>
  );
};

export default PostSearchPage;
