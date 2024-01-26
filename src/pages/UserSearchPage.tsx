import { UserType } from "../types/User";
import {
  Divider,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";

const UserSearchPage = () => {
  const [sortOption, setSortOption] = React.useState("similarity");
  const [mustMatchOption, setMustMatchOption] = React.useState("none");
  const [userSearchResults, setUserSearchResults] = React.useState<UserType[]>(
    [],
  );

  React.useEffect(() => {
    // TODO
    setUserSearchResults([]);
  }, []);

  return (
    <>
      <Typography variant="h2">Search for Users</Typography>
      <Stack direction="row" justifyContent="space-between">
        <Stack direction="row" spacing={2} alignItems="center">
          <SearchIcon sx={{ color: "#7f7f7f", mr: 1, my: 0.5 }} />
          <TextField id="q" label="Search Term" />
        </Stack>
        <Stack direction="row" spacing={4} alignItems="center">
          <Stack direction="row" spacing={2} alignItems="center">
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
            </Select>
          </Stack>
          <Stack direction="row" spacing={2} alignItems="center">
            <Typography variant="subtitle1">Must match</Typography>
            <Select
              id="must-match"
              value={mustMatchOption}
              onChange={(event) => {
                setMustMatchOption(event.target.value); // TODO: automatically get new search results
              }}
              displayEmpty
            >
              <MenuItem value="left">Left part of text</MenuItem>
              <MenuItem value="substring">Any part of text</MenuItem>
              <MenuItem value="none">None</MenuItem>
            </Select>
          </Stack>
        </Stack>
      </Stack>
      <Divider sx={{ marginY: 1 }} />
      <Stack
        direction="column"
        spacing={1}
        divider={<Divider orientation="horizontal" flexItem />}
      >
        {userSearchResults.map((user) => (
          <Typography key={user.username /* TODO */}>
            This is a user.
          </Typography>
        ))}
      </Stack>
    </>
  );
};

export default UserSearchPage;
