import { API_URL } from "../constants";
import PostCard from "../components/PostCard";
import React from "react";
import { Divider, MenuItem, Select, Stack, Typography } from "@mui/material";
import { useSubmit } from "react-router-dom";

type Props = {};

const PostSearchPage = (props: Props) => {
  const [postSearchResults, setPostSearchResults] = React.useState([]);
  const [sortOption, setSortOption] = React.useState("age-asc");

  const submit = useSubmit();

  React.useEffect(() => {
    fetch(`${API_URL}/public/posts/${window.location.search}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
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
            onChange={(event) => {
              setSortOption(event.target.value); // TODO: automatically get new search results
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
          <PostCard post={post} />
        ))}
      </Stack>
    </>
  );
};

export default PostSearchPage;
