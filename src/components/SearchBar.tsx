import { Box, Card, Chip, InputBase, Stack, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";

const SearchBar = () => {
  const [placeholder, setPlaceholder] = React.useState("");
  const [selectedTopics, setSelectedTopics] = React.useState([]);
  const [selectedTags, setSelectedTags] = React.useState([]);
  const [searchTerm, setSearchTerm] = React.useState("");

  function handleSearchTermChange(event) {
    setSearchTerm(event.target.value);
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
    }
  }

  React.useEffect(() => {
    const placeholders = [
      "Search for reviews of The Last of Us TV series...",
      "Search for a romcon anime recommendation...",
      "Search for reviews of the latest Harry Potter books...",
      "Search for discussions on the movie Oppenheimer...",
      "Search for newly released PC games...",
    ];
    setPlaceholder(placeholders[Math.floor(Math.random() * 5)]);
  }, []);

  return (
    <Card
      elevation={0}
      sx={{
        display: "flex",
        width: "800px",
        height: "48px",
        backgroundColor: "#eaeaea",
        alignItems: "center",
      }}
    >
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        marginX={2}
        width="100%"
      >
        <SearchIcon sx={{ fontSize: 20, color: "#7f7f7f" }} />
        <InputBase
          fullWidth
          placeholder={placeholder}
          value={searchTerm}
          onChange={handleSearchTermChange}
          onKeyDown={handleKeyDown}
        />
      </Stack>
    </Card>
  );
};

export default SearchBar;
