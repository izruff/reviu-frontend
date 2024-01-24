import { Box, Button, Card, Chip, Divider, InputBase, Stack, TextField, Typography } from "@mui/material";
import React from "react";

const PostCreatePage = () => {
  const [postTitle, setPostTitle] = React.useState("");
  const [postContent, setPostContent] = React.useState("");
  const [postTopic, setPostTopic] = React.useState("");
  const [postTags, setPostTags] = React.useState(["some", "tags", "being", "shown"]);

  function handleTitleChange(event) {
    setPostTitle(event.target.value);
  }

  function handleContentChange(event) {
    setPostContent(event.target.value)
  }

  function handleTagDelete(tagToDelete) {
    setPostTags((postTags) => postTags.filter((tag) => tag !== tagToDelete));
  }

  function handleCreatePost(event) {
    
  }

  return (
    <>
      <Typography variant="h2" marginBottom={4}>Create Post</Typography>
      <Stack spacing={2}>
        <Box>
          <Chip label={postTopic} variant="outlined" />
          {postTags.map((tag) => (
            <Chip label={tag} variant="filled" onDelete={() => handleTagDelete(this.label)} /> // TODO: how to reference the label?
          ))}
        </Box>
        <Card variant="outlined">
          <Box p={2}>
            <InputBase
              fullWidth
              placeholder="Title"
              value={postTitle}
              onChange={handleTitleChange}
            />
          </Box>
          <Divider />
          <Box p={2}>
            <InputBase // TODO: current implementation cannot have multiple lines
              fullWidth
              placeholder="Insert your post contents here..."
              value={postContent}
              onChange={handleContentChange}
            />
          </Box>
        </Card>
        <Stack direction="row" spacing={2} justifyContent="flex-end">
          <Button>Save Draft</Button>
          <Button variant="contained" onClick={handleCreatePost}>Create</Button>
        </Stack>
      </Stack>
    </>
  );
};

export default PostCreatePage;
