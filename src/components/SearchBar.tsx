import { Card, InputBase, Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [placeholder, setPlaceholder] = React.useState("");
  const [selectedTopics, setSelectedTopics] = React.useState<string[]>([]);
  const [selectedTags, setSelectedTags] = React.useState<string[]>([]);
  const [searchTerm, setSearchTerm] = React.useState("");

  const navigate = useNavigate();

  React.useEffect(() => {
    const placeholders = [
      "Search for reviews of The Last of Us TV series...",
      "Search for a romcon anime recommendation...",
      "Search for reviews of the latest Harry Potter books...",
      "Search for discussions on the movie Oppenheimer...",
      "Search for newly released PC games...",
    ];
    setPlaceholder(placeholders[Math.floor(Math.random() * 5)]);

    // placeholder; adding topics and tags filter not yet implemented
    setSelectedTopics(["test-topic"]);
    setSelectedTags(["test-tag-one", "test-tag-two"]);
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
          onChange={(e) => {
            setSearchTerm(e.target.value);
            // TODO: detect when user wants to add topic/tag filter
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              navigate(
                "/posts?q=" +
                  encodeURIComponent(searchTerm) +
                  selectedTopics
                    .map((topic) => "&topics=" + encodeURIComponent(topic))
                    .join("") +
                  selectedTags
                    .map((tag) => "&tags=" + encodeURIComponent(tag))
                    .join(""),
              );
            }
          }}
        />
      </Stack>
    </Card>
  );
};

export default SearchBar;
