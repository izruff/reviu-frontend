import {
  Box,
  Button,
  Card,
  Chip,
  Divider,
  InputBase,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

const PostEditPage = () => {
  const [postTitle, setPostTitle] = React.useState("");
  const [postContent, setPostContent] = React.useState("");
  const [postTags, setPostTags] = React.useState([
    "some",
    "tags",
    "being",
    "shown",
  ]);

  React.useEffect(() => {
    // fetch previous post details and set state
  }, []);

  function handleTagDelete(tagToDelete: string) {
    setPostTags((postTags) => postTags.filter((tag) => tag !== tagToDelete));
  }

  function handleEditPost() {
    // TODO
  }

  return (
    <>
      <Typography variant="h2" marginBottom={4}>
        Create Post
      </Typography>
      <Card variant="outlined">
        <Box p={2}>
          <Stack direction="row" justifyContent="space-between" mb={1}>
            <Stack direction="row" spacing={4}>
              <Typography variant="subtitle2">Topic:</Typography>
              <Typography variant="subtitle2">Hub:</Typography>
            </Stack>
            <Typography variant="subtitle2">
              Logged in as ... (Not you?)
            </Typography>
          </Stack>
          <Stack direction="row" spacing={1} marginY={1}>
            {postTags.map((tag) => (
              <Chip
                key={tag}
                size="small"
                label={tag}
                variant="filled"
                onDelete={() => {
                  handleTagDelete(tag);
                }}
              />
            ))}
          </Stack>
          <InputBase
            fullWidth
            placeholder="Title"
            value={postTitle}
            onChange={(e) => {
              setPostTitle(e.target.value);
            }}
          />
        </Box>
        <Divider />
        <Box p={2}>
          <InputBase // TODO: current implementation cannot have multiple lines
            fullWidth
            placeholder="Insert your post contents here..."
            value={postContent}
            onChange={(e) => {
              setPostContent(e.target.value);
            }}
          />
        </Box>
      </Card>
      <Stack direction="row" spacing={2} justifyContent="flex-end">
        <Button>Save Draft</Button>
        <Button variant="contained" onClick={handleEditPost}>
          Edit
        </Button>
      </Stack>
    </>
  );
};

export default PostEditPage;
