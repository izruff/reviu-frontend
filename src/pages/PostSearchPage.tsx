import React from "react";
import { API_URL } from "../constants";
import { Divider, MenuItem, Select, Stack, Typography } from "@mui/material";
import PostCard from "../components/PostCard";

type Props = {
  
}

const PostSearchPage = (props: Props) => {
  const [postSearchResults, setPostSearchResults] = React.useState(["some", "post", "titles", "to display", "on the", "search", "results"]);
  const [sortOption, setSortOption] = React.useState("age-asc");

  /*React.useEffect(() => {
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
  }, [sortOption])*/

  return (
    <>
      <Typography variant="h2">Search Results</Typography>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="subtitle1">{postSearchResults.length} matching posts found.</Typography>
        <Stack direction="row" spacing={2}>
          <Typography variant="subtitle1">Sort by</Typography>
          <Select
            value={sortOption}
            onChange={(event) => {setSortOption(event.target.value)}}
            displayEmpty
          >
            <MenuItem value="similarity">Similarity</MenuItem>
            <MenuItem value="popularity">Popularity</MenuItem>
            <MenuItem value="age-asc">Most Recent</MenuItem>
            <MenuItem value="age-desc">Oldest</MenuItem>
          </Select>
        </Stack>
      </Stack>
      <Divider sx={{marginY: 1}}/>
      <Stack
        direction="column"
        spacing={1}
        divider={<Divider orientation="horizontal" flexItem />}
      >
        {postSearchResults.map((postTitle) => (
          <PostCard title={postTitle} topic={"placeholder"} />
        ))}
      </Stack>
    </>
  );
};

export default PostSearchPage;
